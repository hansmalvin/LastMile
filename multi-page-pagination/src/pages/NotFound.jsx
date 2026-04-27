import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Test Error Page</p>
      <Link to="/" style={{ color: 'blue' }}>Return Home Page</Link>
    </div>
  );
}