import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition.jsx';
import siteConfig from '../config/siteConfig.js';

export default function HomePage() {
  return <PageTransition>
    <section className="hero">
      <p className="eyebrow">{siteConfig.institution} · {siteConfig.batch}</p>
      <h1>A little place for all our memories.</h1>
      <p className="lead">A dedicated space for our classmates to celebrate friendships, share stories, and keep the moments of school life close.</p>
      <Link className="button" to="/memory-tree">Explore our memory tree</Link>
    </section>
    <section className="home-cards" aria-label="About this space">
      <article className="card"><h3>Our people</h3><p>A place to celebrate every classmate and the journey we share.</p></article>
      <article className="card"><h3>Our memories</h3><p>Keep the stories, milestones, and moments that made our batch special.</p></article>
      <article className="card"><h3>Made with respect</h3><p>Profiles and personal information should only be shared with consent.</p></article>
    </section>
  </PageTransition>;
}
