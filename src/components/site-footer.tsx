import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/delta-camp-ai/",
    label: "Delta Camp on LinkedIn",
    icon: <LinkedInIcon className="size-5 text-[#0A66C2]" />,
  },
  {
    href: "https://www.instagram.com/deltacamp.io",
    label: "Delta Camp on Instagram",
    icon: <InstagramIcon className="size-5" />,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-background">
      <SiteContainer>
        <div className="flex flex-col gap-5 border-t border-[#deded4] py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <p>© 2026 Delta Camp. All rights reserved.</p>

          <nav aria-label="Social links" className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                target="_blank"
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-full border border-[#deded4] bg-white transition-colors duration-200 hover:bg-[#f0ede7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </SiteContainer>
    </footer>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("fill-current", className)}
    >
      <path d="M6.75 8.86H3.87v9.28h2.88V8.86ZM5.31 7.59a1.66 1.66 0 1 0 0-3.32 1.66 1.66 0 0 0 0 3.32ZM20.13 13.05c0-2.5-1.34-4.12-3.57-4.12-1.45 0-2.36.79-2.73 1.37h-.04V8.86h-2.76v9.28h2.88v-4.59c0-1.21.23-2.38 1.73-2.38 1.47 0 1.49 1.38 1.49 2.46v4.51h2.88v-5.09h.12Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient
          id="instagram-brand-gradient"
          x1="4"
          y1="20"
          x2="20"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F58529" />
          <stop offset="0.45" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect
        x="4.25"
        y="4.25"
        width="15.5"
        height="15.5"
        rx="4.5"
        stroke="url(#instagram-brand-gradient)"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3.55"
        stroke="url(#instagram-brand-gradient)"
        strokeWidth="2"
      />
      <circle cx="16.45" cy="7.65" r="1.15" fill="#DD2A7B" />
    </svg>
  );
}
