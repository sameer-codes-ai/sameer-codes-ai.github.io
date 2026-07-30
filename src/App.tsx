import { ArrowDownRight, ArrowUpRight, Code2, Mail, Menu, Send, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import portraitImage from '../img.jpg'

const skills = ['TypeScript', 'React', 'Node.js', 'Python', 'Java', 'Next.js', 'PostgreSQL', 'Git & GitHub', 'Figma', 'AWS']
const projects = [
  {
    title: 'LeetFlixV3',
    type: 'Full Stack Platform',
    text: 'LeetFlix V3 is a full-stack, production-grade web application that transforms passive binge-watching into an interactive, competitive experience. Designed with a premium, neon-themed Ul, the platform enables users to test their knowledge of popular TV shows through a highly optimized quiz engine while tracking performance, engagement, and progression in real time.The system features a scalable architecture built with Next.js (App Router) and NestJS, leveraging Google Cloud Firestore for flexible NoSQL data management. ',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Firebase'],
    link:'https://leetflixv3.vercel.app/',
    style: 'project-one'
  },
  {
    title: 'Cryptic Bird',
    type: 'Mini Game',
    text: 'A flappy bird inspired game with an innovative spin on the classic Flappy Bird, but with added challenges like dynamic levels, moving pipes, spiked pipes, and changing backgrounds. The game integrates Blockchain technology, allowing players to enter their name and BSC blockchain address via Java Swing textboxes. Based on their score, players would be rewarded with our custom DevJams Token, coded in Solidity, sent manually to their blockchain wallet after cross verification of score.We stored the player data in a .txt file and used the BEP20 token standard for crypto transactions.',
    tags: ['JavaFX', 'JavaSwing', 'TypeScript', 'Firebase'],
    link:'https://github.com/sameer-codes-ai/DecentralisedDreamers',
    style: 'project-two'
  }
]

function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true) }
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top">SK<span>.</span></a>
      <nav className={open ? 'nav open' : 'nav'}>
        {['About', 'Projects', 'Skills', 'Contact'].map(item => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
      <button className="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="eyebrow">
          <i/> Available for opportunities
        </div>
        <p className="hero-kicker">
          Hello World, It's <strong>Sameer Kumar</strong>
        </p>
        <div className="hero-bottom">
          <p>
            I’m a computer science student and developer who turns curious ideas into useful, human-centered products. Currently learning, building, and looking for the next challenge.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View my work <ArrowDownRight size={18}/></a>
            <a className="button secondary" href="https://drive.google.com/file/d/1zp6i1NnWe3EVhCXef1O905ne79KTeXUu/view?usp=drive_link">Download résumé</a>
          </div>
        </div>
        
        <div className="hero-orbit">
          <span>scroll to explore</span><ArrowDownRight size={17}/>
        </div>
      </section>

      <section className="skills-band" id="skills">
        <div className="marquee">
          {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}><b>✦</b>{skill}</span>)}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <div>
            <p className="overline">Selected work</p>
            <h2>My Personal<br/>and Hackathon Projects.</h2>
          </div>
          <p>
            Experiments, products, and ideas made with intention.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => 
          <article className={`project-card ${project.style}`} key={project.title}>
            <div className="card-top">
              <span>{`0${i + 1}`}</span>
              <a href={`${project.link}`} aria-label={`View ${project.title}`}><ArrowUpRight size={19}/>
              </a>
            </div>
            <div className="visual">
            <div className="visual-window">
              <span/><span/><span/>
              <div className="visual-content"/>
              </div></div>
              <div className="project-info">
                <p>{project.type}</p>
                <h3>{project.title}</h3><p className="description">{project.text}</p>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
          </article>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <p className="overline">A little about me</p>
          <h2>Curious by nature.<br/>Intentional by craft.</h2>
          <p className="lead">
            My relationship with code began early, with the tiny magic of QBasic and HTML. Today, I’m pursuing a B.Tech in Computer Science at VIT Vellore, building a foundation in thoughtful problem solving and collaborative engineering.
          </p>
          <p>
            I care about the space where technology meets people: solving an actual problem, removing friction, and leaving something a little better than I found it.
          </p>
          <a className="text-link" href="#contact">More about my journey <ArrowUpRight size={17}/></a>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-glow"/>
          <div className="portrait">
            <img src={portraitImage} alt="Sameer Kumar"/>
            <div className="portrait-label">
              <span>Based in</span><strong>Patna, India</strong>
            </div>
          </div>
          <div className="orbit-text">● STUDENT &nbsp; ● DEVELOPER &nbsp; ● MAKER &nbsp;</div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-intro">
          <p className="overline">Let’s make something</p>
          <h2>Have a thought?<br/><em>Let’s talk.</em></h2>
          <p>Whether you have a project in mind, an opportunity, or just want to say hello — my inbox is always open.</p>
          <a href="mailto:sameer9085kumar@gmail.com" className="email">Contact Email<ArrowUpRight size={20}/></a>
        </div>
        <form onSubmit={submit}>
          <label>Name<input required placeholder="What should I call you?"/></label>
          <label>Email<input required type="email" placeholder="you@example.com"/></label>
          <label>Message<textarea required placeholder="Tell me a little about your idea..." rows={4}/></label>
          <button className="button primary" type="submit">{sent ? 'Message sent — thank you!' : <>Send message <Send size={17}/></>}</button>
        </form>
      </section>
    </main>
    <footer>
      <a className="brand" href="#top">SK<span>.</span></a>
      <p>© {new Date().getFullYear()} Sameer Kumar. Built with curiosity.</p>
      <div className="socials">
        <a href="https://github.com/sameer-codes-ai" aria-label="GitHub"><Code2 size={19}/></a>
        <a href="https://www.linkedin.com/in/sameer4350" aria-label="LinkedIn"><span className="social-letter">in</span></a>
        <a href="mailto:sameer9085kumar@gmail.com" aria-label="Email"><Mail size={19}/></a>
      </div>
    </footer>
  </div>
}
export default App
