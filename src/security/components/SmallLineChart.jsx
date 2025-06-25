import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function MiniLineChart({ data }) {
  return (
    <div style={{ width: '100%', height: 50 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#ff5c38" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
