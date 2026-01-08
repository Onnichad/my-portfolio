import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import SkillBarVertical from '../components/SkillBarVertical';
import styles from './Home.module.scss';
const meUrl = `${import.meta.env.BASE_URL}me.png`;

// imports inchangés…

export default function Home() {
  return (
    <section className="container">
      <div className={styles.hero}>
        {/* Colonne gauche */}
        <div className={styles.copy}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Développeur Web — Front-End
          </motion.h1>

          <span className="badge">
            Open to freelance and long term missions.
          </span>

          <p style={{ maxWidth: 720, marginTop: 10 }}>
            I’m Christopher Treil, a front-end–oriented web developer. My goal
            is to deliver smooth, accessible, high-performance interfaces that
            truly serve the user. During my OpenClassrooms program, I built
            React apps (Vite, React Router, SCSS Modules, Framer Motion) and
            developed back ends with Node/Express and MongoDB, including JWT
            authentication, file upload, and security hardening. I pay close
            attention to code quality (reusable components, design tokens,
            well-managed state), performance & SEO (optimized images, lazy
            loading, metadata), and best practices (Git, code reviews). Curious
            and a natural teacher, I enjoy working with designers to turn
            product intent into an experience that’s clear, fast, and reliable.
          </p>
        </div>

        {/* Colonne droite : portrait (inchangé) */}
        <motion.div
          className={styles.portraitWrap}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <div className={styles.frame}>
            <picture>
              <source srcSet={meUrl} type="image/png" />
              <img
                className={styles.portrait}
                src={meUrl}
                alt="Photo de Chris Treil"
                width={420}
                height={350}
                loading="lazy"
                fetchpriority="high"
              />
            </picture>
          </div>
        </motion.div>
      </div>

      <div className={styles.mainGrid}>
        {/* Colonne gauche : projets */}
        <section id="projects" className="styles.projects">
          <h2>Projets</h2>
          <div className="grid" style={{ marginTop: '1rem' }}>
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>

        {/* Colonne droite : skills (sidebar) */}
        <aside className={styles.aside} aria-label="Compétences">
          <h2>Compétences</h2>
          <div className={styles.vList}>
            <SkillBarVertical name="React" level={85} />
            <SkillBarVertical name="TypeScript" level={75} />
            <SkillBarVertical name="CSS/SCSS" level={85} />
            <SkillBarVertical name="Node/Express" level={70} />
            <SkillBarVertical name="HTML" level={80} />
            <SkillBarVertical name="Optimisation SEO" level={75} />
            <SkillBarVertical name="MongoDB" level={60} />
          </div>
        </aside>
      </div>
    </section>
  );
}
