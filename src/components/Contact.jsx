import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

/**
 * FormSubmit.co is a zero-setup, free email forwarding service.
 * It sends emails straight to adheethiks@gmail.com without needing API keys.
 * Note: The very first time a message is sent, FormSubmit sends an activation link
 * to adheethiks@gmail.com. Once you click "Activate Form" in that email, every future
 * message arrives instantly in your inbox!
 */
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/adheethiks@gmail.com';

export default function Contact() {
  const ref = useRef(null);
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMsg('');

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject || `New Contact Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus('success');
        setFeedbackMsg('Your message has been sent successfully to adheethiks@gmail.com! I will respond to your email address shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.includes('Activation')) {
        // First time activation notice
        setStatus('success');
        setFeedbackMsg("FormSubmit sent an initial confirmation email to adheethiks@gmail.com. Please check your inbox and click 'Activate Form' once, and subsequent messages will arrive automatically!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMsg(data.message || 'Unable to deliver message right now. Please email directly to adheethiks@gmail.com.');
      }
    } catch (err) {
      console.error('Contact Form error:', err);
      setStatus('error');
      setFeedbackMsg('Network error. You can also send directly to adheethiks@gmail.com.');
    }
  };

  const links = [
    { label: 'Email',    value: personal.email,                       href: `mailto:${personal.email}` },
    { label: 'Phone',    value: personal.phone,                       href: `tel:${personal.phone}` },
    { label: 'LinkedIn', value: 'linkedin.com/in/adheethiks',         href: personal.linkedin },
    { label: 'GitHub',   value: personal.github.replace('https://', ''), href: personal.github },
    { label: 'Location', value: personal.location,                    href: null },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal">Contact</h2>

        <div className="contact-layout" style={{ marginTop: '48px' }}>
          {/* ── Left: contact info ─────────────────────── */}
          <div className="reveal">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              Whether it's a job opportunity, project collaboration, or just a friendly conversation — 
              fill out the form and it will be sent directly to my inbox at <strong style={{ color: 'var(--coral-light)' }}>adheethiks@gmail.com</strong>.
            </p>
            <div className="contact-links">
              {links.map(item => {
                const Tag = item.href ? 'a' : 'div';
                const props = item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_self' : '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {};
                return (
                  <Tag key={item.label} className="contact-link-row" {...props}>
                    <div>
                      <div className="contact-link-label">{item.label}</div>
                      <div className="contact-link-value">{item.value}</div>
                    </div>
                    {item.href && <span className="contact-arrow">&#8599;</span>}
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* ── Right: Form ───────────────────────────── */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-email">Sender's Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-message">Mail Content / Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-solid"
                style={{
                  alignSelf: 'flex-start',
                  opacity: status === 'submitting' ? 0.6 : 1,
                  cursor: status === 'submitting' ? 'wait' : 'pointer'
                }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending Message…' : 'Send Message'}
              </button>

              {/* Status Notifications */}
              {status === 'success' && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(74, 222, 128, 0.1)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  color: '#4ade80',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  {feedbackMsg}
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#f87171',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  {feedbackMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
