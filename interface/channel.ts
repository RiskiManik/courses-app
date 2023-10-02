interface Url {
  url: string;
}

interface ImageProps {
  default: Url;
  medium: Url;
  high: Url;
}

export interface CardProps {
  title: string;
  customUrl: string;
  thumbnails: ImageProps;
}
