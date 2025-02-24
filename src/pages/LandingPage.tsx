import MainLayout from "@/components/layouts/MainLayout";
import ContentSection from "@/components/container/ContentSection";
import Listing from "@/components/ui/listing";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IWhyUs, ITestimonials } from "@/types/res";
import { useWhyUs } from "@/hooks/useWhyUs";
import { useTestimonials } from "@/hooks/useTestimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RatingShow from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const { data: testimonials } = useTestimonials();

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
          flexDirection="column"
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
        flexDirection="column"
      >
        <Carousel opts={{ loop: true }} className="mt-[25px]">
          <CarouselContent>
            {testimonials?.map((item: ITestimonials) => (
              item.mt_show_comment && (

                <CarouselItem
                  key={item.mt_id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-[#F1F3FF] border-0 min-h-[150px]">
                    <CardHeader className="md:flex-row gap-3 items-center">
                      <img
                        src={
                          item.user.mu_image_url ||
                          "https://res.cloudinary.com/dtl1iioj5/image/upload/v1739092965/car-rentals/icons/ldriavifewmhs4govhcl.png"
                        }
                        alt={item.user.mu_full_name}
                        className="w-[60px]"
                      />
                      <div className="w-full">
                        <RatingShow value={item.mt_rating} />
                        <CardTitle className="py-2">
                          {item.user.mu_full_name}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {item.mt_comment}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              )
            ))}
          </CarouselContent>
          {testimonials?.length > 3 && (
            <>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </>
          )}
        </Carousel>
      </ContentSection>

      <ContentSection
        title="Sewa Mobil di Tangerang Sekarang"
        description="Nikmati layanan sewa mobil di Tangerang dengan harga terbaik dan proses yang cepat. Pilih mobil sesuai kebutuhan Anda dan mulai perjalanan tanpa ribet!"
        maxWidth="100%"
        className="bg-[#0D28A6] p-10 rounded-md text-white"
        textCenter="all"
        flexDirection="column"
      >
        <Button variant="default" className="max-w-[140px] m-auto mt-10">
          Mulai Sewa Mobil
        </Button>
      </ContentSection>

      <ContentSection
        title="Frequently Asked Question"
        maxWidth="100%"
        description="Temukan jawaban atas pertanyaan umum seputar layanan kami."
        className="py-16"
        flexDirection="row"
      >
        <div className="flex flex-col gap-3 md:mt-5 w-full md:max-w-[668px]">
          <Accordion type="multiple">
            <AccordionItem
              value="item-1"
              className="border border-gray-300 px-3 rounded-md mb-3"
            >
              <AccordionTrigger>
                Apa saja syarat yang dibutuhkan?
              </AccordionTrigger>
              <AccordionContent>
                Syarat yang dibutuhkan meliputi KTP asli, SIM yang masih
                berlaku, serta dokumen tambahan jika diperlukan, seperti KK atau
                paspor untuk validasi identitas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border border-gray-300 px-3 rounded-md mb-3"
            >
              <AccordionTrigger>
                Berapa hari minimal sewa mobil lepas kunci?
              </AccordionTrigger>
              <AccordionContent>
                Minimal durasi sewa mobil lepas kunci adalah 1 hari (24 jam),
                dengan jam pengambilan dan pengembalian fleksibel sesuai
                kesepakatan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border border-gray-300 px-3 rounded-md mb-3"
            >
              <AccordionTrigger>
                Berapa hari sebelumnya sebaiknya booking sewa mobil?
              </AccordionTrigger>
              <AccordionContent>
                Disarankan untuk melakukan booking setidaknya 2-3 hari sebelum
                tanggal penggunaan, terutama pada musim liburan untuk memastikan
                ketersediaan mobil.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border border-gray-300 px-3 rounded-md mb-3"
            >
              <AccordionTrigger>
                Apakah Ada biaya antar-jemput?
              </AccordionTrigger>
              <AccordionContent>
                Ya, biaya antar-jemput akan dikenakan sesuai dengan jarak lokasi
                pengantaran dan pengambilan dari kantor penyedia layanan kami.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border border-gray-300 px-3 rounded-md"
            >
              <AccordionTrigger>
                Bagaimana jika terjadi kecelakaan?
              </AccordionTrigger>
              <AccordionContent>
                Jika terjadi kecelakaan, segera hubungi pihak kami untuk
                melaporkan kejadian. Biaya kerusakan akan disesuaikan dengan
                ketentuan dalam perjanjian sewa, serta asuransi yang berlaku
                jika telah disertakan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default LandingPage;
