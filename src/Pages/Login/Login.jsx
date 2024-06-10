
const Login = () => {
    return (
        <div className=" w-full bg-[#E0E0E0] h-screen py-[5%] ">
            <div className="  w-8/12 mx-auto bg-white py-[6%] px-[21%] rounded-3xl">
                <h3 className="font-bold text-4xl text-center mb-[10%]">Jonaki service line Pvt. ltd.</h3>
                <h4 className=" font-bold text-4xl text-center">Log In</h4>
                <form className="card-body space-y-3">
                    <div className="form-control">
                        <input type="email" placeholder="username" className="bg-[#E0E0E0] rounded-full py-4 px-6 outline-0 border-0" required />
                    </div>
                    <div className="form-control">
                         <input type="password" placeholder="password" className="  bg-[#E0E0E0] rounded-full py-4 px-6 outline-0 border-0" required />
                    </div>
                    <div className=" mx-auto">
                         <button className=" bg-[#0CF25D]  font-semibold text-white px-16 py-3 rounded-full">Log in</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;