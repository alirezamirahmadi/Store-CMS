import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { ProductType } from "../../../type/ProductType";
import Modal from "../../modal/Modal";
import ProductModify from "../productModify/ProductModify";

export default function ModifyButton({ rowData }: { value: string, onChange: (event: any) => void, rowData: ProductType }): React.JSX.Element {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleEdit = () => {
    setShowEditModal(true);
  }

  const handleDelete = () => {
    setShowDeleteModal(true);
  }

  const deleteProduct = () => {

  }

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  }

  return (
    <>
      <IconButton color="primary" onClick={handleEdit} title="Edit">
        <AppRegistrationIcon />
      </IconButton>
      <IconButton color="primary" onClick={handleDelete} title="Delete">
        <DeleteIcon />
      </IconButton>
      {showEditModal && <Modal title='Modify Product' children={<ProductModify product={rowData} />} buttons={[{ id: '1', title: 'Cancel', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete Product" message={`Are you sure you want to delete "${rowData.title}" ?`} buttons={[{ id: '1', title: 'Cancel', onClick: closeModal }, { id: '2', title: 'Delete', variant: 'outlined', onClick: deleteProduct }]} />}
    </>
  )
}