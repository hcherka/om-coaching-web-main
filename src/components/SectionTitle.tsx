
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = false, className }: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12",
  
    )}>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
      <div className={cn(
        "h-1 w-20 bg-coaching-500 mt-4",
      )} />
    </div>
  );
};

export default SectionTitle;
