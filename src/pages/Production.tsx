import React, { useState } from 'react';
import {
  Play,
  Pause,
  AlertCircle,
  TrendingUp,
  Clock,
  Users as UsersIcon } from
'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend } from
'recharts';
const yieldData = [
{
  date: 'May 1',
  oil: 420,
  pulp: 680,
  whole: 320
},
{
  date: 'May 2',
  oil: 450,
  pulp: 720,
  whole: 340
},
{
  date: 'May 3',
  oil: 380,
  pulp: 650,
  whole: 290
},
{
  date: 'May 4',
  oil: 520,
  pulp: 780,
  whole: 380
},
{
  date: 'May 5',
  oil: 490,
  pulp: 740,
  whole: 360
},
{
  date: 'May 6',
  oil: 540,
  pulp: 820,
  whole: 400
},
{
  date: 'May 7',
  oil: 510,
  pulp: 790,
  whole: 370
}];

const lineEfficiencyData = [
{
  line: 'Line A',
  efficiency: 94,
  target: 95
},
{
  line: 'Line B',
  efficiency: 89,
  target: 95
},
{
  line: 'Line C',
  efficiency: 0,
  target: 95
},
{
  line: 'Line D',
  efficiency: 0,
  target: 95
}];

const activeBatches = [
{
  id: 'BAT-2026-0508-A',
  product: 'Avocado Oil 500ml',
  line: 'Line A',
  startTime: '06:00 AM',
  progress: 68,
  operator: 'John M.',
  status: 'running',
  rawMaterial: '850 kg Hass',
  qcCheckpoints: 3,
  qcPassed: 2
},
{
  id: 'BAT-2026-0508-B',
  product: 'Avocado Pulp 1kg',
  line: 'Line B',
  startTime: '07:30 AM',
  progress: 45,
  operator: 'Sarah K.',
  status: 'running',
  rawMaterial: '1200 kg Fuerte',
  qcCheckpoints: 4,
  qcPassed: 1
},
{
  id: 'BAT-2026-0507-C',
  product: 'Whole Avocados Pack',
  line: 'Line C',
  startTime: '05:00 AM',
  progress: 92,
  operator: 'Peter W.',
  status: 'finishing',
  rawMaterial: '600 kg Mixed',
  qcCheckpoints: 2,
  qcPassed: 2
}];

const productionLines = [
{
  name: 'Line A',
  status: 'Running',
  product: 'Avocado Oil 500ml',
  throughput: '124 units/hr',
  oee: 94,
  uptime: '98.2%',
  lastMaintenance: '3 days ago'
},
{
  name: 'Line B',
  status: 'Running',
  product: 'Avocado Pulp 1kg',
  throughput: '98 units/hr',
  oee: 89,
  uptime: '96.5%',
  lastMaintenance: '1 week ago'
},
{
  name: 'Line C',
  status: 'Idle',
  product: 'Whole Avocados',
  throughput: '0 units/hr',
  oee: 0,
  uptime: '0%',
  lastMaintenance: '2 days ago'
},
{
  name: 'Line D',
  status: 'Maintenance',
  product: 'Packaging Line',
  throughput: '0 units/hr',
  oee: 0,
  uptime: '0%',
  lastMaintenance: 'In progress'
}];

const schedule = [
{
  time: '06:00',
  line: 'Line A',
  batch: 'BAT-2026-0508-A',
  product: 'Oil 500ml',
  status: 'active'
},
{
  time: '07:30',
  line: 'Line B',
  batch: 'BAT-2026-0508-B',
  product: 'Pulp 1kg',
  status: 'active'
},
{
  time: '14:00',
  line: 'Line A',
  batch: 'BAT-2026-0508-D',
  product: 'Oil 500ml',
  status: 'scheduled'
},
{
  time: '15:30',
  line: 'Line C',
  batch: 'BAT-2026-0508-E',
  product: 'Whole Pack',
  status: 'scheduled'
}];

type TabType = 'batches' | 'lines' | 'yield' | 'schedule';
export function Production() {
  const [activeTab, setActiveTab] = useState<TabType>('batches');
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  const tabs: {
    id: TabType;
    label: string;
  }[] = [
  {
    id: 'batches',
    label: 'Active Batches'
  },
  {
    id: 'lines',
    label: 'Production Lines'
  },
  {
    id: 'yield',
    label: 'Yield Reports'
  },
  {
    id: 'schedule',
    label: 'Schedule'
  }];

  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
          Production Processing
        </h1>
        <p className="text-earth-dark/60">
          Monitor and manage all production operations
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-earth-sand">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-natural/10 rounded-lg">
              <Play className="text-green-natural" size={20} />
            </div>
            <span className="text-sm text-earth-dark/60">Active Batches</span>
          </div>
          <p className="text-3xl font-serif font-bold text-earth-dark">3</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-earth-sand">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-avocado/10 rounded-lg">
              <TrendingUp className="text-green-avocado" size={20} />
            </div>
            <span className="text-sm text-earth-dark/60">Avg OEE</span>
          </div>
          <p className="text-3xl font-serif font-bold text-earth-dark">91.5%</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-earth-sand">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-accent-gold/10 rounded-lg">
              <Clock className="text-accent-gold" size={20} />
            </div>
            <span className="text-sm text-earth-dark/60">Today's Yield</span>
          </div>
          <p className="text-3xl font-serif font-bold text-earth-dark">
            3,847 kg
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-earth-sand">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-soil/10 rounded-lg">
              <AlertCircle className="text-soil" size={20} />
            </div>
            <span className="text-sm text-earth-dark/60">Lines Down</span>
          </div>
          <p className="text-3xl font-serif font-bold text-earth-dark">2</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-earth-sand overflow-hidden">
        <div className="border-b border-earth-sand flex overflow-x-auto">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 font-medium whitespace-nowrap transition-colors relative ${activeTab === tab.id ? 'text-green-forest border-b-2 border-green-forest' : 'text-earth-dark/60 hover:text-earth-dark'}`}>
            
              {tab.label}
            </button>
          )}
        </div>

        <div className="p-6">
          {activeTab === 'batches' &&
          <div className="space-y-4">
              {activeBatches.map((batch) =>
            <div
              key={batch.id}
              className="border border-earth-sand rounded-lg p-6 hover:border-green-natural transition-colors cursor-pointer"
              onClick={() =>
              setSelectedBatch(
                selectedBatch === batch.id ? null : batch.id
              )
              }>
              
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif font-bold text-lg text-earth-dark">
                          {batch.id}
                        </h3>
                        <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${batch.status === 'running' ? 'bg-green-natural/20 text-green-forest' : 'bg-accent-gold/20 text-accent-gold'}`}>
                      
                          {batch.status === 'running' ? 'Running' : 'Finishing'}
                        </span>
                      </div>
                      <p className="text-earth-dark/60 mb-1">{batch.product}</p>
                      <div className="flex items-center gap-4 text-sm text-earth-dark/60">
                        <span className="flex items-center gap-1">
                          <UsersIcon size={14} />
                          {batch.operator}
                        </span>
                        <span>Line: {batch.line}</span>
                        <span>Started: {batch.startTime}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-serif font-bold text-green-forest">
                        {batch.progress}%
                      </p>
                      <p className="text-xs text-earth-dark/60">Progress</p>
                    </div>
                  </div>

                  <div className="h-2 bg-earth-sand rounded-full overflow-hidden mb-4">
                    <div
                  className="h-full bg-green-natural transition-all duration-500"
                  style={{
                    width: `${batch.progress}%`
                  }}>
                </div>
                  </div>

                  {selectedBatch === batch.id &&
              <div className="mt-4 pt-4 border-t border-earth-sand grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          Raw Material
                        </p>
                        <p className="font-medium text-earth-dark">
                          {batch.rawMaterial}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          QC Checkpoints
                        </p>
                        <p className="font-medium text-earth-dark">
                          {batch.qcPassed}/{batch.qcCheckpoints} Passed
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          Stages
                        </p>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-green-natural flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <div className="w-6 h-6 rounded-full bg-green-natural flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <div className="w-6 h-6 rounded-full bg-green-natural/30 flex items-center justify-center text-earth-dark text-xs">
                            3
                          </div>
                          <div className="w-6 h-6 rounded-full bg-earth-sand flex items-center justify-center text-earth-dark/40 text-xs">
                            4
                          </div>
                        </div>
                      </div>
                    </div>
              }
                </div>
            )}
            </div>
          }

          {activeTab === 'lines' &&
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productionLines.map((line) =>
            <div
              key={line.name}
              className="border border-earth-sand rounded-lg p-6">
              
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-earth-dark mb-1">
                        {line.name}
                      </h3>
                      <p className="text-earth-dark/60 text-sm">
                        {line.product}
                      </p>
                    </div>
                    <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${line.status === 'Running' ? 'bg-green-natural/20 text-green-forest' : line.status === 'Idle' ? 'bg-earth-sand text-earth-dark' : 'bg-soil/20 text-soil'}`}>
                  
                      {line.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-earth-dark/60">OEE</span>
                      <span className="font-bold text-earth-dark">
                        {line.oee}%
                      </span>
                    </div>
                    <div className="h-2 bg-earth-sand rounded-full overflow-hidden">
                      <div
                    className={`h-full ${line.status === 'Running' ? 'bg-green-natural' : 'bg-earth-dark/20'}`}
                    style={{
                      width: `${line.oee}%`
                    }}>
                  </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-xs text-earth-dark/60">Throughput</p>
                        <p className="font-medium text-earth-dark">
                          {line.throughput}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60">Uptime</p>
                        <p className="font-medium text-earth-dark">
                          {line.uptime}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-earth-sand">
                      <p className="text-xs text-earth-dark/60">
                        Last Maintenance:{' '}
                        <span className="text-earth-dark font-medium">
                          {line.lastMaintenance}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }

          {activeTab === 'yield' &&
          <div className="space-y-8">
              <div>
                <h3 className="font-serif font-bold text-xl text-earth-dark mb-4">
                  7-Day Production Yield
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={yieldData}>
                    <defs>
                      <linearGradient
                      id="oilGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      
                        <stop
                        offset="5%"
                        stopColor="#4A6B3A"
                        stopOpacity={0.3} />
                      
                        <stop
                        offset="95%"
                        stopColor="#4A6B3A"
                        stopOpacity={0} />
                      
                      </linearGradient>
                      <linearGradient
                      id="pulpGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      
                        <stop
                        offset="5%"
                        stopColor="#6B8E4E"
                        stopOpacity={0.3} />
                      
                        <stop
                        offset="95%"
                        stopColor="#6B8E4E"
                        stopOpacity={0} />
                      
                      </linearGradient>
                      <linearGradient
                      id="wholeGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      
                        <stop
                        offset="5%"
                        stopColor="#D4A03C"
                        stopOpacity={0.3} />
                      
                        <stop
                        offset="95%"
                        stopColor="#D4A03C"
                        stopOpacity={0} />
                      
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8DCC4" />
                    <XAxis
                    dataKey="date"
                    stroke="#3E2F23"
                    style={{
                      fontSize: '12px'
                    }} />
                  
                    <YAxis
                    stroke="#3E2F23"
                    style={{
                      fontSize: '12px'
                    }} />
                  
                    <Tooltip
                    contentStyle={{
                      backgroundColor: '#F4EDE0',
                      border: '1px solid #E8DCC4',
                      borderRadius: '8px'
                    }} />
                  
                    <Legend />
                    <Area
                    type="monotone"
                    dataKey="oil"
                    name="Oil (kg)"
                    stroke="#4A6B3A"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#oilGradient)" />
                  
                    <Area
                    type="monotone"
                    dataKey="pulp"
                    name="Pulp (kg)"
                    stroke="#6B8E4E"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#pulpGradient)" />
                  
                    <Area
                    type="monotone"
                    dataKey="whole"
                    name="Whole (kg)"
                    stroke="#D4A03C"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#wholeGradient)" />
                  
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-earth-dark mb-4">
                  Line Efficiency vs Target
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={lineEfficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8DCC4" />
                    <XAxis
                    dataKey="line"
                    stroke="#3E2F23"
                    style={{
                      fontSize: '12px'
                    }} />
                  
                    <YAxis
                    stroke="#3E2F23"
                    style={{
                      fontSize: '12px'
                    }} />
                  
                    <Tooltip
                    contentStyle={{
                      backgroundColor: '#F4EDE0',
                      border: '1px solid #E8DCC4',
                      borderRadius: '8px'
                    }} />
                  
                    <Legend />
                    <Bar
                    dataKey="efficiency"
                    name="Current Efficiency (%)"
                    fill="#4A6B3A"
                    radius={[8, 8, 0, 0]} />
                  
                    <Bar
                    dataKey="target"
                    name="Target (%)"
                    fill="#E8DCC4"
                    radius={[8, 8, 0, 0]} />
                  
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          }

          {activeTab === 'schedule' &&
          <div className="space-y-3">
              {schedule.map((item, idx) =>
            <div
              key={idx}
              className={`flex items-center gap-4 p-4 rounded-lg border ${item.status === 'active' ? 'bg-green-natural/5 border-green-natural/20' : 'bg-earth-sand/30 border-earth-sand'}`}>
              
                  <div className="text-center min-w-[80px]">
                    <p className="font-bold text-earth-dark">{item.time}</p>
                    <p className="text-xs text-earth-dark/60">
                      {item.status === 'active' ? 'Active' : 'Scheduled'}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-earth-dark">{item.batch}</p>
                    <p className="text-sm text-earth-dark/60">
                      {item.product} • {item.line}
                    </p>
                  </div>
                  {item.status === 'active' &&
              <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-natural rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-forest font-medium">
                        In Progress
                      </span>
                    </div>
              }
                </div>
            )}
            </div>
          }
        </div>
      </div>
    </div>);

}