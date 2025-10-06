export default function Contact() {
  return (
    <section className="container" style={{ padding: '2rem 0' }}>
      <h2>Contact</h2>
      <form className="form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Nom
          <input name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="6" required></textarea>
        </label>
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
    </section>
  );
}
