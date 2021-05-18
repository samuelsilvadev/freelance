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
