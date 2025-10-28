import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Award, Users, CheckCircle, Brain, Zap } from 'lucide-react';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden"
  style={{
    backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('/image1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  }}
>
        {/* <img 
              src="/image1.png" 
              alt="logo"
              className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
            /> */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
                AI-Powered Career Transformation
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your Career
                <span className="block bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                You don't have to start over to stay ahead. Learn how AI can enhance your career — not replace it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-gray-300 text-sm">Success Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-lg">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5,000+</div>
                      <div className="text-gray-300 text-sm">Clients Served</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15+ Years</div>
                      <div className="text-gray-300 text-sm">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
      <section className="relative bg-gradient-to-br from-slate-400 via-slate-200 to-slate-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why AI Career Guidance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guide your career transformation through AI — aligning your skills, learning, and goals with AI-driven opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Aligned Career Paths</h3>
              <p className="text-gray-600 leading-relaxed">
                Create personalized career paths that fit your strengths and leverage AI technologies to accelerate your growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Skills & Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Master AI platforms and tools to accelerate learning, automate tasks, and boost productivity in your role.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Future-Ready Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Reposition yourself as a leader by integrating AI into your existing role and building credibility through AI-driven projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-600 via-teal-700 to-orange-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Process
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        A proven methodology that delivers consistent results
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Process Steps */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { step: '01', title: 'Assessment', desc: 'Identify your skills, gaps, and career goals' },
          { step: '02', title: 'AI Awareness', desc: 'Understand the impact of AI on your role and industry' },
          { step: '03', title: 'Career Path Design', desc: 'Build a personalized AI-aligned roadmap' },
          { step: '04', title: 'Skill Building', desc: 'Curate learning paths, projects, and mentorship' },
        ].map((item) => (
          <div key={item.step} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
            <div className="text-5xl font-bold text-orange-500 mb-4">{item.step}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <img 
          src="image2.png" 
          alt="Our Process Visualization" 
          className="rounded-2xl shadow-2xl w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Future-Proof Your Career?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join professionals transforming their careers through AI — without starting over.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Create AI-aligned career pathways',
                  'Master AI tools for productivity',
                  'Build credibility through AI projects',
                  'Reposition as an AI-savvy leader',
                  'Accelerate learning with AI platforms',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Sarah M.</span>
                    <div className="flex text-orange-500">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The AI career path helped me transition into an AI-enhanced role with 60% salary increase. Game-changing!"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Michael R.</span>
                    <div className="flex text-orange-500">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Learning to leverage AI tools transformed my productivity and opened new career opportunities!"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Jennifer L.</span>
                    <div className="flex text-orange-500">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "I repositioned myself as an AI leader without changing careers. The guidance was invaluable!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-white via-teal-700 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Choose Your AI Career Path</h2>
            <p className="text-xl text-gray-600">From explorers to seasoned professionals - transform your career with AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-gradient-to-br from-slate-500 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Explorer</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">$299</p>
              <p className="text-gray-600 mb-6">For freshers exploring AI careers</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Career & strengths assessment</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>AI career pathways planning</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>AI tools introduction</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Skills & certifications roadmap</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/test_dRmdR88fCdtegkF0V34ko03" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started →
              </a>
            </div>

            {/* Professional - Most Popular */}
            <div className="bg-gradient-to-br from-slate-500 to-white p-8 rounded-2xl border-2 border-orange-500 hover:shadow-2xl transition-all relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-xl inline-block mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">$799</p>
              <p className="text-gray-600 mb-6">For seasoned pros advancing with AI</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>AI awareness & application review</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>AI accelerators for automation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Personalized learning strategy</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>AI-driven project guidance</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Personal branding with AI</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Ongoing mentorship</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/test_5kQ14mdzWah23xTfPX4ko01" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started →
              </a>
            </div>

            {/* Executive */}
            <div className="bg-gradient-to-br from-slate-500 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Leader</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">$1,999</p>
              <p className="text-gray-600 mb-6">For executives becoming AI leaders</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Strategic AI integration planning</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Leadership repositioning strategy</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>AI executive presence building</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Industry visibility & credibility</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Unlimited 1-on-1 coaching</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>90-day transformation support</span>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/test_5kQ6oGeE0fBm2tPdHP4ko02" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started →
              </a>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 text-gray-700 mb-3">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span>All plans include satisfaction guarantee and unlimited revisions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mb-3">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span>Free consultation to determine the best plan for you</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-orange-500" />
              <span>Flexible payment plans available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
