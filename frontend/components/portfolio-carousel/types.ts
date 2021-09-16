export interface Item {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Props {
  items?: Item[];
}
