'use server';
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

export const onSubmit = async (
  prevState: { message: string },
  formData: FormData
) => {
  let shouldRedirect = false;
  if (!formData.get('id')) {
    return { message: 'no_id' };
  }
  if (!formData.get('password')) {
    return { message: 'no_password' };
  }
  if (!formData.get('nickname')) {
    return { message: 'no_nickname' };
  }
  if (!formData.get('profile')) {
    return { message: 'no_image' };
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        credentials: 'include',
      }
    );
    if (response.status === 403) {
      return { message: 'user_exists' };
    }
    shouldRedirect = true;
    await signIn('credentials', {
      username: formData.get('id'),
      password: formData.get('password'),
      redirect: false,
    });
  } catch (err) {
    console.error(err);
  }
  if (shouldRedirect) {
    redirect('/home');
  }
  return { message: '' };
};
