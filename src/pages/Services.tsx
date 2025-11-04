import { Brain, Zap, Target, TrendingUp, BookOpen, Award, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
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
    title: 'Résumé & Cover Letter Builder',
    description: 'Craft professional, future-ready job application materials. Our mentors help you create résumés and cover letters that speak the language of employers and Applicant Tracking Systems (ATS).',
    features: ['Résumé Optimization & Keyword Enhancement','Cover Letter Personalization','Impactful Content Generation','AI-Driven Feedback & Scoring'],
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
  {
    icon: Target,
    title: 'Skills & Certifications',
    description: 'Identify key skills and certifications needed for AI-driven jobs. Get a personalized roadmap of valuable credentials that employers are seeking.',
    features: ['Skill Gap Analysis', 'Certification Roadmap', 'Learning Resources', 'Industry Requirements'],
    color: 'from-orange-500 to-orange-600',
  },
];

export default function Services() {
  // Use a simple scroll-to-top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen pt-20 bg-gray-50 font-sans">
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-900 text-white py-20 shadow-lg"
      style={{
    backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('/image3.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            AI Career Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-powered career guidance to help you transform your career without starting over
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50 bg-gradient-to-br from-slate-400 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-8 ">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  // Updated Card Styling for Premium Look
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md border-l-4 border-orange-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-0">
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          {/* Updated feature marker to use CheckCircle */}
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {/* Replaced Link with standard <a> tag to fix router context error */}
                    <a
                      href="#contact"
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-all group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50"> {/* Section background remains consistent */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Transform Your Career with AI?
            </h2>
            {/* <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discover how AI can enhance your career path and unlock new opportunities
            </p> */}
            {/* Replaced Link with standard <a> tag to fix router context error */}
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us Now!
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
