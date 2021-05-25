export interface Hero {
  id: number;
  title: string;
  professional_name: string;
  profession_details: string;
  description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  // TODO: expand type
  profile_image: null;
  profile_alternative_text: string;
}

export interface About {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image_alternative_text: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  Skill: Skill[];
  // TODO: expand type
  image: null;
}

interface Skill {
  id: number;
  label: string;
  value: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  Item: ServiceItem[];
  published_at: string;
}

export interface ServiceItem {
  id: string;
  title: string | null;
  description: string | null;
  icon?: Icon[];
}

interface Icon {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: 0;
  height: 0;
  formats: unknown;
  hash: string;
  ext: string;
  mime: string;
  size: 0;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: unknown;
  related: string;
  created_by: string;
  updated_by: string;
}
