import type { Metadata } from "next";
import { BootcampForm } from "@/components/bootcamp-form/bootcamp-form";

export const metadata: Metadata = {
  title: "Join the Bootcamp | Delta",
  description: "Apply for the next Delta Camp cohort.",
};

export default function JoinTheBootcampPage() {
  return (
    <main className="min-h-screen bg-background">
      <BootcampForm />
    </main>
  );
}
