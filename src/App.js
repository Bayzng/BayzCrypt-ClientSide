import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import LoginCode from "./pages/auth/LoginCode";
import Verify from "./pages/auth/Verify";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";
import UsersPage from "./components/usersPage/UsersPage";
import SendCrypto from "./components/sendCrypto/SendCrypto";
import AllTransactions from "./components/allTransactions/AllTransactions";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import AuthModal from "./pages/auth/AuthModal";
import ForgotSuccess from "./pages/auth/ForgotSuccess";
import RegisterationSuccess from "./pages/auth/RegisterationSuccess";
import Support from "./components/support/Support";
import Faq from "./components/faq/Faq";
import Faqs from "./components/faq/Faqs";
import State from "./context/data/State";
import MaintenanceMode from "./components/MaintenanceMode";


function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/home" />;
    }

    return children
  };

  return (
    <State>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><UsersPage /></ProtectedRoute>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={ <Register/> }/>
          <Route path="/forgot" element={ <Forgot/> }/>
          <Route path="/resetPassword/:resetToken" element={ <Reset/> }/>
          <Route path="/loginCode/:email" element={ <LoginCode/> }/>
          <Route path="/verify/:verificationToken" element={<Layout> <Verify/> </Layout>}/>
          <Route path="/profilePage" element={<Profile/>}/>
          <Route path="/usersPage" element={<UsersPage/> }/>
          <Route path="/sendcrypto" element={<SendCrypto/> }/>
          <Route path="/alltransactions" element={<AllTransactions/> }/>
          <Route path="/changePassword" element={ <ChangePassword/> }/>
          <Route path="/users" element={ <UserList/>}/>
          <Route path="/success" element={ <ForgotSuccess/>}/>
          <Route path="/RegSuccess" element={ <RegisterationSuccess/>}/>
          <Route path="/support" element={ <Support/>}/>
          <Route path="/maintenanceMode" element={ <MaintenanceMode/>}/>
          <Route path="/faq" element={ <Layout><Faqs/></Layout>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </State>
  );
}

export default App;
