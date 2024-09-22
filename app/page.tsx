"use client"; // This marks the component as a Client Component

import React from 'react';
import MeetingScheduler from './components/MeetingScheduler';
import MeetingList from './components/MeetingList';
import SummaryViewer from './components/SummaryViewer';

export default function Home() {
  return (
    <main className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">AI Meeting Agent</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Meeting Scheduler Component */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Schedule a Meeting</h2>
          <MeetingScheduler />
        </section>
        
        {/* Upcoming Meetings List Component */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Upcoming AI-Attended Meetings</h2>
          <MeetingList />
        </section>
      </div>
      
      {/* Meeting Summaries Viewer Component */}
      <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Meeting Summaries</h2>
        <SummaryViewer />
      </section>
    </main>
  );
}
