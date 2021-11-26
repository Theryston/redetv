export interface ShowModel {
  _id: string;
  name: string;
  posters: string[],
  description: string;
  short_description: string;
  trailers: string[];
  release_date_of: Date | number;
  default_duration: string;
  show_hosts_name: string[];
  categories: CategoryModel[];
  seasons: SeasonModel[];
  created_at?: Date | number;
  last_episode_date?: Date;
}

export interface CategoryModel {
  name: string;
  _id?: string;
  created_at?: Date;
  shows_id?: string[];
}

export interface SeasonModel {
  _id?: string;
  created_at?: Date;
  number: number;
  name: string | null;
  episodes: EpisodeModel[];
}

export interface EpisodeModel {
  _id?: string;
  name: string;
  views_count: number;
  like_count: number;
  sources: SourceModel[];
  mainSource?: SourceModel;
  number: number;
  created_at?: Date;
}

export interface SourceModel {
  url: string;
  poster: string;
  main: boolean;
  _id?: string;
  show_name?: string;
  views_count: number;
  like_count: number;
}

export interface LogoModel {
  url: string;
  link?: string;
  company_name: string;
  active: boolean;
}