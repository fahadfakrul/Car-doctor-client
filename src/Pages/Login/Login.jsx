import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        console.log(event.target.email.value)
        console.log(event.target.password.value)
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" lg:w-1/2 mr-16">
          
         <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm border  bg-base-100">
          <div className="card-body">
          <h1 className="text-4xl font-semibold font-bold text-[#444] text-center">Login</h1>
           <form onSubmit={handleLogin}>
           <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover font-semibold">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-[#FF3811] text-white text-xl font-semibold" type="submit" value="Login" />
            </div>
           </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
