import Link from 'next/link';
import { Zap, ArrowRight, Search, FileText, BarChart2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Zap className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
              <span className="text-blue-600">KEYSPY</span> - AI-Powered SEO & SEM Platform
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Analyze your website, discover missing keywords, and generate SEO-optimized content with the power of AI.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link 
                href="/dashboard" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium flex items-center hover:bg-blue-700 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Audit</h3>
              <p className="text-gray-600">
                Analyze your website for SEO gaps and discover opportunities to improve your rankings.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Content Generator</h3>
              <p className="text-gray-600">
                Create SEO-optimized content and articles with our advanced AI technology.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ad Intelligence</h3>
              <p className="text-gray-600">
                Get ad copy suggestions based on competitor analysis and improve your SEM campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to boost your SEO performance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join KEYSPY today and start optimizing your website with the power of AI.
          </p>
          <Link 
            href="/dashboard" 
            className="px-8 py-4 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
