
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Query {
  id: string;
  question: string;
  answer: string;
}

interface RecentQueriesProps {
  queries: Query[];
}

const RecentQueries: React.FC<RecentQueriesProps> = ({ queries }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (queries.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex items-center justify-between p-3 text-left"
      >
        <span className="font-medium">Recent Queries</span>
        {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </button>
      
      {!isCollapsed && (
        <div className="px-3 pb-3">
          {queries.map((query) => (
            <div key={query.id} className="border-t border-gray-100 py-2">
              <p className="text-sm font-medium">{query.question}</p>
              <p className="text-xs text-gray-500">{query.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentQueries;
