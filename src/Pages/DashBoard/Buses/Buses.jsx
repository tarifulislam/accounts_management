
const Buses = () => {
    return (
        <div className=" min-h-screen">
            <div className=" flex items-center py-4 pr-12 pl-4 border border-[#E0E0E0] rounded-2xl text-xl">
                <div className=" w-3/12 flex gap-2">
                    <h4 className=" text-[#E0E0E0]">Bus No</h4>
                    <h4 className=" font-bold">1632</h4>
                </div>
                <div className=" w-3/12 flex gap-2">
                    <h4 className=" text-[#E0E0E0]">Today</h4>
                    <h4 className=" font-bold text-[#0CF25D] ">20000</h4>
                </div>
                <div className=" w-3/12 flex gap-2">
                    <h4 className=" text-[#E0E0E0]">Last Day</h4>
                    <h4 className=" font-bold text-[#0CF25D] ">13000</h4>
                </div>
                <div className=" w-3/12 flex  justify-end">
                    <span className=" bg-red-500  text-white rounded-full py-[5px] px-[10px]">G</span>
                </div>
            </div>
        </div>
    );
};

export default Buses;