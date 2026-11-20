import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const ref = useRef(null);
  const [pdfAvailable, setPdfAvailable] = useState(true);
  const resumeUrl = portfolioData.personal.resume;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Detect if PDF is accessible
  useEffect(() => {
    if (!resumeUrl || resumeUrl === '#') { setPdfAvailable(false); return; }
    fetch(resumeUrl, { method: 'HEAD' })
      .then(r => { if (!r.ok) setPdfAvailable(false); })
      .catch(() => setPdfAvailable(false));
  }, [resumeUrl]);

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Document</p>
        <h2 className="section-title reveal">Resume</h2>

        <div className="resume-layout" style={{ marginTop: '48px' }}>
          {/* Left: description + actions */}
          <div className="reveal">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
              A concise overview of my education, technical skills, and professional experience as a
              Computer Science Engineering graduate and MERN stack developer.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              The document is updated regularly. If you'd like a copy or want to discuss an opportunity,
              feel free to reach out directly.
            </p>

            <div className="resume-ctas">
              {pdfAvailable && resumeUrl !== '#' ? (
                <>
                  <a href={resumeUrl} download className="btn btn-solid">
                    Download Resume
                  </a>
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    Open in New Tab
                  </a>
                </>
              ) : (
                <>
                  <a href={`mailto:${portfolioData.personal.email}?subject=Resume Request`} className="btn btn-solid">
                    Request via Email
                  </a>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
                    View LinkedIn Profile
                  </a>
                </>
              )}
            </div>

            {/* Quick facts */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'Degree',     value: 'B.Tech — Computer Science Engineering' },
                { label: 'Stack',      value: 'MERN (React, Node, Express, MongoDB)' },
                { label: 'Internship', value: 'MERN Stack Developer — Camerin Folks' },
                { label: 'Available',  value: 'Open to opportunities' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', gap: '20px',
                  padding: '14px 0', borderBottom: '1px solid var(--border)', alignItems: 'start'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-dim)', whiteSpace: 'nowrap', paddingTop: '2px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: PDF viewer */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="resume-frame-wrap">
              {pdfAvailable && resumeUrl !== '#' ? (
                <iframe
                  className="resume-frame"
                  src={`${resumeUrl}#toolbar=0&navpanes=0`}
                  title="Resume Preview"
                  onError={() => setPdfAvailable(false)}
                />
              ) : (
                <div className="resume-no-preview">
                  <div className="big-label">Resume</div>
                  <p>
                    Place your resume PDF at <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--bg)', padding: '2px 6px', borderRadius: '3px' }}>public/resume.pdf</code> to enable the preview.
                  </p>
                  <a href={`mailto:${portfolioData.personal.email}?subject=Resume Request`} className="btn" style={{ marginTop: '8px' }}>
                    Request a Copy
                  </a>
                </div>
              )}
            </div>
            <p style={{ marginTop: '10px', fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>
              PDF preview — open in new tab for full view
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
