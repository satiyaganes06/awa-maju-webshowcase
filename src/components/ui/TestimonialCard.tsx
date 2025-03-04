
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  companyLogo?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  companyLogo,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-8 flex flex-col h-full",
        className
      )}
    >
      <div className="mb-6 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <p className="text-lg mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="flex-1">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        {companyLogo && (
          <div className="ml-4">
            <img
              src={companyLogo}
              alt="Company logo"
              className="h-10 w-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
