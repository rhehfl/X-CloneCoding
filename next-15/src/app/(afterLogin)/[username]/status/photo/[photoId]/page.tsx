import Home from '@/app/(afterLogin)/home/page';

interface PhotoDetailProps {
  params: { username: string; id: string; photoId: string };
}
export default async function PhotoDetail({ params }: PhotoDetailProps) {
  const { username, id, photoId } = await params;
  console.log(username, id, photoId);
  return <Home></Home>;
}
