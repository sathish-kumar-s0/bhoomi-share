import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-16",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
