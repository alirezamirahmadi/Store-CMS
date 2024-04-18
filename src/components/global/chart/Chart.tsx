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
      <Typography variant='h5' sx={{ mt: '16px', textAlign: 'center', fontWeight: '600' }}>{title}</Typography>
      <div className="h-96">
        <ResponsiveContainer>
          <LineChart width={700} height={250} data={data} >
            <Line type='monotone' dataKey={dataKeyY} stroke={theme.palette.primary.main} yAxisId={0} />
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