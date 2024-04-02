import { Divider } from "@mui/material";

import UserModify from "../../components/users/userModify/UserModify";

export default function Users(): React.JSX.Element {
  return (
    <>
      <UserModify />
      <Divider sx={{ my: '20px', width: '90%', mx: 'auto' }} />
    </>
  )
}