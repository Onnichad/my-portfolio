import styles from './ProjectCard.module.scss'


export default function ProjectCard({ title, description, tags = [], image, link, source }) {
return (
<article className={styles.card}>
{image && <img src={image} alt="" loading="lazy" />}
<div className={styles.body}>
<h3>{title}</h3>
<p>{description}</p>
{tags?.length > 0 && (
<ul className={styles.tags}>
{tags.map((t) => (<li key={t}>{t}</li>))}
</ul>
)}
<div className={styles.links}>
{link && <a href={link} target="_blank" rel="noreferrer">Demo</a>}
{source && <a href={source} target="_blank" rel="noreferrer">Code</a>}
</div>
</div>
</article>
)
}