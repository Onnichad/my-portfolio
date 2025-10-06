import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import SkillBar from '../components/SkillBar';
import styles from './Home.module.scss';

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

          <span className="badge">Disponible pour missions front-end</span>

          <p style={{ maxWidth: 720, marginTop: 10 }}>
            Je conçois des interfaces propres, rapides et accessibles. Voici une
            sélection de projets récents et mes compétences principales.
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
              <source srcSet="/me.png" type="image/png" />
              <img
                className={styles.portrait}
                src="/me.png"
                alt="Photo de Chris Treil"
                width={420}
                height={350}
                loading="eager"
                fetchpriority="high"
              />
            </picture>
          </div>
        </motion.div>
      </div>

      {/* Projets + Compétences + CTA : inchangé */}
      <section id="projects" style={{ padding: '2.5rem 0 1rem' }}>
        <h2>Projets</h2>
        <div className="grid" style={{ marginTop: '1rem' }}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      <section id="skills" style={{ padding: '2.5rem 0 1rem' }}>
        <h2>Compétences</h2>
        <div className="grid" style={{ marginTop: '1rem' }}>
          <SkillBar name="React" level={85} />
          <SkillBar name="JavaScript" level={65} />
          <SkillBar name="CSS/SCSS" level={85} />
          <SkillBar name="Node/Express" level={70} />
          <SkillBar name="MongoDB" level={60} />
          <SkillBar name="HTML" level={95} />
        </div>
      </section>

      <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
        <Link className="btn ghost" to="/contact">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
