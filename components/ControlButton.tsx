import { twMerge } from 'tailwind-merge'


interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick: () => void;
  
}

const ControlButton: React.FC<ButtonProps> = ({children, className, onClick }) => {
  return (
    <button onClick={onClick} className={twMerge(className, "aspect-square bg-muted w-6 h-6 flex justify-center items-center rounded-xs text-xs text-foreground uppercase hover:bg-active transition z-[100] ")}>
       {children}
    </button>
   )
}

export default ControlButton