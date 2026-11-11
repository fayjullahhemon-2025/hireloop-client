"use client";

import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signUp } from "@/lib/auth-client";

export const ROLES = [
  { value: "seeker", label: "Job Seeker" },
  { value: "recruiter", label: "Recruiter" },
  { value: "admin", label: "Admin" },
] as const;

type Role = (typeof ROLES)[number]["value"];

type SignUpValues = {
  name: string;
  email: string;
  password: string;
  role: Role;
};

function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role>("seeker");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { name, email, password, confirmPassword, role } = Object.fromEntries(
      formData.entries(),
    ) as Record<string, string>;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    setLoading(true);
    await signUp.email({ name, email, password, role } as SignUpValues, {
      onSuccess: () => {
        router.refresh();
        router.push("/");
      },
      onError: (ctx) => {
        setError(ctx.error.message ?? "Sign up failed. Please try again.");
        setLoading(false);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          required
          aria-invalid={!!error}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          aria-invalid={!!error}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          minLength={8}
          required
          aria-invalid={!!error}
        />
        <p className="text-xs text-muted-foreground">
          Must be at least 8 characters.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          minLength={8}
          required
          aria-invalid={!!error}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="role">I am a</Label>
        <input type="hidden" name="role" value={role} />
        <Select value={role} onValueChange={(value) => setRole(value as Role)}>
          <SelectTrigger id="role" className="w-full">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {ROLES.map((roleOption) => (
              <SelectItem key={roleOption.value} value={roleOption.value}>
                {roleOption.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading && <LoaderIcon className="animate-spin" />}
        Get Started
      </Button>
    </form>
  );
}

export default SignUpForm;
