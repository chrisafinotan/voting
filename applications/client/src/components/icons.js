import {
   CheckIcon,
   GitHubLogoIcon,
   MoonIcon,
   SunIcon,
} from '@radix-ui/react-icons';

export const Icons = {
   logo: ({ width, height }) => (
      <Image
         unoptimized
         src='/static/logo.png'
         width={width}
         height={height}
         alt='Code Racer Logo'
      />
   ),
   check: CheckIcon,
   github: GitHubLogoIcon,
   darkMode: MoonIcon,
   lightMode: SunIcon,
};
