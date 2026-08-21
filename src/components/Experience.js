const jobs = [
  {
    company: 'Caspian Solutions',
    date: 'April 2025 — Present',
    location: 'Tampa, Florida (Remote)',
    title: 'Front-End Developer',
    bullets: [
      'Building and maintaining CRM interfaces and custom automations',
      'Developing high-converting landing pages using React, Next.js, Lovable, Wix.com, WordPress, and GoHighLevel Page Builder',
      'Automating workflows with Make.com (Integromat)',
      'Primary project: ApexSales CRM — full UI at callapp.apexsales.ai',
      'Built base UIs for closersregion.com and caspiansol.com',
      'Advanced Git version control in a collaborative team environment',
      'Light back-end work alongside front-end responsibilities',
    ],
  },
  {
    company: 'Crocusoft',
    date: 'Jan. 2023 — Mar. 2025',
    location: 'Baku, Azerbaijan',
    title: 'Front-End Developer / UI/UX Designer',
    bullets: [
      "Primarily focused on the company's internal admin dashboard, designing and building a highly intuitive interface adopted company-wide",
      'Built 15+ responsive landing and e-commerce pages with clean, maintainable front-end code',
      'Developed custom, unique UI animations to elevate user experience and visual polish',
      'Applied SEO best practices to improve search visibility and on-page performance',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-rule reveal">
          <div>
            <p className="section-label">// work experience</p>
            <h2 className="section-title">Where I&apos;ve <span>Worked</span></h2>
          </div>
          <div className="section-big-num">03</div>
        </div>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div className={`timeline-item reveal d${i + 1}`} key={job.company}>
              <div className="timeline-meta">
                <span className="timeline-company">{job.company}</span>
                <span className="timeline-date">{job.date}</span>
                <span className="timeline-location">{job.location}</span>
              </div>
              <div className="timeline-title">{job.title}</div>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
