import React from 'react';
import EventCard from './EventCard';
import './EventsPage.css';

function EventsPage() {
  const events = [
    {
      id: 1,
      eventName: 'The Round Table Conference',
      date: '26/01/26',
      time: '18:00',
      description: 'Join industry leaders, entrepreneurs, and innovators for insightful discussions on the future of technology and business. This conference brings together diverse perspectives to address the challenges and opportunities in the modern tech landscape.'
    },
    {
      id: 2,
      eventName: 'PitchWave Arena',
      date: '27/01/26',
      time: '14:00',
      description: 'Watch emerging entrepreneurs pitch their groundbreaking ideas to a panel of investors and mentors. This is your chance to witness innovation in action and see how the next generation of startups are shaping the future.'
    },
    {
      id: 3,
      eventName: 'The Tech Forge Hackathon',
      date: '28/01/26',
      time: '09:00',
      description: 'A 24-hour coding marathon where developers, designers, and innovators collaborate to build solutions that matter. Form teams, tackle real-world problems, and compete for exciting prizes while learning from industry experts.'
    }
  ];

  return (
    <div className="events-page">
      {events.map((event) => (
        <EventCard
          key={event.id}
          eventName={event.eventName}
          date={event.date}
          time={event.time}
          description={event.description}
        />
      ))}
    </div>
  );
}

export default EventsPage;
