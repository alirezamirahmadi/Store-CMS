import { Typography } from '@mui/material';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import { OrderData } from "../../assets/data/Data";

export default function Orders(): React.JSX.Element {

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
  ]

  return (
    <>
      <div className="mt-8"></div>
      <ReactDataTable rows={OrderData} columns={columns} />
    </>
  )
}