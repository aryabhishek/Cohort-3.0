import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Button from "./components/Button";

export default function Home() {
  return <RealHome />;
}

async function RealHome() {
  const session = await getServerSession();

  if (!session) {
    return (
      <div className="flex justify-center bg-black items-center h-screen w-screen">
        <Button
          text="Sign in"
          variant="secondary"
          size="lg"
          signin={true}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-black items-center h-screen w-screen">
      {JSON.stringify(session)}
      <Button
        text="Sign out"
        variant="secondary"
        size="lg"
        signout={true}
      />
    </div>
  );
}
