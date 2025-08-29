import { SideBar } from "../../components/AdminComponent/SideBar";
  import { ToastContainer, toast } from 'react-toastify';


export default function Layout({ children }) {
  return (
    <div className="flex">
      <ToastContainer theme="dark" />
      <SideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
