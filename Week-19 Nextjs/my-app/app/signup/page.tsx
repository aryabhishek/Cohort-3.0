import Link from "next/link"

export default function Signup() {
    return <div className="flex items-center justify-center h-screen">
        <div className="gap-8 flex">
            <Link href={"/"} className="text-2xl fixed top-0 left-0 px-4 py-4">&lt;</Link>
            Sign up Page
        </div>
    </div>
}