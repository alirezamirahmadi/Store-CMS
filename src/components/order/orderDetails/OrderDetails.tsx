import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import { OrderType } from '../../../type/OrderType';

export default function OrderDetails({ order }: { order?: OrderType }): React.JSX.Element {
  
  const columns: ColumnType[] = [
    { field: { title: 'id' }, label: 'ID', options: { display: false } },
    { field: { title: 'image' }, label: 'Image', kind: 'image' },
    { field: { title: 'title' }, label: 'Title' },
    { field: { title: 'category.title' }, label: 'Category' },
    { field: { title: 'price' }, label: 'Price' },
  ]

  return (
    <>
      <div className="mt-8"></div>
      <ReactDataTable rows={order?.details ?? []} columns={columns} />
    </>
  )
}