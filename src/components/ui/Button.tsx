import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva , type VariantProps} from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xl font-robotoBold ring-offset-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible-ring-offset-2 disabled:pointer-event-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
    {
     variants:{
        variant:{
            default:'bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-sm hover:shadow-lg active:scale-95',
            destructive:"bg-danger text-white  hover:bg-danger-dark hover:scale-105 shadow-sm hover:shadow-lg active:scale-95",
            outline:"border-input bg-white hover:bg-accent hover:text-white hover:border-accent hover:scale-105 active:scale-95",
            secondary:"bg-gray-dark text-white hover:bg-gray-dark/80 hover:scale-105 shadow-sm hover:shadow-md active:scale-95",
            ghost:"hover:bg-accent hover:text-white hover:scale-105 active:scale-95",
            link:"text-primary underline-offset-4 hover:underline hover:text-primary/80",
            accent:"bg-accent text-white hover:bg-accent/90 shadow-lg hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 font-robotoBold",
        },
        size:{
            default:"h-10 px-4 py-2",
            sm:"h-9 rounded-md px-3",
            lg:"h-11 rounded-md px-8",
            icon:"h-10 w-10",
        },
        defaultVariants:{
            variant:"default",
            size:"default",
        }
     }
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    asChild?:boolean
};


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";
export {Button , buttonVariants}