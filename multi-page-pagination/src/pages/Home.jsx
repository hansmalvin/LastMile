import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Get Started Home page test page</p>
      
      <button 
        onClick={() => navigate('/about')}
        style={{ padding: '8px 14px', cursor: 'pointer', marginTop: '8px' }}
      >
        Go to About Page
      </button>
    </div>
  );
}