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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <ul className="space-y-2">
          {meetingSummaries.map(summary => (
            <li key={summary.id}>
              <button
                onClick={() => setSelectedSummary(summary.id)}
                className={`w-full text-left p-2 rounded-md transition duration-300 ease-in-out ${
                  selectedSummary === summary.id
                    ? 'bg-blue-100 text-blue-800'
                    : 'hover:bg-gray-100'
                }`}
              >
                <p className="font-medium">{summary.title}</p>
                <p className="text-sm text-gray-600">{summary.date}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-2">
        {selectedSummary && (
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="font-semibold text-lg mb-2">
              {meetingSummaries.find(s => s.id === selectedSummary)?.title}
            </h3>
            <p className="text-gray-700">
              {meetingSummaries.find(s => s.id === selectedSummary)?.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryViewer;
