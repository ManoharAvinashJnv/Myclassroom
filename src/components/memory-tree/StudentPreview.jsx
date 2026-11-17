export default function StudentPreview({ student }) {
  if (!student) return null;
  return <article className="card"><h3>{student.name}</h3>{student.note && <p>{student.note}</p>}</article>;
}
