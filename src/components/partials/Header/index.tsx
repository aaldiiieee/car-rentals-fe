import { NavLink } from 'react-router';
import NavItem from './NavItem';
import { LINKS } from '@/constants/landingPage';
import AvatarDropdown from '@/components/ui/avatar';
import { useSession } from '@/context/AuthContext';
import { IAuthContext } from '@/types/context';

const Header = () => {
  const { user } = useSession() as IAuthContext;

  return (
    <header className="bg-transparent border-gray-200 dark:bg-gray-900">
      <nav className="container">
        <div className="flex flex-wrap items-center justify-between py-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              CarLoka
            </span>
          </NavLink>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <NavItem links={LINKS} withButton />
          </div>

          {user && (
            <div className="md:hidden">
              <AvatarDropdown user={user} signOut={() => {}} />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
