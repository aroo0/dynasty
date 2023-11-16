import Loader from "./Loader";

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  return (
    <div className="bg-black inset-0 w-full h-full flex justify-center items-center flex-col fixed z-[100]">
      <div className="absolute inset-0 opacity-20  overflow-hidden ">
        <video src="/shorts/intro.mp4" autoPlay muted loop  className="object-cover w-full h-full"/>
      </div>
      <div className="uppercase flex flex-col items-center z-[20] mt-10">
        <h2 className="font-medium  text-sm text-secondary">Łukasz Stokłosa</h2>
        <h1 className="text-xl font-bold text-foreground mt-[-6px]">Dynasty</h1>
      </div>
      <div className="flex justify-center items-center ">
        <p className="text-xs text-foreground mt-5 loading">Loading</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
