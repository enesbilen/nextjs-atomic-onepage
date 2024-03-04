"use client"
import AdminHeader from "@/components/organisms/adminHeader";
import Footer from "@/components/organisms/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = ({ children }) => {

  return (
    <>
      <AdminHeader />
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default AdminLayout;