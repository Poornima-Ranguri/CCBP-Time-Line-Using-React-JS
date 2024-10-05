import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" width={500} height={300} />
      <div className="project-heading-container">
        <h1>{projectTitle}</h1>
        <div className="duartiom">
          <AiFillCalendar className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>

      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
