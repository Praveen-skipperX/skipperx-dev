import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setAuthToken } from '../services/api';

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const isNewUser = searchParams.get('isNewUser') === 'true';

    if (token) {
      setAuthToken(token);
      navigate('/dashboard');
    } else {
      // Handle error
      const error = searchParams.get('error');
      console.error('Google OAuth error:', error);
      navigate('/login');
    }
  }, [searchParams, navigate]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '18px'
    }}>
      <p>Authenticating with Google...</p>
    </div>
  );
};

export default GoogleCallback;
