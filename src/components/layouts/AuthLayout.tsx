import { useLocation, Link } from "react-router";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="container">
        <div
          className={`flex items-center flex-col justify-center min-h-screen mx-auto ${
            location.pathname === "/auth/login"
              ? "max-w-[370px]"
              : "max-w-[570px]"
          }`}
        >
          <Link to="/" className="text-4xl font-bold text-left w-full mb-5">
            <img
              src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1739883836/car-rentals/zglbsxujv98cpwhawt8a.png"
              alt="Logo Brand"
              width={100}
              style={{ filter: "invert(1)" }}
            />
          </Link>
          {location.pathname === "/auth/login" ? (
            <h1 className="text-2xl font-bold text-left w-full my-5">
              Welcome Back!
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-left w-full my-5">
              Sign Up
            </h1>
          )}
          {children}
          {location.pathname === "/auth/login" ? (
            <p className="text-sm text-left mt-5">
              Don&apos;t have an account?{" "}
              <a href="/auth/register" className="text-[#0D28A6]">
                Sign Up
              </a>
            </p>
          ) : (
            <p className="text-sm text-left mt-5">
              Already have an account?{" "}
              <a href="/auth/login" className="text-[#0D28A6] ">
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="bg-auth-background bg-no-repeat"></div>
    </div>
  );
};

export default AuthLayout;
