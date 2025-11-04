import { BookOpen, Download, TrendingUp, Users, Briefcase, Target, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
const blogPosts = [
  {
    title: '10 Resume Mistakes That Cost You Interviews',
    excerpt: 'Learn the most common resume mistakes that prevent you from getting callbacks and how to fix them today.',
    category: 'Resume Tips',
    date: 'Oct 15, 2025',
    readTime: '5 min read',
    icon: Briefcase,
  },
  {
    title: 'How to Optimize Your LinkedIn Profile for Recruiters',
    excerpt: 'A step-by-step guide to making your LinkedIn profile irresistible to recruiters and hiring managers.',
    category: 'LinkedIn',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
    icon: Users,
  },
  {
    title: 'Mastering the STAR Method for Interview Success',
    excerpt: 'The proven framework for answering behavioral interview questions that impresses every interviewer.',
    category: 'Interview Tips',
    date: 'Oct 8, 2025',
    readTime: '6 min read',
    icon: Target,
  },
  {
    title: 'Salary Negotiation: Getting What You Deserve',
    excerpt: 'Expert strategies for negotiating a higher salary without jeopardizing your job offer.',
    category: 'Career Strategy',
    date: 'Oct 5, 2025',
    readTime: '7 min read',
    icon: TrendingUp,
  },
  {
    title: 'Career Change at 40: A Complete Guide',
    excerpt: 'Making a career pivot later in life? Here is everything you need to know to make a successful transition.',
    category: 'Career Change',
    date: 'Oct 1, 2025',
    readTime: '10 min read',
    icon: BookOpen,
  },
  {
    title: 'H1B Visa Sponsorship: What You Need to Know',
    excerpt: 'Navigate the H1B process with confidence. Essential tips for finding and securing visa sponsorship.',
    category: 'Immigration',
    date: 'Sep 28, 2025',
    readTime: '9 min read',
    icon: Briefcase,
  },
];

const resources = [
  {
    title: 'Resume Template Bundle',
    description: 'Professional, ATS-friendly resume templates for all industries',
    type: 'PDF Templates',
  },
  {
    title: 'Interview Question Database',
    description: '200+ common interview questions with expert answers',
    type: 'PDF Guide',
  },
  {
    title: 'Career Change Roadmap',
    description: 'Step-by-step guide for successful career transitions',
    type: 'Workbook',
  },
  {
    title: 'LinkedIn Optimization Checklist',
    description: 'Complete checklist to maximize your LinkedIn profile',
    type: 'PDF Checklist',
  },
  {
    title: 'Salary Negotiation Scripts',
    description: 'Proven scripts and email templates for negotiation',
    type: 'Templates',
  },
  {
    title: 'Job Search Tracker',
    description: 'Spreadsheet to organize and track your applications',
    type: 'Excel Template',
  },
];

export default function Resources() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-400 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Career Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights, actionable guides, and free templates to accelerate your career growth
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                Latest Articles
              </h2>
              <p className="text-gray-600">
                Career tips and strategies from industry experts
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <article
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all group border border-slate-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-slate-200">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Free Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600">
              Templates, guides, and tools to support your job search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border border-slate-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                <button className="w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Free</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <BookOpen className="h-16 w-16 text-orange-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want Personalized Guidance?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                While our resources are helpful, nothing beats personalized coaching. Schedule a free consultation to discuss your specific needs.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
