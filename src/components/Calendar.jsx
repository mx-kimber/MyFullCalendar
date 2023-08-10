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
        // now add a header for the calendar 
        headerToolbar={{
          start: 'prev ,today, next',  // notice the use of the commas, switch them around a bit and see what happens! try:
          // start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth timeGridWeek timeGridDay' // take the commas out completely
        }}
      />
    </div>
  )
}

export default Calendar

// FullCalendar documentation on the headerToolbar: https://fullcalendar.io/docs/headerToolbar