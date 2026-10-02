const projects = [
  {
    number: "01",
    title: "Iran Study Fields",
    type: "Open data · JSON",
    description:
      "A community-friendly collection of Iranian university majors, made easy to explore and reuse.",
    href: "https://github.com/guftall/iran-study-fields.json",
    icon: "↗",
    tone: "mint",
  },
  {
    number: "02",
    title: "Web notes & patterns",
    type: "Learning · TypeScript",
    description:
      "Small, practical notes from building for the web—capturing useful patterns as I learn them.",
    href: "https://gist.github.com/guftall",
    icon: "⌘",
    tone: "blue",
  },
  {
    number: "03",
    title: "More on GitHub",
    type: "Experiments · In progress",
    description:
      "A home for experiments, open-source contributions, and ideas that are still taking shape.",
    href: "https://github.com/guftall?tab=repositories",
    icon: "✳",
    tone: "lavender",
  },
];

const skills = ["Software development", "Web applications", ".NET", "Angular", "Java", "Android"];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav page-width" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Omid Dehghani, home">
            <span className="wordmark-mark">g<span>.</span></span>
            <span>omid dehghani</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
          </div>
          <a className="nav-contact" href="mailto:omid@guftall.ir">Let&apos;s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="availability-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> IRAN</div>
          <h1>Thoughtful software,<br /><span>built with curiosity.</span></h1>
          <p className="hero-intro">
            I&apos;m <strong>Omid Dehghani</strong> — a software developer who enjoys turning
            interesting problems into clear, useful experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">Explore my work <Arrow /></a>
            <a className="text-link" href="#about">A little about me <Arrow /></a>
          </div>
          <div className="hero-footnote"><span className="footnote-line" /> Curious by nature. Intentional by design.</div>
        </div>

        <div className="hero-art" aria-label="Abstract illustration of sky and a growing green form" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-cloud cloud-one" />
          <div className="art-cloud cloud-two" />
          <div className="art-hill hill-back" />
          <div className="art-hill hill-front" />
          <div className="art-stem" />
          <div className="art-leaf leaf-left" />
          <div className="art-leaf leaf-right" />
          <div className="art-label"><span>01</span><span>A work in progress, always.</span></div>
          <div className="art-star star-a">✳</div>
          <div className="art-star star-b">✳</div>
        </div>
        <div className="hero-scroll"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro-band" id="about">
        <div className="page-width intro-grid">
          <div className="section-kicker"><span>01</span> A LITTLE INTRODUCTION</div>
          <div className="intro-content">
            <h2>Good work starts with <span>a good question.</span></h2>
            <p>
              I&apos;m a developer drawn to the craft of making things work well—and feel simple
              to use. Over the years I&apos;ve explored different corners of software, from web
              applications to mobile, always following the questions that make me curious.
            </p>
            <p>
              This is my corner of the internet: a place to share what I&apos;m building, what
              I&apos;ve learned, and where I hope to go next.
            </p>
            <a className="inline-link" href="https://github.com/guftall" target="_blank" rel="noreferrer">A little more on GitHub <Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <section className="work-section page-width" id="work">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span> THE PATH SO FAR</div><h2>Experience &amp; <span>toolkit.</span></h2></div>
          <p className="heading-aside">A growing practice shaped by curiosity<br />and the joy of solving real problems.</p>
        </div>
        <div className="work-grid">
          <div className="timeline">
            <div className="timeline-entry">
              <div className="timeline-date">IN PRACTICE</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-body"><h3>Software Developer</h3><p className="timeline-org">Web · Mobile · Open source</p><p>Exploring software across web and mobile, learning by making, and sharing useful pieces along the way.</p></div>
            </div>
            <div className="timeline-entry timeline-entry-muted">
              <div className="timeline-date">ALWAYS</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-body"><h3>Student of the craft</h3><p className="timeline-org">Open source · Side projects</p><p>Keeping a notebook of patterns, experiments, and ideas worth passing on.</p></div>
            </div>
          </div>
          <aside className="toolkit-card">
            <div className="toolkit-top"><span>MY TOOLKIT</span><span className="toolkit-spark">✳</span></div>
            <h3>Tools I&apos;ve<br />spent time with.</h3>
            <div className="skill-list">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
            <div className="toolkit-note"><span className="note-dot" /> The best tool is the one that fits the problem.</div>
          </aside>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="page-width">
          <div className="section-heading projects-heading">
            <div><div className="section-kicker"><span>03</span> THINGS I&apos;VE MADE</div><h2>Selected <span>projects.</span></h2></div>
            <a className="inline-link" href="https://github.com/guftall?tab=repositories" target="_blank" rel="noreferrer">All repositories <Arrow diagonal /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a href={project.href} className={`project-card ${project.tone}`} key={project.number} target="_blank" rel="noreferrer">
                <div className="project-card-top"><span>{project.number} / 03</span><span className="project-icon">{project.icon}</span></div>
                <div className="project-card-copy"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p></div>
                <div className="project-card-link">Take a look <Arrow diagonal /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section page-width">
        <div className="contact-decoration"><span>✳</span><span>✳</span><span>✳</span></div>
        <div className="section-kicker"><span>04</span> YOUR TURN</div>
        <h2>Have a good<br /><span>question?</span></h2>
        <p>I&apos;m always up for a thoughtful conversation or an interesting idea.</p>
        <div className="contact-methods">
          <a className="button button-dark" href="mailto:omid@guftall.ir">omid@guftall.ir <Arrow diagonal /></a>
          <a className="inline-link" href="https://t.me/oMid_76" target="_blank" rel="noreferrer">Telegram: @oMid_76 <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="page-width footer-inner">
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">g<span>.</span></span><span>omid dehghani</span></a>
          <span className="footer-note">Made with curiosity <span>✳</span> © 2026</span>
          <div className="footer-links"><a href="https://github.com/guftall" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="mailto:omid@guftall.ir">Email <Arrow diagonal /></a><a href="https://t.me/oMid_76" target="_blank" rel="noreferrer">Telegram <Arrow diagonal /></a></div>
        </div>
      </footer>
    </main>
  );
}
