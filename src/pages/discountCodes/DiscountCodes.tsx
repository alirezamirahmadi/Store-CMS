import { useState } from "react";
import { Alert, Divider } from "@mui/material";
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import DiscountCodeModify from "../../components/discountCode/discountCodeModify/DiscountCodeModify";
import Modal from "../../components/modal/Modal";
import ModifyButtons from "../../components/global/modifyButtons/ModifyButtons";
import type { DiscountCodesType } from "../../type/DiscountCodesType";
import { useQueryDiscountCount, useMutationDiscountCode } from "../../hooks/DiscountCodeHook";
import Loading from "../../components/global/loading/Loading";

export default function DiscountCodes(): React.JSX.Element {

  const { data: DiscountCodeData, isLoading, isFetching, isError } = useQueryDiscountCount();
  const { mutate: DeleteDiscountCode } = useMutationDiscountCode('DELETE');
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
    closeModal();
    rowData && DeleteDiscountCode(rowData);
  }

  if (isLoading || isFetching) {
    return (<div className="mt-20"><Loading /></div>)
  }

  if (isError) {
    return (<Alert variant="filled" severity="error">Server not available</Alert>)
  }

  return (
    <>
      <DiscountCodeModify />
      <Divider sx={{ my: '20px', width: '90%', mx: 'auto' }} />
      <ReactDataTable rows={DiscountCodeData} columns={columns} />
      {showEditModal && <Modal title='Modify Product' children={<DiscountCodeModify discountCode={rowData} closeModal={() => closeModal()}/>} buttons={[{ id: '1', title: 'Close', variant: 'outlined', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete Product" message={`Are you sure you want to delete "${rowData?.code}" ?`} buttons={[{ id: '1', title: 'Cancel', variant: 'outlined', onClick: closeModal }, { id: '2', title: 'Delete', color: 'error', onClick: deleteProduct }]} />}
    </>
  )
}