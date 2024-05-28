
import { Box, Typography, useTheme } from '@mui/material'

import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import { HomeCardType } from '../../../type/HomeType';

export default function HomeCard({ title, value, icon, changeRate, description }: HomeCardType): React.JSX.Element {

  const theme = useTheme();

  return (
    <>
      <Box sx={{ bgcolor: theme.palette.primary.main, color:theme.palette.secondary.contrastText, p: '16px', textAlign: 'center', borderRadius: '10px', minWidth: '250px', maxWidth: '450px', boxShadow: '', display:'flex', alignItems:'center' }}>
        <img src={icon} alt={title} className='w-20 h-20 me-8'/>
        <div>
          <Typography variant='h5' sx={{ fontWeight: '600' }}>{title}</Typography>
          <div className="flex gap-8 my-4 justify-center">
            <Typography variant='h6' sx={{ fontWeight: '600' }}>{value} $</Typography>
            <Typography variant='body1' sx={{ fontWeight: '600', display: 'flex', alignItems: 'center' }}>
              {changeRate}
              {changeRate > 0 ? <NorthOutlinedIcon /> : <SouthOutlinedIcon />}
            </Typography>
          </div>
          <Typography variant='body1'>
            {description}
          </Typography>
        </div>
      </Box>
    </>
  )
}