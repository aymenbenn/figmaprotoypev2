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
    color: 'bg-green-700',
  },
  {
    label: 'Create Purchase Order',
    icon: Package,
    link: '/procurement',
    color: 'bg-orange-600',
  },
  {
    label: 'Log Gate Entry',
    icon: Truck,
    link: '/logistics',
    color: 'bg-lime-600',
  },
  {
    label: 'QC Inspection',
    icon: CheckCircle2,
    link: '/qc',
    color: 'bg-yellow-500',
  },
]

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f6f8f4]">

      {/* HERO */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex items-center">
          <div className="px-8 lg:px-14">
            <h1 className="text-5xl font-bold text-white mb-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between mb-5">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <Factory className="text-green-700" size={32} />
              </div>

              <div className="flex items-center gap-1 text-green-700 font-semibold">
                <TrendingUp size={18} />
                +12%
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Today's Yield
            </p>

            <h3 className="text-4xl font-bold text-gray-800">
              3,847 kg
            </h3>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between mb-5">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Package className="text-orange-600" size={32} />
              </div>

              <div className="flex items-center gap-1 text-green-700 font-semibold">
                <TrendingUp size={18} />
                +8%
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Active Orders
            </p>

            <h3 className="text-4xl font-bold text-gray-800">
              47
            </h3>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between mb-5">

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={32} />
              </div>

              <div className="flex items-center gap-1 text-red-600 font-semibold">
                <TrendingDown size={18} />
                3 Critical
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Low Stock Alerts
            </p>

            <h3 className="text-4xl font-bold text-gray-800">
              8
            </h3>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between mb-5">

              <div className="w-16 h-16 rounded-2xl bg-lime-100 flex items-center justify-center">
                <Users className="text-lime-700" size={32} />
              </div>

              <div className="text-green-700 font-semibold">
                12 Active
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Suppliers Active
            </p>

            <h3 className="text-4xl font-bold text-gray-800">
              24
            </h3>
          </div>

        </div>

        {/* 11 TANKS */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Oil Storage Tanks
              </h2>

              <p className="text-gray-500 mt-1">
                Real-time avocado oil tank capacity
              </p>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
              11 Tanks
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {Array.from({ length: 11 }).map((_, index) => {
              const fill = Math.floor(Math.random() * 70) + 20
              const empty = 100 - fill

              return (
                <div
                  key={index}
                  className="bg-[#fafcf8] rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-all duration-300"
                >

                  <div className="flex items-center justify-center mb-4">
                    <img
                      src="/tank.png"
                      alt={`Tank ${index + 1}`}
                      className="w-28 h-28 object-contain"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-800">
                      Tank {index + 1}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Avocado Oil Storage
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-500">Filled</span>
                      <span className="font-semibold text-gray-700">
                        {fill}%
                      </span>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{
                          width: `${fill}%`,
                        }}
                      />
                    </div>

                    <div className="mt-3 text-center text-sm text-gray-500">
                      {empty}% free space left
                    </div>
                  </div>

                </div>
              )
            })}

          </div>
        </div>

        {/* A / B ILLUSTRATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <img
              src="/A.png"
              alt="Illustration A"
              className="w-full h-[300px] object-contain"
            />
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <img
              src="/B.png"
              alt="Illustration B"
              className="w-full h-[300px] object-contain"
            />
          </div>

        </div>

        {/* SUPPLY CHAIN */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Supply Chain Status
            </h2>

            <p className="text-gray-500 mt-1">
              Live operational tracking
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">

            {[
              {
                stage: 'Farm Sourcing',
                count: '8 farms active',
                icon: '/farm.png',
                bg: 'bg-green-100',
              },
              {
                stage: 'In Transit',
                count: '4 trucks en route',
                icon: '/transit.png',
                bg: 'bg-orange-100',
              },
              {
                stage: 'Processing',
                count: '2 lines running',
                icon: '/processing.png',
                bg: 'bg-lime-100',
              },
              {
                stage: 'Warehouse',
                count: '3 low stock items',
                icon: '/warehouse.png',
                bg: 'bg-yellow-100',
              },
              {
                stage: 'Distribution',
                count: '12 orders shipping',
                icon: '/distribution.png',
                bg: 'bg-emerald-100',
              },
            ].map((item) => (
              <div
                key={item.stage}
                className="bg-[#fafcf8] rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300"
              >

                <div
                  className={`w-32 h-32 mx-auto rounded-3xl flex items-center justify-center mb-5 ${item.bg}`}
                >
                  <img
                    src={item.icon}
                    alt={item.stage}
                    className="w-24 h-24 object-contain"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.stage}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.count}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* CHART */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Weekly Production Yield
            </h2>

            <p className="text-gray-500 mt-1">
              Avocado oil processing output
            </p>
          </div>

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
                    stopColor="#15803d"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#15803d"
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
                stroke="#15803d"
                fill="url(#yieldGradient)"
                strokeWidth={3}
              />

            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ALERTS + ACTIONS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* ALERTS */}
          <div className="xl:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Recent Alerts
            </h2>

            <div className="space-y-4">

              {alerts.map((a) => (
                <div
                  key={a.id}
                  className="border border-gray-100 rounded-2xl p-5 hover:bg-gray-50 transition"
                >

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                      <AlertTriangle className="text-red-600" size={22} />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">
                        {a.message}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        {a.module} • {a.time}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {quickActions.map((q) => {
                const Icon = q.icon

                return (
                  <Link
                    key={q.label}
                    to={q.link}
                    className={`${q.color} rounded-2xl p-5 text-white flex flex-col items-center justify-center text-center gap-3 hover:scale-105 transition-transform min-h-[130px]`}
                  >

                    <Icon size={34} />

                    <span className="text-sm font-medium leading-snug">
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