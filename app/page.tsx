"use client";
import { Schema } from "@/amplify/data/resource";
import Logout from "@/components/Logout";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();
export default function Home() {
  const handleClick = async () => {
    const data = await client.queries.sayHello({
      name: "Amplify",
    });

    console.log(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleClick}>click me</button>
      <Logout />
    </div>
  );
}
