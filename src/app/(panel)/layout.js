import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function PanelLayout({ children }) {

  return (
    <>
      <Navbar />
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
}
