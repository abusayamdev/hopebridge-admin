import { redirect } from "next/navigation";

// Redirect visitors from "/" to "/dashboard".
// This happens through Next.js routing.
export default function HomePage() {
  redirect("/dashboard");
}
