import { IHeroSection } from "@/types/container";
import HeroContent from "./HeroContent";
import HeroForm from "./HeroForm";

const HeroSection = ({ withContent, withSearch }: IHeroSection) => {
  return (
    <section
      className={`${
        withContent
          ? "lg:min-h-[500px] md:min-h-[700px] min-h-[586px]"
          : "min-h-[120px]"
      } relative flex lg:items-center`}
    >
      <div className="container">
        {withContent && (
          <HeroContent
            title="Sewa & Rental Mobil Terbaik di kawasan Tangerang"
            description="Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam."
            buttonText="Mulai Sewa Mobil"
            buttonLink="/daftar-mobil"
          />
        )}

        {withSearch && (
          <HeroForm />
        )}
      </div>
    </section>
  );
};
export default HeroSection;
