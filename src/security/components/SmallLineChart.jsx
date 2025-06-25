import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

export default function MiniLineChart({ data, tooltipLabel }) {
  return (
    <div className="small-chart flex">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="day" hide />
          <Line type="linear" dataKey="value" stroke="#ff5c38" strokeWidth={1.5} dot={false} />
          <Tooltip
            cursor={{ stroke: '#545454', strokeWidth: 1 }}
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;

              const formattedDate = formatLabelDate(label);

              return (
                <div className="chart-tooltip f-col g12">
                  <p className="tooltip-heading">{formattedDate}</p>
                  <div className="f-row g8">
                    <div className="tooltip-key"></div>
                    <p className="tool-tip-label">
                      {tooltipLabel} <span>{payload[0].value}</span>
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function formatLabelDate(label) {
  if (typeof label !== 'string') return '';
  const [day, month] = label.split('/');
  const date = new Date(2024, parseInt(month, 10) - 1, parseInt(day, 10));
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long'
  });
}
