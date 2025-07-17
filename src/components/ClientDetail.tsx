import React, { useState } from 'react';
import { SaveIcon, XIcon } from 'lucide-react';
interface ClientDetailProps {
  client: any;
  onClose: () => void;
}
export function ClientDetail({
  client,
  onClose
}: ClientDetailProps) {
  const [formData, setFormData] = useState(client || {});
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Here you would typically save the data
    console.log('Saving client data:', formData);
    onClose();
  };
  return <div className="bg-white p-6 shadow-md rounded">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-teal-700">
          Dettaglio Cliente
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600">
          <XIcon size={24} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">ID</label>
            <input type="text" name="id" value={formData.id || ''} onChange={handleChange} className="w-full border border-gray-300 p-2 bg-gray-100" disabled />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Azienda</label>
            <input type="text" name="azienda" value={formData.azienda || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome e Cognome
            </label>
            <input type="text" name="nome" value={formData.nome || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Partita IVA
            </label>
            <input type="text" name="partitaIva" value={formData.partitaIva || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Codice Fiscale
            </label>
            <input type="text" name="codiceFiscale" value={formData.codiceFiscale || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Indirizzo</label>
            <input type="text" name="indirizzo" value={formData.indirizzo || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Comune</label>
            <input type="text" name="comune" value={formData.comune || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Provincia</label>
            <input type="text" name="provincia" value={formData.provincia || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sindacato</label>
            <input type="text" name="sind" value={formData.sind || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Stato</label>
            <select name="stato" value={formData.stato || ''} onChange={handleChange} className="w-full border border-gray-300 p-2">
              <option value="checked">Verificato</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Storico</label>
            <input type="text" name="storico" value={formData.storico || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          {/* Additional fields */}
          <div>
            <label className="block text-sm font-medium mb-1">Telefono</label>
            <input type="tel" name="telefono" value={formData.telefono || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cellulare</label>
            <input type="tel" name="cellulare" value={formData.cellulare || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Note</label>
            <textarea name="note" value={formData.note || ''} onChange={handleChange} className="w-full border border-gray-300 p-2" rows={3} />
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 flex justify-end space-x-4">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded">
            Annulla
          </button>
          <button type="submit" className="bg-teal-700 text-white px-6 py-2 rounded flex items-center">
            <SaveIcon size={18} className="mr-2" />
            Salva
          </button>
        </div>
      </form>
    </div>;
}