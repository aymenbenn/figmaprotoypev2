import React from 'react';
import { Users as UsersIcon, Shield, Mail, MoreVertical } from 'lucide-react';
const users = [
{
  id: 1,
  name: 'Amani K.',
  email: 'amani@sunripe.co.ke',
  role: 'Admin',
  department: 'Management',
  status: 'Active'
},
{
  id: 2,
  name: 'John M.',
  email: 'john.m@sunripe.co.ke',
  role: 'Production Mgr',
  department: 'Production',
  status: 'Active'
},
{
  id: 3,
  name: 'Sarah K.',
  email: 'sarah.k@sunripe.co.ke',
  role: 'QC Lead',
  department: 'Quality',
  status: 'Active'
},
{
  id: 4,
  name: 'Peter W.',
  email: 'peter.w@sunripe.co.ke',
  role: 'Warehouse Mgr',
  department: 'Inventory',
  status: 'Offline'
},
{
  id: 5,
  name: 'Grace N.',
  email: 'grace.n@sunripe.co.ke',
  role: 'Procurement',
  department: 'Supply Chain',
  status: 'Active'
}];

export function Users() {
  return (
    <div className="min-h-full p-6 lg:p-12">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif font-bold text-green-forest mb-2">
            User Management
          </h1>
          <p className="text-earth-dark/60">
            Manage team access and permissions
          </p>
        </div>
        <button className="px-4 py-2 bg-green-natural text-white rounded-lg hover:bg-green-forest transition-colors font-medium flex items-center gap-2">
          <Mail size={18} />
          Invite User
        </button>
      </div>

      <div className="bg-white rounded-xl border border-earth-sand overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-earth-sand/20 border-b border-earth-sand text-sm text-earth-dark/60">
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Department</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) =>
              <tr
                key={user.id}
                className="border-b border-earth-sand hover:bg-earth-sand/5 transition-colors">
                
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-natural/20 flex items-center justify-center text-green-forest font-bold">
                        {user.name.
                      split(' ').
                      map((n) => n[0]).
                      join('')}
                      </div>
                      <div>
                        <p className="font-medium text-earth-dark">
                          {user.name}
                        </p>
                        <p className="text-xs text-earth-dark/60">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      {user.role === 'Admin' &&
                    <Shield size={14} className="text-accent-gold" />
                    }
                      <span className="text-sm text-earth-dark">
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-earth-dark/80">
                    {user.department}
                  </td>
                  <td className="p-4">
                    <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${user.status === 'Active' ? 'bg-green-natural/20 text-green-forest' : 'bg-earth-sand text-earth-dark/60'}`}>
                    
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-earth-dark/40 hover:text-earth-dark rounded-lg hover:bg-earth-sand/50 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}