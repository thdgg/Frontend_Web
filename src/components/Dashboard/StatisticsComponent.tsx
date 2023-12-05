import React from "react";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    // Add more data here
];
const StatisticsComponent: React.FC = () => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <div className="mt-8">
                <BarChart width={500} height={300} data={data} className="mx-auto">
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="uv" fill="#3182ce" />
                </BarChart>
            </div>
            <table className="w-full bg-white border border-gray-300 divide-y divide-gray-300 mt-4">
                <thead>
                <tr>
                    <th className="px-4 py-2">Page</th>
                    <th className="px-4 py-2">UV</th>
                    <th className="px-4 py-2">PV</th>
                    <th className="px-4 py-2">AMT</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.uv}</td>
                        <td className="border px-4 py-2">{item.pv}</td>
                        <td className="border px-4 py-2">{item.amt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StatisticsComponent;