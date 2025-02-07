import { IListingProps } from "@/types/ui";

const Listing = ({ items }: { items: IListingProps[] }) => {
  return (
    <ul className="flex flex-col gap-5 mt-5">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {item.withIcon && (
            <img
              src="https://res.cloudinary.com/dtl1iioj5/image/upload/v1704106669/car-rentals/icons/huuvwrlflyi8aonkbzro.png"
              className="mr-2"
            />
          )}
          <p className="text-sm font-light">{item.listText}</p>
        </li>
      ))}
    </ul>
  );
};

export default Listing;
