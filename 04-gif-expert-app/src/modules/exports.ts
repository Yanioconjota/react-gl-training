export type Gif = {
  id: string;
  title: string;
  url: string;
}

export type GiphyResponse = { 
  id: string;
  title: string;
  images: { downsized_large: { url: string; };
  };
}

export interface IGifItem {
  title: string;
  url: string;
}

export interface IGifGrid {
  category: string
}

export interface IAddCategory {
  setCategories: Function;
}

export interface IGifState {
  data: Gif[];
  loading: boolean;
  limit: number;
  offset: number;
}