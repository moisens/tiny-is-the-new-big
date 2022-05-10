interface BaseProps {
  children: React.ReactNode;
}



const Headers = ({children}: BaseProps) => {
  return (
    <header>{children}</header>
  )
}

export default Headers