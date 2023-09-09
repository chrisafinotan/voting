import Link from 'next/link';

function Poll() {
   return (
      <div className='flex min-h-screen flex-col p-24 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
         <Link
            className='border-2 p-6 border-red-900 dark:border-red-800'
            href='/poll/create'
         >
            Create Poll
         </Link>
         <Link
            className='border-2 p-6 border-blue-900 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl'
            href='/poll/join'
         >
            Join Poll
         </Link>
      </div>
   );
}

export default Poll;
