import discord from "../../assets/discord.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import arrow from "../../assets/arrow.svg";
import styles from "./WhereWeAre.module.scss";

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  description?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: linkedin,
    url: 'https://linkedin.com/',
  },
  {
    name: 'Discord*',
    icon: discord,
    url: 'https://discord.com/',
    description: '*apenas para mulheres',
  },
  {
    name: 'Instagram',
    icon: instagram,
    url: 'https://instagram.com/',
  },
  {
    name: 'GitHub',
    icon: github,
    url: 'https://github.com/',
  },
];

const WhereWeAre = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ONDE ESTAMOS?</h2>
      <div className={styles.grid}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <div className={styles.info}>
              <img src={link.icon} alt={`${link.name} icon`} className={styles.icon} />
              <div className={styles.infoText}>
                <span>{link.name}</span>
                <span className={styles.description}>
                  {link.description && (
                    link.description
                  )}
                </span>
              </div>
            </div>
            <span className={styles.arrow}>
              <img src={arrow} alt={`arrow icon`} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WhereWeAre;