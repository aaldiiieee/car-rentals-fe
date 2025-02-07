import { IContentSectionProps } from "@/types/container";

const ContentSection = ({
  title,
  description,
  imageUrl,
  children,
  className,
}: IContentSectionProps) => {
  return (
    <div
      className={`flex justify-between lg:flex-row flex-col items-center gap-4 py-16 ${className}`}
    >
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className="flex flex-col justify-between max-w-[468px]">
        <h3 className="text-[24px] font-semibold">{title}</h3>
        <p className="mt-4 font-light text-sm">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
