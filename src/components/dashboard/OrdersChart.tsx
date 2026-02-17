'use client'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const chartData = [
  { date: 'Jan 1', orders: 0, confirmed: 0, shipped: 0 },
  { date: 'Jan 2', orders: 0, confirmed: 0, shipped: 0 },
  { date: 'Jan 3', orders: 0, confirmed: 0, shipped: 0 },
  { date: 'Jan 4', orders: 0, confirmed: 0, shipped: 0 },
  { date: 'Jan 5', orders: 0, confirmed: 0, shipped: 0 },
  { date: 'Jan 6', orders: 0, confirmed: 0, shipped: 0 },
  { date: 'Jan 7', orders: 0, confirmed: 0, shipped: 0 },
]

export function OrdersChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
        <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
          labelStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#0097B2"
          strokeWidth={2}
          name="Total Orders"
          dot={{ fill: '#0097B2', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="confirmed"
          stroke="#7ED957"
          strokeWidth={2}
          name="Confirmed"
          dot={{ fill: '#7ED957', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="shipped"
          stroke="#06B6D4"
          strokeWidth={2}
          name="Shipped"
          dot={{ fill: '#06B6D4', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
