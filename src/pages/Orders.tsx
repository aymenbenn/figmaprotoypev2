import React, { useState } from 'react';
import {
  FileText,
  Users,
  DollarSign,
  Calendar,
  ChevronRight } from
'lucide-react';
const pipelineStages = [
'New',
'Confirmed',
'In Production',
'Packed',
'Shipped',
'Delivered'];

const orders = [
{
  id: 'ORD-2026-089',
  customer: 'EuroFoods Dist.',
  amount: '€12,500',
  stage: 'New',
  date: 'May 8',
  items: '500x Oil 500ml'
},
{
  id: 'ORD-2026-088',
  customer: 'Nairobi Fresh',
  amount: 'KES 450,000',
  stage: 'Confirmed',
  date: 'May 7',
  items: '1000x Whole Hass'
},
{
  id: 'ORD-2026-087',
  customer: 'Global Organics',
  amount: '$8,200',
  stage: 'In Production',
  date: 'May 6',
  items: '300x Pulp 1kg'
},
{
  id: 'ORD-2026-086',
  customer: 'Healthy Eats UK',
  amount: '£6,400',
  stage: 'Packed',
  date: 'May 5',
  items: '250x Oil 500ml'
},
{
  id: 'ORD-2026-085',
  customer: 'Local Markets',
  amount: 'KES 120,000',
  stage: 'Shipped',
  date: 'May 4',
  items: '200x Whole Fuerte'
},
{
  id: 'ORD-2026-084',
  customer: 'EuroFoods Dist.',
  amount: '€18,000',
  stage: 'Delivered',
  date: 'May 1',
  items: '800x Oil 500ml'
}];

export function Orders() {
  const [activeTab, setActiveTab] = useState('pipeline');
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
            Orders & Sales
          </h1>
          <p className="text-earth-dark/60">
            Manage customer orders, pipeline, and sales data
          </p>
        </div>
        <button className="px-4 py-2 bg-green-natural text-white rounded-lg hover:bg-green-forest transition-colors font-medium">
          + New Order
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-earth-sand mb-6">
        {['Pipeline', 'All Orders', 'Customers'].map((tab) =>
        <button
          key={tab}
          onClick={() => setActiveTab(tab.toLowerCase())}
          className={`pb-3 px-2 font-medium transition-colors ${activeTab === tab.toLowerCase() ? 'text-green-forest border-b-2 border-green-forest' : 'text-earth-dark/60 hover:text-earth-dark'}`}>
          
            {tab}
          </button>
        )}
      </div>

      {activeTab === 'pipeline' &&
      <div className="flex gap-4 overflow-x-auto pb-4 h-[calc(100vh-250px)]">
          {pipelineStages.map((stage) => {
          const stageOrders = orders.filter((o) => o.stage === stage);
          return (
            <div
              key={stage}
              className="flex-shrink-0 w-80 bg-earth-sand/20 rounded-xl border border-earth-sand flex flex-col">
              
                <div className="p-4 border-b border-earth-sand flex justify-between items-center bg-earth-sand/30 rounded-t-xl">
                  <h3 className="font-bold text-earth-dark">{stage}</h3>
                  <span className="bg-white px-2 py-0.5 rounded-full text-xs font-medium text-earth-dark/60">
                    {stageOrders.length}
                  </span>
                </div>
                <div className="p-4 flex-1 overflow-y-auto space-y-3">
                  {stageOrders.map((order) =>
                <div
                  key={order.id}
                  className="bg-white p-4 rounded-lg border border-earth-sand shadow-sm hover:border-green-natural cursor-pointer transition-colors">
                  
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-xs font-bold text-earth-dark/60">
                          {order.id}
                        </span>
                        <span className="text-xs text-earth-dark/40">
                          {order.date}
                        </span>
                      </div>
                      <h4 className="font-bold text-earth-dark mb-1">
                        {order.customer}
                      </h4>
                      <p className="text-sm text-earth-dark/80 mb-3">
                        {order.items}
                      </p>
                      <div className="flex justify-between items-center pt-3 border-t border-earth-sand">
                        <span className="font-bold text-green-forest">
                          {order.amount}
                        </span>
                        <ChevronRight
                      size={16}
                      className="text-earth-dark/40" />
                    
                      </div>
                    </div>
                )}
                </div>
              </div>);

        })}
        </div>
      }

      {activeTab !== 'pipeline' &&
      <div className="bg-white rounded-xl border border-earth-sand p-12 text-center">
          <FileText className="mx-auto text-earth-dark/20 mb-4" size={48} />
          <h3 className="text-xl font-serif text-earth-dark mb-2">List View</h3>
          <p className="text-earth-dark/60">
            Standard table view for {activeTab}.
          </p>
        </div>
      }
    </div>);

}