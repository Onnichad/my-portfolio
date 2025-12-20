export default function Contact() {
  return (
    <section className="container" style={{ padding: '2rem 0' }}>
      <h2>Contact</h2>
      <p style={{ maxWidth: 720, marginTop: 8 }}>
        Joignable via ces canaux. Je réponds rapidement.
      </p>

      <div className="grid" style={{ marginTop: '1rem' }}>
        {/* Email */}
        <article className="card" style={{ padding: '1rem' }}>
          <h3 style={{ margin: 0 }}>Email</h3>
          <p style={{ marginTop: 6 }}>
            <a
              href="mailto:ton.email@exemple.com?subject=Contact%20depuis%20portfolio"
              style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              onnidevpro@gmail.com
            </a>
          </p>
          <div style={{ marginTop: 8 }}>
            <button
              className="btn ghost"
              onClick={() =>
                navigator.clipboard.writeText('onnidevpro@gmail.com')
              }
              aria-label="Copier l’email"
            >
              Copier l’email
            </button>
          </div>
        </article>

        {/* LinkedIn */}
        <article className="card" style={{ padding: '1rem' }}>
          <h3 style={{ margin: 0 }}>LinkedIn</h3>
          <p style={{ marginTop: 6 }}>
            <a
              href="https://www.linkedin.com/in/christopher-treil-63037839b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              linkedin.com/in/christopher-treil-63037839b/
            </a>
          </p>
        </article>

        {/* GitHub */}
        <article className="card" style={{ padding: '1rem' }}>
          <h3 style={{ margin: 0 }}>GitHub</h3>
          <p style={{ marginTop: 6 }}>
            <a
              href="https://github.com/Onnichad"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              github.com/Onnichad
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}
