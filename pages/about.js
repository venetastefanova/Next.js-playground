import Link from 'next/link';

const About = () => {
    return (
        <div style={{fontSize:'20px', color: "pink"}}>
            <h1>About</h1>
            <Link href="/">
                <button>Back</button>
            </Link>
            <p>best thing ever</p>
        </div>
    )
}

export default About;