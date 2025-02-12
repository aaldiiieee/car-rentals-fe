import { useState } from "react";
import { LogOut, User } from "lucide-react";

interface AvatarDropdownProps {
  user: {
    mu_image_url: string;
    mu_full_name: string;
  };
  signOut: () => void;
}

const AvatarDropdown = ({ user, signOut }: AvatarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 p-2 rounded-full"
        onClick={toggleDropdown}
      >
        <img
          src={user?.mu_image_url || "https://res.cloudinary.com/dtl1iioj5/image/upload/v1739092965/car-rentals/icons/ldriavifewmhs4govhcl.png"}
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="hidden md:block text-sm font-medium">
          {user?.mu_full_name || "Guest"}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
          onClick={closeDropdown}
        >
          <button
            onClick={() => console.log("Navigating to Profile")}
            className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="w-4 h-4" />
            Profil
          </button>
          <button
            onClick={signOut}
            className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
