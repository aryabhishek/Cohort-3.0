import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string,
    link?: string,
}

export function Card({ title, link }: CardProps) {
    return <div className="p-8 m-2 bg-white rounded-md shadow-md border-myGray-200 max-w-72 border">
        <div className="flex justify-between">
            <div className="flex items-center text-xl">
                <div className="text-myGray-600 pr-2">
                    <ShareIcon size="md" />
                </div>
                <h1>{title}</h1>
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-myGray-600">
                    <a href={link} target="_blank">
                        <ShareIcon size="md" />
                    </a>
                </div>
                <div className="text-myGray-600">
                    <ShareIcon size="md" />
                </div>
            </div>
        </div>
        <div className="py-4">
            {link && <iframe className="w-full rounded-lg" src={link.replace("watch?v=", "embed/").split("&")[0]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        </div>
    </div>
}