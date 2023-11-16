import Loader from "./Loader";

interface LoadingScreenProps {
  children: React.ReactNode
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({children}) => {
  return (
    <div className="bg-black inset-0 w-full h-full flex justify-center items-center flex-col fixed z-[100]">
      <div className="absolute inset-0 opacity-20  overflow-hidden ">
        <video src="/shorts/intro.mp4" autoPlay muted loop  className="object-cover w-full h-full"/>
      </div>
      {children}


    </div>
  );
};

export default LoadingScreen;
