import React, { useState } from 'react';
import {
  AlertTriangle,
  Package,
  Map,
  Home,
  ArrowRightLeft,
  TrendingDown,
  TrendingUp } from
'lucide-react';
const NETWORK_IMAGE = "/Gemini_Generated_Image_3nzz6m3nzz6m3nzz_1.png";

const inventoryItems = [
{
  id: 'SKU-RAW-001',
  name: 'Raw Avocados Hass',
  category: 'Raw Material',
  qty: 1200,
  unit: 'kg',
  reorderPoint: 2000,
  maxCapacity: 10000,
  warehouse: 'Main Silo A',
  status: 'critical'
},
{
  id: 'SKU-RAW-002',
  name: 'Raw Avocados Fuerte',
  category: 'Raw Material',
  qty: 4500,
  unit: 'kg',
  reorderPoint: 1500,
  maxCapacity: 8000,
  warehouse: 'Main Silo B',
  status: 'healthy'
},
{
  id: 'SKU-OIL-001',
  name: 'Avocado Oil 500ml',
  category: 'Finished Goods',
  qty: 850,
  unit: 'bottles',
  reorderPoint: 500,
  maxCapacity: 5000,
  warehouse: 'Finished Goods WH',
  status: 'healthy'
},
{
  id: 'SKU-PLP-001',
  name: 'Avocado Pulp 1kg',
  category: 'Finished Goods',
  qty: 320,
  unit: 'packs',
  reorderPoint: 400,
  maxCapacity: 2000,
  warehouse: 'Cold Storage 1',
  status: 'warning'
},
{
  id: 'SKU-PKG-001',
  name: 'Glass Bottles 500ml',
  category: 'Packaging',
  qty: 15000,
  unit: 'pcs',
  reorderPoint: 5000,
  maxCapacity: 50000,
  warehouse: 'Packaging WH',
  status: 'healthy'
},
{
  id: 'SKU-PKG-002',
  name: 'Cardboard Boxes (12x)',
  category: 'Packaging',
  qty: 800,
  unit: 'pcs',
  reorderPoint: 1000,
  maxCapacity: 10000,
  warehouse: 'Packaging WH',
  status: 'warning'
}];

const supplyChainNodes = [
{
  id: 'farm',
  label: 'Farm Sourcing',
  status: 'healthy',
  detail: '8 Active Farms'
},
{
  id: 'logistics_in',
  label: 'Inbound Logistics',
  status: 'warning',
  detail: 'Delay on Route A2'
},
{
  id: 'factory',
  label: 'Processing Factory',
  status: 'healthy',
  detail: '2 Lines Active'
},
{
  id: 'warehouse',
  label: 'Central Warehouse',
  status: 'critical',
  detail: 'Hass Stock Low'
},
{
  id: 'logistics_out',
  label: 'Outbound Distribution',
  status: 'healthy',
  detail: 'All on schedule'
}];

type TabType = 'stock' | 'supply-chain' | 'warehouses' | 'movements';
export function Inventory() {
  const [activeTab, setActiveTab] = useState<TabType>('stock');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const tabs: {
    id: TabType;
    label: string;
    icon: any;
  }[] = [
  {
    id: 'stock',
    label: 'Stock Levels',
    icon: Package
  },
  {
    id: 'supply-chain',
    label: 'Supply Chain',
    icon: Map
  },
  {
    id: 'warehouses',
    label: 'Warehouses',
    icon: Home
  },
  {
    id: 'movements',
    label: 'Movements',
    icon: ArrowRightLeft
  }];

  const criticalItems = inventoryItems.filter(
    (item) => item.status === 'critical'
  );
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
          Warehouse & Inventory
        </h1>
        <p className="text-earth-dark/60">
          Track stock levels, monitor supply chain, and manage warehouses
        </p>
      </div>

      {/* Critical Alerts Banner */}
      {criticalItems.length > 0 &&
      <div className="mb-8 bg-soil/10 border border-soil/30 rounded-xl p-4 flex items-start gap-4">
          <div className="p-2 bg-soil/20 rounded-full">
            <AlertTriangle className="text-soil" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-soil mb-1">Critical Stock Alerts</h3>
            <ul className="space-y-1">
              {criticalItems.map((item) =>
            <li key={item.id} className="text-sm text-soil/80">
                  <span className="font-medium">{item.name}</span> is below
                  reorder point ({item.qty} {item.unit} remaining vs{' '}
                  {item.reorderPoint} {item.unit} threshold)
                </li>
            )}
            </ul>
          </div>
        </div>
      }

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-earth-sand overflow-hidden">
        <div className="border-b border-earth-sand flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === tab.id ? 'text-green-forest border-b-2 border-green-forest bg-green-natural/5' : 'text-earth-dark/60 hover:text-earth-dark hover:bg-earth-sand/20'}`}>
                
                <Icon size={18} />
                {tab.label}
              </button>);

          })}
        </div>

        <div className="p-6">
          {activeTab === 'stock' &&
          <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-serif font-bold text-xl text-earth-dark">
                  Current Stock Levels
                </h3>
                <div className="flex gap-2">
                  <select className="px-3 py-1.5 border border-earth-sand rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-natural">
                    <option>All Warehouses</option>
                    <option>Main Silo A</option>
                    <option>Finished Goods WH</option>
                  </select>
                  <select className="px-3 py-1.5 border border-earth-sand rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-natural">
                    <option>All Categories</option>
                    <option>Raw Material</option>
                    <option>Finished Goods</option>
                    <option>Packaging</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inventoryItems.map((item) => {
                const fillPercentage = Math.min(
                  100,
                  item.qty / item.maxCapacity * 100
                );
                const isLow = item.qty <= item.reorderPoint;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-lg p-6 cursor-pointer transition-all ${selectedItem === item.id ? 'border-green-natural shadow-md' : 'border-earth-sand hover:border-green-natural/50'}`}
                    onClick={() =>
                    setSelectedItem(
                      selectedItem === item.id ? null : item.id
                    )
                    }>
                    
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xs text-earth-dark/60 mb-1">
                            {item.category}
                          </p>
                          <h4 className="font-bold text-earth-dark">
                            {item.name}
                          </h4>
                          <p className="font-mono text-xs text-earth-dark/40 mt-1">
                            {item.id}
                          </p>
                        </div>
                        {isLow &&
                      <span className="px-2 py-1 bg-soil/10 text-soil text-xs font-bold rounded-full flex items-center gap-1">
                            <TrendingDown size={12} /> Low
                          </span>
                      }
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-2xl font-serif font-bold text-earth-dark">
                            {item.qty.toLocaleString()}{' '}
                            <span className="text-sm font-sans font-normal text-earth-dark/60">
                              {item.unit}
                            </span>
                          </span>
                          <span className="text-xs text-earth-dark/60">
                            Max: {item.maxCapacity.toLocaleString()}
                          </span>
                        </div>

                        <div className="h-2 bg-earth-sand rounded-full overflow-hidden relative">
                          {/* Reorder point marker */}
                          <div
                          className="absolute top-0 bottom-0 w-0.5 bg-earth-dark/40 z-10"
                          style={{
                            left: `${item.reorderPoint / item.maxCapacity * 100}%`
                          }}>
                        </div>

                          <div
                          className={`h-full transition-all duration-500 ${item.status === 'critical' ? 'bg-soil' : item.status === 'warning' ? 'bg-accent-gold' : 'bg-green-natural'}`}
                          style={{
                            width: `${fillPercentage}%`
                          }}>
                        </div>
                        </div>
                        <p className="text-xs text-earth-dark/60 mt-1 text-right">
                          Reorder at: {item.reorderPoint.toLocaleString()}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-earth-sand flex items-center gap-2 text-sm text-earth-dark/80">
                        <Home size={14} className="text-earth-dark/40" />
                        {item.warehouse}
                      </div>

                      {/* Drill-down detail (simulated) */}
                      {selectedItem === item.id &&
                    <div className="mt-4 pt-4 border-t border-earth-sand bg-earth-cream/50 -mx-6 -mb-6 p-6 rounded-b-lg">
                          <h5 className="font-medium text-sm mb-3">
                            Recent Activity
                          </h5>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-earth-dark/60">
                                Today, 08:30
                              </span>
                              <span className="text-soil font-medium">
                                -450 {item.unit} (Production)
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-earth-dark/60">
                                Yesterday
                              </span>
                              <span className="text-green-natural font-medium">
                                +1,200 {item.unit} (Received)
                              </span>
                            </div>
                          </div>
                          <button className="w-full mt-4 py-2 bg-green-natural/10 text-green-forest font-medium rounded-lg hover:bg-green-natural/20 transition-colors text-sm">
                            View Full History
                          </button>
                        </div>
                    }
                    </div>);

              })}
              </div>
            </div>
          }

          {activeTab === 'supply-chain' &&
          <div className="flex flex-col lg:flex-row gap-8">
              {/* Network Visualization */}
              <div className="flex-1 relative rounded-xl overflow-hidden border border-earth-sand bg-earth-cream min-h-[500px]">
                <img
                src={NETWORK_IMAGE}
                alt="Supply Chain Network"
                className="w-full h-full object-cover opacity-60" />
              

                {/* Overlay Nodes (Simulated positions) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="self-start bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-earth-sand max-w-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-green-natural"></div>
                      <h4 className="font-bold text-earth-dark">
                        Farm Sourcing
                      </h4>
                    </div>
                    <p className="text-sm text-earth-dark/60">
                      8 Active Farms • 4 Trucks Loading
                    </p>
                  </div>

                  <div className="self-center bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-earth-sand max-w-xs ml-24">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-accent-gold animate-pulse"></div>
                      <h4 className="font-bold text-earth-dark">
                        Inbound Logistics
                      </h4>
                    </div>
                    <p className="text-sm text-earth-dark/60">
                      Delay on Route A2 (Traffic)
                    </p>
                  </div>

                  <div className="self-end bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-soil/30 max-w-xs mr-12">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-soil animate-pulse"></div>
                      <h4 className="font-bold text-soil">Central Warehouse</h4>
                    </div>
                    <p className="text-sm text-soil/80">
                      Hass Stock Critical • Reorder Needed
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="w-full lg:w-80 space-y-6">
                <div className="bg-earth-sand/20 rounded-xl p-5 border border-earth-sand">
                  <h3 className="font-serif font-bold text-lg text-earth-dark mb-4">
                    Network Status
                  </h3>
                  <div className="space-y-4">
                    {supplyChainNodes.map((node) =>
                  <div key={node.id} className="flex items-start gap-3">
                        <div
                      className={`mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0 ${node.status === 'healthy' ? 'bg-green-natural' : node.status === 'warning' ? 'bg-accent-gold' : 'bg-soil'}`}>
                    </div>
                        <div>
                          <p className="font-medium text-earth-dark text-sm">
                            {node.label}
                          </p>
                          <p className="text-xs text-earth-dark/60">
                            {node.detail}
                          </p>
                        </div>
                      </div>
                  )}
                  </div>
                </div>

                <div className="bg-soil/5 rounded-xl p-5 border border-soil/20">
                  <h3 className="font-serif font-bold text-lg text-soil mb-3">
                    Bottleneck Alerts
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-soil/10">
                      <p className="text-sm font-medium text-earth-dark mb-1">
                        Raw Material Shortage
                      </p>
                      <p className="text-xs text-earth-dark/60">
                        Line A production may halt in 4 hours if Hass delivery
                        is delayed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {/* Placeholders for other tabs to meet requirements without over-engineering */}
          {activeTab === 'warehouses' &&
          <div className="text-center py-12">
              <Home className="mx-auto text-earth-dark/20 mb-4" size={48} />
              <h3 className="text-xl font-serif text-earth-dark mb-2">
                Warehouse Management
              </h3>
              <p className="text-earth-dark/60">
                Detailed warehouse mapping and capacity planning view.
              </p>
            </div>
          }

          {activeTab === 'movements' &&
          <div className="text-center py-12">
              <ArrowRightLeft
              className="mx-auto text-earth-dark/20 mb-4"
              size={48} />
            
              <h3 className="text-xl font-serif text-earth-dark mb-2">
                Stock Movements
              </h3>
              <p className="text-earth-dark/60">
                Log of all inbound, outbound, and internal transfers.
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

}