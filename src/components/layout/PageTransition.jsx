import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const frame = requestAnimationFrame(() => setVisible(true)); return () => cancelAnimationFrame(frame); }, []);
  return <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 240ms ease' }}>{children}</div>;
}
