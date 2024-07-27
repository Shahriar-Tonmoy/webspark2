import React from 'react';
interface ChecklistItem {
    id: number;
    label: string;
    checked: boolean;
  }

interface ChecklistProps {
  items: ChecklistItem[];
}

const Checklist: React.FC<ChecklistProps> = ({ items }) => {
    return (
        <div className="rounded-lg shadow-md p-6 mt-24">
          <h2 className="text-xl font-semibold mb-4 text-white">Checklist</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500 rounded"
                  checked={item.checked}
                />
                <label className="ml-2 text-gray-700">{item.label}</label>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default Checklist;