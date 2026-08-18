"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./GitHubHeatmap.module.css";

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface GitHubHeatmapProps {
  username?: string;
}

type CalendarDay = ContributionDay | null;

const DAYS_PER_WEEK = 7;
const PLACEHOLDER_WEEK_COUNT = 53;

function createPlaceholderWeeks(): CalendarDay[][] {
  return Array.from({ length: PLACEHOLDER_WEEK_COUNT }, () =>
    Array.from({ length: DAYS_PER_WEEK }, () => ({
      date: "",
      contributionCount: 0,
    }))
  );
}

function buildCalendarWeeks(
  contributions: ContributionDay[]
): CalendarDay[][] {
  if (contributions.length === 0) {
    return createPlaceholderWeeks();
  }

  const weeks: CalendarDay[][] = [];
  const firstDayOfWeek = new Date(
    `${contributions[0].date}T00:00:00`
  ).getDay();
  let currentWeek: CalendarDay[] = Array(firstDayOfWeek).fill(null);

  contributions.forEach((day) => {
    currentWeek.push(day);

    if (currentWeek.length === DAYS_PER_WEEK) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    weeks.push([
      ...currentWeek,
      ...Array(DAYS_PER_WEEK - currentWeek.length).fill(null),
    ]);
  }

  return weeks;
}

function getIntensity(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

export default function GitHubHeatmap({
  username = "your-username",
}: GitHubHeatmapProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);
        const backendUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

        const response = await fetch(
          `${backendUrl}/api/github-contributions?username=${username}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error ||
              `Failed to fetch contributions (${response.status})`
          );
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setContributions(data.contributions || []);
        setTotalContributions(data.total || 0);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error ? err.message : "Failed to load contributions"
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    if (username && username !== "your-username") {
      fetchContributions();
    } else {
      setLoading(false);
    }

    return () => controller.abort();
  }, [username]);

  const weeks = useMemo(
    () => buildCalendarWeeks(contributions),
    [contributions]
  );
  const isConfigured = username !== "your-username";
  const panelState = loading
    ? "loading"
    : error || !isConfigured
      ? "offline"
      : "live";
  const statusLabel =
    panelState === "loading"
      ? "Syncing"
      : panelState === "offline"
        ? "Unavailable"
        : "Live data";
  const notice =
    panelState === "loading"
      ? "Syncing contribution data"
      : panelState === "offline"
        ? "Live activity is temporarily unavailable"
        : "Last 365 days";

  return (
    <div className={styles.panel} data-state={panelState}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>GitHub / Activity telemetry</p>
          <h4 className={styles.title}>Contribution stream</h4>
        </div>
        <p className={styles.status} aria-live="polite">
          <span className={styles.statusDot} aria-hidden="true" />
          {statusLabel}
        </p>
      </header>

      <div className={styles.metricRow}>
        <div className={styles.metric}>
          <strong>
            {panelState === "live"
              ? totalContributions.toLocaleString()
              : "—"}
          </strong>
          <span className={styles.metricLabel}>
            Contributions recorded
          </span>
        </div>

        <a
          className={styles.profileLink}
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          @{username}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div
        className={styles.calendar}
        role="img"
        aria-label={
          panelState === "live"
            ? `${totalContributions} GitHub contributions in the last year`
            : notice
        }
      >
        <div className={styles.dayLabels} aria-hidden="true">
          <span />
          <span>Mon</span>
          <span />
          <span>Wed</span>
          <span />
          <span>Fri</span>
          <span />
        </div>

        <div className={styles.calendarViewport}>
          <div className={styles.weeks}>
            {weeks.map((week, weekIndex) => (
              <div className={styles.week} key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <span
                    className={styles.day}
                    data-empty={!day}
                    data-level={day ? getIntensity(day.contributionCount) : 0}
                    key={day?.date || `${weekIndex}-${dayIndex}`}
                    title={
                      day?.date
                        ? `${day.date}: ${day.contributionCount} contributions`
                        : undefined
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className={styles.calendarFooter}>
        <div className={styles.legend} aria-hidden="true">
          <span>Less</span>
          <span className={styles.legendScale}>
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} />
            ))}
          </span>
          <span>More</span>
        </div>
        <p className={styles.notice}>{notice}</p>
      </footer>
    </div>
  );
}
