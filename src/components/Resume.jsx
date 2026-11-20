import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const ref = useRef(null);
  const frameWrapRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const resumeUrl = portfolioData.personal.resume || '/resume.pdf';

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Track fullscreen changes (e.g. if user presses Esc key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle native Fullscreen mode on the preview frame
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (frameWrapRef.current?.requestFullscreen) {
        frameWrapRef.current.requestFullscreen().catch((err) => {
          console.error('Fullscreen request error:', err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Document</p>
        <h2 className="section-title reveal">Resume</h2>

        <div className="resume-layout" style={{ marginTop: '48px' }}>
          {/* Left: description + actions */}
          <div className="reveal">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
              A concise overview of my academic credentials, full-stack competencies, and internship experience as a
              Computer Science Engineering graduate and MERN stack developer.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              You can preview the document in the embedded viewer, view it fullscreen, or download a direct PDF copy below.
            </p>

            <div className="resume-ctas">
              <a href={resumeUrl} download="Adheethi_KS_Resume.pdf" className="btn btn-solid">
                Download Resume
              </a>
              <button
                type="button"
                onClick={handleToggleFullscreen}
                className="btn"
                style={{ cursor: 'pointer' }}
              >
                {isFullscreen ? 'Exit Fullscreen' : '⛶ Fullscreen'}
              </button>
            </div>

            {/* Quick facts */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { label: 'Degree',     value: 'B.Tech — Computer Science Engineering (2022–2026)' },
                { label: 'College',    value: 'MES College of Engineering, Kuttipuram' },
                { label: 'Stack',      value: 'MERN (React.js, Node.js, Express.js, MongoDB)' },
                { label: 'Internship', value: 'MERN Stack Developer Intern — Camerin Folks' },
                { label: 'Status',     value: 'Available for full-time opportunities' },
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

          {/* Right: PDF Viewer Frame */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div
              ref={frameWrapRef}
              className="resume-frame-wrap"
              style={{
                position: 'relative',
                borderRadius: '6px',
                border: '1px solid rgba(199, 123, 120, 0.25)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                background: '#121212',
                overflow: 'hidden',
                height: isFullscreen ? '100vh' : 'auto'
              }}
            >
              <iframe
                className="resume-frame"
                src={`${resumeUrl}#toolbar=1&navpanes=0`}
                title="Adheethi K.S. Resume Preview"
                style={{
                  width: '100%',
                  height: isFullscreen ? '100vh' : '620px',
                  border: 'none',
                  display: 'block'
                }}
              />
            </div>

            <div style={{
              marginTop: '12px',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.5px'
            }}>
              <span>PDF preview • Scroll inside to view page 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
