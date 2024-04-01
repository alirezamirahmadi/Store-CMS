import { useState } from "react";
import { TextField, Typography, Button, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import { ProductCategoryData } from "../../../assets/data/Data";
import { ProductType } from "../../../type/ProductType";

export default function ProductModify({product}:{product?:ProductType}):React.JSX.Element {
  // const [bindingImage, setImage, resetImage] = useInputValue();


  const [title, setTitle] = useState<string>(product?.title ?? '');
  const [category, setCategory] = useState<string>(product?.category.id ?? '');
  // const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<number>(product?.price ?? 0);
  const [stock, setStock] = useState<number>(product?.stock ?? 0);

  const emptyTextField = () => {
    setTitle('');
    setPrice(0);
    setStock(0);
  }

  const handleChangeSection = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  }

  const submitProduct = (event: HTMLButtonElement) => {
    console.log(event);
    emptyTextField();
  }

  return (
    <>
      <form className="mt-8">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <TextField value={title} onChange={() => setTitle} variant="outlined" label={<Typography variant="body1">Product Name</Typography>} />
          <TextField value={price} onChange={() => setPrice} variant="outlined" label={<Typography variant="body1">Price</Typography>} />
          <TextField value={stock} onChange={() => setStock} variant="outlined" label={<Typography variant="body1">Stock</Typography>} />
          <Select value={category} label="Section" onChange={handleChangeSection}>
            {
              ProductCategoryData.map(category => (

                <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
              ))
            }
          </Select>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
          <Button variant="contained" component="label" startIcon={<AttachFileOutlinedIcon />}>
            Upload File
            <input type="file" hidden />
          </Button>
          <Button variant="contained" onClick={() => submitProduct} startIcon={<KeyboardArrowUpOutlinedIcon />}>Submit</Button>
        </div>
      </form>
    </>
  )
}