import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Dummy data for upcoming meetings
const upcomingMeetings = [
  { id: 1, title: 'Team Standup', date: '2023-04-15', time: '09:00', platform: 'Zoom' },
  { id: 2, title: 'Project Review', date: '2023-04-16', time: '14:00', platform: 'Microsoft Teams' },
  { id: 3, title: 'Client Presentation', date: '2023-04-17', time: '11:00', platform: 'Google Meet' },
];

// MeetingList component to display upcoming AI-attended meetings
const MeetingList: React.FC = () => {
  return (
    <div className="space-y-4">
      {upcomingMeetings.map(meeting => (
        <Card key={meeting.id}>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">{meeting.title}</h3>
            <div className="mt-2 text-sm text-muted-foreground">
              <p>{meeting.date} at {meeting.time}</p>
              <p>Platform: {meeting.platform}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MeetingList;