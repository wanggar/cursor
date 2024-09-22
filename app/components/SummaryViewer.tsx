import React, { useState } from 'react';

// Dummy data for meeting summaries
const meetingSummaries = [
  { id: 1, title: 'Team Standup', date: '2023-04-14', summary: 'Discussed project progress and upcoming deadlines.' },
  { id: 2, title: 'Product Strategy', date: '2023-04-13', summary: 'Reviewed Q2 goals and prioritized feature roadmap.' },
];

// SummaryViewer component to display meeting summaries
const SummaryViewer: React.FC = () => {
  const [selectedSummary, setSelectedSummary] = useState<number | null>(null);

  return (
    <div>
      <ul className="space-y-2">
        {meetingSummaries.map(summary => (
          <li key={summary.id}>
            <button
              onClick={() => setSelectedSummary(summary.id)}
              className="w-full text-left p-2 hover:bg-gray-100 rounded"
            >
              {summary.title} - {summary.date}
            </button>
          </li>
        ))}
      </ul>
      {selectedSummary && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="font-semibold">{meetingSummaries.find(s => s.id === selectedSummary)?.title}</h3>
          <p>{meetingSummaries.find(s => s.id === selectedSummary)?.summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummaryViewer;
 