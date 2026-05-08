import React from 'react';
import { Wrench, Calendar, AlertCircle } from 'lucide-react';
export function Maintenance() {
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
          Facility Maintenance
        </h1>
        <p className="text-earth-dark/60">
          Equipment status and maintenance scheduling
        </p>
      </div>

      <div className="bg-soil/10 border border-soil/30 rounded-xl p-6 mb-8 flex items-start gap-4">
        <AlertCircle className="text-soil mt-1" size={24} />
        <div>
          <h3 className="font-bold text-soil text-lg mb-1">
            Attention Required
          </h3>
          <p className="text-soil/80">
            Line D Packaging Machine scheduled maintenance is overdue by 2 days.
            Production risk elevated.
          </p>
          <button className="mt-3 px-4 py-2 bg-soil text-white rounded-lg text-sm font-medium hover:bg-soil-dark transition-colors">
            Create Work Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-earth-sand p-6">
          <h2 className="text-xl font-serif font-bold text-earth-dark mb-4 flex items-center gap-2">
            <Wrench size={20} className="text-earth-dark/60" />
            Equipment Status
          </h2>
          <div className="space-y-4">
            {[
            'Centrifuge A',
            'Cold Press B',
            'Boiler 1',
            'Packaging Line D'].
            map((eq, idx) =>
            <div
              key={eq}
              className="flex justify-between items-center p-3 bg-earth-sand/20 rounded-lg">
              
                <span className="font-medium text-earth-dark">{eq}</span>
                <span
                className={`text-xs px-2 py-1 rounded-full ${idx === 3 ? 'bg-soil/20 text-soil' : 'bg-green-natural/20 text-green-forest'}`}>
                
                  {idx === 3 ? 'Needs Service' : 'Operational'}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-earth-sand p-6">
          <h2 className="text-xl font-serif font-bold text-earth-dark mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-earth-dark/60" />
            Upcoming Schedule
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-accent-gold pl-4 py-1">
              <p className="text-sm font-bold text-earth-dark">
                Tomorrow, 09:00 AM
              </p>
              <p className="text-earth-dark/80">Routine check - Boiler 1</p>
            </div>
            <div className="border-l-2 border-green-natural pl-4 py-1">
              <p className="text-sm font-bold text-earth-dark">
                May 12, 14:00 PM
              </p>
              <p className="text-earth-dark/80">
                Filter replacement - Centrifuge A
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}