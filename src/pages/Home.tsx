import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Award, Users, CheckCircle, Brain, Zap, Wallet } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <section className="relative bg-slate-900 text-white pt-32 pb-10 overflow-hidden"
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
                  to="/payment"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  Get Started
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

            <div className="grid grid-cols-2 gap-6">
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
                  </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-lg">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5,000+</div>
                      <div className="text-gray-300 text-sm">Clients Served</div>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-lg">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15+ Years</div>
                      <div className="text-gray-300 text-sm">Experience</div>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">35%</div>
                      <div className="text-gray-300 text-sm">Avg Salary hike</div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>
          <div className="relative w-full overflow-hidden pt-20">
  {/* Scroll container */}
  <div className="flex animate-scroll space-x-12">
    {[
  "NMDC ENERGY PJSC",
  "Imtiaz Real Estate Investment & Development LLC",
  "INNOVATION DIRECT EMPLOYMENT SERVICES L.L.C",
  "Archirodon Construction (Overseas) Company Limited",
  "NMC ASSETCO LIMITED",
  "DSV Air and SEA DWC-LLC",
  "K B C TECHNOLOGIES L.L.C",
  "SPIE ENERGY SERVICES LTD",
  "Maandag Interim Professionals B.V.",
  "ZULEKHA HOSPITAL LLC",
  "UBS Business Solutions AG",
  "SHARJAH AGRICULTURAL AND LIVESTOCK PRODUCTION EST (EKTIFA)",
  "ANCIENT BUILDERS CONSTRUCTIONS LLC",
  "Gulf Medical University L.L.C",
  "TARRAD REAL ESTATE DEVELOPMENT L.L.C",
  "Hamad International Airport",
  "DUNCAN AND ROSS MANAGEMENT CONSULTANCIES",
  "Wipro Limited",
  "SUNDUS MANAGEMENT CONSULTANCY & STUDIES BUREAU L.L.C",
  "Innovo Build LLC",
  "Salam Technology",
  "Apparel FZCO",
  "Binghatti Development L.L.C",
  "Sharaf Investment L.L.C",
  "MPH CONSULTING SERVICES JLT",
  "Robt Stone (ME) LLC",
  "Air Products (Middle East) FZE",
  "Trojan Construction Group – SP LLC",
  "Almarai Company",
  "Raqmiyat L.L.C",
  "Reportage Real Estate",
  "SAFEEN SURVEY AND SUBSEA SERVICES L.L.C",
  "Teleperformance Global Services FZ-LLC"

    ].map((company) => (
      <div
        key={company}
        className="bg-teal-700/60 text-white px-8 py-4 rounded-xl border border-pink-500 shadow-lg text-lg font-semibold min-w-[180px] text-center"
      >
        {company}
      </div>
    ))}
    {/* Duplicate the list once for seamless loop */}
    {[
      "Google",
      "Microsoft",
      "Amazon",
      "Tesla",
      "IBM",
      "Adobe",
      "Meta",
      "Netflix",
      "Oracle",
      "Salesforce",
    ].map((company, index) => (
      <div
        key={`${company}-dup-${index}`}
        className="bg-teal-700/60 text-white px-8 py-4 rounded-xl border border-white/10 shadow-lg text-lg font-semibold min-w-[180px] text-center"
      >
        {company}
      </div>
    ))}
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
        <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications and expertise you can trust
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-300 to-white p-8 rounded-2xl border shadow-md border-l-4 border-cyan-500 hover:shadow-xl transition-all">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications & Memberships</h3>
                <ul className="space-y-4">
                  {[
                    'Certified Professional Resume Writer (CPRW)',
                    'National Career Development Association (NCDA)',
                    'International Coach Federation (ICF) Certified',
                    'Society for Human Resource Management (SHRM)',
                    'LinkedIn Certified Professional',
                    'Career Thought Leaders Consortium Member',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Industries We Serve</h3>
                <ul className="space-y-4">
                  {[
                    'Technology & Software',
                    'Finance & Banking',
                    'Healthcare & Pharmaceuticals',
                    'Marketing & Advertising',
                    'Consulting & Professional Services',
                    'Engineering & Manufacturing',
                    'And many more...',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                to="/payment"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
            </div>

            <div className="bg-gradient-to-br from-slate-300 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
            
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
      
    </div>
  );
}
