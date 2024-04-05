import { useState } from "react";
import { Divider } from "@mui/material";
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import DiscountCodeModify from "../../components/discountCode/discountCodeModify/DiscountCodeModify";
import Modal from "../../components/modal/Modal";
import ModifyButtons from "../../components/global/modifyButtons/ModifyButtons";
import type { DiscountCodesType } from "../../type/DiscountCodesType";
import { DiscountCodesData } from "../../assets/data/Data";

export default function DiscountCodes ():React.JSX.Element {

  const [rowData, setRowData] = useState<DiscountCodesType>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    { field: { title: 'code' }, label: 'Code' },
    { field: { title: 'percent' }, label: 'Percent' },
    { field: { title: 'maximumuse' }, label: 'Maximumuse' },
    { field: { title: 'used' }, label: 'Used' },
    {
      field: { title: 'modify' }, label: 'Modify', kind: 'component', options: {
        component: (value, onChange, rowData) => (<ModifyButtons value={value} onChange={(event: any) => onChange && onChange(event.target.value)} rowData={rowData} handleAction={handleAction} />)
      }
    },
  ]

  const handleAction = (data: DiscountCodesType, action: string) => {
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

  return(
    <>
      <DiscountCodeModify />
      <Divider sx={{ my: '20px', width: '90%', mx: 'auto' }} />
      <ReactDataTable rows={DiscountCodesData} columns={columns} />
      {showEditModal && <Modal title='Modify Product' children={<DiscountCodeModify discountCode={rowData} />} buttons={[{ id: '1', title: 'Cancel', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete Product" message={`Are you sure you want to delete "${rowData?.code}" ?`} buttons={[{ id: '1', title: 'Cancel', variant: 'outlined', onClick: closeModal }, { id: '2', title: 'Delete', color:'error', onClick: deleteProduct }]} />}
    </>
  )
}