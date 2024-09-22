import React, { useState } from 'react';

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMeetingDetails(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to schedule meeting
    console.log('Scheduling meeting:', meetingDetails);
    // Reset form after submission
    setMeetingDetails({ title: '', date: '', time: '', platform: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={meetingDetails.title}
        onChange={handleInputChange}
        placeholder="Meeting Title"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="date"
        name="date"
        value={meetingDetails.date}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="time"
        name="time"
        value={meetingDetails.time}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="platform"
        value={meetingDetails.platform}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Platform</option>
        <option value="zoom">Zoom</option>
        <option value="teams">Microsoft Teams</option>
        <option value="meet">Google Meet</option>
      </select>
      <input
        type="url"
        name="link"
        value={meetingDetails.link}
        onChange={handleInputChange}
        placeholder="Meeting Link"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Schedule AI Attendance
      </button>
    </form>
  );
};

export default MeetingScheduler;