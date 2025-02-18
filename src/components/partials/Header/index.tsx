import { NavLink } from "react-router";
import NavItem from "./NavItem";
import { LINKS } from "@/constants/landingPage";
import AvatarDropdown from "@/components/ui/avatar";
import { useSession } from "@/context/AuthContext";
import { IAuthContext } from "@/types/context";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const { user, signOut } = useSession() as IAuthContext;
  const navigate = useNavigate();

  return (
    <header className="bg-transparent border-gray-200 dark:bg-gray-900">
      <nav className="container">
        <div className="flex flex-wrap items-center justify-between py-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1739883836/car-rentals/zglbsxujv98cpwhawt8a.png"
              alt="Logo Brand"
              width={100}
              style={{ filter: "invert(1)" }}
            />
          </NavLink>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <NavItem links={LINKS} withButton />
          </div>

          {user ? (
            <div className="md:hidden">
              <AvatarDropdown user={user} signOut={signOut} />
            </div>
          ) : (
            <div className="md:hidden">
              <Button variant="default" onClick={() => navigate("/auth/login")}>
                Masuk
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
