"use client";

// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();
  // const data = await getServerSession(authOptions);
  return (
    <main>
      <div>Hello World</div>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
