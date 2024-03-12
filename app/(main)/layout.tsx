import { NavbarMenu } from "@/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <nav className="flex items-center justify-between px-8 py-4 shadow-lg absolute w-screen top-0 left-0 z-50 bg-zinc-600/20">
        LOGO
        <NavbarMenu />
      </nav>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
