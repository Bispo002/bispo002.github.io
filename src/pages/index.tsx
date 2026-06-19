import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import StickyNavbar from '@site/src/components/HomepageFeatures';

import './index.module.css';

const features = [
  { icon: 'layers', title: 'Frontend em Angular 19', description: 'Aplicação desenvolvida com features recentes do Angular, como standalone components e o novo builder esbuild.' },
  { icon: 'book-open', title: 'Landing Page em Docusaurus', description: 'Essa página foi construída em React/Docusaurus, garantindo uma landing page técnica interativa, versionada e fácil de manter.' },
  { icon: 'file-text', title: 'Backend em SpringBoot - Java', description: 'Implementação de serviços RESTful com SpringBoot, utilizando Java e tecnologias relacionadas para garantir escalabilidade e manutenibilidade.' },
  { icon: 'database', title: 'PostgreSQL para Database', description: 'Utilização do PostgreSQL como banco de dados principal, garantindo integridade e performance dos dados, assim como criptografia de dados para maior segurança.' },
  { icon: 'shield', title: 'Boas Práticas e Clean Code', description: 'Arquitetura de software orientada a componentes, tipagem estrita via TypeScript e forte separação de responsabilidades.' },
  { icon: 'users', title: 'Código Open Source', description: 'Todo o ecossistema do projeto está disponível publicamente, incentivando o estudo, o fork e a colaboração da comunidade.' }
];

const steps = [
  { number: '01', title: 'Levantamento e Requisitos', description: 'Análise das necessidades docentes e estruturação dos dados baseados nas diretrizes da BNCC.' },
  { number: '02', title: 'Prototipação (UI/UX)', description: 'Criação de wireframes e definição da paleta de cores (Golden/Sand) visando acessibilidade e clareza, criando uma experiência similar ao papel para o usuário.' },
  { number: '03', title: 'Desenvolvimento (Codificação)', description: 'Implementação do Frontend (Angular) e da Documentação Técnica (Docusaurus/React).' },
  { number: '04', title: 'Testes e Deploy', description: 'Validação de performance, ajustes de build e implantação contínua nos ambientes de produção.' }
];

function FeatureIcon({ icon }: { icon: 'layers' | 'calendar' | 'book-open' | 'users' | 'file-text' | 'shield' }) {
  switch (icon) {
    case 'layers': return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="15" width="16" height="2.5" rx="1.25" fill="currentColor" opacity="0.4"/><rect x="1" y="9.5" width="20" height="2.5" rx="1.25" fill="currentColor" opacity="0.7"/><rect x="5" y="4" width="12" height="2.5" rx="1.25" fill="currentColor"/></svg>;
    case 'calendar': return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 9h18M7 2v4M15 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case 'book-open': return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 5c-2-1.5-5-2-8-1.5v15c3-.5 6 0 8 1.5M11 5c2-1.5 5-2 8-1.5v15c-3-.5-6 0-8 1.5M11 5v15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'users': return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/><path d="M19 19c0-2.8-1.3-5-3.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/></svg>;
    case 'file-text': return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M13 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 2v7h6M7 13h8M7 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case 'shield': return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l8 3v6c0 4.4-3.4 8.5-8 10C6.4 19.5 3 15.4 3 11V5l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    default: return null;
  }
}

// --- SEÇÕES DA PÁGINA ---
function LandingHero() {
  return (
    <section className="hero-section">
      <div className="hero__bg-shapes">
        <div className="shape shape--1"></div>
        <div className="shape shape--2"></div>
        <div className="shape shape--3"></div>
      </div>
      <div className="landing-container">
        <div className="hero__content">
          <div className="hero__badge">
            <span>✦</span> Projeto Acadêmico
          </div>
          <h1 className="hero__title">
            PlanoFácil:<br />
            <em>Arquitetura e Desenvolvimento.</em>
          </h1>
          <p className="hero__subtitle">
            Estudo de caso focado na engenharia de software de uma plataforma educacional. 
            Desenvolvido utilizando Angular 19, SpringBoot e PostgreSQL, com documentação técnica detalhada em Docusaurus.
          </p>
          <div className="hero__cta">
            <a href="https://github.com/gabrielbachega1/extensao-unifil" target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Código Fonte (GitHub)
            </a>
            <Link to="/docs/intro" className="btn btn--outline btn--lg">
              Documentação Técnica
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="mockup">
            <div className="mockup__header">
              <div className="mockup__dots">
                <span></span><span></span><span></span>
              </div>
              <span className="mockup__title">Output Visual do Sistema</span>
            </div>
            <div className="mockup__body">
              <div className="mockup__row mockup__row--label">Stack Principal</div>
              <div className="mockup__row mockup__row--value">Angular v19 + React</div>
              <div className="mockup__row mockup__row--label">Paradigma CSS</div>
              <div className="mockup__row mockup__row--value">BEM + Modular CSS</div>
              <div className="mockup__row mockup__row--label">Módulos Abordados</div>
              <div className="mockup__tags">
                <span className="tag">Routing</span>
                <span className="tag">Data Binding</span>
              </div>
              <div className="mockup__row mockup__row--label">Status de Cobertura</div>
              <div className="mockup__row mockup__row--value">Desenvolvimento Ativo</div>
              <div className="mockup__progress">
              </div>
            </div>
          </div>
          <div className="mockup__badge mockup__badge--1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#b5a55a" opacity="0.2"/><path d="M4.5 7l2 2 3-3" stroke="#b5a55a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            PlanoFácil
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="landing-container">
        <div className="section-header">
          <p className="section-label">Stack & Tecnologias</p>
          <h2 className="section-title">O que compõe este ecossistema</h2>
          <p className="section-subtitle">Visão técnica das bibliotecas, frameworks e padrões arquiteturais adotados no desenvolvimento da plataforma.</p>
        </div>
        <div className="features__grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-card__icon">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="landing-container">
        <div className="section-header">
          <p className="section-label">Metodologia</p>
          <h2 className="section-title">Fases de Desenvolvimento do Projeto</h2>
        </div>
        <div className="steps">
          {steps.map((step, idx) => (
            <div key={idx} className="step">
              <div className="step__number">{step.number}</div>
              {idx < steps.length - 1 && <div className="step__connector"></div>}
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="landing-container">
        <div className="cta-box">
          <div className="cta-box__icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="5" y="24" width="26" height="4" rx="2" fill="currentColor" opacity="0.4"/>
              <rect x="2" y="16" width="32" height="4" rx="2" fill="currentColor" opacity="0.7"/>
              <rect x="8" y="8" width="20" height="4" rx="2" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="cta-box__title">Explore o Código Fonte</h2>
          <p className="cta-box__subtitle">Acesse a documentação completa para entender as decisões arquiteturais, ou visite o GitHub para analisar o código do sistema.</p>
          <div className="cta-box__actions">
            <a href="https://github.com/gabrielbachega1/extensao-unifil" target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">Acessar Repositório</a>
            <Link to="/docs/intro" className="btn btn--ghost-light btn--lg">Ler Documentação Técnica</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      wrapperClassName="homepage"
      title={`Arquitetura e Projeto | ${siteConfig.title}`}
      description="Documentação técnica e acadêmica do projeto PlanoFácil.">
      <StickyNavbar />
      <main className="landing-page">
        <LandingHero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
    </Layout>
  );
}