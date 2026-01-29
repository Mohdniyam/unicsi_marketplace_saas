'use client'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const chartData = [
  { date: 'Jan 1', orders: 100, confirmed: 80, shipped: 60 },
  { date: 'Jan 2', orders: 120, confirmed: 95, shipped: 70 },
  { date: 'Jan 3', orders: 110, confirmed: 88, shipped: 75 },
  { date: 'Jan 4', orders: 140, confirmed: 110, shipped: 85 },
  { date: 'Jan 5', orders: 130, confirmed: 105, shipped: 90 },
  { date: 'Jan 6', orders: 150, confirmed: 120, shipped: 100 },
  { date: 'Jan 7', orders: 160, confirmed: 130, shipped: 110 },
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
