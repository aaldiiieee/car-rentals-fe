import { IContentSectionProps } from "@/types/container";

const ContentSection = ({
  title,
  description,
  imageUrl,
  children,
  className,
  maxWidth,
  textCenter,
  flexDirection,
}: IContentSectionProps) => {
  return (
    <div
      className={`flex justify-between lg:flex-row flex-col items-center gap-4 ${className}`}
    >
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div
        className={`flex justify-between w-full ${
          flexDirection === "row" && "lg:flex-row"
        }
          ${
            flexDirection === "column" && "flex-col"
          } flex-col gap-4`}
        style={{ maxWidth: maxWidth }}
      >
        <div className="flex flex-col">
          <h3
            className={`text-[24px] font-semibold ${
              textCenter === "desktop" && "md:text-center"
            } ${textCenter === "mobile" && "md:text-left text-center"} ${
              textCenter === "all" && "text-center"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-4 font-light text-sm ${
              textCenter === "desktop" && "md:text-center"
            } ${textCenter === "mobile" && "md:text-left text-center"} ${
              textCenter === "all" && "text-center"
            }`}
          >
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
