import React, { useState } from 'react';
import { ClientSearch } from './components/ClientSearch';
import { ClientTable } from './components/ClientTable';
import { Pagination } from './components/Pagination';
import { ClientDetail } from './components/ClientDetail';
export function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const handleEditClient = client => {
    setSelectedClient(client);
    setIsEditMode(true);
  };
  const handleCloseEdit = () => {
    setIsEditMode(false);
    setSelectedClient(null);
  };
  return <div className="bg-gray-100 min-h-screen w-full">
      <div className="container mx-auto px-4 py-6">
        <ClientSearch isEditMode={isEditMode} onTabChange={() => isEditMode && handleCloseEdit()} />
        {isEditMode ? <div className="mt-8">
            <ClientDetail client={selectedClient} onClose={handleCloseEdit} />
          </div> : <>
            <div className="mt-8">
              <ClientTable onEditClient={handleEditClient} />
            </div>
            <div className="mt-4">
              <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
          </>}
      </div>
    </div>;
}