import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/shared/AuthCard";
import SignUpForm from "@/components/shared/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up — HireLoop",
};

export default function SignUpPage() {
  return (
    <AuthCard
      title="Create your account"
      description="Join HireLoop and land your next role — faster."
      footer={
        <span className="text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            Sign in
          </Link>
        </span>
      }
    >
      <SignUpForm />
    </AuthCard>
  );
}
