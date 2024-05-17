import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function NotFound(): React.JSX.Element {
  
  const navigate = useNavigate();

  const handleGoToHome = () =>{
    navigate('/');
  }

  return (
    <>
      <img src="../../../public/svg/notFound/404Error.svg" alt="Not Found" className="w-48 lg:w-96 mx-auto mt-28 lg:mt-52" />
      <Button variant="contained" onClick={handleGoToHome} sx={{ mx: 'auto', display: 'block', mt: 5 }}>Home Page</Button>
    </>
  )
}