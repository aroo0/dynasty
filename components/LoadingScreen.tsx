interface LoadingScreenProps {
  onClick: (value: boolean) => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onClick }) => {
  return (
    <div className="bg-black inset-0 w-full h-full flex justify-center items-center flex-col fixed z-[100]">
      <div className="absolute inset-0 opacity-20 overflow-hidden ">
        <video
          src="/shorts/Intro.mp4"
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          
        />
      </div>

      <div
        className="uppercase flex flex-col items-center mt-10 cursor-pointer z-[20]"
        onClick={() => onClick(false)}
      >
        <h2 className="font-medium  text-sm text-secondary">Łukasz Stokłosa</h2>
        <h1 className="text-xl font-bold text-foreground mt-[-6px]">Dynasty</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
