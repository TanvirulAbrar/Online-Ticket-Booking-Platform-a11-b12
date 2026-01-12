import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-6xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
          {/* Left Side - Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-white">confirmation_number</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">TicketZone</h1>
              </div>
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in to your account.</p>
            </div>
            <LoginForm />
            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account? 
              <a className="text-blue-600 font-semibold hover:underline ml-1" href="/register">Sign Up</a>
            </p>
          </div>

          {/* Right Side - Abstract Background */}
          <div className="hidden md:flex w-1/2 abstract-bg items-center justify-center p-12 relative overflow-hidden">
            <div className="wave absolute bottom-0 left-0 w-full h-full opacity-60"></div>
            <div className="relative z-10 text-white text-center">
              <h3 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h3>
              <p className="text-blue-100 text-lg max-w-sm mx-auto">Book bus, train, launch & flight tickets easily with TicketZone.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .abstract-bg {
          background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #1d4ed8 100%);
          position: relative;
          overflow: hidden;
        }
        .abstract-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://www.transparenttextures.com/patterns/cubes.png');
          opacity: 0.1;
        }
        .wave {
          background: url('https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/auth-decoration.png') no-repeat center bottom;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Login;
