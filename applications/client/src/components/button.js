import { forwardRef } from 'react';
// import { cva } from 'class-variance-authority';
// const buttonVariants = cva(
//    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
//    {
//       variants: {
//          variant: {
//             default:
//                'bg-primary text-white hover:bg-primary/90 disabled:bg-primary/80',
//             destructive:
//                'bg-destructive text-destructive-foreground hover:bg-destructive/90',
//             success: 'bg-success text-success-foreground hover:bg-success/90',
//             outline:
//                'border border-input bg-background hover:bg-accent hover:text-accent-foreground text-slate-800 dark:text-neutral-200',
//             secondary:
//                'bg-secondary text-secondary-foreground hover:bg-secondary/80',
//             ghost: 'hover:bg-accent hover:text-accent-foreground',
//             link: 'text-primary underline-offset-4 hover:underline',
//             black: 'bg-black dark:bg-primary dark:text-black text-white hover:bg-black/90 hover:text-primary hover:border hover:border-primary disabled:opacity-50',
//          },
//          size: {
//             default: 'h-10 px-4 py-2',
//             sm: 'h-9 rounded-md px-3',
//             lg: 'h-11 rounded-md px-8',
//             icon: 'h-10 w-10',
//          },
//       },
//       defaultVariants: {
//          variant: 'default',
//          size: 'default',
//       },
//    }
// );
const buttonClass =
   'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 disabled:bg-primary/80 h-10 px-4 py-2';
const Button = forwardRef(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      return <button className={buttonClass} ref={ref} {...props} />;
   }
);
Button.displayName = 'Button';

export { Button };
