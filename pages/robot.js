
import fetch from 'isomorphic-unfetch'


const Robot = (props)=>(
    <div>
       <h1>{props.robot.name}</h1>
       <p>username:{props.robot.username}</p>
       <p>{props.robot.email}</p>
       <p><i>{props.robot.company.catchPhrase}</i></p>
    </div>
)

Robot.getInitialProps = async function (context) {
    const {id} = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const robot= await res.json()

    return {
        robot
    }
}

export default Robot;