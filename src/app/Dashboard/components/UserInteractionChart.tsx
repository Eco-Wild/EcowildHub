/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';

// Sample data with different values for each bar
const data = [
  { month: 'Jan', interactions: 80 },
  { month: 'Feb', interactions: 40 },
  { month: 'Mar', interactions: 90 },
  { month: 'Apr', interactions: 50 },
  { month: 'May', interactions: 85 },
  { month: 'Jun', interactions: 65 },
  { month: 'Jul', interactions: 100 },
  { month: 'Aug', interactions: 75 },
  { month: 'Sept', interactions: 40 },
  { month: 'Oct', interactions: 70 },
  { month: 'Nov', interactions: 60 },
  { month: 'Dec', interactions: 50 },
];

// Colors to be used for the bars
const barColors = [
  '#228B22', // January
  '#1C2834', // February
  '#228B22', // March
  '#228B22', // April
  '#1C2834', // May
  '#228B22', // June
  '#228B22', // July
  '#1C2834', // August
  '#228B22', // September
  '#1C2834', // October
  '#228B22', // November
  '#228B22', // December
];

// Custom Tooltip to show data on hover
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className='custom-tooltip'
        style={{
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <p
          style={{ fontWeight: 'bold', margin: 0 }}
        >{`Month: ${payload[0].payload.month}`}</p>
        <p style={{ margin: 0 }}>{`Interactions: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const UserInteractionChart = () => {
  return (
    <section className='font-Montserrat pb-5'>
      <div className='p-5 text-tertiary-400 bg-white rounded-lg'>
        <h2 className='flex items-center gap-2 mt-4 mb-7 font-semibold'>
          {' '}
          <Icon
            icon='hugeicons:settings-03'
            className='w-5 h-5 font-extrabold'
          />
          User Interaction
        </h2>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            {/* Remove CartesianGrid (no grid lines) */}
            <CartesianGrid stroke='none' />

            {/* Remove X and Y Axis lines */}
            <XAxis
              dataKey='month'
              tick={{ fontSize: 14, fontWeight: 600, fill: '#4caf50' }}
              stroke='red'
              tickLine={false}
              axisLine={false} // Remove the axis line
              style={{ marginTop: 20 }} // Add margin to the top of the months
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#888' }}
              tickLine={false}
              axisLine={false} // Remove the axis line
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Bars with different colors */}
            <Bar
              dataKey='interactions'
              radius={[10, 10, 10, 10]} // Optional: rounded corners for the bars
              barSize={10} // Adjust the bar size as needed
              stroke='none' // Remove the border
            >
              {barColors.map((_, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default UserInteractionChart;
