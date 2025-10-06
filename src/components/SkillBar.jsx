import styles from './SkillBar.module.scss';

export default function SkillBar({ name, level }) {
  const pct = Math.max(0, Math.min(100, Number(level) || 0));
  return (
    <div className={styles.item} role="img" aria-label={`${name} ${pct}%`}>
      <div className={styles.header}>
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
