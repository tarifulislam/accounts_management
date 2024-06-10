
const DashHome = () => {
    return (
        <div className=" min-h-screen  mt-9">
            <div className=" grid grid-cols-2 gap-12">
                <div className=" border border-[#6a6a6a44] w-full p-[5%] rounded-2xl space-y-2">
                    <h1 className=" font-bold text-2xl">Dhaka Route</h1>
                    <div className=" flex gap-16">
                        <div className=" w-1/2"></div>
                        <div className=" w-1/2 flex justify-between">
                            <h4 className=" text-2xl font-bold text-[#E0E0E0]">Today</h4>
                            <h4 className=" text-2xl font-bold text-[#0CF25D]">20000</h4>
                        </div>
                    </div>
                    <div className=" flex gap-16 w-full">
                        <div className=" w-1/2 flex justify-between">
                            <h4 className=" text-2xl font-bold text-[#E0E0E0]">Trip</h4>
                            <h4 className="font-bold text-2xl">20</h4>
                        </div>
                        <div className=" w-1/2 flex justify-between">
                            <h4 className=" text-2xl font-bold text-[#E0E0E0]">Last Day</h4>
                            <h4 className=" text-2xl font-bold text-[#0CF25D]">13000</h4>
                        </div>
                    </div>
                </div>

                <div className=" border border-[#6a6a6a44] w-full p-[5%] rounded-2xl space-y-2">
                    <h1 className=" font-bold text-2xl">Chittagong Route</h1>
                    <div className=" flex gap-16">
                        <div className=" w-1/2"></div>
                        <div className=" w-1/2 flex justify-between">
                            <h4 className=" text-2xl font-bold text-[#E0E0E0]">Today</h4>
                            <h4 className=" text-2xl font-bold text-[#0CF25D]">20000</h4>
                        </div>
                    </div>
                    <div className=" flex gap-16 w-full">
                        <div className=" w-1/2 flex justify-between">
                            <h4 className=" text-2xl font-bold text-[#E0E0E0]">Trip</h4>
                            <h4 className="font-bold text-2xl">20</h4>
                        </div>
                        <div className=" w-1/2 flex justify-between">
                            <h4 className=" text-2xl font-bold text-[#E0E0E0]">Last Day</h4>
                            <h4 className=" text-2xl font-bold text-[#0CF25D]">13000</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full  gap-16 mt-9 flex">
                <div className=" w-1/2"></div>
                
                <div className=" w-1/2 px-9 pt-9  pb-24 border border-[#6a6a6a44]  rounded-2xl  space-y-9">
                    <h3 className=" font-bold text-2xl text-center mb-20">Daily Expense</h3>
                    <div>
                        <div className=" font-bold text-2xl flex justify-between  border-t-2 py-2 mt-6">
                            <h4>utility bill</h4>
                            <h4>100 TK</h4>
                        </div>
                        <div className=" font-bold text-2xl flex justify-between  border-t-2 py-2 mt-6">
                            <h4>Road Fee</h4>
                            <h4>100 TK</h4>
                        </div>
                        <div className=" font-bold text-2xl flex justify-between  border-t-2 py-2 mt-6 ">
                            <h4>some Expense</h4>
                            <h4>100 TK</h4>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default DashHome;