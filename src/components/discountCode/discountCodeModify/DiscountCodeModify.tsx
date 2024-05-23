import { TextField, Button, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useForm } from 'react-hook-form';

import { DiscountCodesType } from "../../../type/DiscountCodesType";
import { useMutationDiscountCode } from "../../../hooks/DiscountCodeHook";

export default function DiscountCodeModify({ discountCode, closeModal }: { discountCode?: DiscountCodesType, closeModal?: () => void }): React.JSX.Element {

  const { mutate: PostDiscountCode } = useMutationDiscountCode('POST');
  const { mutate: PutDiscountCode } = useMutationDiscountCode('PUT');
  const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      code: discountCode?.code,
      percent: discountCode?.percent,
      maximumuse: discountCode?.maximumuse,
      active: discountCode?.isActive ?? false,
    }
  });

  const submitDiscountCode = (data: any) => {
    discountCode ? PutDiscountCode({id:discountCode.id, code:data.code, percent:data.percent, maximumuse:data.maximumuse, isActive:data.active, used:discountCode.used })
    : PostDiscountCode({code:data.code, percent:data.percent, maximumuse:data.maximumuse, isActive:data.active, used:0})
    
    closeModal ? closeModal() : reset();
  }

  return (
    <>
      <form className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <TextField {...register('code', { required: true })} error={errors.code ? true : false} required helperText={errors.code && 'Code is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Code</Typography>} />
          <TextField {...register('percent', { required: true })} error={errors.percent ? true : false} required helperText={errors.percent && 'percent is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Percent</Typography>} />
          <TextField {...register('maximumuse', { required: true })} error={errors.maximumuse ? true : false} required helperText={errors.maximumuse && 'Maximum use is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Maximumuse</Typography>} />
          <FormGroup>
            <FormControlLabel control={<Checkbox {...register('active')}  defaultChecked={discountCode ? getValues('active') : false} color="primary" />} label="Active" />
          </FormGroup>
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="contained" onClick={handleSubmit(submitDiscountCode)} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}