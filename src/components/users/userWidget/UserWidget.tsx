import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

import { UserType } from '../../../type/UserType';

export default function UserWidget({ user }: { user: UserType }) {
  return (
    <>
      <div>
        <List>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={user.firstName} src={user.image} />
            </ListItemAvatar>
            <ListItemText primary={user.firstName} secondary={user.email} />
          </ListItem>
        </List>
      </div>
    </>
  )
}