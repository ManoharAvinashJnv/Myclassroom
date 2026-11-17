export default function StudentPhoto({ name = 'Classmate', src }) {
  return <div className="student-photo">{src ? <img src={src} alt={`${name}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> : <span aria-label={`${name} photo placeholder`}>{name.trim().charAt(0).toUpperCase() || '?'}</span>}</div>;
}
