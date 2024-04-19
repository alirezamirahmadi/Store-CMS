import { ReactNode } from 'react';
import { List, ListItem, Divider, ListItemText, ListItemIcon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CancelIcon from '@mui/icons-material/Cancel';

import { OrderType } from "../../../type/OrderType";

export default function OrderWidget({ order }: { order: OrderType }) {
  let icon: ReactNode;
  switch (order.status) {
    case 'Delivered':
      icon = <CheckCircleIcon color='success' />;
      break;
    case 'In process':
      icon = <AccountTreeIcon color='warning' />
      break;
    case 'Canceled':
      icon = <CancelIcon color='error' />
      break
  }
  return (
    <>
      <div>
        <List>
          <Divider />
          <ListItem>
            <ListItemText primary={order.code} />
            <ListItemText primary={order.orderDate} />
            <ListItemText primary={order.price + '$'} />
            <ListItemIcon>{icon}</ListItemIcon>
          </ListItem>
        </List>
      </div>
    </>
  )
}