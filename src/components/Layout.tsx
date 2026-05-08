import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Factory,
  ShoppingCart,
  Package,
  Truck,
  Users,
  ClipboardCheck,
  Wrench,
  BarChart3,
  Search,
  Bell,
  Menu,
  X,
  FileText } from
'lucide-react';
const LOGO_URL = "/Gemini_Generated_Image_jzupbvjzupbvjzup_1.png";

const NAV_ITEMS = [
{
  path: '/dashboard',
  label: 'Overview',
  icon: LayoutDashboard
},
{
  path: '/production',
  label: 'Production',
  icon: Factory
},
{
  path: '/procurement',
  label: 'Procurement',
  icon: ShoppingCart
},
{
  path: '/inventory',
  label: 'Inventory',
  icon: Package
},
{
  path: '/orders',
  label: 'Orders & Sales',
  icon: FileText
},
{
  path: '/logistics',
  label: 'Logistics',
  icon: Truck
},
{
  path: '/qc',
  label: 'Quality Control',
  icon: ClipboardCheck
},
{
  path: '/maintenance',
  label: 'Maintenance',
  icon: Wrench
},
{
  path: '/users',
  label: 'Users',
  icon: Users
},
{
  path: '/reports',
  label: 'Reports',
  icon: BarChart3
}];

export function Layout({ children }: {children: React.ReactNode;}) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex h-screen w-full bg-earth-cream overflow-hidden font-sans text-earth-dark">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen &&
      <div
        className="fixed inset-0 bg-earth-dark/50 z-40 lg:hidden"
        onClick={() => setIsMobileMenuOpen(false)} />

      }

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-green-forest text-earth-cream flex flex-col
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        <div className="p-6 flex items-center gap-3 border-b border-green-natural/30">
          <img
            src={LOGO_URL}
            alt="Avo Grove Logo"
            className="w-10 h-10 object-contain bg-earth-cream rounded-full p-1" />
          
          <div>
            <h1 className="font-serif font-bold text-xl tracking-wide text-accent-gold">
              Sunripe Farms
            </h1>
            <p className="text-xs text-green-avocado uppercase tracking-wider">
              Admin Panel
            </p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
            location.pathname.startsWith(item.path) ||
            location.pathname === '/' && item.path === '/dashboard';
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                  ${isActive ? 'bg-green-natural text-earth-cream font-medium' : 'text-earth-cream/70 hover:bg-green-natural/50 hover:text-earth-cream'}
                `}>
                
                <Icon
                  size={20}
                  className={isActive ? 'text-accent-gold' : ''} />
                
                <span>{item.label}</span>
              </Link>);

          })}
        </nav>

        <div className="p-4 border-t border-green-natural/30">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-soil flex items-center justify-center text-earth-cream font-bold">
              AK
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Amani K.</p>
              <p className="text-xs text-green-avocado truncate">
                Factory Manager
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-earth-cream border-b border-earth-sand flex items-center justify-between px-4 lg:px-8 z-10">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-earth-dark hover:bg-earth-sand rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}>
              
              <Menu size={24} />
            </button>

            <div className="hidden md:flex items-center bg-earth-sand/50 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-green-avocado transition-all">
              <Search size={18} className="text-earth-dark/50 mr-2" />
              <input
                type="text"
                placeholder="Search batches, orders..."
                className="bg-transparent border-none outline-none text-sm w-full placeholder-earth-dark/50" />
              
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-earth-dark hover:bg-earth-sand rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-soil rounded-full border-2 border-earth-cream"></span>
            </button>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">Nairobi Facility</p>
              <p className="text-xs text-earth-dark/60">Oct 24, 2026</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-earth-cream relative">
          <div className="absolute inset-0 bg-soil-pattern opacity-5 pointer-events-none"></div>
          <div className="relative z-0 min-h-full">{children}</div>
        </main>
      </div>
    </div>);

}