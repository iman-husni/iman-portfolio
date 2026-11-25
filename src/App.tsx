import { useEffect, useState } from 'react'
import { stackGroups } from './techStack'
import { TechLogo } from './TechLogo'

type RoomId = 'who' | 'projects' | 'experience' | 'journey' | 'contact'

type Room = {
  id: RoomId
  label: string
  number: string
  position: string
}

const rooms: Room[] = [
  { id: 'who', label: 'Who am I?', number: '201', position: 'left-[10%] top-[20%]' },
  { id: 'projects', label: 'Projects', number: '203', position: 'left-[41%] top-[20%]' },
  { id: 'experience', label: 'Experience', number: '205', position: 'right-[10%] top-[20%]' },
  { id: 'journey', label: 'Student journey', number: '301', position: 'left-[20%] top-[61%]' },
  { id: 'contact', label: 'Contact', number: '305', position: 'right-[20%] top-[61%]' },
]

const EMAIL = 'nrl.imanhusni@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/iman-husni'

type Project = {
  title: string
  type: string
  crop: string
  description: string
  impact: string
  tech: string
  note?: string
}

const projects: Project[] = [
  {
    title: 'ChronoLux',
    type: 'Web · E-commerce',
    crop: 'project-crop-chair',
    description:
      'A responsive e-commerce website for browsing smartwatch listings and products, built with a frontend layout and backend integration tested on a local server.',
    impact: 'A complete product browsing experience, from listing pages to a working local server setup.',
    tech: 'HTML · CSS · JavaScript · PHP · MySQL',
  },
  {
    title: 'weVOLT',
    type: 'Mobile · EV charging',
    crop: 'project-crop-poster',
    description:
      'A mobile app concept that makes EV charging easier by helping drivers discover charging stations and manage their charging experience.',
    impact: 'Explores how station discovery, booking, favourites, and connected services can reduce charging friction.',
    tech: 'Kotlin · Jetpack Compose · Room · Firebase · APIs',
  },
  {
    title: 'Voxora',
    type: 'Web · Interview practice',
    crop: 'project-crop-model',
    description:
      'A job interview practice platform that helps students and job seekers prepare with greater confidence, from answering questions to simulating interview styles.',
    impact: 'Gives users a space to practise, reflect, and improve before facing real interviews.',
    tech: 'Web development · AI-assisted concepts · Speech interaction',
    note: 'Prototype — some responses and feedback are currently simulated.',
  },
  {
    title: 'SediaGo',
    type: 'Concept · AI roadside',
    crop: 'project-crop-leaves',
    description:
      'An AI-powered roadside companion that helps drivers think clearly when facing unexpected car problems, guiding them through their options instead of leaving them overwhelmed.',
    impact: 'Turns a stressful roadside breakdown into a more guided and informed experience.',
    tech: 'Built for AntSPARK AI for Good Buildathon',
  },
]

function ArrowIcon({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={direction === 'left' ? 'rotate-180' : ''}>
      <path d="M5 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.19 1.46-2.19 2.96V21H9z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="m3.6 6.3 8.4 6.3 8.4-6.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function WindowButton({ room, onOpen }: { room: Room; onOpen: (id: RoomId) => void }) {
  return (
    <button className={`dorm-window group absolute ${room.position}`} onClick={() => onOpen(room.id)}>
      <span className="window-placard">{room.label}</span>
      <span className="curtain curtain-left" />
      <span className="curtain curtain-right" />
      <span className="window-glow" />
      <span className="window-grid" />
      <span className="window-label">
        <small>{room.number}</small>
      </span>
    </button>
  )
}

function ProjectGallery() {
  const [current, setCurrent] = useState(0)
  const project = projects[current]

  const move = (step: number) => {
    setCurrent((index) => (index + step + projects.length) % projects.length)
  }

  return (
    <div className="gallery-layout">
      <div className={`project-image ${project.crop}`} role="img" aria-label={`${project.title} project visual`} />
      <div className="project-meta">
        <div className="project-head">
          <p className="eyebrow">
            Project {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>
          <h2>{project.title}</h2>
          <p className="project-type">{project.type}</p>
        </div>
        <div className="project-body">
          <p className="project-description">{project.description}</p>
          <p className="project-impact">
            <strong>Impact</strong> {project.impact}
          </p>
          <p className="project-tech">{project.tech}</p>
          {project.note && <p className="project-note">{project.note}</p>}
        </div>
        <div className="gallery-controls">
          <button aria-label="Previous project" onClick={() => move(-1)}>
            <ArrowIcon direction="left" />
          </button>
          <div className="progress">
            {projects.map((item, index) => (
              <button
                key={item.title}
                className={index === current ? 'active' : ''}
                aria-label={`View ${item.title}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
          <button aria-label="Next project" onClick={() => move(1)}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

const journeySlides = [
  {
    year: 'Academics · 2022—Now',
    title: 'Keeping the marks up',
    text: 'Dean’s List in Semesters 1, 3 and 4, with a current CGPA of 3.90.',
    note: 'Dean’s List · CGPA 3.90 · More milestones to come',
    className: 'journey-one',
  },
  {
    year: 'Programs · SIG Group-iMachine',
    title: 'SMARTTYnker',
    text: 'A program experience that formed part of my learning and student development.',
    note: 'Program experience · Learning & development',
    className: 'journey-two',
  },
  {
    year: 'Programs · SIG Group-iMachine',
    title: 'AI Explorer',
    text: 'A learning experience that fed my curiosity about AI and emerging technology, and opened up new possibilities to explore.',
    note: 'Curiosity · Exposure · Learning',
    className: 'journey-three',
  },
  {
    year: 'Hackathons · Events',
    title: 'Building under pressure',
    text: 'Buildathons and tech events where I explored ideas, built prototypes, and worked with others to solve problems quickly.',
    note: 'Buildathons · Prototypes · Collaboration',
    className: 'journey-four',
  },
]

function JourneyGallery() {
  const [current, setCurrent] = useState(0)
  const slide = journeySlides[current]
  const move = (step: number) => setCurrent((index) => (index + step + journeySlides.length) % journeySlides.length)

  return (
    <div className="gallery-layout journey-layout">
      <div className={`journey-visual ${slide.className}`} role="img" aria-label={`${slide.title} milestone visual`}>
        <span className="journey-mark">{String(current + 1).padStart(2, '0')}</span>
        <div className="journey-shape" />
      </div>
      <div className="project-meta journey-meta">
        <div className="project-head">
          <p className="eyebrow">
            Journey {String(current + 1).padStart(2, '0')} / {String(journeySlides.length).padStart(2, '0')}
          </p>
          <h2>{slide.title}</h2>
          <p className="project-type">{slide.year}</p>
        </div>
        <div className="project-body journey-body">
          <p className="project-description">{slide.text}</p>
          <p className="project-tech">{slide.note}</p>
        </div>
        <div className="gallery-controls">
          <button aria-label="Previous journey slide" onClick={() => move(-1)}><ArrowIcon direction="left" /></button>
          <div className="progress">
            {journeySlides.map((item, index) => (
              <button
                key={item.title}
                className={index === current ? 'active' : ''}
                aria-label={`View ${item.title}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
          <button aria-label="Next journey slide" onClick={() => move(1)}><ArrowIcon /></button>
        </div>
      </div>
    </div>
  )
}

function RoomContent({ active }: { active: RoomId }) {
  if (active === 'projects') return <ProjectGallery />
  if (active === 'journey') return <JourneyGallery />

  if (active === 'who') {
    return (
      <div className="editorial-page about-page">
        <p className="eyebrow">Resident profile · Room 201</p>
        <h2>Hi, I’m Iman Husni.</h2>
        <div className="editorial-columns">
          <p>
            A Software Engineering student at Universiti Kebangsaan Malaysia with an interest in technology, design,
            and building ideas into useful solutions.
          </p>
          <p>
            I enjoy exploring new technologies, understanding problems, and creating things that make everyday
            experiences better — with a particular interest in Information Systems, UI/UX, AI, and the intersection
            between people and technology.
          </p>
        </div>
        <div className="tech-stack">
          {stackGroups.map((group) => (
            <div className="tech-group" key={group.label}>
              <span className="tech-group-label">{group.label}</span>
              <div className="tech-logos">
                {group.items.map((item) => (
                  <TechLogo key={item.name} icon={item.icon} label={item.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="about-stamp">IH<br /><span>EST. 2003</span></div>
      </div>
    )
  }

  if (active === 'experience') {
    return (
      <div className="editorial-page experience-page">
        <p className="eyebrow">The noticeboard · 2025</p>
        <h2>Where I’ve worked.</h2>
        <div className="notice-board">
          <div className="board-header">
            <h3>
              Web Design Assistant <span>(WordPress)</span>
            </h3>
            <time>August 2025 – September 2025</time>
          </div>
          <div className="notes-grid">
            <article className="sticky-note note-1">
              <span className="pin" aria-hidden="true" />
              <p>Organized website pages and navigation menus.</p>
            </article>
            <article className="sticky-note note-2">
              <span className="pin" aria-hidden="true" />
              <p>Updated website content, including images and text.</p>
            </article>
            <article className="sticky-note note-3">
              <span className="pin" aria-hidden="true" />
              <p>Helped maintain and manage the website using WordPress.</p>
            </article>
            <article className="sticky-note note-4">
              <span className="pin" aria-hidden="true" />
              <p>Followed design guidelines to keep website content and structure consistent.</p>
            </article>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="editorial-page contact-page">
      <p className="eyebrow">The door is open · Room 305</p>
      <h2>Have a project, an idea, or something worth learning?</h2>
      <p className="contact-intro">
        I’m always open to connecting with people, exploring ideas, learning something new, and discovering
        opportunities to grow.
      </p>
      <div className="contact-actions">
        <a
          className="contact-icon"
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          aria-label="Connect with Iman Husni on LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          className="contact-icon"
          href={`mailto:${EMAIL}`}
          aria-label={`Email Iman Husni at ${EMAIL}`}
          title="Email"
        >
          <MailIcon />
        </a>
      </div>
      <div className="contact-footer">
        <p>Universiti Kebangsaan Malaysia<br />Software Engineering</p>
      </div>
    </div>
  )
}

export default function App() {
  const [activeRoom, setActiveRoom] = useState<RoomId | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setActiveRoom(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <main className={`site-shell ${darkMode ? 'dark-mode' : ''}`}>
      <header className="topbar">
        <a href="#" className="brand" aria-label="Iman Husni home">IH</a>
        <p>Software Engineering student<br />UKM, Malaysia</p>
        <div className="header-actions">
          <div className="availability"><span /> Open to opportunities</div>
          <button
            className="theme-toggle"
            aria-label={`Switch to ${darkMode ? 'day' : 'night'} mode`}
            aria-pressed={darkMode}
            onClick={() => setDarkMode((value) => !value)}
          >
            <ThemeIcon dark={darkMode} />
            <span>{darkMode ? 'Day' : 'Night'}</span>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>Come on in.<br />The lights are on.</h1>
          <p className="intro">A collection of projects, experiments, and things I’m learning — housed under one slightly wonky roof.</p>
        </div>

        <div className="building-scene" aria-label="An illustrated red brick dormitory with portfolio sections in its windows">
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="dorm-building">
            <div className="roof"><span>Eastwood House</span></div>
            <div className="brick-texture" />
            {rooms.map((room) => <WindowButton key={room.id} room={room} onOpen={setActiveRoom} />)}
            <button className="dorm-door" onClick={() => setActiveRoom('contact')}>
              <span>305</span><i />
              <strong>Knock</strong>
            </button>
            <div className="building-number">19</div>
          </div>
          <div className="ground">
            <span className="bush bush-left" />
            <span className="bush bush-right" />
          </div>
          <img
            className="door-avatar"
            src="/avatar.png"
            alt="Pixel-art avatar waving at the door"
            width="200"
            height="260"
            loading="eager"
          />
        </div>
      </section>

      <footer className="page-footer">
        <span>Pick a window to explore</span>
        <span className="scroll-line" />
        <span>Portfolio · 2026</span>
      </footer>

      {activeRoom && (
        <div className="room-overlay" role="dialog" aria-modal="true" aria-label={`${activeRoom} portfolio section`}>
          <button className="overlay-backdrop" aria-label="Close portfolio section" onClick={() => setActiveRoom(null)} />
          <section className="room-panel">
            <div className="panel-top">
              <div className="room-tabs">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    className={activeRoom === room.id ? 'active' : ''}
                    onClick={() => setActiveRoom(room.id)}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
              <button className="close-button" aria-label="Close" onClick={() => setActiveRoom(null)}><CloseIcon /></button>
            </div>
            <RoomContent active={activeRoom} />
          </section>
        </div>
      )}
    </main>
  )
}
