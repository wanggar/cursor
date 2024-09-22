import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// MeetingScheduler component for scheduling AI-attended meetings
const MeetingScheduler: React.FC = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    date: '',
    time: '',
    platform: '',
    link: '',
  });

  // Handle input changes
  const handleInputChange = (name: string, value: string) => {
    setMeetingDetails(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Scheduling meeting:', meetingDetails);
    setMeetingDetails({ title: '', date: '', time: '', platform: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={meetingDetails.title}
        onChange={(e) => handleInputChange('title', e.target.value)}
        placeholder="Meeting Title"
        required
        className="rounded-md"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="date"
          value={meetingDetails.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          required
        />
        <Input
          type="time"
          value={meetingDetails.time}
          onChange={(e) => handleInputChange('time', e.target.value)}
          required
        />
      </div>
      <Select onValueChange={(value) => handleInputChange('platform', value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="zoom">Zoom</SelectItem>
          <SelectItem value="teams">Microsoft Teams</SelectItem>
          <SelectItem value="meet">Google Meet</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="url"
        value={meetingDetails.link}
        onChange={(e) => handleInputChange('link', e.target.value)}
        placeholder="Meeting Link"
        required
      />
      <Button type="submit" className="w-full">
        Schedule AI Attendance
      </Button>
    </form>
  );
};

export default MeetingScheduler;