import "./project.module.css"

const Project = ( {project : { title, description, url  }} ) => {
    return (
        <div className="project-container">
            <a className="project-link" href={url} target="_blank">{title}</a>
            <div className="project-description">{description}</div>
        </div>
    )
}

export default Project;