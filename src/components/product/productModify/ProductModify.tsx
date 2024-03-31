import { useState } from "react";
import { TextField, Typography, Button, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import { ProductCategoryData } from "../../../assets/data/Data";

export default function ProductModify() {
  // const [bindingImage, setImage, resetImage] = useInputValue();


  const [title, setTitle] = useState<string>('');
  const [section, setSection] = useState<string>('');
  // const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [stock, setStock] = useState<string>('');

  // const emptyTextField = () => {
  //   setProductName('');
  //   setPrice('');
  //   setStock('');
  // }

  const handleChangeSection = (event: SelectChangeEvent) => {
    setSection(event.target.value as string);
  }

  const submitProduct = (event: HTMLButtonElement) => {
    console.log(event);
  }

  return (
    <>
      <form className="mt-8">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <TextField value={title} onChange={() => setTitle} variant="outlined" label={<Typography variant="body1">Product Name</Typography>} />
          <TextField value={price} onChange={() => setPrice} variant="outlined" label={<Typography variant="body1">Price</Typography>} />
          <TextField value={stock} onChange={() => setStock} variant="outlined" label={<Typography variant="body1">Stock</Typography>} />
          <Select value={section} label="Section" onChange={handleChangeSection}>
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