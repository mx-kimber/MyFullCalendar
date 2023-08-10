import React from 'react'

// import the FullCalender Plugins 
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


function Calendar() {
  return (
    <div>
      <FullCalendar
        // pass in the plugins
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        // set initialView - what you want your index.html to look like when you first load the component
        initialView={"dayGridMonth"}
        // now check your index page to see the calender show in month format
      />
    </div>
  )
}

export default Calendar