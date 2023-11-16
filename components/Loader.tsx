
const Loader = () => {
  return (
    <div className="absolute w-full flex left-[50%]">
        <div className="w-10 h-10 bg-secondary rounded-lg opacity-70"></div>
        <div className="w-10 h-10 bg-secondary rounded-lg absolute top-0 left-0 animate-ping"></div>
        <div className="w-10 h-10 bg-secondary rounded-lg absolute top-0 left-0 animate-pulse"></div>
    </div>
   )
}

export default Loader