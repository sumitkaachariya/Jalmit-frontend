
import { useState } from 'react'
import './home.css'

const Home = () => {
    const [Isshow, setIsshow] = useState(false)

    const clickMe = () => {
        alert("Click me.")
        setIsshow(!Isshow)
    }
    return(
        <div className='red'>
            <h1>Home page</h1>
            <button onClick={clickMe}>Click Me</button>
            {Isshow && <h2>Heloo this is h2</h2>}
        </div>
    )
}

export default Home