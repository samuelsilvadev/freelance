export interface Props {
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
}

export interface Service {
  id: number | null;
  title: string | null;
  description: string | null;
  icon: null;
}
