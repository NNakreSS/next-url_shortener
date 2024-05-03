// component
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import RegisterClient from "@/app/components/auth/RegisterClient";

export default async function SignUp() {
  const currentUser = await getCurrentUser();
  return <RegisterClient currentUser={currentUser} />;
}
