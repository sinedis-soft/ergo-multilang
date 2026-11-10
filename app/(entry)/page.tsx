// Redirect the site entry point to the English version.
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");
}