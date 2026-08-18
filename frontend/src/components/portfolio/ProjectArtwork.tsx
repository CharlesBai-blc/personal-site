import type { ProjectVisual } from "@/config/portfolio";

interface ProjectArtworkProps {
  variant: ProjectVisual;
}

export default function ProjectArtwork({ variant }: ProjectArtworkProps) {
  if (variant === "market") {
    return (
      <div className="project-art project-art--market" aria-hidden="true">
        <div className="market-art__header">
          <span>CB / MARKET</span>
          <span>LIVE FEED</span>
        </div>
        <svg viewBox="0 0 720 420" role="presentation">
          <g className="market-art__grid">
            <path d="M0 70H720M0 140H720M0 210H720M0 280H720M0 350H720" />
            <path d="M120 0V420M240 0V420M360 0V420M480 0V420M600 0V420" />
          </g>
          <path
            className="market-art__area"
            d="M0 328L60 302L120 316L180 242L240 258L300 178L360 206L420 126L480 151L540 88L600 114L660 52L720 68V420H0Z"
          />
          <path
            className="market-art__line"
            d="M0 328L60 302L120 316L180 242L240 258L300 178L360 206L420 126L480 151L540 88L600 114L660 52L720 68"
          />
          <circle className="market-art__point" cx="660" cy="52" r="7" />
        </svg>
        <div className="market-art__ticker">
          <span>SPY +0.84%</span>
          <span>QQQ +1.12%</span>
          <span>VIX −2.03%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art project-art--terminal" aria-hidden="true">
      <div className="terminal-art__topbar">
        <span>TOOLBOX / SANDBOX</span>
        <span className="terminal-art__status">RUNNING</span>
      </div>
      <div className="terminal-art__body">
        <div className="terminal-art__gutter">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index}>{String(index + 1).padStart(2, "0")}</span>
          ))}
        </div>
        <div className="terminal-art__code">
          <span>
            <b>function</b> traverse(graph, source) {"{"}
          </span>
          <span className="terminal-art__indent">
            <i>const</i> queue = [source];
          </span>
          <span className="terminal-art__indent">
            <i>const</i> visited = <em>new</em> Set();
          </span>
          <span>&nbsp;</span>
          <span className="terminal-art__indent">
            <b>while</b> (queue.length) {"{"}
          </span>
          <span className="terminal-art__indent-2">
            <i>const</i> node = queue.shift();
          </span>
          <span className="terminal-art__indent-2">visited.add(node);</span>
          <span className="terminal-art__indent">{"}"}</span>
          <span>{"}"}</span>
        </div>
      </div>
      <div className="terminal-art__output">
        <span>OUTPUT</span>
        <strong>7 tests passed</strong>
        <span>42ms</span>
      </div>
    </div>
  );
}
