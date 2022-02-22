import { Outlet } from "react-router";
import Navbar from './Navbar';
import classes from './DefaultLayout.module.css';
const DefaultLayout = () => {
    return (
        <>            
                <Navbar />          
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default DefaultLayout;