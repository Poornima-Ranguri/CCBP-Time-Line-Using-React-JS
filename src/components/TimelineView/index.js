import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="home">
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <Chrono items={timelineItemsList} textOverlay mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimeLineCard
                key={eachItem.categoryId}
                courseDetails={eachItem}
              />
            )
          }
          return (
            <ProjectTimeLineCard
              key={eachItem.categoryId}
              projectDetails={eachItem}
            />
          )
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
