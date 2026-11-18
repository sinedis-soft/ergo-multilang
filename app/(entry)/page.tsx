// Redirect the site entry point to the English version.
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect("/en");
}
