import LoginForm from './components/LoginForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'; // ✅ double-check this path

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return user ? <LoggedInApp /> : <LoginForm />;
}

export default App;
