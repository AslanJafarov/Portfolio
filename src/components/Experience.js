const jobs = [
  {
    company: 'CleanLeads365',
    date: 'Dec 2025 — Present',
    location: 'Tampa, Florida (Remote)',
    title: 'Front-End Developer (Part-time)',
    bullets: [
      'Building the customer-facing web app for a DNC-scrubbing and TCPA list-cleaning SaaS in React, Next.js and TypeScript, covering list upload, scan results and account flows',
      'Designing responsive marketing and landing pages that guide visitors from a free list scan to a paid plan, with a focus on conversion and page speed',
      'Connecting the interface to REST endpoints for file upload, processing status and cleaned-list download, with clear loading, error and empty states',
      'Contributing shared components and consistent styling so a small team can ship new pages quickly',
      'Working asynchronously with the CTO and marketing across time zones using Git branches and pull-request reviews',
    ],
  },
  {
    company: 'ApexSales CRM',
    date: 'April 2025 — Present',
    location: 'Tampa, Florida (Remote)',
    title: 'Frontend Developer',
    bullets: [
      'Own the front-end of callapp.apexsales.ai, a CRM used daily by hundreds of sales agents; completed 300+ tasks spanning new features, UX fixes and performance improvements',
      'Structured the app in React/Next.js with Redux so global state stays predictable and components are reused across dashboards, call flows and pipeline views',
      'Integrated REST APIs for real-time lead, call and activity data, handling pagination, optimistic updates and error recovery',
      'Turned Figma designs into pixel-accurate, responsive screens and refined them using feedback gathered directly from agents',
      'Paired with back-end engineers on API contracts and used Docker-based dev environments for a consistent local setup',
    ],
  },
  {
    company: 'Caspian Solutions',
    date: 'April 2025 — Present',
    location: 'Tampa, Florida (Remote)',
    title: 'React Developer / Web Designer',
    bullets: [
      "Delivering high-converting landing pages and client sites across React, Next.js, WordPress, GoHighLevel, Wix.com and Lovable, choosing the stack that fits each client's budget and timeline",
      'Designed and built the base UIs for closersregion.com and caspiansol.com, from wireframe to launch',
      "Customising CRM interfaces and automating client workflows in Make.com as the team's automation manager",
      'Light back-end work with Node.js alongside front-end duties, including Docker containerisation for dev environments',
      'Advanced Git version control in a fully remote, collaborative team with regular communication to stakeholders',
    ],
  },
  {
    company: 'Best Comp Group',
    date: 'Jan 2025 — June 2025',
    location: 'Baku, Azerbaijan',
    title: 'Information Technology Support Technician',
    bullets: [
      'Upgraded and replaced RAM and storage on desktop and laptop computers',
      'Repaired basic hardware faults and assembled PCs from individual components',
      'Performed routine maintenance and installed operating systems and standard software',
    ],
  },
  {
    company: 'Crocusoft',
    date: 'Jan. 2023 — Mar. 2025',
    location: 'Baku, Azerbaijan',
    title: 'Front-End Developer / UI/UX Designer',
    bullets: [
      "Primarily focused on the company's internal admin dashboard, designing and building a highly intuitive, easy-to-use interface adopted company-wide",
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
