import React from 'react'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  TrendingDown,
  Package,
  AlertTriangle,
  Users,
  Factory,
  Truck,
  CheckCircle2,
} from 'lucide-react'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const HERO_IMAGE =
  '/gemini-3.1-flash-image-preview_(nano-banana-2)_[web-search]_a_Modern_isometric_ill.png'

const yieldData = [
  { day: 'Mon', yield: 2400 },
  { day: 'Tue', yield: 2800 },
  { day: 'Wed', yield: 2600 },
  { day: 'Thu', yield: 3200 },
  { day: 'Fri', yield: 3800 },
  { day: 'Sat', yield: 3400 },
  { day: 'Sun', yield: 2900 },
]

const productionLines = [
  {
    name: 'Line A',
    status: 'Running',
    efficiency: 94,
    product: 'Avocado Oil 500ml',
  },
  {
    name: 'Line B',
    status: 'Running',
    efficiency: 89,
    product: 'Avocado Pulp 1kg',
  },
  {
    name: 'Line C',
    status: 'Idle',
    efficiency: 0,
    product: 'Whole Avocados',
  },
  {
    name: 'Line D',
    status: 'Maintenance',
    efficiency: 0,
    product: 'Packaging',
  },
]

const alerts = [
  {
    id: 1,
    type: 'critical',
    message: 'Raw Avocados Hass stock below reorder point',
    module: 'Inventory',
    time: '12 min ago',
  },
  {
    id: 2,
    type: 'warning',
    message: 'Line D scheduled maintenance overdue',
    module: 'Maintenance',
    time: '1 hour ago',
  },
  {
    id: 3,
    type: 'info',
    message: 'Shipment from Mwea Farm arriving in 2 hours',
    module: 'Logistics',
    time: '2 hours ago',
  },
]

const quickActions = [
  {
    label: 'New Production Batch',
    icon: Factory,
    link: '/production',
    color: 'bg-green-natural',
  },
  {
    label: 'Create Purchase Order',
    icon: Package,
    link: '/procurement',
    color: 'bg-soil',
  },
  {
    label: 'Log Gate Entry',
    icon: Truck,
    link: '/logistics',
    color: 'bg-green-avocado',
  },
  {
    label: 'QC Inspection',
    icon: CheckCircle2,
    link: '/qc',
    color: 'bg-accent-gold',
  },
]

export function Dashboard() {
  return (
    <div className="min-h-full bg-[#f7f7f5]">

      {/* HERO */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Sunripe Farm"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex items-center">
          <div className="px-8 lg:px-12">

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              Karibu, Amani
            </h1>

            <p className="text-white/90 text-lg">
              Nairobi Processing Facility • Friday, May 8th 2026
            </p>

          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-8 space-y-8">

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

            <div className="flex items-start justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <Factory className="text-green-700" size={34} />
              </div>

              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <TrendingUp size={18} />
                +12%
              </div>

            </div>

            <p className="text-gray-500 mb-2">
              Today's Yield
            </p>

            <h3 className="text-4xl font-bold text-gray-900">
              3,847 kg
            </h3>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

            <div className="flex items-start justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Package className="text-orange-700" size={34} />
              </div>

              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <TrendingUp size={18} />
                +8%
              </div>

            </div>

            <p className="text-gray-500 mb-2">
              Active Orders
            </p>

            <h3 className="text-4xl font-bold text-gray-900">
              47
            </h3>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

            <div className="flex items-start justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={34} />
              </div>

              <div className="flex items-center gap-1 text-red-600 font-semibold">
                <TrendingDown size={18} />
                3 Critical
              </div>

            </div>

            <p className="text-gray-500 mb-2">
              Low Stock Alerts
            </p>

            <h3 className="text-4xl font-bold text-gray-900">
              8
            </h3>

          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

            <div className="flex items-start justify-between mb-6">

              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Users className="text-emerald-700" size={34} />
              </div>

              <div className="text-green-600 font-semibold">
                12 Active
              </div>

            </div>

            <p className="text-gray-500 mb-2">
              Suppliers Active
            </p>

            <h3 className="text-4xl font-bold text-gray-900">
              24
            </h3>

          </div>

        </div>

        {/* 11 TANKS */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Oil Storage Tanks
            </h2>

            <p className="text-gray-500 mt-1">
              11 avocado oil storage tanks monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {Array.from({ length: 11 }).map((_, index) => {
              const fill = Math.floor(Math.random() * 100)
              const empty = 100 - fill

              return (
                <div
                  key={index}
                  className="border rounded-2xl p-5 bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >

                  <img
                    src="/tank.png"
                    alt={`Tank ${index + 1}`}
                    className="w-28 h-28 object-contain mx-auto mb-4"
                  />

                  <h3 className="font-semibold text-lg text-center">
                    Tank {index + 1}
                  </h3>

                  <div className="mt-4">

                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Storage Used</span>
                      <span>{fill}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-600 h-3 rounded-full"
                        style={{
                          width: `${fill}%`,
                        }}
                      />
                    </div>

                    <p className="text-sm text-gray-500 mt-3 text-center">
                      {empty}% space available
                    </p>

                  </div>

                </div>
              )
            })}

          </div>

        </div>

        {/* A / B ILLUSTRATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <img
              src="/A.png"
              alt="Factory Illustration"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <img
              src="/B.png"
              alt="Storage Illustration"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>

        </div>

        {/* SUPPLY CHAIN */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Supply Chain Status
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              {
                stage: 'Farm Sourcing',
                count: '8 farms active',
                icon: '/farm.png',
              },
              {
                stage: 'In Transit',
                count: '4 trucks en route',
                icon: '/transit.png',
              },
              {
                stage: 'Processing',
                count: '2 lines running',
                icon: '/processing.png',
              },
              {
                stage: 'Warehouse',
                count: '3 low stock items',
                icon: '/warehouse.png',
              },
              {
                stage: 'Distribution',
                count: '12 orders shipping',
                icon: '/distribution.png',
              },
            ].map((item) => (
              <div
                key={item.stage}
                className="text-center bg-[#fafaf8] rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100"
              >

                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-green-100">

                  <img
                    src={item.icon}
                    alt={item.stage}
                    className="w-14 h-14 object-contain"
                  />

                </div>

                <p className="font-semibold text-base">
                  {item.stage}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {item.count}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CHART */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Weekly Production Yield
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <AreaChart data={yieldData}>

              <defs>
                <linearGradient
                  id="yieldGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#16a34a"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#16a34a"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="yield"
                stroke="#16a34a"
                fill="url(#yieldGradient)"
                strokeWidth={3}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* ALERTS + QUICK ACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ALERTS */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Recent Alerts
            </h2>

            <div className="space-y-4">

              {alerts.map((a) => (
                <div
                  key={a.id}
                  className="border rounded-xl p-4 hover:bg-gray-50 transition"
                >

                  <p className="font-semibold text-gray-900">
                    {a.message}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {a.module} • {a.time}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {quickActions.map((q) => {
                const Icon = q.icon

                return (
                  <Link
                    key={q.label}
                    to={q.link}
                    className={`${q.color} text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition duration-300`}
                  >

                    <Icon size={30} />

                    <span className="text-sm text-center font-medium">
                      {q.label}
                    </span>

                  </Link>
                )
              })}

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}