import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  Package,
  AlertTriangle,
  Users,
  Factory,
  Truck,
  CheckCircle2 } from
'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';

const HERO_IMAGE = "/gemini-3.1-flash-image-preview_(nano-banana-2)_[web-search]_a_Modern_isometric_ill.png";


const yieldData = [
{ day: 'Mon', yield: 2400 },
{ day: 'Tue', yield: 2800 },
{ day: 'Wed', yield: 2600 },
{ day: 'Thu', yield: 3200 },
{ day: 'Fri', yield: 3800 },
{ day: 'Sat', yield: 3400 },
{ day: 'Sun', yield: 2900 }];


const productionLines = [
{ name: 'Line A', status: 'Running', efficiency: 94, product: 'Avocado Oil 500ml' },
{ name: 'Line B', status: 'Running', efficiency: 89, product: 'Avocado Pulp 1kg' },
{ name: 'Line C', status: 'Idle', efficiency: 0, product: 'Whole Avocados' },
{ name: 'Line D', status: 'Maintenance', efficiency: 0, product: 'Packaging' }];


const alerts = [
{
  id: 1,
  type: 'critical',
  message: 'Raw Avocados Hass stock below reorder point',
  module: 'Inventory',
  time: '12 min ago'
},
{
  id: 2,
  type: 'warning',
  message: 'Line D scheduled maintenance overdue',
  module: 'Maintenance',
  time: '1 hour ago'
},
{
  id: 3,
  type: 'info',
  message: 'Shipment from Mwea Farm arriving in 2 hours',
  module: 'Logistics',
  time: '2 hours ago'
}];


const quickActions = [
{ label: 'New Production Batch', icon: Factory, link: '/production', color: 'bg-green-natural' },
{ label: 'Create Purchase Order', icon: Package, link: '/procurement', color: 'bg-soil' },
{ label: 'Log Gate Entry', icon: Truck, link: '/logistics', color: 'bg-green-avocado' },
{ label: 'QC Inspection', icon: CheckCircle2, link: '/qc', color: 'bg-accent-gold' }];


export function Dashboard() {
  return (
    <div className="min-h-full">

      {/* HERO */}
      <div className="relative h-64 overflow-hidden">
        <img src={HERO_IMAGE} alt="Sunripe Farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-forest/90 to-green-forest/40 flex items-center">
          <div className="px-8 lg:px-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-earth-cream mb-2">
              Karibu, Amani
            </h1>
            <p className="text-earth-cream/90 text-lg">
              Nairobi Processing Facility • Friday, May 8th 2026
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-8 space-y-8">

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex justify-between mb-4">
              <div className="p-3 bg-green-natural/10 rounded-lg">
                <Factory className="text-green-natural" size={24} />
              </div>
              <span className="text-green-natural text-sm flex items-center gap-1">
                <TrendingUp size={16} /> +12%
              </span>
            </div>
            <p className="text-sm text-gray-500">Today's Yield</p>
            <p className="text-3xl font-bold">3,847 kg</p>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex justify-between mb-4">
              <div className="p-3 bg-soil/10 rounded-lg">
                <Package className="text-soil" size={24} />
              </div>
              <span className="text-green-natural text-sm flex items-center gap-1">
                <TrendingUp size={16} /> +8%
              </span>
            </div>
            <p className="text-sm text-gray-500">Active Orders</p>
            <p className="text-3xl font-bold">47</p>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex justify-between mb-4">
              <div className="p-3 bg-soil/10 rounded-lg">
                <AlertTriangle className="text-soil" size={24} />
              </div>
              <span className="text-soil text-sm flex items-center gap-1">
                <TrendingDown size={16} /> 3 Critical
              </span>
            </div>
            <p className="text-sm text-gray-500">Low Stock Alerts</p>
            <p className="text-3xl font-bold">8</p>
          </div>

          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <div className="flex justify-between mb-4">
              <div className="p-3 bg-green-avocado/10 rounded-lg">
                <Users className="text-green-avocado" size={24} />
              </div>
              <span className="text-green-natural text-sm">12 Active</span>
            </div>
            <p className="text-sm text-gray-500">Suppliers Active</p>
            <p className="text-3xl font-bold">24</p>
          </div>

        </div>

        {/* 🛢️ 11 TANKS SECTION */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Oil Storage Tanks (11 Tanks)</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {Array.from({ length: 11 }).map((_, index) => {
              const fill = Math.floor(Math.random() * 100);
              const empty = 100 - fill;

              return (
                <div
                  key={index}
                  className="border rounded-lg p-4 text-center hover:shadow-md transition">
                  

                  {/* Tank Image */}
                  <img
                    src="/tank.png"
                    alt={`Tank ${index + 1}`}
                    className="w-20 h-20 mx-auto object-contain mb-2" />
                  

                  <p className="font-medium">Tank {index + 1}</p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${fill}%` }} />
                    
                  </div>

                  <p className="text-xs mt-1 text-gray-600">
                    {fill}% full • {empty}% free
                  </p>

                </div>);

            })}

          </div>
        </div>

        {/* A / B IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl border shadow-sm p-4 flex items-center justify-center">
            <img src="/A.png" className="w-full h-64 object-contain" />
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-4 flex items-center justify-center">
            <img src="/B.png" className="w-full h-64 object-contain" />
          </div>

        </div>

        {/* SUPPLY CHAIN */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-4">Supply Chain Status</h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

            {[
            { stage: 'Farm Sourcing', count: '8 farms active', icon: '/farm.png' },
            { stage: 'In Transit', count: '4 trucks en route', icon: '/transit.png' },
            { stage: 'Processing', count: '2 lines running', icon: '/processing.png' },
            { stage: 'Warehouse', count: '3 low stock items', icon: '/warehouse.png' },
            { stage: 'Distribution', count: '12 orders shipping', icon: '/distribution.png' }].
            map((item) =>
            <div key={item.stage} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center bg-green-natural/10">
                  <img src={item.icon} className="w-7 h-7 object-contain" />
                </div>
                <p className="font-medium text-sm">{item.stage}</p>
                <p className="text-xs text-gray-500">{item.count}</p>
              </div>
            )}

          </div>
        </div>

        {/* CHART */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-4">Weekly Production Yield</h2>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="yield" stroke="#4A6B3A" fill="#4A6B3A33" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ALERTS + QUICK ACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Alerts</h2>

            {alerts.map((a) =>
            <div key={a.id} className="p-3 border-b last:border-0">
                <p className="font-medium">{a.message}</p>
                <p className="text-xs text-gray-500">{a.module} • {a.time}</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((q) => {
                const Icon = q.icon;
                return (
                  <Link
                    key={q.label}
                    to={q.link}
                    className={`${q.color} text-white p-4 rounded-lg flex flex-col items-center gap-2`}>
                    
                    <Icon size={20} />
                    <span className="text-xs text-center">{q.label}</span>
                  </Link>);

              })}
            </div>
          </div>

        </div>

      </div>
    </div>);

}