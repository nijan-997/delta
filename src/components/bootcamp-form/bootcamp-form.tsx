"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { ChoiceCard } from "@/components/bootcamp-form/choice-card";
import {
  BOOTCAMP_CONTACT_COPY,
  BOOTCAMP_STEPS,
} from "@/components/bootcamp-form/bootcamp-form-data";
import { BootcampStepper } from "@/components/bootcamp-form/bootcamp-stepper";
import { SiteContainer } from "@/components/layout/site-container";
import { PrimaryCtaArrow } from "@/components/ui/primary-cta-arrow";
import {
  PRESSABLE_3D_CTA_CLASS,
} from "@/components/ui/pressable-3d-cta";
import { cn } from "@/lib/utils";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/validation";

const stepMotion = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
};

type FormAnswers = {
  q1: string;
  q2: string;
  q3: string;
  fullName: string;
  email: string;
  phone: string;
};

export function BootcampForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<FormAnswers>({
    q1: "",
    q2: "",
    q3: "",
    fullName: "",
    email: "",
    phone: "+94 ",
  });
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
  }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const goToStep = useCallback((next: number) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChoice = (questionIndex: 0 | 1 | 2, choiceLabel: string) => {
    const key = (["q1", "q2", "q3"] as const)[questionIndex];
    setAnswers((prev) => ({ ...prev, [key]: choiceLabel }));
    goToStep(questionIndex + 2);
  };

  const handleBack = () => {
    if (step === 1) {
      router.push("/");
      return;
    }
    goToStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const fullNameError = validateName(answers.fullName);
    const emailError = validateEmail(answers.email);
    const phoneError = validatePhone(answers.phone);

    if (fullNameError || emailError || phoneError) {
      setFieldErrors({
        fullName: fullNameError ?? undefined,
        email: emailError ?? undefined,
        phone: phoneError ?? undefined,
      });
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/bootcamp-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: answers.fullName,
          email: answers.email,
          phone: answers.phone,
          q1TimeSpent: answers.q1,
          q2AiUsage: answers.q2,
          q3SuccessGoal: answers.q3,
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        fields?: Record<string, string | null>;
      };

      if (!res.ok) {
        if (data.fields) {
          setFieldErrors({
            fullName: data.fields.fullName ?? undefined,
            email: data.fields.email ?? undefined,
            phone: data.fields.phone ?? undefined,
          });
        }
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <SiteContainer className="flex min-h-[50vh] flex-col items-center justify-center pb-16 pt-12 text-center sm:pt-14 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md"
        >
          <p className="text-3xl" aria-hidden>
            🏕️
          </p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            You&apos;re on the list!
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Thanks for applying to Delta Camp. We&apos;ll reach out at{" "}
            <span className="font-medium text-foreground">{answers.email}</span>{" "}
            when the next cohort opens.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Back to home
          </Link>
        </motion.div>
      </SiteContainer>
    );
  }

  const questionStep = BOOTCAMP_STEPS[step - 1];
  const selectedForStep =
    step === 1 ? answers.q1 : step === 2 ? answers.q2 : step === 3 ? answers.q3 : "";

  return (
    <SiteContainer className="pb-20 pt-10 sm:pt-12 md:pt-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="flex w-full items-center gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-[#F5F1E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF774F]"
            aria-label={step === 1 ? "Back to home" : "Previous step"}
          >
            <ChevronLeft className="size-6" strokeWidth={2} />
          </button>
          <div className="flex flex-1 justify-center pr-10">
            <BootcampStepper currentStep={step} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step <= 3 && questionStep ? (
            <motion.div
              key={`q-${step}`}
              className="mt-10 w-full sm:mt-12"
              variants={stepMotion}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="mx-auto max-w-3xl text-balance text-center text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.5rem]">
                {questionStep.question}
              </h1>
              <div
                className={cn(
                  "mt-8 grid gap-3 sm:mt-10 sm:gap-4",
                  questionStep.gridClassName,
                )}
              >
                {questionStep.choices.map((choice) => (
                  <ChoiceCard
                    key={choice.id}
                    choice={choice}
                    selected={selectedForStep === choice.label}
                    onSelect={() =>
                      handleChoice((step - 1) as 0 | 1 | 2, choice.label)
                    }
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="contact"
              onSubmit={handleSubmit}
              className="mt-10 w-full max-w-xl sm:mt-12"
              variants={stepMotion}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-balance text-center text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-3xl">
                {BOOTCAMP_CONTACT_COPY.title}
              </h1>
              <p className="mt-4 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
                {BOOTCAMP_CONTACT_COPY.subtitle}
              </p>

              <div className="mt-10 space-y-6">
                <Field
                  id="fullName"
                  label={BOOTCAMP_CONTACT_COPY.nameLabel}
                  placeholder={BOOTCAMP_CONTACT_COPY.namePlaceholder}
                  value={answers.fullName}
                  error={fieldErrors.fullName}
                  onChange={(v) =>
                    setAnswers((p) => ({ ...p, fullName: v }))
                  }
                />
                <Field
                  id="email"
                  label={BOOTCAMP_CONTACT_COPY.emailLabel}
                  placeholder={BOOTCAMP_CONTACT_COPY.emailPlaceholder}
                  type="email"
                  autoComplete="email"
                  value={answers.email}
                  error={fieldErrors.email}
                  onChange={(v) => setAnswers((p) => ({ ...p, email: v }))}
                />
                <Field
                  id="phone"
                  label={BOOTCAMP_CONTACT_COPY.phoneLabel}
                  placeholder={BOOTCAMP_CONTACT_COPY.phonePlaceholder}
                  type="tel"
                  autoComplete="tel"
                  value={answers.phone}
                  error={fieldErrors.phone}
                  onChange={(v) => setAnswers((p) => ({ ...p, phone: v }))}
                />
              </div>

              {submitError ? (
                <p className="mt-4 text-center text-sm text-primary" role="alert">
                  {submitError}
                </p>
              ) : null}

              <div className="mt-8 w-full sm:mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    PRESSABLE_3D_CTA_CLASS,
                    "min-h-[3.25rem] w-full justify-center py-4 sm:min-h-[3.375rem] sm:py-[1.0625rem]",
                    isSubmitting && "pointer-events-none opacity-70",
                  )}
                >
                  {isSubmitting ? (
                    "Submitting…"
                  ) : (
                    <>
                      Join the Camp <span aria-hidden>🏕️</span>
                      <PrimaryCtaArrow />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SiteContainer>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground sm:text-base">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-2 w-full rounded-xl border border-transparent bg-[#F5F1E6] px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#FF774F]",
          error && "ring-2 ring-primary",
        )}
      />
      {error ? (
        <p className="mt-1.5 text-sm text-primary" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
