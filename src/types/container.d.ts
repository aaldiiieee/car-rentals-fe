export interface IHeroSection {
  withContent?: boolean;
  form?: "filter" | "register";
}

export interface IHeroContentProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface IContentSectionProps {
  title: string;
  description: string;
  maxWidth: string;
  flexDirection?: "row" | "column";
  textCenter?: "desktop" | "mobile" | "all";
  className?: string
  imageUrl?: string;
  children?: React.ReactNode
}