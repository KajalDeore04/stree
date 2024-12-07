import { NavLink, Outlet } from "react-router-dom";
import '../../../src/adminlayout.css';
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { WavyBackground } from "../wavy-background";

function AdminLayout() {
    return (
        <>
        
            <WavyBackground>
                <Outlet />
            </WavyBackground>
            
        </>
    );
}

export default AdminLayout;
