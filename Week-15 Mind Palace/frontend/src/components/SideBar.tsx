import { ReactElement } from "react"

interface SideBarProps {
    children: ReactElement;
}

export function SideBar({children}: SideBarProps) {
    return <div className="h-screen bg-white w-72 fixed top-0 left-0 shadow-lg bg-blue-300">
        <div className="text-3xl pl-6">
            Mind Palace
        </div>
        {children}
    </div>
}