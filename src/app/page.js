import Users from "@/components/users/Users";
import Tickets from "./ticket/page";

async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <section className="users">
        <Users data={data} />
      </section>
    </>
  );
}
