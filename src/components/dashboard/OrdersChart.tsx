'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const chartData = [
  { date: 'Jan 1', orders: 2400, confirmed: 2210, shipped: 2290 },
  { date: 'Jan 5', orders: 2210, confirmed: 2289, shipped: 2000 },
  { date: 'Jan 10', orders: 2290, confirmed: 2000, shipped: 2181 },
  { date: 'Jan 15', orders: 2000, confirmed: 2108, shipped: 2500 },
  { date: 'Jan 20', orders: 2108, confirmed: 2786, shipped: 2390 },
  { date: 'Jan 25', orders: 2786, confirmed: 2390, shipped: 2500 },
  { date: 'Feb 1', orders: 2390, confirmed: 2500, shipped: 2100 },
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
          stroke="#A0673D"
          strokeWidth={2}
          name="Total Orders"
          dot={{ fill: '#A0673D', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="confirmed"
          stroke="#D4A574"
          strokeWidth={2}
          name="Confirmed"
          dot={{ fill: '#D4A574', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="shipped"
          stroke="#8B5A3C"
          strokeWidth={2}
          name="Shipped"
          dot={{ fill: '#8B5A3C', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
