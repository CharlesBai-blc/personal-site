'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface GitHubHeatmapProps {
  username?: string;
}

export default function GitHubHeatmap({ username = 'your-username' }: GitHubHeatmapProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
        const response = await fetch(`${backendUrl}/api/github-contributions?username=${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        
        const data = await response.json();
        setContributions(data.contributions || []);
        setTotalContributions(data.total || 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load contributions');
        console.error('Error fetching GitHub contributions:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username && username !== 'your-username') {
      fetchContributions();
    } else {
      setLoading(false);
    }
  }, [username]);

  // Get intensity level for a day
  const getIntensity = (count: number): number => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 10) return 3;
    return 4;
  };

  // Group contributions by week for display
  // GitHub's calendar shows weeks from Sunday to Saturday
  // We'll group days into weeks, handling partial weeks at the start
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];
  
  contributions.forEach((day, index) => {
    const date = new Date(day.date + 'T00:00:00'); // Add time to avoid timezone issues
    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
    
    currentWeek.push(day);
    
    // If it's Saturday or the last day, complete the week
    if (dayOfWeek === 6 || index === contributions.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });
  
  // Add any remaining days as a partial week
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-foreground opacity-50 font-light">loading contributions...</p>
      </div>
    );
  }

  if (error || username === 'your-username') {
    return (
      <div className="text-center">
        <p className="text-foreground opacity-50 font-light text-sm">
          {username === 'your-username' 
            ? 'set your github username to view contributions' 
            : 'unable to load contributions'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-light text-foreground font-display tracking-tight">
          contributions
        </h2>
        <p className="text-sm text-muted-foreground font-light">
          {totalContributions} contributions in the last year
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        {/* Heatmap Grid */}
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => {
                const intensity = getIntensity(day.contributionCount);
                const opacity = intensity === 0 
                  ? 0.1 
                  : 0.2 + (intensity * 0.15);
                
                return (
                  <div
                    key={`${day.date}-${dayIndex}`}
                    className="w-3 h-3 rounded-sm bg-foreground transition-all hover:scale-110"
                    style={{ opacity }}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xs text-muted-foreground font-light font-mono">less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="w-3 h-3 rounded-sm bg-foreground"
                style={{ opacity: level === 0 ? 0.1 : 0.2 + (level * 0.15) }}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-light font-mono">more</span>
        </div>
      </div>
    </div>
  );
}

