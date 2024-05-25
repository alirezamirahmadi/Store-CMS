import { useState } from 'react';
import { Divider, Alert } from '@mui/material';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import ProductModify from "../../components/product/productModify/ProductModify";
import { useMutationProduct, useQueryProduct } from '../../hooks/ProductHook';
import { ProductType } from '../../type/ProductType';
import ModifyButtons from '../../components/global/modifyButtons/ModifyButtons';
import Modal from '../../components/modal/Modal';
import Loading from '../../components/global/loading/Loading';

export default function Products(): React.JSX.Element {

  const { data: ProductData, isLoading, isFetching, isError } = useQueryProduct();
  const { mutate: DeleteProduct } = useMutationProduct('DELETE');
  const [rowData, setRowData] = useState<ProductType>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    { field: { title: 'image' }, label: 'Image', kind: 'image' },
    { field: { title: 'title' }, label: 'Title' },
    {
      field: { title: 'category' }, label: 'Category', kind: 'component', options: {
        component: (value) => (<span>{value.title}</span>)
      }
    },
    { field: { title: 'price' }, label: 'Price' },
    { field: { title: 'stock' }, label: 'Stock' },
    {
      field: { title: 'modify' }, label: 'Modify', kind: 'component', options: {
        component: (value, onChange, rowData) => (<ModifyButtons value={value} onChange={(event: any) => onChange && onChange(event.target.value)} rowData={rowData} handleAction={handleAction} />)
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
    closeModal();

    rowData && DeleteProduct(rowData);
  }

  if (isLoading || isFetching) {
    return (<div className='mt-20'><Loading /></div>)
  }

  if (isError) {
    return (<Alert variant="filled" severity="error">Server not available</Alert>)
  }

  return (
    <>
      <ProductModify />
      <Divider sx={{ my: '20px', width: '90%', mx: 'auto' }} />
      <ReactDataTable rows={ProductData ?? []} columns={columns} />
      {showEditModal && <Modal title='Modify Product' children={<ProductModify product={rowData} closeModal={() => closeModal()} />} buttons={[{ id: '1', title: 'Close', variant: 'outlined', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete Product" message={`Are you sure you want to delete "${rowData?.title}" ?`} buttons={[{ id: '1', title: 'Cancel', variant: 'outlined', onClick: closeModal }, { id: '2', title: 'Delete', color: 'error', onClick: deleteProduct }]} />}
    </>
  )
}