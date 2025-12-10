import { NextRequest, NextResponse } from 'next/server';

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured. Add GITHUB_TOKEN to .env.local' },
        { status: 500 }
      );
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

    const data = await response.json();

    if (data.errors) {
      const errorMessage = data.errors[0]?.message || 'GitHub API error';
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
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

    return NextResponse.json({
      contributions,
      total,
      calculatedTotal, // For debugging - remove if not needed
      weeksCount: weeks.length,
      daysCount: contributions.length,
    });

  } catch (error) {
    console.error('GitHub contributions error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch contributions' },
      { status: 500 }
    );
  }
}
