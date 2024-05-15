import { TextField, Button, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useForm } from 'react-hook-form';

import { UserType } from "../../../type/UserType";
import regex from "../../../utils/Regex";

export default function UserModify({ user }: { user?: UserType }): React.JSX.Element {
  const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      province: user?.province,
      city: user?.city,
      address: user?.address,
      phone: user?.phone,
      postalCode: user?.postalCode,
      email: user?.email,
      ePhone: user?.ePhone,
      active: user?.isActive,
    }
  });

  const submitUser = (data: any) => {
    console.log(data);
    reset();
  }

  return (
    <>
      <form className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-2 gap-4 justify-center">
          <TextField {...register('firstName', { required: true })} error={errors.firstName ? true : false} required helperText={errors.firstName && 'First Name is required.'} variant="outlined" label={<Typography variant="body1"  sx={{ display: 'inline' }}>First Name</Typography>} />
          <TextField {...register('lastName', { required: true })} error={errors.lastName ? true : false} required helperText={errors.lastName && 'Last Name is required.'} variant="outlined" label={<Typography variant="body1"  sx={{ display: 'inline' }}>Last Name</Typography>} />
          <TextField {...register('province')} variant="outlined" label={<Typography variant="body1">Province</Typography>} />
          <TextField {...register('city')} variant="outlined" label={<Typography variant="body1">City</Typography>} />
          <TextField {...register('address')} variant="outlined" label={<Typography variant="body1">Address</Typography>} />
          <TextField {...register('phone', { required: true, pattern: regex.phone })} error={errors.phone ? true : false} required helperText={errors.phone && 'Phone number is required.'} variant="outlined" label={<Typography variant="body1"  sx={{ display: 'inline' }}>Phone</Typography>} />
          <TextField {...register('postalCode')} variant="outlined" label={<Typography variant="body1">Postal Code</Typography>} />
          <TextField {...register('email', { pattern: regex.email })} error={errors.email ? true : false} helperText={errors.email && 'Please enter the correct email.'} variant="outlined" label={<Typography variant="body1">Email</Typography>} />
          <TextField {...register('ePhone', { pattern: regex.phone })} error={errors.ePhone ? true : false} helperText={errors.ePhone && 'Please enter the correct ephone.'} variant="outlined" label={<Typography variant="body1">EPhone</Typography>} />
          <FormGroup>
            <FormControlLabel control={<Checkbox {...register('active')} checked={getValues('active')} color="primary" />} label="Active" />
          </FormGroup>
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          <Button variant="contained" onClick={handleSubmit(submitUser)} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}