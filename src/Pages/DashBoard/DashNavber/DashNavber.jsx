import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const DashNavber = () => {
    return (
        <div className=" flex justify-between pb-6">
            <h2 className=" font-bold">Date: Sunday, Apr 28</h2>
            <div className=" flex space-x-4">
                <div className=" flex relative">
                    <input type="text" className="px-4 outline-none  border border-slate-400  rounded-full"/>
                    <span className=" absolute top-2 right-2 "><FaSearch /></span>
                </div>
                <span className=" text-3xl"><IoIosNotifications /></span>
                <span className=" text-3xl"><IoMdSettings /></span>
                <span className=" w-[2px] h-7 bg-black"></span>
                <span className=" text-3xl"><FaCircleUser /></span>
                <span className=" text-xl font-medium">Admin</span>
            </div>
        </div>
    );
};

export default DashNavber;