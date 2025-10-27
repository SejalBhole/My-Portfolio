import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9f813feb-1737-4295-8332-87ce835f496a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult(data.success ? "Success! Thank you for contacting me." : "Error: Please try again.");
      
      if (data.success) {
        event.target.reset();
      }
    } catch (error) {
      setResult("Error: Failed to send message. Please try again.");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Get In Touch</h2>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
      </div>

      <div className={styles.links}>
        <div className={styles.link}>
          <img src="./assets/contact/githubIcon.png" alt="GitHub" />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className={styles.link}>
          <img src="./assets/contact/linkedinIcon.png" alt="LinkedIn" />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <form className={styles.contactForm} onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" required />
        </label>
        <label htmlFor="message">
          Message
          <textarea id="message" name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
        {result && <p className={styles.successMessage}>{result}</p>}
      </form>
    </section>
  );
}


