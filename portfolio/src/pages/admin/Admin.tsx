import { AuthProvider } from '../../components/admin/AuthHandler.js';
import AdminDashboard from './Dashboard.js';
import LoginForm from '../../components/admin/LoginForm.js';
import { useAuth } from '../../components/admin/AuthHandler.js';

const AdminContent = () => {
  const { isAuth, isLoad } = useAuth();
  
  if (isLoad) return <div>Loading...</div>;
  if (!isAuth) return <LoginForm />;
  return <AdminDashboard />;
};

const AdminPage = () => {
  return (
    <AuthProvider>
      <AdminDashboard />
    </AuthProvider>
  );
};

export default AdminPage;