import { INavItem } from "@/types/ui";
import { NavLink } from "react-router";

const FooterItem = ({ links }: { links: INavItem[] }) => {
  return (
    <ul className="flex font-light flex-col">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.linkTo}
            className="block text-black hover:underline md:p-0"
            aria-current="page"
          >
            {link.linkText}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
