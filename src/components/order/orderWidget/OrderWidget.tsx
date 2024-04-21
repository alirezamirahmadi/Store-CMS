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
          <ListItem>
            <ListItemText primary={order.code} secondary={order.orderDate} />
            <ListItemText primary={order.price + '$'} secondary={order.off + '$'}/>
            <ListItemIcon>{icon}</ListItemIcon>
          </ListItem>
          <Divider />
        </List>
      </div>
    </>
  )
}