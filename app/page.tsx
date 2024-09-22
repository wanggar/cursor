import React from 'react';
import MeetingScheduler from './components/MeetingScheduler';
import MeetingList from './components/MeetingList';
import SummaryViewer from './components/SummaryViewer';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Meeting Agent</h1>
      
      {/* Meeting Scheduler Component */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
        <MeetingScheduler />
      </section>
      
      {/* Upcoming Meetings List Component */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming AI-Attended Meetings</h2>
        <MeetingList />
      </section>
      
      {/* Meeting Summaries Viewer Component */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Meeting Summaries</h2>
        <SummaryViewer />
      </section>
    </main>
  );
}
