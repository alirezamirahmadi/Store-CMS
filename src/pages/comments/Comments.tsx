import { useState } from 'react';
import { Alert } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import Modal from '../../components/modal/Modal';
import Loading from '../../components/global/loading/Loading';
import ModifyButtons from '../../components/global/modifyButtons/ModifyButtons';
import CommentModify from '../../components/comment/commentModify/CommentModify';
import { CommentType } from '../../type/CommentType';
import { useMutationComment, useQueryComment } from '../../hooks/CommentHook';

export default function Comments(): React.JSX.Element {

  const { data: CommentData, isLoading, isFetching, isError } = useQueryComment();
  const { mutate: DeleteComment } = useMutationComment('DELETE');
  const [rowData, setRowData] = useState<CommentType>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    {
      field: { title: 'creator' }, label: 'Name', kind: 'component', options: {
        component: (value) => (<span>{value.firstName} {value.lastName}</span>)
      }
    },
    { field: { title: 'content' }, label: 'Content' },
    { field: { title: 'date' }, label: 'Date' },
    { field: { title: 'time' }, label: 'Time' },
    {
      field: { title: 'isAccepted' }, label: 'Accepted', kind: 'component', options: {
        component: (value) => (value ? <DoneAllIcon color='primary' /> : <div></div>)
      }
    },
    {
      field: { title: 'modify' }, label: 'Modify', kind: 'component', options: {
        component: (value, onChange, rowData) => (<ModifyButtons value={value} onChange={(event: any) => onChange && onChange(event.target.value)} rowData={rowData} handleAction={handleAction} />)
      }
    },
  ]

  const handleAction = (data: CommentType, action: string) => {
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

  const deleteComment = () => {
    closeModal();
    rowData && DeleteComment(rowData);
  }

  if (isLoading || isFetching) {
    return (<div className='mt-20'><Loading /></div>)
  }

  if (isError) {
    return (<Alert variant="filled" severity="error">Server not available</Alert>)
  }

  return (
    <>
      <div className="mt-8"></div>
      <ReactDataTable rows={CommentData} columns={columns} />
      {showEditModal && <Modal title='View Comment' children={<CommentModify comment={rowData} closeModal={() => closeModal()} />} buttons={[{ id: '1', title: 'Close', variant: 'outlined', onClick: closeModal }]} />}
      {showDeleteModal && <Modal title="Delete Comment" message={`Are you sure you want to delete "${rowData?.content}" ?`} buttons={[{ id: '1', title: 'Cancel', variant: 'outlined', onClick: closeModal }, { id: '2', title: 'Delete', color: 'error', onClick: deleteComment }]} />}
    </>
  )
}