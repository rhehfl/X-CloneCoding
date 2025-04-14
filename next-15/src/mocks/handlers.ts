import { Trend } from '@/app/model/Trend';
import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: 'elonmusk', nickname: 'Elone', image: '/elone.jpg' },
  { id: 'zerocho0', nickname: '제로초', image: '/5Udwvqim.jpg' },
];
export const handlers = [
  http.post(`${baseUrl}/api/login`, () => {
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
  }),
  http.post(`${baseUrl}/api/logout`, () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  http.post(`${baseUrl}/api/users`, async ({}) => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
  }),
  http.get(`${baseUrl}/api/postRecommends`, ({}) => {
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `${1} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        user: User[0],
        content: `${2} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        user: User[0],
        content: `${3} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        user: User[0],
        content: `${4} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        user: User[0],
        content: `${5} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get(`${baseUrl}/api/posts/:id`, ({ params }) => {
    const { id } = params;

    return HttpResponse.json(
      [
        {
          postId: 1,
          user: User[0],
          content: `${1} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          user: User[0],
          content: `${2} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          user: User[0],
          content: `${3} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          user: User[0],
          content: `${4} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          user: User[0],
          content: `${5} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ].find((value) => value.postId === Number(id))
    );
  }),
  http.get(`${baseUrl}/api/posts/:id/comments`, ({ params }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id } = params;
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `${1} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        user: User[0],
        content: `${2} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        user: User[0],
        content: `${3} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        user: User[0],
        content: `${4} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        user: User[0],
        content: `${5} Z.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get(`${baseUrl}/api/search/:query`, ({ request, params }) => {
    const { query } = params;
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `${query} Z.com is so marvelous. followData`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        user: User[0],
        content: `${2} Z.com is so marvelous. followData`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        user: User[0],
        content: `${3} Z.com is so marvelous. followData`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        user: User[0],
        content: `${4} Z.com is so marvelous. followData`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        user: User[0],
        content: `${5} Z.com is so marvelous. followData`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get(`${baseUrl}/api/followingPosts`, ({}) => {
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `${1} Z.com is so marvelous. followData`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        user: User[0],
        content: `${2} Z.com is so marvelous. followData`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        user: User[0],
        content: `${3} Z.com is so marvelous. followData`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        user: User[0],
        content: `${4} Z.com is so marvelous. followData`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        user: User[0],
        content: `${5} Z.com is so marvelous. followData`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get(`${baseUrl}/api/followRecommends`, ({}) => {
    return HttpResponse.json(User);
  }),
  http.get(`${baseUrl}/api/trends`, ({}) => {
    return HttpResponse.json<Trend[]>([
      { id: 1, title: '제로초', count: 1264 },
      { id: 2, title: '원초', count: 1264 },
      { id: 3, title: '투초', count: 1264 },
      { id: 4, title: '쓰리초', count: 1264 },
      { id: 5, title: '포초', count: 1264 },
      { id: 6, title: '파이브초', count: 1264 },
      { id: 7, title: '식스초', count: 1264 },
      { id: 8, title: '세븐초', count: 1264 },
      { id: 9, title: '나인초', count: 1264 },
    ]);
  }),
  http.get(`${baseUrl}/api/users/:userId`, ({ params }) => {
    const { userId } = params;
    const user = User.find((user) => user.id === userId);
    if (user) return HttpResponse.json(user);
    return HttpResponse.json({ message: 'not found' }, { status: 404 });
  }),
  http.get(`${baseUrl}/api/users/:userId/posts`, ({}) => {
    return HttpResponse.json([
      {
        postId: 1,
        user: User[0],
        content: `${1} Z.com is so marvelous. 내꺼데이터에요`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        user: User[0],
        content: `${2} Z.com is so marvelous. 내꺼데이터에요`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        user: User[0],
        content: `${3} Z.com is so marvelous. 내꺼데이터에요`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        user: User[0],
        content: `${4} Z.com is so marvelous. 내꺼데이터에요`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        user: User[0],
        content: `${5} Z.com is so marvelous. 내꺼데이터에요`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
];
