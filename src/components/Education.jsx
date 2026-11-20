import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
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
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Academic Background</p>
        <h2 className="section-title reveal">Education</h2>

        <div className="edu-list">
          {portfolioData.education.map((edu, i) => (
            <div className="edu-entry reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="edu-period">{edu.period || '—'}</div>
              <div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
