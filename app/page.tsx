"use client"; // This marks the component as a Client Component

import React from 'react';
import MeetingScheduler from './components/MeetingScheduler';
import MeetingList from './components/MeetingList';
import SummaryViewer from './components/SummaryViewer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-center">AI Meeting Agent</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Schedule a Meeting</CardTitle>
          </CardHeader>
          <CardContent>
            <MeetingScheduler />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming AI-Attended Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <MeetingList />
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Meeting Summaries</CardTitle>
        </CardHeader>
        <CardContent>
          <SummaryViewer />
        </CardContent>
      </Card>
    </main>
  );
}
