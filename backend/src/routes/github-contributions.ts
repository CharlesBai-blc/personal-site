import express from 'express';

const router = express.Router();

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

router.get('/', async (req, res) => {
  try {
    const username = req.query.username as string;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      return res.status(500).json({
        error: 'GitHub token not configured. Add GITHUB_TOKEN to .env',
      });
    }

    // Calculate date range for last year
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setFullYear(fromDate.getFullYear() - 1);

    // GraphQL query to get contribution data with explicit date range
    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
          from: fromDate.toISOString(),
          to: toDate.toISOString(),
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json() as {
      errors?: Array<{ message: string }>;
      data?: {
        user?: {
          contributionsCollection?: {
            contributionCalendar?: {
              weeks?: ContributionWeek[];
              totalContributions?: number;
            };
          };
        };
      };
    };

    if (data.errors) {
      const errorMessage = data.errors[0]?.message || 'GitHub API error';
      return res.status(400).json({ error: errorMessage });
    }

    const weeks = (data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || []) as ContributionWeek[];
    const contributions: ContributionDay[] = [];
    const total = data.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    // Flatten weeks into individual days
    weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        contributions.push({
          date: day.date,
          contributionCount: day.contributionCount,
        });
      });
    });

    // Sort by date
    contributions.sort((a, b) => a.date.localeCompare(b.date));

    // Calculate actual total from contributions (for verification)
    const calculatedTotal = contributions.reduce((sum, day) => sum + day.contributionCount, 0);

    return res.json({
      contributions,
      total,
      calculatedTotal, // For debugging - remove if not needed
      weeksCount: weeks.length,
      daysCount: contributions.length,
    });

  } catch (error) {
    console.error('GitHub contributions error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to fetch contributions',
    });
  }
});

export default router;

