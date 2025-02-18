import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router";
import { IHeroContentProps } from "@/types/container";

const HeroContent = ({
  title,
  description,
  buttonText,
  buttonLink,
}: IHeroContentProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-between items-center">
      <div className="max-w-[500px] md:pt-0 pt-3">
        <h1 className="text-[36px] font-semibold">{title}</h1>
        <p className="mt-4 font-light text-sm">{description}</p>
        {location.pathname === "/" && (
          <Button
            variant="default"
            size={"lg"}
            className="mt-5"
            onClick={() => navigate(buttonLink)}
          >
            {buttonText}
          </Button>
        )}
      </div>
      <img
        src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1704051385/car-rentals/wdy8lg8uvqk6pofnt1lv.png"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default HeroContent;
