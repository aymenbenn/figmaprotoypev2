import React, { useState } from 'react';
import {
  Star,
  MapPin,
  FileText,
  Truck as TruckIcon,
  CheckCircle,
  Clock,
  AlertCircle } from
'lucide-react';
const HERO_IMAGE = "/gemini-3.1-flash-image-preview_(nano-banana-2)_[web-search]_a_Modern_isometric_ill_(1).png";

const suppliers = [
{
  id: 1,
  name: 'Mwea Farm Co-op',
  region: 'Kirinyaga, Kenya',
  rating: 4.8,
  activeContracts: 3,
  lastDelivery: '2 days ago',
  varieties: ['Hass', 'Fuerte'],
  status: 'active'
},
{
  id: 2,
  name: 'Kibwezi Grove',
  region: 'Makueni, Kenya',
  rating: 4.6,
  activeContracts: 2,
  lastDelivery: '5 days ago',
  varieties: ['Hass'],
  status: 'active'
},
{
  id: 3,
  name: 'Naivasha Estate',
  region: 'Nakuru, Kenya',
  rating: 4.9,
  activeContracts: 4,
  lastDelivery: '1 day ago',
  varieties: ['Hass', 'Fuerte', 'Pinkerton'],
  status: 'active'
},
{
  id: 4,
  name: 'Arusha Highlands',
  region: 'Arusha, Tanzania',
  rating: 4.5,
  activeContracts: 2,
  lastDelivery: '1 week ago',
  varieties: ['Hass', 'Reed'],
  status: 'active'
}];

const purchaseOrders = {
  draft: [
  {
    id: 'PO-2026-0142',
    supplier: 'Mwea Farm Co-op',
    items: '2,500 kg Hass',
    value: 'KES 375,000',
    date: 'May 8'
  }],

  approved: [
  {
    id: 'PO-2026-0141',
    supplier: 'Naivasha Estate',
    items: '3,200 kg Mixed',
    value: 'KES 480,000',
    date: 'May 7'
  },
  {
    id: 'PO-2026-0140',
    supplier: 'Kibwezi Grove',
    items: '1,800 kg Hass',
    value: 'KES 270,000',
    date: 'May 6'
  }],

  sent: [
  {
    id: 'PO-2026-0139',
    supplier: 'Arusha Highlands',
    items: '2,000 kg Hass',
    value: 'KES 320,000',
    date: 'May 5'
  }],

  received: [
  {
    id: 'PO-2026-0138',
    supplier: 'Mwea Farm Co-op',
    items: '2,800 kg Fuerte',
    value: 'KES 392,000',
    date: 'May 3'
  },
  {
    id: 'PO-2026-0137',
    supplier: 'Naivasha Estate',
    items: '3,500 kg Hass',
    value: 'KES 525,000',
    date: 'May 1'
  }]

};
const contracts = [
{
  id: 'CNT-2026-008',
  supplier: 'Mwea Farm Co-op',
  type: 'Annual Supply',
  startDate: 'Jan 2026',
  endDate: 'Dec 2026',
  volume: '50,000 kg/month',
  status: 'active'
},
{
  id: 'CNT-2026-012',
  supplier: 'Naivasha Estate',
  type: 'Seasonal',
  startDate: 'Mar 2026',
  endDate: 'Sep 2026',
  volume: '80,000 kg/month',
  status: 'active'
}];

const incomingShipments = [
{
  id: 'SHP-2026-0234',
  supplier: 'Kibwezi Grove',
  cargo: '1,800 kg Hass',
  truck: 'KBZ 482C',
  eta: '2 hours',
  status: 'in-transit'
},
{
  id: 'SHP-2026-0235',
  supplier: 'Naivasha Estate',
  cargo: '3,200 kg Mixed',
  truck: 'KCN 891D',
  eta: '4 hours',
  status: 'in-transit'
}];

type TabType = 'suppliers' | 'orders' | 'contracts' | 'shipments';
export function Procurement() {
  const [activeTab, setActiveTab] = useState<TabType>('suppliers');
  const [showPOModal, setShowPOModal] = useState(false);
  const tabs: {
    id: TabType;
    label: string;
  }[] = [
  {
    id: 'suppliers',
    label: 'Suppliers'
  },
  {
    id: 'orders',
    label: 'Purchase Orders'
  },
  {
    id: 'contracts',
    label: 'Contracts'
  },
  {
    id: 'shipments',
    label: 'Incoming Shipments'
  }];

  return (
    <div className="min-h-full">
      {/* Hero Header */}
      <div className="relative h-32 overflow-hidden border-b border-earth-sand">
        <img
          src={HERO_IMAGE}
          alt="Farm to Factory"
          className="w-full h-full object-cover opacity-20" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-forest/80 to-transparent flex items-center px-6 lg:px-12">
          <div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-green-forest">
              Procurement Processing
            </h1>
            <p className="text-earth-dark/60 mt-1">
              Manage suppliers, purchase orders, and contracts
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-earth-sand">
            <p className="text-sm text-earth-dark/60 mb-2">Active Suppliers</p>
            <p className="text-3xl font-serif font-bold text-earth-dark">24</p>
            <p className="text-xs text-green-natural mt-1">
              12 delivering today
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-earth-sand">
            <p className="text-sm text-earth-dark/60 mb-2">Open POs</p>
            <p className="text-3xl font-serif font-bold text-earth-dark">8</p>
            <p className="text-xs text-accent-gold mt-1">3 awaiting approval</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-earth-sand">
            <p className="text-sm text-earth-dark/60 mb-2">Active Contracts</p>
            <p className="text-3xl font-serif font-bold text-earth-dark">18</p>
            <p className="text-xs text-earth-dark/60 mt-1">2 expiring soon</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-earth-sand">
            <p className="text-sm text-earth-dark/60 mb-2">In Transit</p>
            <p className="text-3xl font-serif font-bold text-earth-dark">6</p>
            <p className="text-xs text-green-natural mt-1">2 arriving today</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-earth-sand overflow-hidden">
          <div className="border-b border-earth-sand flex overflow-x-auto">
            {tabs.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-green-forest border-b-2 border-green-forest' : 'text-earth-dark/60 hover:text-earth-dark'}`}>
              
                {tab.label}
              </button>
            )}
          </div>

          <div className="p-6">
            {activeTab === 'suppliers' &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suppliers.map((supplier) =>
              <div
                key={supplier.id}
                className="border border-earth-sand rounded-lg p-6 hover:border-green-natural transition-colors">
                
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-green-natural/20 flex items-center justify-center">
                          <span className="text-lg font-serif font-bold text-green-forest">
                            {supplier.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-lg text-earth-dark">
                            {supplier.name}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-earth-dark/60">
                            <MapPin size={14} />
                            <span>{supplier.region}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star
                      className="text-accent-gold fill-accent-gold"
                      size={16} />
                    
                        <span className="font-bold text-earth-dark">
                          {supplier.rating}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-earth-dark/60">
                          Active Contracts
                        </p>
                        <p className="font-bold text-earth-dark">
                          {supplier.activeContracts}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60">
                          Last Delivery
                        </p>
                        <p className="font-medium text-earth-dark">
                          {supplier.lastDelivery}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-earth-sand">
                      <p className="text-xs text-earth-dark/60 mb-2">
                        Varieties
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {supplier.varieties.map((variety) =>
                    <span
                      key={variety}
                      className="text-xs px-2 py-1 bg-green-natural/10 text-green-forest rounded-full">
                      
                            {variety}
                          </span>
                    )}
                      </div>
                    </div>
                  </div>
              )}
              </div>
            }

            {activeTab === 'orders' &&
            <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif font-bold text-xl text-earth-dark">
                    Purchase Order Pipeline
                  </h3>
                  <button
                  onClick={() => setShowPOModal(true)}
                  className="px-4 py-2 bg-green-natural text-white rounded-lg hover:bg-green-forest transition-colors font-medium">
                  
                    + Create PO
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Draft */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-earth-sand"></div>
                      <h4 className="font-medium text-earth-dark">Draft</h4>
                      <span className="text-xs bg-earth-sand px-2 py-1 rounded-full">
                        {purchaseOrders.draft.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {purchaseOrders.draft.map((po) =>
                    <div
                      key={po.id}
                      className="bg-earth-sand/30 border border-earth-sand rounded-lg p-4">
                      
                          <p className="font-mono text-sm font-bold text-earth-dark mb-2">
                            {po.id}
                          </p>
                          <p className="text-sm text-earth-dark/80 mb-1">
                            {po.supplier}
                          </p>
                          <p className="text-xs text-earth-dark/60 mb-2">
                            {po.items}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-forest">
                              {po.value}
                            </span>
                            <span className="text-xs text-earth-dark/60">
                              {po.date}
                            </span>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>

                  {/* Approved */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-accent-gold"></div>
                      <h4 className="font-medium text-earth-dark">Approved</h4>
                      <span className="text-xs bg-accent-gold/20 px-2 py-1 rounded-full">
                        {purchaseOrders.approved.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {purchaseOrders.approved.map((po) =>
                    <div
                      key={po.id}
                      className="bg-accent-gold/5 border border-accent-gold/20 rounded-lg p-4">
                      
                          <p className="font-mono text-sm font-bold text-earth-dark mb-2">
                            {po.id}
                          </p>
                          <p className="text-sm text-earth-dark/80 mb-1">
                            {po.supplier}
                          </p>
                          <p className="text-xs text-earth-dark/60 mb-2">
                            {po.items}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-forest">
                              {po.value}
                            </span>
                            <span className="text-xs text-earth-dark/60">
                              {po.date}
                            </span>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>

                  {/* Sent */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-avocado"></div>
                      <h4 className="font-medium text-earth-dark">Sent</h4>
                      <span className="text-xs bg-green-avocado/20 px-2 py-1 rounded-full">
                        {purchaseOrders.sent.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {purchaseOrders.sent.map((po) =>
                    <div
                      key={po.id}
                      className="bg-green-avocado/5 border border-green-avocado/20 rounded-lg p-4">
                      
                          <p className="font-mono text-sm font-bold text-earth-dark mb-2">
                            {po.id}
                          </p>
                          <p className="text-sm text-earth-dark/80 mb-1">
                            {po.supplier}
                          </p>
                          <p className="text-xs text-earth-dark/60 mb-2">
                            {po.items}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-forest">
                              {po.value}
                            </span>
                            <span className="text-xs text-earth-dark/60">
                              {po.date}
                            </span>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>

                  {/* Received */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-natural"></div>
                      <h4 className="font-medium text-earth-dark">Received</h4>
                      <span className="text-xs bg-green-natural/20 px-2 py-1 rounded-full">
                        {purchaseOrders.received.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {purchaseOrders.received.map((po) =>
                    <div
                      key={po.id}
                      className="bg-green-natural/5 border border-green-natural/20 rounded-lg p-4">
                      
                          <p className="font-mono text-sm font-bold text-earth-dark mb-2">
                            {po.id}
                          </p>
                          <p className="text-sm text-earth-dark/80 mb-1">
                            {po.supplier}
                          </p>
                          <p className="text-xs text-earth-dark/60 mb-2">
                            {po.items}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-green-forest">
                              {po.value}
                            </span>
                            <span className="text-xs text-earth-dark/60">
                              {po.date}
                            </span>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            }

            {activeTab === 'contracts' &&
            <div className="space-y-4">
                {contracts.map((contract) =>
              <div
                key={contract.id}
                className="border border-earth-sand rounded-lg p-6 hover:border-green-natural transition-colors">
                
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-mono font-bold text-lg text-earth-dark">
                            {contract.id}
                          </h3>
                          <span className="text-xs px-3 py-1 bg-green-natural/20 text-green-forest rounded-full font-medium">
                            Active
                          </span>
                        </div>
                        <p className="text-earth-dark/80 font-medium">
                          {contract.supplier}
                        </p>
                        <p className="text-sm text-earth-dark/60">
                          {contract.type}
                        </p>
                      </div>
                      <FileText className="text-earth-dark/40" size={24} />
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-earth-sand">
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          Contract Period
                        </p>
                        <p className="font-medium text-earth-dark">
                          {contract.startDate} - {contract.endDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          Volume
                        </p>
                        <p className="font-medium text-earth-dark">
                          {contract.volume}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          Status
                        </p>
                        <p className="font-medium text-green-forest capitalize">
                          {contract.status}
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            }

            {activeTab === 'shipments' &&
            <div className="space-y-4">
                {incomingShipments.map((shipment) =>
              <div
                key={shipment.id}
                className="border border-green-natural/20 bg-green-natural/5 rounded-lg p-6">
                
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-green-natural/20 rounded-lg">
                          <TruckIcon className="text-green-forest" size={24} />
                        </div>
                        <div>
                          <p className="font-mono font-bold text-earth-dark">
                            {shipment.id}
                          </p>
                          <p className="text-sm text-earth-dark/80">
                            {shipment.supplier}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-green-forest font-medium mb-1">
                          <Clock size={16} />
                          <span>ETA: {shipment.eta}</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-green-natural/20 text-green-forest rounded-full">
                          In Transit
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">Cargo</p>
                        <p className="font-medium text-earth-dark">
                          {shipment.cargo}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-dark/60 mb-1">
                          Truck Plate
                        </p>
                        <p className="font-medium text-earth-dark">
                          {shipment.truck}
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            }
          </div>
        </div>
      </div>

      {/* Create PO Modal */}
      {showPOModal &&
      <div className="fixed inset-0 bg-earth-dark/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8">
            <h2 className="text-2xl font-serif font-bold text-earth-dark mb-6">
              Create Purchase Order
            </h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-earth-dark mb-2">
                  Supplier
                </label>
                <select className="w-full px-4 py-2 border border-earth-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-green-natural">
                  <option>Select supplier...</option>
                  {suppliers.map((s) =>
                <option key={s.id}>{s.name}</option>
                )}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-earth-dark mb-2">
                    Variety
                  </label>
                  <select className="w-full px-4 py-2 border border-earth-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-green-natural">
                    <option>Hass</option>
                    <option>Fuerte</option>
                    <option>Pinkerton</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-dark mb-2">
                    Quantity (kg)
                  </label>
                  <input
                  type="number"
                  placeholder="2500"
                  className="w-full px-4 py-2 border border-earth-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-green-natural" />
                
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-dark mb-2">
                  Delivery Date
                </label>
                <input
                type="date"
                className="w-full px-4 py-2 border border-earth-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-green-natural" />
              
              </div>
            </div>

            <div className="flex gap-3">
              <button
              onClick={() => setShowPOModal(false)}
              className="flex-1 px-4 py-2 border border-earth-sand text-earth-dark rounded-lg hover:bg-earth-sand transition-colors">
              
                Cancel
              </button>
              <button
              onClick={() => setShowPOModal(false)}
              className="flex-1 px-4 py-2 bg-green-natural text-white rounded-lg hover:bg-green-forest transition-colors">
              
                Create Draft PO
              </button>
            </div>
          </div>
        </div>
      }
    </div>);

}