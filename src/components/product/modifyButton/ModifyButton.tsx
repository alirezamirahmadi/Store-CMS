import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { ProductType } from "../../../type/ProductType";

export default function ModifyButton({ rowData }: { rowData: ProductType }): React.JSX.Element {
  
  const handleEdit = () =>{
    console.log(rowData);
  }

  const handleDelete = () =>{
    console.log(rowData);
  }
  
  return (
    <>
      <IconButton color="primary" onClick={handleEdit} title="Edit">
        <AppRegistrationIcon />
      </IconButton>
      <IconButton color="primary" onClick={handleDelete} title="Delete">
        <DeleteIcon />
      </IconButton>
    </>
  )
}