import { cn } from "@/lib/utils";

const SEGMENT_COUNT = 4;

type BootcampStepperProps = {
  currentStep: number;
};

export function BootcampStepper({ currentStep }: BootcampStepperProps) {
  return (
    <div
      className="flex w-full max-w-md gap-2"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={SEGMENT_COUNT}
      aria-valuenow={currentStep}
      aria-label={`Step ${currentStep} of ${SEGMENT_COUNT}`}
    >
      {Array.from({ length: SEGMENT_COUNT }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <span
            key={stepNumber}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors duration-300",
              isCompleted && "bg-[#FD3B02]",
              isActive && !isCompleted && "bg-[#FF774F]",
              !isCompleted && !isActive && "bg-[#E9E9E9]",
            )}
          />
        );
      })}
    </div>
  );
}
