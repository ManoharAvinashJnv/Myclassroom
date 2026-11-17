import { useTreeCamera } from '../hooks/useTreeCamera.js';
import PageTransition from '../components/layout/PageTransition.jsx';
import TreeCanvas from '../components/memory-tree/TreeCanvas.jsx';
import TreeControls from '../components/memory-tree/TreeControls.jsx';

export default function MemoryTreePage() {
  const camera = useTreeCamera();
  return <PageTransition>
    <section className="hero" style={{ paddingBottom: 20 }}>
      <p className="eyebrow">Growing together</p>
      <h1>Our memory tree</h1>
      <p className="lead">Every branch represents a connection, and every leaf holds a little piece of our shared story.</p>
    </section>
    <div className="tree-wrap" style={{ transform: `scale(${camera.zoom})`, transformOrigin: 'top center' }}>
      <TreeCanvas />
      <TreeControls onReset={camera.reset} />
    </div>
  </PageTransition>;
}
