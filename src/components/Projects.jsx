import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="section-title reveal">Projects</h2>
        <p className="projects-intro reveal">
          A collection of systems, experiments, and ideas built to solve real problems.
          Each project reflects a deliberate choice of architecture, design, and technology.
        </p>

        <div className="projects-list">
          {portfolioData.projects.map((proj, i) => (
            <div className="project-entry reveal" key={proj.id} style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Number column */}
              <div className="project-num">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Content column */}
              <div>
                {proj.featured && <div className="featured-badge">Featured</div>}
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-tagline">{proj.tagline}</p>
                <p className="project-desc">{proj.summary}</p>

                <ul className="project-bullets">
                  {proj.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>

                <p className="project-tech">
                  <strong>Built with: </strong>
                  {proj.tech.join(', ')}
                </p>

                <p className="project-quote">{proj.tagline2}</p>

                <div className="project-actions">
                  {proj.github
                    ? <a href={proj.github} className="btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    : <span className="btn" style={{ opacity: 0.35, cursor: 'default', borderStyle: 'dashed' }} title="Link coming soon">GitHub</span>
                  }
                  {proj.demo
                    ? <a href={proj.demo} className="btn btn-solid" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    : <span className="btn" style={{ opacity: 0.35, cursor: 'default', borderStyle: 'dashed' }} title="Demo coming soon">Live Demo</span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
