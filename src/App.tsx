import { ArrowRight, Download, Trophy, Target, Award, BookOpen, Code, Database, Cpu, Layout, GitBranch, Terminal } from 'lucide-react'
import portraitImage from '../img.jpg'

const projects = [
  {
    title: 'LeetFlix V3',
    description: 'A modern competitive programming platform inspired by streaming platforms. Designed with a premium, neon-themed Ul, the platform enables users to test their knowledge of popular TV shows through a highly optimized quiz engine.',
    tags: ['NEXT.JS', 'NESTJS', 'TYPESCRIPT', 'FIREBASE'],
    link: 'https://leetflixv3.vercel.app/'
  },
  {
    title: 'AI Traffic Vision',
    description: 'Object Detection & Computer Vision for Smart Traffic Systems. Developed object detection models for Indian traffic mobility, securing Rank 5 nationally in Urban Vision AI Hackathon.',
    tags: ['YOLO', 'DEEP LEARNING', 'COMPUTER VISION', 'PYTHON'],
    link: 'https://github.com/sameer-codes-ai'
  },
  {
    title: 'Cryptic Bird',
    description: 'A Java-based blockchain-integrated game with token rewards for DevJams\'24 by GDG. Combines creative game mechanics with Solidity smart contracts on the BSC network.',
    tags: ['JAVAFX', 'BLOCKCHAIN', 'SOLIDITY'],
    link: 'https://github.com/sameer-codes-ai/DecentralisedDreamers'
  }
]

const skills = [
  { category: 'Languages', items: ['C / C++', 'Java', 'Python', 'JavaScript', 'TypeScript'], icon: <Code size={20}/> },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS'], icon: <Layout size={20}/> },
  { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Flask'], icon: <Terminal size={20}/> },
  { category: 'Database & Cloud', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'], icon: <Database size={20}/> },
  { category: 'AI & ML', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'], icon: <Cpu size={20}/> },
  { category: 'Tools & DevOps', items: ['Git / GitHub', 'Docker', 'Linux', 'VS Code', 'Figma'], icon: <GitBranch size={20}/> }
]

function App() {
  return (
    <div className="site-wrapper">
      <header className="header">
        <nav className="nav">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#expertise">EXPERTISE</a>
          <a href="#metrics">METRICS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">CS UNDERGRADUATE, VIT VELLORE</p>
            <h1>Sameer Kumar</h1>
            <div className="status-banner">AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-desc">
              I build products across web development, AI, and blockchain. From shipping full-stack platforms to competing in national hackathons, I love solving hard problems and proving they hold up in the real world.
            </p>
            <div className="hero-tags">
              <span>FULL STACK</span>
              <span>AI / ML</span>
              <span>BLOCKCHAIN</span>
              <span>COMPETITIVE PROGRAMMING</span>
            </div>
            <a href="#work" className="btn-primary">VIEW FEATURED WORK</a>
          </div>
          <div className="hero-visual">
            <div className="portrait-container">
              <div className="decorator-star1">✦</div>
              <div className="decorator-star2">✦</div>
              <div className="decorator-me">me ↘</div>
              <img src={portraitImage} alt="Sameer Kumar" />
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <p className="section-eyebrow">THE JOURNEY</p>
          <h2>Hello World! <br/>Why the range, not the niche.</h2>
          <div className="about-layout">
            <div className="about-text">
              <p>
                My coding journey began at age 12 with the tiny magic of QBasic, followed by HTML and Java in middle school. Since then, my passion for problem-solving has only grown. I completed my schooling at St. Paul's High School and Don Bosco Academy in Patna, actively participating in the National Science Olympiad (NSO) and International Mathematics Olympiad (IMO).
              </p>
              <p>
                Today, as a CS undergraduate at Vellore Institute of Technology, I deliberately test myself against different corners of computer science—hardware, theory, systems, and markets—to find where the hard problems actually are.
              </p>
              <p>
                I care about the space where technology meets people: solving an actual problem, removing friction, and leaving something a little better than I found it. Every project here is that stress test running in public.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>DevJams'24 (GDG)</h4>
                <p>Built Cryptic Bird, a blockchain-integrated game with token rewards.</p>
              </div>
              <div className="highlight-item">
                <h4>Urban Vision Hackathon</h4>
                <p>Developed object detection models for Indian traffic mobility (Rank 5 nationally).</p>
              </div>
              <div className="highlight-item">
                <h4>ACM C2C</h4>
                <p>Created LeetFlix, a Dockerized streaming-themed competitive programming project.</p>
              </div>
              <div className="highlight-item">
                <h4>graVITas 2025</h4>
                <p>Student volunteer handling premium events like Expo 2.0, Celestia, and The Last Experiment.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-header">
            <p className="section-eyebrow">FEATURED WORK</p>
            <h2>Latest Builds</h2>
          </div>
          <div className="projects-grid">
            {projects.map(p => (
              <div key={p.title} className="project-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="explore-link">EXPLORE THE BUILD <ArrowRight size={16}/></a>
              </div>
            ))}
          </div>
        </section>

        <section id="expertise" className="tech-section">
          <div className="section-header">
            <p className="section-eyebrow">ARSENAL</p>
            <h2>Technical Expertise</h2>
          </div>
          <div className="native-tech-grid">
            {skills.map(skill => (
              <div key={skill.category} className="native-tech-card">
                <div className="tech-card-header">
                  {skill.icon}
                  <h3>{skill.category}</h3>
                </div>
                <div className="native-pill-wrap">
                  {skill.items.map(item => <span key={item} className="native-pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="metrics" className="metrics-section">
          <div className="section-header">
            <p className="section-eyebrow">BY THE NUMBERS</p>
            <h2>Metrics & Milestones</h2>
          </div>
          
          <div className="bento-grid">
            <div className="bento-box bento-code">
              <div className="window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <span className="code-comment">// Fun Fact: My engineering process</span>
                <br/>
                <span className="code-keyword">while</span> (!Success) {'{'}
                <br/>
                {'  '}Learn();
                <br/>
                {'  '}Build();
                <br/>
                {'  '}Fail();
                <br/>
                {'  '}Improve();
                <br/>
                {'}'}
                <br/>
                <span className="code-keyword">return</span> Success;
              </div>
            </div>

            <div className="bento-box bento-stat">
              <BookOpen className="bento-icon" size={28}/>
              <h3>500+</h3>
              <p>DSA Problems Solved</p>
            </div>

            <div className="bento-box bento-stat">
              <Target className="bento-icon" size={28}/>
              <h3>Top 22%</h3>
              <p>LeetCode Weekly 503</p>
            </div>

            <div className="bento-box bento-stat">
              <Trophy className="bento-icon" size={28}/>
              <h3>Rank 5/11</h3>
              <p>Urban Vision AI Hackathon</p>
            </div>

            <div className="bento-box bento-stat">
              <Award className="bento-icon" size={28}/>
              <h3>Gold Medal</h3>
              <p>NSO Distinction</p>
            </div>

            <div className="bento-box bento-goals">
              <h3>🎯 2026 Goals</h3>
              <div className="goals-list">
                <div className="goal-item"><ArrowRight size={16}/> <span>1900+ LeetCode Rating</span></div>
                <div className="goal-item"><ArrowRight size={16}/> <span>Publish AI research</span></div>
                <div className="goal-item"><ArrowRight size={16}/> <span>Win National Hackathons</span></div>
                <div className="goal-item"><ArrowRight size={16}/> <span>Build impactful open-source</span></div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="contact-section">
          <div className="contact-content">
            <div className="contact-left">
              <h2>LET'S TALK</h2>
              <p>Open to research collaborations, internships, and anything that needs someone comfortable moving between hardware, theory, and production code.</p>
              <br/>
              <a href="https://drive.google.com/file/d/1zp6i1NnWe3EVhCXef1O905ne79KTeXUu/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-secondary"><Download size={18}/> DOWNLOAD FULL CV (PDF)</a>
            </div>
            <div className="contact-right">
              <div className="quote">"Code. Learn. Build. Repeat."</div>
              <div className="social-links-grid">
                <a href="mailto:sameer9085kumar@gmail.com" className="btn-social">EMAIL</a>
                <a href="https://github.com/sameer-codes-ai" className="btn-social">GITHUB</a>
                <a href="https://www.linkedin.com/in/sameer4350" className="btn-social">LINKEDIN</a>
              </div>
            </div>
          </div>
      </footer>
    </div>
  )
}
export default App
