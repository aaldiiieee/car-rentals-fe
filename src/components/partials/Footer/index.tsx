import FooterItem from "./FooterItem";
import { LINKS } from "@/constants/landingPage";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto md:py-16 text-sm pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <FooterItem links={LINKS} />
          <div>
            <p className="mb-2">Connect with us</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/binaracademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1707461378/car-rentals/icons/kinmbtt2rimeygxun7rb.png" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/academybinar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1707461357/car-rentals/icons/kkzufl2lhdj8fsbwndmt.png" alt="Instagram" />
              </a>
              <a
                href="https://twitter.com/academybinar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1707461328/car-rentals/icons/oktghdz4p7xtbtceplbg.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1707461315/car-rentals/icons/qmxw43ek1zadfauzujaf.png" alt="Mail" />
              </a>
            </div>
          </div>
          <div>
            <p>Copyright Binar 2022</p>
            {/* <img src="./assets/Rectangle-74.png" alt="Logo" className="mt-2" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
