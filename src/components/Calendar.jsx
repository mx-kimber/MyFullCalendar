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
        // Cool right!? Now check out these views:
        initialView={"listDay"}
        
        // initialView={"dayGrid"}
        // initialView={"timeGridDay"}

        // import another plugin 
        //    1. terminal: npm install @fullcalendar/list
        //    2. import listPlugin into this component (see imports)
        //    3. add the plugin to plugins
        //    4. set initialView to either of these: listDay, listWeek,
        //       listMonth, or listYear.
        
        // for the full list of plugins: https://fullcalendar.io/docs/plugin-index
      />
    </div>
  )
}

export default Calendar