
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position?: string;
  company?: string;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  position,
  company,
  imageSrc,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md border border-gray-100",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-4 text-coaching-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="h-10 w-10 rounded-full mr-3 object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-coaching-100 text-coaching-500 flex items-center justify-center mr-3">
              <User size={20} />
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            {(position || company) && (
              <p className="text-sm text-gray-600">
                {position}
                {position && company && " · "}
                {company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
