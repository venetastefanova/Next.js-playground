import Link from 'next/link';
import Robots from './robots';

const Index = () => (
    <div>
        <h1>Server Side rendering with React playground</h1>
        <Link href="./about">
            <button>About</button>
        </Link>
        <Link href="./robots">
            <button>Robots</button>
        </Link>
    </div>
)

export default Index;