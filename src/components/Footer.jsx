export default function Footer() {
  return (
    <footer
      style={{ padding: '2rem 1.25rem', borderTop: '1px solid var(--border)' }}
    >
      <small>
        © {new Date().getFullYear()} Chris Treil — Tous droits réservés.
      </small>
    </footer>
  );
}
