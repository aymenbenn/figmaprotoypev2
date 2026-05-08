import React from 'react';
import {
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
  FileSearch } from
'lucide-react';
const inspections = [
{
  id: 'QC-2026-401',
  batch: 'BAT-2026-0508-A',
  type: 'In-Process',
  status: 'Pending',
  time: '10:00 AM'
},
{
  id: 'QC-2026-400',
  batch: 'SHP-2026-0234',
  type: 'Raw Material',
  status: 'Passed',
  time: '08:30 AM'
},
{
  id: 'QC-2026-399',
  batch: 'BAT-2026-0507-C',
  type: 'Finished Goods',
  status: 'Failed',
  time: 'Yesterday'
}];

export function QC() {
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
          Quality Control
        </h1>
        <p className="text-earth-dark/60">
          Manage inspections, reports, and defect tracking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-earth-sand p-6 flex items-center gap-4">
          <div className="p-3 bg-accent-gold/10 rounded-lg text-accent-gold">
            <FileSearch size={24} />
          </div>
          <div>
            <p className="text-sm text-earth-dark/60">Pending Inspections</p>
            <p className="text-2xl font-serif font-bold text-earth-dark">4</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-earth-sand p-6 flex items-center gap-4">
          <div className="p-3 bg-green-natural/10 rounded-lg text-green-natural">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-sm text-earth-dark/60">Pass Rate (Today)</p>
            <p className="text-2xl font-serif font-bold text-earth-dark">
              94.2%
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-earth-sand p-6 flex items-center gap-4">
          <div className="p-3 bg-soil/10 rounded-lg text-soil">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-earth-dark/60">Critical Defects</p>
            <p className="text-2xl font-serif font-bold text-earth-dark">1</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-earth-sand p-6">
        <h2 className="text-xl font-serif font-bold text-earth-dark mb-6">
          Recent Inspections
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-earth-sand text-sm text-earth-dark/60">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Batch/Shipment</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Time</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((insp) =>
              <tr
                key={insp.id}
                className="border-b border-earth-sand last:border-0">
                
                  <td className="py-4 font-mono text-sm">{insp.id}</td>
                  <td className="py-4 font-medium text-earth-dark">
                    {insp.batch}
                  </td>
                  <td className="py-4 text-sm text-earth-dark/80">
                    {insp.type}
                  </td>
                  <td className="py-4 text-sm text-earth-dark/60">
                    {insp.time}
                  </td>
                  <td className="py-4">
                    <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${insp.status === 'Passed' ? 'bg-green-natural/20 text-green-forest' : insp.status === 'Failed' ? 'bg-soil/20 text-soil' : 'bg-accent-gold/20 text-accent-gold'}`}>
                    
                      {insp.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-sm text-green-natural font-medium hover:text-green-forest">
                      {insp.status === 'Pending' ? 'Start' : 'View'}
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}