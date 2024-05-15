import { TextField, Button, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useForm } from 'react-hook-form';

import { DiscountCodesType } from "../../../type/DiscountCodesType";


export default function DiscountCodeModify({ discountCode }: { discountCode?: DiscountCodesType }): React.JSX.Element {

  const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      code: discountCode?.code,
      percent: discountCode?.percent,
      maximumuse: discountCode?.maximumuse,
      active: discountCode?.isActive,
    }
  });

  const submitDiscountCode = (data: any) => {
    console.log(data);
    reset();
  }

  return (
    <>
      <form className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <TextField {...register('code', { required: true })} error={errors.code ? true : false} required helperText={errors.code && 'Code is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Code</Typography>} />
          <TextField {...register('percent', { required: true })} error={errors.percent ? true : false} required helperText={errors.percent && 'percent is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Percent</Typography>} />
          <TextField {...register('maximumuse', { required: true })} error={errors.maximumuse ? true : false} required helperText={errors.maximumuse && 'Maximum use is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Maximumuse</Typography>} />
          <FormGroup>
            <FormControlLabel control={<Checkbox {...register('active')} checked={getValues('active')} color="primary" />} label="Active" />
          </FormGroup>
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="contained" onClick={handleSubmit(submitDiscountCode)} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}