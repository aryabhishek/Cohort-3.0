import { ReactElement } from "react"
import { BrainIcon } from "../icons/BrainIcon";

interface SideBarProps {
    children: ReactElement;
}

export function SideBar({ children }: SideBarProps) {
    return <div className="h-screen bg-wite w-72 fixed top-0 left-0 shadow-lg rounded-lg">
        <div className="text-3xl pl-6 mt-4 flex">
            <BrainIcon />
            <div className="mx-4 text-black">
                Mind Palace
            </div>
        </div>
        {children}
    </div>
}