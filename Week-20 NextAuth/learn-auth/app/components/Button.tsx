"use client";
import { signIn, signOut } from "next-auth/react"
interface ButtonProps {
    text: string,
    variant: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
    onClick?: () => void
    signin?: Boolean,
    signout?: Boolean
}

const variantStyles = {
    "primary": "bg-blue-400 px-4 py-4",
    "secondary": "bg-gray-400 px-4 py-4"
}

const sizeStyles = {
    "sm": "text-sm",
    "md": "text-md",
    "lg": "text-lg"
}

const defaultStyles = "text-white flex flex-wrap rounded-lg hover:border-2"

export default function Button({ text, variant, size, onClick, signin, signout }: ButtonProps) {
    return <button className={`${defaultStyles} ${variantStyles[variant]} ${size ? sizeStyles[size] : ""}`} onClick={signin ? () => signIn() : signout ? () => signOut() : onClick}>
        {text}
    </button>
}