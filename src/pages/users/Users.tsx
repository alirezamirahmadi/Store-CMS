import { useState } from 'react';
import { Divider } from '@mui/material';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import UserModify from "../../components/users/userModify/UserModify";
import ModifyButtons from '../../components/global/modifyButtons/ModifyButtons';
import Modal from '../../components/modal/Modal';
import { UserType } from '../../type/UserType';
import { UserData } from '../../assets/data/Data';

export default function Users(): React.JSX.Element {
  const [rowData, setRowData] = useState<UserType>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    { field: { title: 'firstName' }, label: 'FirstName' },
    { field: { title: 'lastName' }, label: 'LastName' },
    { field: { title: 'city' }, label: 'City' },
    { field: { title: 'phone' }, label: 'Phone' },
    { field: { title: 'email' }, label: 'Email' },
    {
      field: { title: 'modify' }, label: 'Modify', kind: 'component', options: {
        component: (value, onChange, rowData) => (<ModifyButtons value={value} onChange={(event: any) => onChange && onChange(event.target.value)} rowData={rowData} handleAction={handleAction} />)
      }
    },
  ]

  const handleAction = (data: UserType, action: string) => {
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

  const deleteUser = () => {

  }

  return (
    <>
      <UserModify />
      <Divider sx={{ my: '20px', width: '90%', mx: 'auto' }} />
      <ReactDataTable rows={UserData} columns={columns} />
      {showEditModal && <Modal title='Modify User' children={<UserModify user={rowData} />} buttons={[{ id: '1', title: 'Close', variant:'outlined', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete User" message={`Are you sure you want to delete "${rowData?.firstName} ${rowData?.lastName}" ?`} buttons={[{ id: '1', title: 'Cancel', variant: 'outlined', onClick: closeModal }, { id: '2', title: 'Delete', color:'error', onClick: deleteUser }]} />}
    </>
  )
}