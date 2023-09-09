import { LoginButton, LogoutButton } from '@/components/ui/authButtons';

export const metadata = {
   title: 'Create or Join Poll',
};

export default function PollLayout({ children }) {
   return (
      <div>
         {children}
         <div className='fixed bottom-0 flex w-full justify-evenly'>
            <LoginButton />
            <LogoutButton />
         </div>
      </div>
   );
}
