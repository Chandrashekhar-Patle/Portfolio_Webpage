import { useState } from "react";
import "../index.css"
// import ProjectApi from "./ProjectApi.js";

const Project = ({ ProjectApi }) => {

    // const [apiData, setApiData] = useState(ProjectApi);
    console.log(ProjectApi);


    return (
        <>
            <div className="Project-file">
                <h1> Project's</h1>
                {ProjectApi.map((curElem) => {

                    return (
                        <div className="Project-Section">
                            <img src={curElem.image} alt=" Project Images" />

                            <h2 className="Title-Name">{curElem.title}</h2>
                            <p className="description">{curElem.desc}
                            </p>
                            <label>Technologies/Frameworks used:-</label>
                            <p className="technos">- {curElem.technology}</p>
                            <button type="button"><a href={curElem.project_link}>Project Link</a></button>
                        </div>
                    )

                })

                }
            </div>

        </>
    )
}

export default Project;