import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { IHeroSection } from "@/types/container";

const HeroSection = ({ withContent, withSearch }: IHeroSection) => {
  const navigate = useNavigate();

  return (
    <section
      className={`${
        withContent ? "lg:min-h-[500px] md:min-h-[700px] min-h-[586px]" : "min-h-[266px]"
      } relative flex lg:items-center`}
    >
      <div className="container">
        {withContent && (
          <div className="flex justify-between items-center">
            <div className="max-w-[500px]">
              <h1 className="text-[36px] font-semibold">
                Sewa & Rental Mobil Terbaik di kawasan Tangerang
              </h1>
              <p className="mt-4 font-light text-sm">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Button
                variant="default"
                size={"lg"}
                className="mt-5 "
                onClick={() => navigate("/cars")}
              >
                Mulai Sewa Mobil
              </Button>
            </div>
            <img
              src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1704051385/car-rentals/wdy8lg8uvqk6pofnt1lv.png"
              className="absolute right-0 bottom-0"
            />
          </div>
        )}

        {withSearch && (
          <div className="flex justify-between items-center mt-10">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Cari Mobil"
                className="bg-transparent border-b border-gray-400 outline-none"
              />
            </div>
            <Button
              variant="default"
              size={"lg"}
              className="mt-5 "
              onClick={() => navigate("/cars")}
            >
              Cari Mobil
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default HeroSection;
