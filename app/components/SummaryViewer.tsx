import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Dummy data for meeting summaries
const meetingSummaries = [
  { id: 1, title: 'Team Standup', date: '2023-04-14', summary: 'Discussed project progress and upcoming deadlines.' },
  { id: 2, title: 'Product Strategy', date: '2023-04-13', summary: 'Reviewed Q2 goals and prioritized feature roadmap.' },
];

// SummaryViewer component to display meeting summaries
const SummaryViewer: React.FC = () => {
  const [selectedSummary, setSelectedSummary] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="space-y-2">
          {meetingSummaries.map(summary => (
            <Button
              key={summary.id}
              variant={selectedSummary === summary.id ? "secondary" : "ghost"} // Different appearance for selected/unselected
              className={`w-full justify-start ${selectedSummary === summary.id ? 'bg-gray-200' : 'bg-white'}`} // Added background color for selected state
              onClick={() => setSelectedSummary(summary.id)}
            >
              <div className="text-left">
                <p className="font-medium">{summary.title}</p>
                <p className="text-sm text-muted-foreground">{summary.date}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        {selectedSummary && (
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                {meetingSummaries.find(s => s.id === selectedSummary)?.title}
              </h3>
              <p className="text-muted-foreground">
                {meetingSummaries.find(s => s.id === selectedSummary)?.summary}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SummaryViewer;
