'use client';

import { Button } from '../button';
import { signIn, signOut } from 'next-auth/react';
import { Icons } from '../icons';

const LoginButton = () => {
   return (
      <Button
         className='flex gap-2 px-4'
         onClick={() =>
            signIn('github', {
               callbackUrl: `${location.origin}`,
            })
         }
      >
         <Icons.github className='h-[1.2rem] w-[1.2rem]' />
         <p className='whitespace-nowrap'>Sign in</p>
      </Button>
   );
};

const LogoutButton = () => {
   return (
      <Button className='flex gap-2 px-4' onClick={() => signOut()}>
         <p className='whitespace-nowrap'>Sign Out</p>
      </Button>
   );
};

export { LoginButton, LogoutButton };
