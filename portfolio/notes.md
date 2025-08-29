Postman:

we can either use:

1. localhost endpoint: https://localhost:5000/api/auth/register

2. render endpoint: https://jesslpersonalwebsite.onrender.com/api/auth/register 

- making sure to add a Header with key: Content-Type and value: application/json

-- for register, our body is:

{
  "username": "test",
  "password": "1234"
}

which can be used to register me as a user whenever I want (don't want to have a register feature on UI...)

my credentials lol

{
  "username": "jessica",
  "password": "mypasswordforwebsite"
}


next steps:

1. make dashboard component
2. add this to pages admin.tsx

import { AuthProvider } from '../components/admin/AuthHandler';
import AdminDashboard from '../components/admin/AdminDashboard';
import LoginForm from '../components/admin/LoginForm';
import { useAuth } from '../components/admin/AuthHandler';

const AdminContent = () => {
  const { isAuth, isLoad } = useAuth();
  
  if (isLoad) return <div>Loading...</div>;
  if (!isAuth) return <LoginForm />;
  return <AdminDashboard />;
};

const AdminPage = () => {
  return (
    <AuthProvider>
      <AdminContent />
    </AuthProvider>
  );
};

export default AdminPage;

3. add react router and other pages
<!-- 
<Router>
  <AdminNavbar />
  <Routes>
    <Route path="/admin/posts" element={<PostsManager />} />
    <Route path="/admin/projects" element={<ProjectsManager />} />
    <Route path="/admin/settings" element={<Settings />} />
  </Routes>
</Router> -->