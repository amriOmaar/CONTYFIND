import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTYFIND ",
  description: "CONTYFIND ",
};

export default function SignIn() {
  return <SignInForm />;
}
