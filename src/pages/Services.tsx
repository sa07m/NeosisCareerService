import { Link } from 'react-router-dom';
import { Brain, Zap, Target, TrendingUp, BookOpen, Award, Lightbulb, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
const services = [
  {
    icon: Brain,
    title: 'AI Career Pathways',
    description: 'Create personalized AI-aligned career paths that fit your strengths and aspirations. Whether you are a fresher or exploring new opportunities, we help you navigate the AI landscape.',
    features: ['Strengths Assessment', 'Career Alignment', 'Skills Identification', 'AI Job Opportunities'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'AI Tools Mastery',
    description: 'Learn to leverage AI platforms for automation, analytics, and productivity. Accelerate your learning and skill-building with cutting-edge AI technologies.',
    features: ['AI Platform Training', 'Automation Tools', 'Analytics & Insights', 'Productivity Boosters'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Target,
    title: 'Skills & Certifications',
    description: 'Identify key skills and certifications needed for AI-driven jobs. Get a personalized roadmap of valuable credentials that employers are seeking.',
    features: ['Skill Gap Analysis', 'Certification Roadmap', 'Learning Resources', 'Industry Requirements'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'AI Repositioning for Professionals',
    description: 'Become future-ready by integrating AI into your existing role. Learn to use AI for automation, analytics, and enhanced decision-making without starting over.',
    features: ['Role Enhancement', 'AI Integration Strategy', 'Leadership Development', 'Future-Ready Skills'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning Paths',
    description: 'Curate customized learning strategies with personalized projects and mentor connections. Build skills systematically aligned with your career goals.',
    features: ['Custom Curriculum', 'Project Portfolio', 'Mentor Matching', 'Progress Tracking'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Award,
    title: 'Personal Branding with AI',
    description: 'Build credibility and visibility through AI-driven projects and content. Position yourself as an AI-savvy professional in your industry.',
    features: ['AI Project Showcase', 'Content Strategy', 'Professional Visibility', 'Thought Leadership'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Lightbulb,
    title: 'Career & Strengths Assessment',
    description: 'Deep dive into your skills, gaps, and goals with comprehensive assessments. Understand the impact of AI on your role and industry to make informed decisions.',
    features: ['Skills Inventory', 'Gap Analysis', 'Goal Setting', 'AI Impact Review'],
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
            AI Career Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered career guidance to help you transform your career without starting over
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
              Ready to Transform Your Career with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discover how AI can enhance your career path and unlock new opportunities
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
