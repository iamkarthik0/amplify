// app/login/page.tsx

"use client"
import Login from "@/components/Login";

const client = generateClient<Schema>();
export default function LoginPage() {


  return (
    <>
      <Login />

    </>
  );
}
