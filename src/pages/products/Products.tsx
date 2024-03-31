import { Divider } from '@mui/material';
import ReactDataTable from 'react-datatable-responsive';
import type { ColumnType } from "react-datatable-responsive";

import ProductModify from "../../components/product/productModify/ProductModify";
import { ProductData } from '../../assets/data/Data';
import ModifyButton from '../../components/product/modifyButton/ModifyButton';

const columns: ColumnType[] = [
  { field: { title: 'id' }, label: 'ID', options: { display: false } },
  { field: { title: 'image' }, label: 'Image', kind: 'image' },
  { field: { title: 'title' }, label: 'Title' },
  { field: { title: 'category.title' }, label: 'Category' },
  { field: { title: 'price' }, label: 'Price' },
  { field: { title: 'stock' }, label: 'Stock' },
  {
    field: { title: 'modify' }, label: 'Modify', kind: 'component', options: {
      component: (rowData) => (<ModifyButton rowData={rowData} />)
    }
  },
]


export default function Products(): React.JSX.Element {

  return (
    <>
      <ProductModify />
      <div className="container mx-auto">

        <Divider sx={{ my: '20px' }} />
      </div>
      <ReactDataTable rows={ProductData} columns={columns} />
    </>
  )
}