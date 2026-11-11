import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/shared/AuthCard";
import SignInForm from "@/components/shared/SignInForm";

export const metadata: Metadata = {
  title: "Sign In — HireLoop",
};

export default function SignInPage() {
  return (
    <AuthCard
      title="Sign in"
      description="Welcome back! Enter your details to continue."
      footer={
        <span className="text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign up
          </Link>
        </span>
      }
    >
      <SignInForm />
    </AuthCard>
  );
}
