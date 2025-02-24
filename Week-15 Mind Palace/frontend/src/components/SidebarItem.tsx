import { ReactElement } from "react"

interface SidebarItemProps {
    text: string,
    icon: ReactElement
}

const defaultStyles = "flex gap-2 pl-4 text-xl items-center";

const hoverStyles = "hover:bg-cyan-100 rounded-lg m-4 w-[75%]";

export function SidebarItem({text, icon}: SidebarItemProps) {
    return <div className={`${defaultStyles} ${hoverStyles}`}>
        {icon}
        {text}
    </div>
}