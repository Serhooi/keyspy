import MainLayout from '@/components/layout/MainLayout';
import { BarChart, PieChart, Search, FileText, Target, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome header */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to KEYSPY</h1>
          <p className="text-gray-600 mt-2">
            Your AI-powered SEO and SEM platform. Get started by analyzing your website or generating content.
          </p>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">SEO Audit</h3>
                <p className="text-gray-600 mt-1">Analyze your website for SEO gaps</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <button className="mt-4 text-blue-600 font-medium flex items-center text-sm">
              Start Analysis <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Content Generator</h3>
                <p className="text-gray-600 mt-1">Create SEO-optimized content</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <button className="mt-4 text-green-600 font-medium flex items-center text-sm">
              Generate Content <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Ad Intelligence</h3>
                <p className="text-gray-600 mt-1">Get ad copy suggestions</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <button className="mt-4 text-purple-600 font-medium flex items-center text-sm">
              Analyze Competitors <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Analytics overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Analytics Overview</h2>
            <select className="bg-gray-100 border-0 rounded-md text-sm text-gray-700 py-2 px-3">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">SEO Performance</h3>
              <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                <BarChart className="h-8 w-8 text-gray-400" />
                <span className="ml-2 text-gray-500">Performance chart will appear here</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Content Distribution</h3>
              <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                <PieChart className="h-8 w-8 text-gray-400" />
                <span className="ml-2 text-gray-500">Distribution chart will appear here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <Search className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Website Analysis Completed</p>
                  <p className="text-gray-500 text-sm">Found 12 SEO improvement opportunities</p>
                  <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 font-medium text-sm">
            View All Activity
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
