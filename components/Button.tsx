import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (value: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={twMerge(
        className,
        "bg-muted px-2.5 py-1.5 rounded-xs text-xs text-foreground uppercase hover:bg-active transition z-[100]  focus:outline-none focus-visible:ring-2  focus-visible:ring-muted"
      )}
      onClick={() => {
        if (onClick) {
          onClick(false);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
