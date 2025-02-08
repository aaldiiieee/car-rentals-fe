import MainLayout from "@/components/layouts/MainLayout";
import ContentSection from "@/components/container/ContentSection";
import Listing from "@/components/ui/listing";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IWhyUs } from "@/types/res";
import { useWhyUs } from "@/hooks/useWhyUs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const { data: whyUs } = useWhyUs();

  return (
    <MainLayout>
      <ContentSection
        title="Best Car Rental for any kind of trip in Tangerang!"
        description="Sewa mobil di Tangerang bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll."
        imageUrl="https://res.cloudinary.com/dtl1iioj5/image/upload/v1704051056/car-rentals/jfam5cvgszzyveqgebvu.png"
        className="m-auto lg:max-w-[1027px] py-16"
        maxWidth="468px"
      >
        <Listing items={items} />
      </ContentSection>

      {whyUs?.length > 0 && (
        <ContentSection
          title="Why Us"
          description="Mengapa harus pilih Binar Car Rental?"
          maxWidth="100%"
          textCenter="mobile"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-[25px]">
            {whyUs?.map((item: IWhyUs) => (
              <Card key={item.mwu_id}>
                <CardHeader>
                  <img
                    src={item.mwu_icon_url}
                    alt={item.mwu_title}
                    className="w-[32px]"
                  />
                  <CardTitle className="py-2">{item.mwu_title}</CardTitle>
                  <CardDescription>{item.mwu_description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ContentSection>
      )}

      <ContentSection
        title="Testimonial"
        description="Berbagai review positif dari para pelanggan kami"
        maxWidth="100%"
        className="py-16"
        textCenter="all"
      >
        <Carousel opts={{ loop: true }} className="mt-[25px]">
          <CarouselContent>
            {whyUs?.map((item: IWhyUs) => (
              <CarouselItem
                key={item.mwu_id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card>
                  <CardHeader>
                    <img
                      src={item.mwu_icon_url}
                      alt={item.mwu_title}
                      className="w-[32px]"
                    />
                    <CardTitle className="py-2">{item.mwu_title}</CardTitle>
                    <CardDescription>{item.mwu_description}</CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </ContentSection>
    </MainLayout>
  );
};

export default LandingPage;
