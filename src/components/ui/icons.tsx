import type { ComponentPropsWithoutRef } from "react";
import {
  ArrowRight,
  Plus,
  Check,
  Flame,
  MapPin,
  Phone,
  Clock,
  Search,
  X,
  Menu,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";

type IconProps = ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export function ArrowIcon({ size = 16, className = "", ...props }: IconProps) {
  return <ArrowRight size={size} className={className} strokeWidth={2} {...props} />;
}

export function PlusIcon({ size = 16, className = "", ...props }: IconProps) {
  return <Plus size={size} className={className} strokeWidth={2} {...props} />;
}

export function CheckIcon({ size = 16, className = "", ...props }: IconProps) {
  return <Check size={size} className={className} strokeWidth={2.5} {...props} />;
}

export function FlameIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <Flame
      size={size}
      className={`text-saffron fill-saffron/20 ${className}`}
      strokeWidth={2}
      {...props}
    />
  );
}

export function PinIcon({ size = 16, className = "", ...props }: IconProps) {
  return <MapPin size={size} className={className} strokeWidth={2} {...props} />;
}

export function PhoneIcon({ size = 16, className = "", ...props }: IconProps) {
  return <Phone size={size} className={className} strokeWidth={2} {...props} />;
}

export function ClockIcon({ size = 16, className = "", ...props }: IconProps) {
  return <Clock size={size} className={className} strokeWidth={2} {...props} />;
}

export function MagnifyIcon({ size = 16, className = "", ...props }: IconProps) {
  return <Search size={size} className={className} strokeWidth={2} {...props} />;
}

export function CloseIcon({ size = 18, className = "", ...props }: IconProps) {
  return <X size={size} className={className} strokeWidth={2.2} {...props} />;
}

export function MenuToggleIcon({
  open,
  size = 20,
  className = "",
  ...props
}: IconProps & { open?: boolean }) {
  return open ? (
    <X size={size} className={`transition-transform duration-200 ${className}`} strokeWidth={2.2} {...props} />
  ) : (
    <Menu size={size} className={`transition-transform duration-200 ${className}`} strokeWidth={2.2} {...props} />
  );
}

export {
  ArrowRight,
  Plus,
  Check,
  Flame,
  MapPin,
  Phone,
  Clock,
  Search,
  X,
  Menu,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  Users,
};

