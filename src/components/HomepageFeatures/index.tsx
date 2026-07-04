import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function StickyNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.stickyNav, { [styles.stickyNavVisible]: isVisible })}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.brand}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="18" width="20" height="3" rx="1.5" fill="#b5a55a" opacity="0.4"/>
            <rect x="2" y="12" width="24" height="3" rx="1.5" fill="#b5a55a" opacity="0.7"/>
            <rect x="6" y="6" width="16" height="3" rx="1.5" fill="#b5a55a"/>
          </svg>
          <span>PlanoFácil</span>
        </div>

        {/* Links */}
        <div className={styles.actions}>
          <Link to="/docs/intro" className={styles.linkDoc}>
            Documentação Técnica
          </Link>
          <a href="https://github.com/gabrielbachega1/extensao-unifil" target="_blank" rel="noreferrer" className={styles.btnGithub}>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}