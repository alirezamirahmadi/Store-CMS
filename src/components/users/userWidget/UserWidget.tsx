import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

import { UserType } from '../../../type/UserType';

export default function UserWidget({ user }: { user: UserType }) {
  return (
    <>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={user.firstName} src={user.image} />
            </ListItemAvatar>
            <ListItemText primary={user.firstName + ' ' + user.lastName} secondary={user.city} />
            <ListItemText primary={user.phone} secondary={user.email} />
          </ListItem>
          <Divider variant="inset" />
        </List>
      </div>
    </>
  )
}