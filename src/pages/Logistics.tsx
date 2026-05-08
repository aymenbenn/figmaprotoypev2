import React from 'react';
import { Truck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
const gateLog = [
{
  id: 'GL-1042',
  type: 'Inbound',
  truck: 'KCN 891D',
  driver: 'David O.',
  time: '08:45 AM',
  cargo: 'Raw Avocados',
  status: 'At Dock 2'
},
{
  id: 'GL-1041',
  type: 'Outbound',
  truck: 'KAZ 234B',
  driver: 'Simon M.',
  time: '08:15 AM',
  cargo: 'Avocado Oil',
  status: 'Departed'
},
{
  id: 'GL-1040',
  type: 'Inbound',
  truck: 'KBZ 482C',
  driver: 'Paul K.',
  time: '07:30 AM',
  cargo: 'Packaging',
  status: 'Unloading'
}];

export function Logistics() {
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
          Logistics & Gate Ops
        </h1>
        <p className="text-earth-dark/60">
          Manage facility entry/exit and dock scheduling
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-earth-sand p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif font-bold text-earth-dark">
                Live Gate Log
              </h2>
              <button className="text-sm text-green-natural font-medium hover:text-green-forest">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {gateLog.map((log) =>
              <div
                key={log.id}
                className="flex items-center justify-between p-4 border border-earth-sand rounded-lg hover:border-green-natural/50 transition-colors">
                
                  <div className="flex items-center gap-4">
                    <div
                    className={`p-3 rounded-lg ${log.type === 'Inbound' ? 'bg-green-natural/10 text-green-natural' : 'bg-accent-gold/10 text-accent-gold'}`}>
                    
                      <Truck size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-earth-dark">
                          {log.truck}
                        </span>
                        <span
                        className={`text-xs px-2 py-0.5 rounded-full ${log.type === 'Inbound' ? 'bg-green-natural/20 text-green-forest' : 'bg-accent-gold/20 text-accent-gold'}`}>
                        
                          {log.type}
                        </span>
                      </div>
                      <p className="text-sm text-earth-dark/60">
                        {log.driver} • {log.cargo}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-earth-dark mb-1">
                      {log.time}
                    </p>
                    <p className="text-sm text-green-forest">{log.status}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-green-natural text-white rounded-xl p-6">
            <h3 className="font-serif font-bold text-lg mb-4">
              Quick Log Entry
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Truck Plate (e.g. KAA 123A)"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" />
              
              <button className="w-full py-2 bg-white text-green-forest font-bold rounded-lg hover:bg-earth-cream transition-colors">
                Scan / Enter
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-earth-sand p-6">
            <h3 className="font-serif font-bold text-lg text-earth-dark mb-4">
              Dock Status
            </h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((dock) =>
              <div
                key={dock}
                className="flex items-center justify-between p-3 bg-earth-sand/20 rounded-lg">
                
                  <span className="font-medium text-earth-dark">
                    Dock {dock}
                  </span>
                  {dock <= 2 ?
                <span className="text-xs text-soil font-medium">
                      Occupied
                    </span> :

                <span className="text-xs text-green-natural font-medium">
                      Available
                    </span>
                }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}