import {
    useTranslate,
    useRecordContext,
    useListContext,
    useRedirect,
} from 'react-admin';
import { Category, Course, Exercise, Topic } from '../types';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useMemo } from 'react';
import randomColor from 'randomcolor'

const localizer = momentLocalizer(moment);
const ExerciseCalendar = () => {
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

    var events = data.map((exercise : Exercise) =>{
        return {id : exercise.id, start : moment(Date.parse(exercise.startDate)).toDate(), end : moment(Date.parse(exercise.endDate)).toDate(), title: exercise.name, color: randomColor()}
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
          onDoubleClickEvent={(e) => redirect('show','exercise', e.id)}
          style={{ height: "60vh" }}
        />
      </div>
    </>
    )

};


export default ExerciseCalendar;
