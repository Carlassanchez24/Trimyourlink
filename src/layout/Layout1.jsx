import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";


const Layout1 = () => {

    return (
        <div>
            <main>
                <Outlet />
            </main>
            <Navbar />
        </div>
    );
};

export default Layout1;
