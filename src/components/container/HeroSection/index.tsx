/**
 * TODO:
 * - Buat HeroForm component agar bisa menggunakan banyak form input (bukan hanya filter)
 * - Buat kondisi jika user login, maka title dari HeroContent menjadi "Selamat Datang, {Nama User!}"
 * - Buat kondisi agar button hilang selain di halaman landing page
 */


import { IHeroSection } from "@/types/container";
import HeroContent from "./HeroContent";
import HeroForm from "./HeroForm";

const HeroSection = ({ withContent, form }: IHeroSection) => {
  return (
    <section
      className={`${
        withContent
          ? "lg:min-h-[500px] md:min-h-[700px] min-h-[586px]"
          : "min-h-[120px]"
      } ${form === "register" ? "md:mb-0 mb-64" : ""} relative flex lg:items-center`}
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

        {form === "filter" && <HeroForm form="filter" />}
        {form === "register" && <HeroForm form="register" />}
      </div>
    </section>
  );
};
export default HeroSection;
