import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="heading-course-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-contianer">
        {tagsList.map(eachItem => (
          <li key={eachItem.id} className="item">
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
