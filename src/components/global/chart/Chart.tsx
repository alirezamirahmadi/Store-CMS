import { useTheme, Typography } from '@mui/material';
import {
  Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from 'recharts'

import { ChartType } from "../../../type/HomeType";

export default function Chart({ data, dataKeyX, dataKeyY, title, grid }: ChartType) {

  const theme = useTheme();

  return (
    <>
      <div className="h-48 w-4/5">
      <Typography variant='h5' sx={{ mt: '16px', textAlign: 'center', fontWeight: '600', display:'block' }}>{title}</Typography>
        <ResponsiveContainer>
          <LineChart width={700} height={250} data={data} >
            <Line type='monotone' dataKey={dataKeyY} stroke={theme.palette.secondary.main} yAxisId={0} />
            <XAxis dataKey={dataKeyX} />
            <YAxis dataKey={dataKeyY} />
            <Tooltip />
            {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}