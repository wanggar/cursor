import React from 'react';

// Dummy data for upcoming meetings
const upcomingMeetings = [
  { id: 1, title: 'Team Standup', date: '2023-04-15', time: '09:00', platform: 'Zoom' },
  { id: 2, title: 'Project Review', date: '2023-04-16', time: '14:00', platform: 'Microsoft Teams' },
  { id: 3, title: 'Client Presentation', date: '2023-04-17', time: '11:00', platform: 'Google Meet' },
];

// MeetingList component to display upcoming AI-attended meetings
const MeetingList: React.FC = () => {
  return (
    <ul className="space-y-4">
      {upcomingMeetings.map(meeting => (
        <li key={meeting.id} className="border p-4 rounded shadow">
          <h3 className="font-semibold">{meeting.title}</h3>
          <p>Date: {meeting.date}</p>
          <p>Time: {meeting.time}</p>
          <p>Platform: {meeting.platform}</p>
        </li>
      ))}
    </ul>
  );
};

export default MeetingList;