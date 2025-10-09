import styles from './SkillBarVertical.module.scss';

export default function SkillBarVertical({ name, level = 0 }) {
  const pct = Math.max(0, Math.min(100, Number(level) || 0));
  return (
    <div className={styles.item}>
      <div className={styles.track} aria-label={`${name} ${pct}%`} role="img">
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.label}>
        <span>{name}</span>
        <span className={styles.percent}>{pct}%</span>
      </div>
    </div>
  );
}
