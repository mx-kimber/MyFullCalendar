import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

function Calendar() {
  const [removeAfterDrop, setRemoveAfterDrop] = useState(false);

  useEffect(() => {
    const containerEl = document.getElementById('external-events');
  
    const draggable = new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: (eventEl) => ({
        title: eventEl.innerText,
      }),
    });
  
    return () => {
      draggable.destroy();
    };
  }, []);

  const handleDrop = (info) => {
    console.log("handlingDrop");
    if (removeAfterDrop) {
      info.draggedEl.parentNode.removeChild(info.draggedEl);
    }
  };

  const handleCheckboxChange = () => {
    setRemoveAfterDrop(!removeAfterDrop);
  };

  return (
    <div>
      <div id='external-events'>
        <p>
          <strong>Draggable Events</strong>
        </p>
        <div className='fc-event'>Event 1</div>
        <div className='fc-event'>Event 2</div>
        <div className='fc-event'>Event 3</div>
        <p>
          <input
            type='checkbox'
            id='remove-after-drop-checkbox'
            checked={removeAfterDrop}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='remove-after-drop-checkbox'>Remove after drop</label>
        </p>
      </div>
      <div id='calendar-container'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
          initialView='dayGridMonth'
          headerToolbar={{
            start: 'prev today next',
            center: 'title',
            end: 'dayGridMonth timeGridWeek timeGridDay',
          }}
          weekends={true}
          editable={true}
          drop={handleDrop}
        />
      </div>
    </div>
  );
}

export default Calendar;
