import {
    useTranslate,
    useRecordContext,
    useListContext,
    useRedirect,
} from 'react-admin';
import { Category, Course, Topic } from '../types';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMemo } from 'react';
import randomColor from 'randomcolor'

const localizer = momentLocalizer(moment);
const CourseCalendar = () => {
  const redirect = useRedirect();
    const {  defaultDate, views } = useMemo(
        () => ({
          
          defaultDate: new Date(),
          views: [Views.MONTH, Views.DAY, Views.AGENDA, Views.WEEK],
        }),
        []
      )
    const { data } = useListContext();
    const translate = useTranslate();

    var events = data.map((course : Course) =>{
        return {id : course.id, start : moment(Date.parse(course.startDate)).toDate(), end : moment(Date.parse(course.endDate)).toDate(), title: course.name, color: randomColor()}
    } )

    console.log(events);


    return (<>
         <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          views={views}
          eventPropGetter={(myEventsList) => {
            const backgroundColor = myEventsList.color ? myEventsList.color : 'blue';
            return { style: { backgroundColor } }
          }}
          events={events}
          onDoubleClickEvent={(e) => redirect('show','course', e.id)}
          style={{ height: "60vh" }}
        />
      </div>
    </>
    )

};


export default CourseCalendar;
