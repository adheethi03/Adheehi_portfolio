import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Work History</p>
        <h2 className="section-title reveal">Experience</h2>

        {/* Professional */}
        <div className="exp-block">
          {portfolioData.experience.map((exp, i) => (
            <div className="exp-entry reveal" key={i}>
              <div className="exp-left">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-type">{exp.type}</div>
              </div>
              <div className="exp-right">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-summary">{exp.summary}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer */}
        <p className="vol-section-title reveal">Volunteer &amp; Campus Leadership</p>
        <div className="exp-block">
          {portfolioData.volunteer.map((vol, i) => (
            <div className="exp-entry reveal" key={i}>
              <div className="exp-left">
                <div className="exp-period">{vol.period}</div>
                <div className="exp-type" style={{ color: 'var(--text-muted)' }}>Volunteer</div>
              </div>
              <div className="exp-right">
                <div className="exp-role">{vol.role}</div>
                <div className="exp-company">{vol.organisation}</div>
                <ul className="exp-highlights">
                  {vol.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
