import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { WavyBackground } from "../wavy-background";
import AdminUsers from "../../pages/AdminUsers";
import AdminIncidents from "../../pages/AdminIncidents";
import AdminMessages from "../../pages/AdminContacts";
import AdminDashboard from "../AdminDashboard";

function AdminLayout() {
  const location = useLocation();

  return (
    
      <div className="bg-black h-full">
        {location.pathname === "/admin" ? (
          // <div className="p-8 text-center">
          //   <h1 className="text-6xl font-bold mt-[300px] mb-[90px] text-white">
          //     Admin Dashboard
          //   </h1>
          //   <div className="flex flex-wrap justify-center gap-10">
          //     {/* Users Box */}
          //     <NavLink
          //       to="/admin/users"
          //       className="mt-4 transform transition-all duration-300 hover:scale-105 "
          //     >
          //       <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] w-[550px] text-center overflow-hidden flex items-center justify-center">
          //         <div className="h-[220px] w-full flex flex-col justify-center items-center transform scale-[0.7]">
          //           <AdminUsers />
          //         </div>
          //       </div>
          //     </NavLink>

          //     {/* Incidents Box */}
          //     <NavLink
          //       to="/admin/incidents"
          //       className="mt-4 transform transition-all duration-300 hover:scale-105"
          //     >
          //       <div className="bg-transparent rounded-lg  shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] w-[520px] text-center overflow-hidden flex items-center justify-center">
          //         <div className="h-[220px] w-full flex flex-col justify-center items-center transform scale-[0.6]">
          //           <AdminIncidents />
          //         </div>
          //       </div>
          //     </NavLink>

          //     {/* Messages Box */}
          //     <NavLink
          //       to="/admin/contacts"
          //       className="mt-4 transform transition-all duration-300 hover:scale-105"
          //     >
          //       <div className="bg-transparent rounded-lg shadow-[1px_1px_11px_1px_rgb(249,_89,_164)] w-[600px] text-center overflow-hidden flex items-center justify-center">
          //         <div className="h-[220px] w-full flex flex-col justify-center items-center transform scale-[0.7]">
          //           <AdminMessages />
          //         </div>
          //       </div>
          //     </NavLink>
          //   </div>
          // </div>
          <AdminDashboard/>
        ) : (
          <div className="h-full bg-black">
          <Outlet />
          </div>
        )}
    </div>
     
  );
}

export default AdminLayout;
