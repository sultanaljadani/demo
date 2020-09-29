import React , { useContext } from 'react'
import {DataContext} from '../DataProvider'
import './About.css'



export default function About() {
    const value1 = useContext(DataContext)
    const [about] = value1.about
    return (
        <div className="about">
            <h2 className="title-page">Team Awesome</h2>
            {
            about.map(about => (
                <ul className="card-list" key={about.__id}>
                    <li className="card-about">
                        <a className="card-img" href="/">
                            <img src={about.image[0]} alt="" />
                        </a>
                        <div className="card-description">
                            <h2>{about.name}</h2>
                            <p>{about.position}</p>
                        </div>
                    </li>
                </ul>
                ))
            }
        </div>
    )
}
