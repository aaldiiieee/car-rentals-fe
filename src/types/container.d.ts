export interface IHeroSection {
  withContent?: boolean;
  withSearch?: boolean;
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
  textCenter?: "desktop" | "mobile" | "all";
  className?: string
  imageUrl?: string;
  children?: React.ReactNode
}