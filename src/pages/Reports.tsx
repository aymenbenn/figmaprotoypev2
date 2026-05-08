import React from 'react';
import {
  BarChart3,
  Download,
  FileText,
  TrendingUp,
  Package,
  ShoppingCart } from
'lucide-react';
const reports = [
{
  id: 'rep-1',
  title: 'Production Yield Analysis',
  desc: 'Weekly breakdown of raw material to finished goods conversion rates.',
  icon: TrendingUp,
  color: 'text-green-natural',
  bg: 'bg-green-natural/10'
},
{
  id: 'rep-2',
  title: 'Inventory Valuation',
  desc: 'Current value of all raw materials, WIP, and finished goods across warehouses.',
  icon: Package,
  color: 'text-accent-gold',
  bg: 'bg-accent-gold/10'
},
{
  id: 'rep-3',
  title: 'Supplier Performance',
  desc: 'Delivery times, quality pass rates, and contract fulfillment by supplier.',
  icon: ShoppingCart,
  color: 'text-soil',
  bg: 'bg-soil/10'
},
{
  id: 'rep-4',
  title: 'Sales & Revenue',
  desc: 'Monthly revenue by product category and top performing customers.',
  icon: BarChart3,
  color: 'text-green-forest',
  bg: 'bg-green-forest/10'
}];

export function Reports() {
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
          Reporting & Analytics
        </h1>
        <p className="text-earth-dark/60">
          Generate and export operational reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <div
              key={report.id}
              className="bg-white rounded-xl border border-earth-sand p-6 flex flex-col">
              
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${report.bg} ${report.color}`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-lg text-earth-dark mb-1">
                    {report.title}
                  </h3>
                  <p className="text-sm text-earth-dark/60">{report.desc}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-earth-sand flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-earth-sand/20 hover:bg-earth-sand/40 text-earth-dark rounded-lg transition-colors text-sm font-medium">
                  <FileText size={16} />
                  View Report
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-natural text-white rounded-lg hover:bg-green-forest transition-colors text-sm font-medium">
                  <Download size={16} />
                  CSV
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-soil text-white rounded-lg hover:bg-soil-dark transition-colors text-sm font-medium">
                  <Download size={16} />
                  PDF
                </button>
              </div>
            </div>);

        })}
      </div>
    </div>);

}