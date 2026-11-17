import { Link, useParams } from 'react-router-dom';
import StudentPhoto from '../components/students/StudentPhoto.jsx';
import students from '../data/students.js';

export default function StudentProfilePage() {
  const { studentId } = useParams();
  const student = students.find((item) => item.id === studentId);
  if (!student) return <section className="hero"><h1>Profile not found</h1><p className="lead">This profile may not have been added yet.</p><Link className="button" to="/">Return home</Link></section>;
  return <section className="hero"><StudentPhoto name={student.name} src={student.photo} /><h1>{student.name}</h1>{student.bio && <p className="lead">{student.bio}</p>}</section>;
}
