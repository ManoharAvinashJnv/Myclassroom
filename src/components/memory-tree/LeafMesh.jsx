export default function LeafMesh({ x = 50, y = 50, color = '#9aba82' }) {
  return <span aria-hidden="true" style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: 24, height: 16, borderRadius: '100% 0 100% 0', background: color }} />;
}
