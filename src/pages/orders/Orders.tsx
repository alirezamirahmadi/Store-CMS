import { useState } from 'react';
import { Alert, IconButton, Typography } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import { useQueryOrder } from '../../hooks/OrderHook';
import { OrderType } from '../../type/OrderType';
import OrderDetails from '../../components/order/orderDetails/OrderDetails';
import Modal from '../../components/modal/Modal';
import Loading from '../../components/global/loading/Loading';

export default function Orders(): React.JSX.Element {

  const { data: OrderData, isLoading, isFetching, isError } = useQueryOrder();
  const [rowData, setRowData] = useState<OrderType>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    { field: { title: 'code' }, label: 'Code' },
    { field: { title: 'orderDate' }, label: 'OrderDate' },
    {
      field: { title: 'status' }, label: 'Status', kind: 'component', options: {
        component: (value) => {
          let statusColor = 'text-black';
          switch (value) {
            case 'Delivered':
              statusColor = 'text-green-600'
              break;
            case 'In process':
              statusColor = 'text-yellow-500'
              break;
            case 'Canceled':
              statusColor = 'text-red-600'
              break;
          }
          return <Typography className={statusColor}>{value}</Typography>
        }
      }
    },
    { field: { title: 'price' }, label: 'Price' },
    { field: { title: 'off' }, label: 'Off' },
    {
      field: { title: 'details' }, label: 'Details', kind: 'component', options: {
        component: (value, onChange, rowData) => {
          const showDatils = () => {
            setShowEditModal(true);
            setRowData(rowData);
          }
          return <IconButton onClick={showDatils}><ViewInArIcon color='secondary' /></IconButton>
        }
      }
    },
  ]

  const closeModal = () => {
    setShowEditModal(false);
  }

  if (isLoading || isFetching) {
    return (<div className='mt-20'><Loading /></div>)
  }

  if (isError) {
    return (<Alert variant='filled' severity='error'>Server not available</Alert>)
  }

  return (
    <>
      <div className="mt-8"></div>
      <ReactDataTable rows={OrderData} columns={columns} />
      {showEditModal && <Modal title='Order Details' children={<OrderDetails order={rowData} />} buttons={[{ id: '1', title: 'Close', variant: 'outlined', onClick: closeModal }]} />}
    </>
  )
}