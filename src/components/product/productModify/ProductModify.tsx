import { useState } from "react";
import { TextField, Typography, Button, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, SelectChangeEvent } from "@mui/material";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useForm } from 'react-hook-form';

import { ProductCategoryData } from "../../../assets/data/Data";
import { ProductType } from "../../../type/ProductType";

export default function ProductModify({ product }: { product?: ProductType }): React.JSX.Element {

  const [category, setCategory] = useState<string>(product?.category.id ?? '1');
  const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      title: product?.title,
      price: product?.price,
      stock: product?.stock,
      active: product?.isActive,
    }
  });

  const submitProduct = (data: any) => {
    console.log(data);
    reset();
  }

  const handleChangeSection = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  }

  return (
    <>
      <form className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <TextField {...register('title', { required: true })} error={errors.title ? true : false} required helperText={errors.title && 'Title is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Product Name</Typography>} />
          <TextField {...register('price', { required: true })} error={errors.price ? true : false} required helperText={errors.price && 'Price is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Price</Typography>} />
          <TextField {...register('stock', { required: true })} error={errors.stock ? true : false} required helperText={errors.stock && 'Stock is required.'} variant="outlined" label={<Typography variant="body1" sx={{ display: 'inline' }}>Stock</Typography>} />
          <Select value={category} label="Category" onChange={handleChangeSection} sx={{ height: 56 }}>
            {
              ProductCategoryData.map(category => (
                <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
              ))
            }
          </Select>
          <FormGroup>
            <FormControlLabel control={<Checkbox {...register('active')} checked={getValues('active')} color="primary" />} label="Active" />
          </FormGroup>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
          <Button variant="contained" component="label" startIcon={<AttachFileOutlinedIcon />}>
            Upload File
            <input type="file" hidden />
          </Button>
          <Button variant="contained" onClick={handleSubmit(submitProduct)} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}