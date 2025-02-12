const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="container">
        <div className="flex items-center justify-center min-h-screen">
          {children}
        </div>
      </div>
      <div className="bg-[#0D28A6]"></div>
    </div>
  );
};

export default AuthLayout;
