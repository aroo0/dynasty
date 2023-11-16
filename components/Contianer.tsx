interface ContianerProps {
  children: React.ReactNode
  
}

const Contianer: React.FC<ContianerProps> = ({children}) => {
  return (
    <div className="h-[100vh] w-full ">
       {children}
    </div>
   )
}

export default Contianer