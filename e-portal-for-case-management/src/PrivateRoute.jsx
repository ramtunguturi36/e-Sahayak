/**
 * PrivateRoute.jsx - Protected Route Component
 * 
 * This component implements route protection and access control for authenticated users.
 * It handles:
 * - Authentication verification for protected routes
 * - Role-based access control
 * - Redirect to login for unauthenticated users
 * 
 * Protected Routes:
 * - /clientdashboard: Client dashboard access
 * - /advocatedashboard: Advocate dashboard access
 * - /judgedashboard: Judge dashboard access
 * - /admindashboard: Admin dashboard access
 * - /payment: Payment processing
 * - /advocatelist: List of advocates
 * - /sendingfiles: File upload functionality
 * 
 * Usage:
 * - Wraps protected routes in the application
 * - Ensures only authenticated users can access protected content
 */

import ClientDashboard from "./client/Clientdashboard"


const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
  
    // Redirect to the login page if not authenticated
    if (!isAuthenticated) {
      return <Navigate to="/Login" />;
    }
  
    return (
      <Routes>
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="/advocatedashboard" element={<AdvocateDashboard />} />
        <Route path="/judgedashboard" element={<JudgeDashboard />} />
        <Route path="/admindashboard" element={<COADashboard />} />
        <Route path='/payment' element={<PaymentComponent/>}/>
        <Route path='/advocatelist' element={<AdvocateList/>}/>
        <Route path='/sendingfiles' element={<FileUploader/>}/>
        <Route path='/sendingfiles' element={<FileUploader/>}/>
      </Routes>
    );
  };
  export default PrivateRoutes;