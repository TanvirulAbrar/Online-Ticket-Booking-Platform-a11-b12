import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <main className="min-h-screen flex items-center justify-center p-4 md:p-0">
        <div className="max-w-6xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
          {/* Left Side - Abstract Background */}
          <div className="hidden md:flex md:w-1/2 abstract-bg items-center justify-center p-12 relative overflow-hidden">
            <div className="relative z-10 text-white text-center">
              <h1 className="text-3xl font-bold mb-4">Start Your Journey</h1>
              <p className="text-blue-100 text-lg max-w-sm mx-auto">
                Discover the best deals on flights, hotels, and holiday packages
                all in one place.
              </p>
            </div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="wave-overlay absolute bottom-0 left-0 w-full h-1/2"></div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2">Create Account</h2>
              <p className="text-slate-500 dark:text-slate-400">
                Join our travel community today.
              </p>
            </div>
            <RegisterForm />
            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Have an account?
              <a
                className="text-blue-600 font-semibold hover:underline ml-1"
                href="/login"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .abstract-bg {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          position: relative;
          overflow: hidden;
        }
        .abstract-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("https://www.transparenttextures.com/patterns/cubes.png");
          opacity: 0.1;
        }
        .wave-overlay {
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 100%
          );
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="black" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,181.3C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
          mask-size: cover;
          mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default Register;
