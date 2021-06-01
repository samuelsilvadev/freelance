export interface Props {
  id?: string;
  title: string;
  subtitle: string;
  content: string;
  alternativeText: string;
  skills?: Skill[];
}

export interface Skill {
  id: number;
  label: string | null;
  value: string | null;
}
