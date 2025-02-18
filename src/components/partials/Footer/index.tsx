import FooterItem from "./FooterItem";
import { LINKS, SOCIALS } from "@/constants/landingPage";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto md:py-16 text-sm pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p>Tangerang, Banten Indonesia</p>
            <p>prmdy02@gmail.com</p>
            <Link
              to={
                "https://www.linkedin.com/in/pramudya-reynaldi-salim-88a8b8237/"
              }
              target="_blank"
              className="underline"
            >
              linkedin.com/in/pramudya-reynaldi-salim
            </Link>
          </div>
          <FooterItem links={LINKS} />
          <div>
            <p className="mb-2">Connect with us</p>
            <div className="flex space-x-4 mt-5">
              {SOCIALS.map((social, index) => (
                <a
                  href={social.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.image_url}
                    alt="Social Icon"
                  />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p>Copyright Binar 2022</p>
            <img
              src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1739883836/car-rentals/zglbsxujv98cpwhawt8a.png"
              alt="Logo Brand"
              width={100}
              style={{ filter: "invert(1)" }}
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
