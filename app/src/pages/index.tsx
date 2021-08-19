import { Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Link href="/projects">project index</Link>
      <Link href="/users/a">users detail</Link>
    </div>
  );
}
