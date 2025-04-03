'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, HelpCircle, User, ChevronDown } from 'lucide-react';

export default function TopBar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-4 lg:px-8">
      {/* Left side - visible only on desktop as sidebar handles mobile */}
      <div className="hidden lg:block">
        <div className="text-sm text-gray-500">
          Welcome to <span className="font-medium text-blue-600">KEYSPY</span>
        </div>
      </div>
      
      {/* Right side - notifications, help, user menu */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* Help */}
        <Link href="/help" className="p-2 rounded-full hover:bg-gray-100">
          <HelpCircle size={20} className="text-gray-600" />
        </Link>
        
        {/* User menu */}
        <div className="relative">
          <button 
            className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={16} className="text-gray-600" />
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </button>
          
          {/* Dropdown menu */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Your Profile
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </Link>
              <Link href="/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Billing
              </Link>
              <div className="border-t my-1"></div>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
