function BarChart() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Bar Chart</h2>
            <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome to the dashboard!</p>
            <BarChart />
        </div>
    );
}