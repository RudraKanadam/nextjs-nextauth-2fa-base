import GlobalNavbar from "@/components/global/GlobalNavbar";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full items-center justify-center">
      <GlobalNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
