import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AuthCard({
  title,
  description,
  footer,
  children,
}: {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="dark flex min-h-[calc(100svh-4rem)] w-full items-center justify-center bg-[#131316] px-4 py-10">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mx-auto flex w-fit items-center"
          aria-label="HireLoop home"
        >
          <Image
            src="/images/logo.png"
            alt="HireLoop"
            width={154}
            height={44}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
          <CardContent>{children}</CardContent>
          {footer && (
            <CardFooter className="justify-center text-center text-sm">
              {footer}
            </CardFooter>
          )}
        </Card>
      </div>
    </main>
  );
}

export default AuthCard;
