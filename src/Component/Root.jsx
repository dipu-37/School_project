import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
        {/* Navbar */}
        <Navbar />
        {/* Outlet */}
        <div className='min-h-[calc(100vh-306px)]'>
          <Outlet />
        </div>
        
      </div>
    );
};

export default Root;