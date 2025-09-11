import AdminDashboard from './Dashboard.js';
import LoginForm from '../../components/admin/LoginForm.js';
import { useAuth } from '../../components/admin/AuthHandler.js';

const AdminContent = () => {
  const { isAuth, isLoad, isLoggingOut } = useAuth();
  
  if (isLoad) return <div>Loading...</div>;
  if (isLoggingOut) return <div>Logging out...</div>;
  if (!isAuth) return <LoginForm />;
  return <AdminDashboard />;
};

const AdminPage = () => {
  return <AdminContent />;
};

export default AdminPage;