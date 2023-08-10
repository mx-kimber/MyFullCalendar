import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

function Calendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: 'prev ,today, next',
          center: 'title',
          end: 'dayGridMonth timeGridWeek timeGridDay' 
        }}
        //for fun, let's set the height and turn the weekend view off
        height={"80vh"}
        weekends={false}
      />
    </div>
  )
}

export default Calendar

// FullCalendar documentation https://fullcalendar.io/docs#toc