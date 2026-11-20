import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
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
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Capabilities</p>
        <h2 className="section-title reveal">Skills</h2>
        <p className="section-sub reveal">
          A focused set of technical and professional competencies developed through academic work,
          internship experience, and self-driven projects.
        </p>

        <div className="skills-table">
          {portfolioData.skills.map((cat, i) => (
            <div className="skill-row reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skill-cat-name">{cat.category}</div>
              <div className="skill-items">
                {cat.items.map(item => (
                  <span className="skill-pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
