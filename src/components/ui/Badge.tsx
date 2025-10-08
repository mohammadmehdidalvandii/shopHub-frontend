import * as  React from 'react';
import {cva , type VariantProps} from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
    "inline-flex items-center rounded-full border border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:ring-2 focus:ring-input focus:ring-offset-2",
    {
        variants:{
            variant:{
                default:"border-transparent bg-primary text-white hover:bg-primary-/80",
                secondary:"border-transparent bg-gray-medium text-gray-dark hover:bg-gray-medium/80",
                destructive:"border-transparent bg-danger text-white hover:bg-danger/80",
                outline:"text-txt",
            },
        },
        defaultVariants:{
            variant:"default"
        }
    }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof badgeVariants>{};

const Badge = ({className , variant , ...props}:BadgeProps)=>{
    return <div className={cn(badgeVariants({variant}),className)}{...props}/>
};


export {Badge , badgeVariants};

