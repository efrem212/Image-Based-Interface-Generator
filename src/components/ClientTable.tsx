import React from 'react';
import { FileSpreadsheetIcon, CheckIcon, MessageSquareIcon, MailIcon, PencilIcon, XIcon, ChevronDownIcon } from 'lucide-react';
interface ClientTableProps {
  onEditClient: (client: any) => void;
}
export function ClientTable({
  onEditClient
}: ClientTableProps) {
  // Mock data similar to the image
  const clients = [{
    id: 21,
    azienda: 'Bar Edicola ABC',
    nome: 'Mario Rossi',
    partitaIva: '16232541251',
    codiceFiscale: 'MRORSS12A345A',
    indirizzo: 'via Viazza 67',
    comune: 'Milano',
    provincia: 'MI',
    email: 'mario.rossi@gmail.com',
    sind: 'MI',
    stato: 'checked',
    storico: '2025 2024 2023'
  }, {
    id: 34,
    azienda: 'ditta individuale',
    nome: 'Giovanni Bianchi',
    partitaIva: '10223678952',
    codiceFiscale: 'GVNBNC55B123A',
    indirizzo: 'via Canale 77',
    comune: 'Brescia',
    provincia: 'BS',
    email: 'giovanni@yahoo.com',
    sind: 'BS',
    stato: 'checked',
    storico: '2025 2024'
  }, {
    id: 45,
    azienda: 'Edicola Più',
    nome: 'Luigi Verdi',
    partitaIva: '10235496321',
    codiceFiscale: '',
    indirizzo: 'via Larga 1',
    comune: 'Roma',
    provincia: 'RM',
    email: 'edicolapiu@gmail.com',
    sind: 'RM',
    stato: 'whatsapp',
    storico: '2024'
  }, {
    id: 23,
    azienda: '',
    nome: 'Marco Marchi',
    partitaIva: '10023365489',
    codiceFiscale: '',
    indirizzo: 'piazza Rossa 8',
    comune: 'Milano',
    provincia: 'MI',
    email: 'mm@mail.com',
    sind: 'MI',
    stato: 'whatsapp',
    storico: '2024 2023 2022'
  }, {
    id: 22,
    azienda: 'Edicola 3000',
    nome: 'Giorgio Romano',
    partitaIva: '11155522236',
    codiceFiscale: '',
    indirizzo: 'viale dei mille 1',
    comune: 'Modena',
    provincia: 'MO',
    email: 'giorgio@libero.it',
    sind: 'MO',
    stato: 'checked',
    storico: '2025 2024 2023'
  }, {
    id: 77,
    azienda: 'Edicola leggi di più',
    nome: 'Andrea Brambilla',
    partitaIva: '12322399841',
    codiceFiscale: '',
    indirizzo: 'vicolo Corto 88',
    comune: 'Torino',
    provincia: 'TO',
    email: '',
    sind: 'TO',
    stato: 'checked',
    storico: '2025 2024'
  }];
  return <div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-semibold">Risultati</h2>
          <p className="text-sm text-gray-600">
            Visualizzazione di {clients.length} risultati
          </p>
        </div>
        <button className="flex items-center text-green-700">
          <FileSpreadsheetIcon size={20} className="mr-1" />
          <span>Esporta Excel</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-700 text-white">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Azienda</th>
              <th className="p-2 text-left">Nome e Cognome</th>
              <th className="p-2 text-left">Partita IVA</th>
              <th className="p-2 text-left">Codice fiscale</th>
              <th className="p-2 text-left">Indirizzo</th>
              <th className="p-2 text-left">Comune</th>
              <th className="p-2 text-left">PV</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Sind.</th>
              <th className="p-2 text-left">Stato</th>
              <th className="p-2 text-left">Storico</th>
              <th className="p-2 text-left">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => <tr key={client.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="p-2 border border-gray-300">{client.id}</td>
                <td className="p-2 border border-gray-300">{client.azienda}</td>
                <td className="p-2 border border-gray-300">{client.nome}</td>
                <td className="p-2 border border-gray-300">
                  {client.partitaIva}
                </td>
                <td className="p-2 border border-gray-300">
                  {client.codiceFiscale}
                </td>
                <td className="p-2 border border-gray-300">
                  {client.indirizzo}
                </td>
                <td className="p-2 border border-gray-300">{client.comune}</td>
                <td className="p-2 border border-gray-300">
                  {client.provincia}
                </td>
                <td className="p-2 border border-gray-300">{client.email}</td>
                <td className="p-2 border border-gray-300">{client.sind}</td>
                <td className="p-2 border border-gray-300">
                  {client.stato === 'checked' ? <div className="flex justify-center">
                      <div className="rounded-full border border-gray-300 p-1">
                        <CheckIcon size={16} />
                      </div>
                    </div> : <div className="flex justify-center">
                      <MessageSquareIcon size={16} />
                    </div>}
                </td>
                <td className="p-2 border border-gray-300 text-sm">
                  {client.storico}
                </td>
                <td className="p-2 border border-gray-300">
                  <div className="flex space-x-1 justify-center">
                    <button className="p-1 bg-teal-700 rounded">
                      <ChevronDownIcon size={16} className="text-white" />
                    </button>
                    <button className="p-1 bg-teal-700 rounded">
                      <MailIcon size={16} className="text-white" />
                    </button>
                    <button className="p-1 bg-teal-700 rounded">
                      <CheckIcon size={16} className="text-white" />
                    </button>
                    <button className="p-1 bg-teal-700 rounded" onClick={() => onEditClient(client)}>
                      <PencilIcon size={16} className="text-white" />
                    </button>
                    <button className="p-1 bg-teal-700 rounded">
                      <XIcon size={16} className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}