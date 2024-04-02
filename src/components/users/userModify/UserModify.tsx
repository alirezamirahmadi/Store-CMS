import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import { UserType } from "../../../type/UserType";


export default function UserModify({ user }: { user?: UserType }): React.JSX.Element {

  const [firstName, setFirstName] = useState<string>(user?.firstName ?? '');
  const [lastName, setLastName] = useState<string>(user?.lastName ?? '');
  const [province, setProvince] = useState<string>(user?.province ?? '');
  const [city, setCity] = useState<string>(user?.city ?? '');
  const [address, setAddress] = useState<string>(user?.address ?? '');
  const [phone, setPhone] = useState<string>(user?.phone ?? '');
  const [postalCode, setPostalCode] = useState<string>(user?.postalCode ?? '');
  const [email, setEmail] = useState<string>(user?.email ?? '');
  const [ePhone, setEPhone] = useState<string>(user?.ePhone ?? '');

  const emptyTextField = () => {
    setFirstName('');
    setLastName('');
    setProvince('');
    setCity('');
    setAddress('');
    setPhone('');
    setPostalCode('');
    setEmail('');
    setEPhone('');
  }

  const submitUser = () =>{
    emptyTextField();
  }

  return (
    <>
      <form className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-2 gap-4 items-center justify-center">
          <TextField value={firstName} onChange={() => setFirstName} variant="outlined" label={<Typography variant="body1">First Name</Typography>} />
          <TextField value={lastName} onChange={() => setLastName} variant="outlined" label={<Typography variant="body1">Last Name</Typography>} />
          <TextField value={province} onChange={() => setProvince} variant="outlined" label={<Typography variant="body1">Province</Typography>} />
          <TextField value={city} onChange={() => setCity} variant="outlined" label={<Typography variant="body1">City</Typography>} />
          <TextField value={address} onChange={() => setAddress} variant="outlined" label={<Typography variant="body1">Address</Typography>} />
          <TextField value={phone} onChange={() => setPhone} variant="outlined" label={<Typography variant="body1">Phone</Typography>} />
          <TextField value={postalCode} onChange={() => setPostalCode} variant="outlined" label={<Typography variant="body1">Postal Code</Typography>} />
          <TextField value={email} onChange={() => setEmail} variant="outlined" label={<Typography variant="body1">Email</Typography>} />
          <TextField value={ePhone} onChange={() => setEPhone} variant="outlined" label={<Typography variant="body1">EPhone</Typography>} />
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          <Button variant="contained" onClick={submitUser} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}