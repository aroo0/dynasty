import { twMerge } from "tailwind-merge";

interface VideoDescriptionProps {
  title: string;
  description: string
  className?: string
  onThisVideo: boolean
  
}

const VideoDescription: React.FC<VideoDescriptionProps> = ({title, description, className, onThisVideo}) => {
  return (
    <div className={twMerge("uppercase text-xs flex flex-wrap gap-x-2 absolute xl:min-w-[300px] mt-1 xl:opacity-0 transition duration-700 ease-in-out", className, onThisVideo && 'xl:opacity-100')}>
       <p className="text-foreground">{title}</p>
       <p className="text-secondary">{description}</p>
    </div>
   )
}

export default VideoDescription