import styles from "./Footer.module.css";

const links = [
  { label: "Services", items: ["UI / UX", "Branding", "Webflow", "Marketing"] },
  { label: "Entreprise", items: ["À propos", "Équipe", "Carrières", "Contact"] },
  { label: "Ressources", items: ["Blog", "Guides", "FAQ", "Support"] },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Axonova</span>
          <p>
            Studio digital spécialisé dans la direction artistique, la création
            d’interfaces et les expériences immersives.
          </p>
        </div>

        {links.map((column) => (
          <div key={column.label} className={styles.column}>
            <h3>{column.label}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.column}>
          <h3>Restez informé</h3>
          <p>Recevez nos actualités et inspirations créatives chaque mois.</p>
          <form className={styles.newsletter}>
            <input type="email" placeholder="Votre email" aria-label="Votre email" />
            <button type="submit">S’inscrire</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
