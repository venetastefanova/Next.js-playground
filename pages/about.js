import Link from 'next/link';
import Image from '../components/image';

const About = () => {
    return (
        <div style={{fontSize:'20px', color: "pink"}}>
            <h1>About</h1>
            <Link href="/">
                <button>Back</button>
            </Link>
            <Image/>
            <p>best thing ever</p>
        </div>
    )
}

export default About;