import { Link } from 'react-router-dom';
import { FileText, Linkedin, MessageCircle, TrendingUp, Search, Award, Globe, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
const services = [
  {
    icon: FileText,
    title: 'Resume Writing',
    description: 'Professional, ATS-optimized resumes that get you noticed by recruiters and hiring managers. We highlight your achievements and craft compelling narratives.',
    features: ['ATS-Optimized Format', 'Achievement-Focused', 'Industry-Specific', 'Unlimited Revisions'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Optimization',
    description: 'Transform your LinkedIn profile into a powerful personal brand that attracts recruiters and opportunities. Increase visibility and engagement.',
    features: ['SEO-Optimized Profile', 'Compelling Headline', 'Strategic Keywords', 'Engagement Strategy'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: MessageCircle,
    title: 'Interview Coaching',
    description: 'Master the art of interviewing with personalized coaching, mock interviews, and proven strategies to impress hiring managers.',
    features: ['Mock Interviews', 'STAR Method Training', 'Body Language Tips', 'Salary Negotiation'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Career Counseling',
    description: 'Navigate career transitions and find your path with expert guidance. Get clarity on your goals and create actionable plans.',
    features: ['Career Assessment', 'Goal Setting', 'Skill Gap Analysis', 'Action Planning'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Search,
    title: 'Job Search Strategy',
    description: 'Develop a targeted job search strategy that lands interviews faster. Learn where to look, how to apply, and how to stand out.',
    features: ['Target Company Research', 'Application Strategy', 'Networking Tactics', 'Follow-up Templates'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Award,
    title: 'Executive Coaching',
    description: 'C-suite and senior leadership coaching for career advancement, leadership development, and strategic career planning.',
    features: ['Leadership Development', 'Board Positioning', 'Executive Presence', 'Succession Planning'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Globe,
    title: 'H1B Sponsorship & Guidance',
    description: 'Navigate the H1B visa process with confidence. We help you target H1B-friendly companies and prepare strong applications.',
    features: ['Sponsor Database Access', 'Application Guidance', 'Timeline Planning', 'Documentation Review'],
    color: 'from-orange-500 to-orange-600',
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-400 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive career services designed to accelerate your professional growth and help you achieve your goals
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 group-hover:translate-x-1 transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your career goals and how we can help you achieve them
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
