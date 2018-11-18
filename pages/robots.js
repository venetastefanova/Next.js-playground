import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Robots = (props) => {
    return (
        <div> 
            <h1>Robots</h1>
            <Link href="/">
                <button>Home</button>
            </Link>

            <div>
                {
                    props.robots.map(robot=>(
                        <li key={robot.id}>
                            <Link href={`robot/${robot.id}`}>
                                  <a>{robot.name}</a>
                            </Link>
                           
                        </li>
                    ))
                }
            </div>
        </div>
    
    )      
}

// addng method
Robots.getInitialProps = async function(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json(); // since it uses await we dont need .then()

    return {
        robots:data // makes robots to be data and passing t as props
    }
}
export default Robots;