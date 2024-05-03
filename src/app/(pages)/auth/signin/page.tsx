import { getCurrentUser } from "@/app/actions/getCurrentUser";
import LoginClient from "@/app/components/auth/LoginClient";

export default async function SignIn() {
  const currentUser = await getCurrentUser();
  return <LoginClient currentUser={currentUser} />;
}
