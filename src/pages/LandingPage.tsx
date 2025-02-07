import MainLayout from "@/components/layouts/MainLayout";
import ContentSection from "@/components/container/ContentSection";
import Listing from "@/components/ui/listing";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const items = [
  {
    listText: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    withIcon: true,
  },
  {
    listText: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    withIcon: true,
  },
  {
    listText: "Sewa Mobil Jangka Panjang Bulanan",
    withIcon: true,
  },
  {
    listText: "Gratis Antar - Jemput Mobil di Bandara",
    withIcon: true,
  },
];

const LandingPage = () => {
  return (
    <MainLayout>
      <ContentSection
        title="Best Car Rental for any kind of trip in Tangerang!"
        description="Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll."
        imageUrl="https://res.cloudinary.com/dtl1iioj5/image/upload/v1704051056/car-rentals/jfam5cvgszzyveqgebvu.png"
        className="m-auto lg:max-w-[1027px]"
      >
        <Listing items={items} />
      </ContentSection>
      <ContentSection
        title="Why Us"
        description="Mengapa harus pilih Binar Car Rental?"
      >
        <Card>
          <CardHeader>
            <CardTitle>
              <img src="" alt="" />
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </ContentSection>
    </MainLayout>
  );
};

export default LandingPage;
