import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan", value: 4000 },
  { date: "Fév", value: 3000 },
  { date: "Mar", value: 5000 },
  { date: "Avr", value: 2780 },
  { date: "Mai", value: 1890 },
  { date: "Jun", value: 2390 },
  { date: "Jul", value: 3490 },
  { date: "Aoû", value: 4000 },
  { date: "Sep", value: 3000 },
  { date: "Oct", value: 2000 },
  { date: "Nov", value: 2780 },
  { date: "Déc", value: 3890 },
];

export const TradingCharts = () => {
  return (
    <div className="w-full bg-[#1e293b] p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-white">Performance de Trading</h2>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="date" 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8' }}
            />
            <YAxis 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '0.5rem',
                color: '#fff'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#0ea5e9" 
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};