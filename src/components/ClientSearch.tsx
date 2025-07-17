import React from 'react';
import { SearchIcon, FileEditIcon } from 'lucide-react';
interface ClientSearchProps {
  isEditMode: boolean;
  onTabChange: () => void;
}
export function ClientSearch({
  isEditMode = false,
  onTabChange
}: ClientSearchProps) {
  return <div>
      <div className="flex flex-col sm:flex-row">
        <div className={`${isEditMode ? 'bg-gray-400' : 'bg-teal-700'} text-white p-2 flex items-center sm:w-48 cursor-pointer`} onClick={() => onTabChange()}>
          <SearchIcon size={18} className="mr-2" />
          <span>Cerca</span>
        </div>
        <div className={`border border-gray-300 ${isEditMode ? 'bg-teal-700 text-white' : 'bg-white text-teal-700'} p-2 flex items-center sm:flex-grow`}>
          <FileEditIcon size={18} className="mr-2" />
          <span>Inserisci / Modifica</span>
        </div>
      </div>
      {!isEditMode && <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Ricerca libera</label>
              <input type="text" className="w-full border border-gray-300 p-2" placeholder="testo di ricerca" />
            </div>
            <div>
              <label className="block text-sm mb-1">Provincia</label>
              <div className="flex">
                <input type="text" className="w-full border border-gray-300 p-2" />
                <div className="bg-gray-200 border border-gray-300 px-3 flex items-center justify-center">
                  <span>▼</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Ditta</label>
              <div className="flex">
                <input type="text" className="w-full border border-gray-300 p-2" />
                <div className="bg-gray-200 border border-gray-300 px-3 flex items-center justify-center">
                  <span>▼</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-center">
            <button className="bg-teal-700 text-white px-6 py-2 rounded">
              Cerca
            </button>
          </div>
        </div>}
    </div>;
}