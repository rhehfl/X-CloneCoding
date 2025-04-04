import PhotoModalCloseButton from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import CommentForm from '@/app/(afterLogin)/_component/CommentForm';
import Post from '@/app/(afterLogin)/_component/Post';
import ScrollRock from '@/app/_component/ScrollRock';
import { faker } from '@faker-js/faker';

export default function PageModal() {
  const image = { imageId: 1, link: faker.image.urlLoremFlickr() };
  return (
    <>
      <ScrollRock />
      <div className="fixed z-20 h-full w-full overflow-hidden bg-[rgba(0,0,0,.95)]">
        <PhotoModalCloseButton />
        <div className="flex h-full w-full">
          <div className="flex flex-1 flex-col">
            <div
              className="flex-1 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.link})` }}
            ></div>
            <div className="flex items-center justify-center">
              <div className="h-[60px] w-[600px]">
                <ActionButtons white />
              </div>
            </div>
          </div>

          <div className="flex w-[350px] flex-col overflow-auto bg-white">
            <Post noImage></Post>
            <CommentForm />
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </div>
        </div>
      </div>
    </>
  );
}
