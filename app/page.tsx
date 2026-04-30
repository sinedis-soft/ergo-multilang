// app/page.tsx (редирект с / на /ru)
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");
}