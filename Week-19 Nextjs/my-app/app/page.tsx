import axios from "axios";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href={"/"} className="fixed top-0 left-0 px-4 py-4">Home</Link>
      <div>
        <Link href={"/signup"}>Signup</Link>
        <br />
        <Link href={"/signin"}>Signin</Link>
      </div>

    </div>
  );
}
