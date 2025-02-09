import React from "react";
import { INavItem } from "@/types/ui";
import { NavLink, useNavigate, useLocation } from "react-router";
import { Button } from "@/components/ui/button";

const NavItem = ({
  links,
  withButton,
}: {
  links: INavItem[];
  withButton?: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="flex font-light md:items-center flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
      {location.pathname === "/" && (
        <React.Fragment>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.linkTo}
                className="block py-2 text-black rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                {link.linkText}
              </NavLink>
            </li>
          ))}
        </React.Fragment>
      )}
      
      {withButton && (
        <Button
          variant="default"
          size={"lg"}
          onClick={() => navigate("/login")}
        >
          Masuk
        </Button>
      )}
    </ul>
  );
};

export default NavItem;
