import { useState } from "react";
import { TextField, Button, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import { DiscountCodesType } from "../../../type/DiscountCodesType";


export default function DiscountCodeModify({ discountCode }: { discountCode?: DiscountCodesType }): React.JSX.Element {

  const [code, setCode] = useState<string>(discountCode?.code ?? '');
  const [percent, setPercent] = useState<number>(discountCode?.percent ?? 0);
  const [maximumuse, setMaximumuse] = useState<number>(discountCode?.maximumuse ?? 0);
  const [active, setActive] = useState<boolean>(discountCode?.isActive ?? false);

  const emptyTextField = () => {
    setCode('');
    setPercent(0);
    setMaximumuse(0);
    setActive(false);
  }

  const submitDiscountCode = (event: HTMLButtonElement) => {
    console.log(event);
    emptyTextField();
  }

  return (
    <>
      <form className="mt-8">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <TextField value={code} onChange={() => setCode} variant="outlined" label={<Typography variant="body1">Code</Typography>} />
          <TextField value={percent} onChange={() => setPercent} variant="outlined" label={<Typography variant="body1">Percent</Typography>} />
          <TextField value={maximumuse} onChange={() => setMaximumuse} variant="outlined" label={<Typography variant="body1">Maximumuse</Typography>} />
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={active} color="primary" />} label="Active" />
          </FormGroup>
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="contained" onClick={() => submitDiscountCode} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}