import { ReactElement } from "react";

interface ButtonProps {
    text: string | ReactElement;
    size: "sm" | "md" | "lg";
    variant: "primary" | "secondary";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
};

const sizeStyles: any = {
    "sm": "px-2 py-1 text-sm rounded-sm",
    "md": "px-4 py-2 text-base rounded-md",
    "lg": "px-6 py-3 text-lg rounded-lg",
}

const variantStyles: any = {
    "primary": "bg-myPurple-400 text-white",
    "secondary": "bg-gray-300 text-gray-800",
}

const defaultStyles = "flex items-center justify-center";

export default function Button(props: ButtonProps) {
    return (
        <button className={`${sizeStyles[props.size]} ${variantStyles[props.variant]} ${defaultStyles}`}
            onClick={props.onClick}>
                {props.startIcon}
                {props.text}
                {props.endIcon}
            </button>
    );
}