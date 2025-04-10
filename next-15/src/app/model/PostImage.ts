import { Post } from '@/app/model/Post';

export interface PostImage {
  imageId: number;
  link: string;
  post?: Post;
}
