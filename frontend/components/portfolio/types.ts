export interface Props {
  id?: string;
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}

export interface PortfolioItem {
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
