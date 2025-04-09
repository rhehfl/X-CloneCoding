'use client';

import BackButton from '@/app/(afterLogin)/_component/BackButton';
import { onSubmit } from '@/app/(beforeLogin)/_lib/signup';
import Form from 'next/form';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const showMessage = (message: string) => {
  if (message == 'no_id') {
    return '아이디가 없습니다.';
  }
  if (message == 'no_password') {
    return '비밀번호호가 없습니다.';
  }
  if (message == 'no_nickname') {
    return '닉네임이이가 없습니다.';
  }
  if (message == 'no_image') {
    return '이미지가 없습니다.';
  }
  return '';
};

export default function SignupModal() {
  const [state, formAction] = useActionState(onSubmit, { message: '' });
  const { pending } = useFormStatus();
  return (
    <div className="] absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="max-w-[ 80vw] relative top-[-5%] flex h-[550px] min-w-[600px] flex-col rounded-[16px] bg-white">
        <div className="flex h-[48px] w-full items-center px-[16px]">
          <BackButton />
        </div>
        <div className="flex h-full flex-col px-[80px]">
          <div className="flex h-[76px] items-center">
            <span className="text-[31px] font-bold">계정을 생성하세요</span>
          </div>
          <Form
            className="flex h-full flex-col justify-between"
            action={formAction}
          >
            <div>
              <div className="py-[12px]">
                <div className="relative flex h-[56px] flex-col">
                  <input
                    type="text"
                    name="id"
                    className="peer w-full rounded-[4px] border border-[rgb(207,217,222)] px-[8px] pt-[20px] pb-[8px] text-[17px] transition outline-none focus:border-[rgb(29,155,240)]"
                    placeholder=" "
                    required
                  />
                  <label className="pointer-events-none absolute top-1/2 left-[8px] origin-left translate-y-[-50%] transform text-[16px] text-[rgb(83,100,113)] transition-all duration-200 ease-out peer-focus:translate-y-[-90%] peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)]">
                    아이디
                  </label>
                </div>
              </div>
              <div className="py-[12px]">
                <div className="relative flex h-[56px] flex-col">
                  <input
                    type="text"
                    className="peer w-full rounded-[4px] border border-[rgb(207,217,222)] px-[8px] pt-[20px] pb-[8px] text-[17px] transition outline-none focus:border-[rgb(29,155,240)]"
                    placeholder=" "
                    name="nickname"
                    required
                  />
                  <label className="pointer-events-none absolute top-1/2 left-[8px] origin-left translate-y-[-50%] transform text-[16px] text-[rgb(83,100,113)] transition-all duration-200 ease-out peer-focus:translate-y-[-90%] peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)]">
                    닉네임
                  </label>
                </div>
              </div>
              <div className="py-[12px]">
                <div className="relative flex h-[56px] flex-col">
                  <input
                    type="password"
                    name="password"
                    className="peer w-full rounded-[4px] border border-[rgb(207,217,222)] px-[8px] pt-[20px] pb-[8px] text-[17px] transition outline-none focus:border-[rgb(29,155,240)]"
                    placeholder=" "
                    required
                  />
                  <label className="pointer-events-none absolute top-1/2 left-[8px] origin-left translate-y-[-50%] transform text-[16px] text-[rgb(83,100,113)] transition-all duration-200 ease-out peer-focus:translate-y-[-90%] peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)]">
                    비밀번호
                  </label>
                </div>
              </div>

              <div className="py-[12px]">
                <div className="relative flex h-[56px] flex-col">
                  <input
                    type="file"
                    name="profile"
                    className="peer w-full rounded-[4px] border border-[rgb(207,217,222)] px-[8px] pt-[20px] pb-[8px] text-[17px] transition outline-none focus:border-[rgb(29,155,240)]"
                    placeholder=" "
                    required
                  />
                  <label className="pointer-events-none absolute top-1/2 left-[8px] origin-left translate-y-[-50%] transform text-[16px] text-[rgb(83,100,113)] transition-all duration-200 ease-out peer-focus:translate-y-[-90%] peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)]">
                    프로필
                  </label>
                </div>
              </div>
            </div>

            <div className="py-[24px]">
              <button
                className="h-[50px] w-full cursor-pointer rounded-[24px] bg-[rgb(15,20,25,0.8)] text-white hover:bg-[rgb(15,20,25)] disabled:bg-[rgb(15,20,25,0.44)]"
                type="submit"
                disabled={pending}
              >
                가입하기
              </button>
              <div className="text-red font-bold">
                {showMessage(state.message)}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
