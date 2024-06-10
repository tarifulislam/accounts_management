import { NavLink, Outlet } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBusSimple } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import { PiNotepadDuotone } from "react-icons/pi";
import DashNavber from "../Pages/DashBoard/DashNavber/DashNavber";

const DashLayout = () => {
    return (
        <div className="bg-[#E0E0E0] w-full py-[2%] pr-4  min-h-screen">
            <div className=" flex">
                <div className=" w-2/12 py-9 pr-9 font-bold">
                    <h4 className="  text-3xl text-center px-3 ">Jonaki Service  Line Pvt. ltd.</h4>

                    <div className=" space-y-3 mt-16">
                        <ul>
                            <NavLink to='/dashboard'  >
                            <li className="text-xl bg-[#0CF25D]  text-white py-3 flex items-center gap-3 pl-4"> <span className=" text-black"><BsGraphUp /></span> Dashboard</li>
                            </NavLink>
                            <NavLink to='/dashboard/buses'>
                                <li className="text-xl text-[#0CF25D]  py-3 flex items-center gap-3 pl-4"> <span className=" text-black"><FaBusSimple /></span> Buses</li>
                            </NavLink>
                            <NavLink to='/dashboard/dashaccound'>
                                <li className="text-xl text-[#0CF25D]  py-3 flex items-center gap-3 pl-4"> <span className=" text-black"><FaCalculator /></span> Accounts</li>
                            </NavLink>

                            <NavLink to='/dashboard/glance'>
                                <li className="text-xl text-[#0CF25D]  py-3 flex items-center gap-3 pl-4"> <span className=" text-black"><PiNotepadDuotone /></span> Glance Sheet</li>
                            </NavLink>
                            <NavLink to="/dashboard/salary">
                                <li className="text-xl text-[#0CF25D]  py-3 flex items-center gap-3 pl-4"> <span className=" text-black"><FaRegStickyNote /></span> Salary Sheet</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className=" w-10/12  bg-white rounded-xl px-4 py-9">
                    <div className=" pl-[2%] pr-[8%]">
                        <DashNavber></DashNavber>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default DashLayout;