export interface Props {
  id?: string;
  title: string;
  subtitle: string;
  items: Service[];
}

export interface PropsServicesList {
  items?: Service[];
}

export interface PropsServiceItem {
  title: string | null;
  description: string | null;
  icon?: Icon | null;
}

export interface Service {
  id: string | null;
  title: string | null;
  description: string | null;
  media?: Icon[] | null;
}

interface Icon {
  id: string;
  name: string;
  alternativeText: string;
  url: string;
}
