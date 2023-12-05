import { useEffect, useState } from 'react';

interface HistoryPageProps {
    userId: string;
}

function History({ userId }: HistoryPageProps) {
    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('upload_time');
    const [filter, setFilter] = useState('');
    const pageSize = 10;

    useEffect(() => {
        fetch(`/history/${userId}?page=${page}&pageSize=${pageSize}&sort=${sort}&filter=${filter}`)
            .then(response => response.json())
            .then(data => setHistory(data));
    }, [userId, page, sort, filter]);

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="m-auto max-w-screen-lg p-4">
            <h1 className="my-4 text-2xl font-bold">User History</h1>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter by file name" className="my-4 p-2 w-full border border-gray-300 rounded" />
            <div className="text-right">
                <button onClick={() => setSort('upload_time')} className="my-4 mr-2 p-2 bg-blue-500 text-white rounded">Sort by upload time</button>
                <button onClick={() => setSort('file_name')} className="my-4 ml-2 p-2 bg-blue-500 text-white rounded">Sort by file name</button>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table-auto border-collapse w-full">
                    <thead>
                    <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontSize: '0.9674rem'}}>
                        <th className="px-4 py-2 bg-gray-200 " style={{backgroundColor:'#f8f8f8'}}>File Name</th>
                        <th className="px-4 py-2 " style={{backgroundColor:'#f8f8f8'}}>Upload Time</th>
                        <th className="px-4 py-2 " style={{backgroundColor:'#f8f8f8'}}>Results</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-gray-700">
                    {history.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                            <td className="px-4 py-4">{item.file_name}</td>
                            <td className="px-4 py-4">{new Date(item.upload_time).toLocaleString()}</td>
                            <td className="px-4 py-4">{item.results}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={prevPage} className="p-2 bg-blue-500 text-white rounded" disabled={page === 1}>Previous Page</button>
                <div>Page {page}</div>
                <button onClick={nextPage} className="p-2 bg-blue-500 text-white rounded">Next Page</button>
            </div>
        </div>
    );
}

export default History;