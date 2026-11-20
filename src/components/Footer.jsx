import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-name">{personal.name}</span>

        <div className="footer-links">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>

        <span className="footer-copy">
          &copy; {new Date().getFullYear()} — All rights reserved
        </span>
      </div>
    </footer>
  );
}
