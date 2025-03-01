import Link from "next/link"

export default function Signin() {
    return <div className="flex items-center justify-center h-screen">
        <div className="gap-8 flex">
            <Link href={"/"} className="text-2xl fixed top-0 left-0 px-4 py-4" scroll replace>&lt;</Link>
            Sign in Page
        </div>
    </div>
}