// import { Link } from "@chakra-ui/react";
import Link from "next/link";
// import { FloatButton } from "../components/atoms/buttons/FloatButton";

export default function Home() {
  return (
    <div>
      {/* <Link href="/projects">project index</Link>
      <Link href="/users/1">users detail</Link> */}
      <Link href="projects">プロジェクト一覧</Link>
      <br />
      <Link href="/users/1">ユーザー詳細</Link>
      {/* <FloatButton bg="#ff0">like this?</FloatButton> */}
    </div>
  );
}
