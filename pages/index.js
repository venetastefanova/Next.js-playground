import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Server Side rendering with React playground</h1>
        <Link href="./about">
            <button>About</button>
        </Link>

    </div>
)

export default Index;