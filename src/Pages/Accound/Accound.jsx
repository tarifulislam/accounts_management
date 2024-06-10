
const Accound = () => {
    return (
        <div className=" w-full  bg-white h-screen py-[5%] ">
            <div className=" w-8/12 mx-auto bg-[rgb(224,224,224)] py-[2%] px-[4%] rounded-3xl">
                <div className=" flex justify-between font-bold mb-2 text-2xl px-4">
                    <h3 className="">Accounts: Dhaka Accounts</h3>
                    <h4 className="">Date: Sunday, Apr 28</h4>
                </div>
                <div className=" bg-white flex justify-end items-center px-6 py-4 rounded-xl">
                    <ul className=" flex gap-4  items-center text-[#0CF25D] font-bold" >
                        <li>Apply to Edit</li>
                        <li>Find Sheet </li>
                        <li className=" bg-[#0CF25D] text-white rounded-full p-1 px-2">Glance sheet</li>
                    </ul>
                </div>
                <form className="card-body space-y-3 px-[32%] mt-32">
                    <div className="form-control">
                        <input type="email" placeholder="username" className="bg-white rounded-full py-4 px-6 outline-0 border-0" required />
                    </div>
                    <div className="form-control">
                         <input type="password" placeholder="password" className="bg-white rounded-full py-4 px-6 outline-0 border-0" required />
                    </div>
                    <div className=" mx-auto">
                         <button className=" bg-[#0CF25D]  font-semibold text-white px-16 py-3 rounded-full">Log in</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Accound;