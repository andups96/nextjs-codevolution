import CounterComponent from "./counter";

export const metadata = {
    title: 'Counter',
    description: 'A simple counter application',
};

export default function Counter() {
    return (
        <div>
            <h1>Counter</h1>
            <p>This is a simple counter application.</p>
            <CounterComponent />
        </div>
    );
}