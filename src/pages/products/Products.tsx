import { useState } from 'react';
import { Divider } from '@mui/material';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import ProductModify from "../../components/product/productModify/ProductModify";
import { ProductData } from '../../assets/data/Data';
import { ProductType } from '../../type/ProductType';
import ModifyButton from '../../components/global/modifyButtons/ModifyButtons';
import Modal from '../../components/modal/Modal';

export default function Products(): React.JSX.Element {

  const [rowData, setRowData] = useState<ProductType>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    { field: { title: 'image' }, label: 'Image', kind: 'image' },
    { field: { title: 'title' }, label: 'Title' },
    { field: { title: 'category.title' }, label: 'Category' },
    { field: { title: 'price' }, label: 'Price' },
    { field: { title: 'stock' }, label: 'Stock' },
    {
      field: { title: 'modify' }, label: 'Modify', kind: 'component', options: {
        component: (value, onChange, rowData) => (<ModifyButton value={value} onChange={(event: any) => onChange && onChange(event.target.value)} rowData={rowData} handleAction={handleAction} />)
      }
    },
  ]

  const handleAction = (data: ProductType, action: string) => {
    setRowData(data);
    switch (action) {
      case 'Edit':
        setShowEditModal(true);
        break;
      case 'Delete':
        setShowDeleteModal(true);
        break;
    }
  }

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  }

  const deleteProduct = () => {

  }

  return (
    <>
      <ProductModify />
      <Divider sx={{ my: '20px', width: '90%', mx: 'auto' }} />
      <ReactDataTable rows={ProductData} columns={columns} />
      {showEditModal && <Modal title='Modify Product' children={<ProductModify product={rowData} />} buttons={[{ id: '1', title: 'Cancel', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete Product" message={`Are you sure you want to delete "${rowData?.title}" ?`} buttons={[{ id: '1', title: 'Cancel', onClick: closeModal }, { id: '2', title: 'Delete', variant: 'outlined', onClick: deleteProduct }]} />}
    </>
  )
}