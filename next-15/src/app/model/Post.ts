import { PostImage } from '@/app/model/PostImage';
import { User } from './User';
export interface Post {
  user: User;
  postId: number;
  content: string;
  createdAt: Date;
  Images: PostImage[];
}
