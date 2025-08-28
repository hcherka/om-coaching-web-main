
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {Link} from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  linkBox: string;
}

const ServiceCard = ({ title, description, icon: Icon, className, linkBox }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group",
      className
    )}>
      <div className="w-12 h-12 bg-coaching-100 text-coaching-600 flex items-center justify-center rounded-full mb-4 group-hover:bg-coaching-600 group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
        <Link to={linkBox} className="btn-primary mt-4 inline-block">
            En savoir plus
        </Link>
    </div>
  );
};

export default ServiceCard;
