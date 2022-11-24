export type FeedStateData = null | FeedInterface;

export interface FeedState {
  data: FeedInterface;
  isLoading: boolean;
  error: boolean;
}

export interface FeedInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}

export interface AuthorInterface {
  image: string;
  username: string;
  following: boolean;
  bio: null | string;
}

export interface ArticleInterface {
  slug: string;
  title: string;
  body: string;
  description: string;
  favoritesCount: number;
  favorited: boolean;
  tagList: string[];
  author: AuthorInterface;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface FeedResponse {
  data: FeedInterface
}
