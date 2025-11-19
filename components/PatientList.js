import Link from 'next/link';

export default function PatientList({ patients = [], onDelete }) {
  if (!patients || patients.length === 0) return <p>No patients found.</p>;
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr><th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {patients.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.email || ''}</td>
            <td>{p.phone || ''}</td>
            <td>{p.address || ''}</td>
            <td>
              <Link href={'/edit/' + p.id}><a>Edit</a></Link>
              {' '}|{' '}
              <button onClick={() => onDelete && onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
