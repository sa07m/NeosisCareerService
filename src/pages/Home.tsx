import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Award, Users, CheckCircle } from 'lucide-react';
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
                Your Success, Our Mission
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                  Career Today
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Expert career guidance, personalized strategies, and proven results.
                We help professionals like you land dream jobs and accelerate career growth.
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
              Why Choose CareerPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with personalized strategies to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every client receives a customized strategy tailored to their unique goals, skills, and industry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Our clients see an average salary increase of 35% and land interviews 3x faster.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with certified career coaches who have helped thousands succeed across all industries.
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
          { step: '01', title: 'Discovery', desc: 'Understand your goals and current situation' },
          { step: '02', title: 'Strategy', desc: 'Create a personalized action plan' },
          { step: '03', title: 'Execution', desc: 'Implement with expert guidance' },
          { step: '04', title: 'Success', desc: 'Land your dream job and thrive' },
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
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of successful professionals who have transformed their careers with our expert guidance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Get noticed by top employers',
                  'Master the interview process',
                  'Negotiate better compensation',
                  'Navigate career transitions',
                  'Build a powerful personal brand',
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
                    "Landed my dream job at Google with a 50% salary increase. The interview coaching was game-changing!"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Michael R.</span>
                    <div className="flex text-orange-500">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The LinkedIn optimization helped me get 10x more recruiter messages. Absolutely worth it!"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Jennifer L.</span>
                    <div className="flex text-orange-500">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Professional, knowledgeable, and truly invested in my success. Highly recommend!"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">From job seekers to executives - choose a plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-gradient-to-br from-slate-500 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">$299</p>
              <p className="text-gray-600 mb-6">Perfect for job seekers getting started</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Professional resume review</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>LinkedIn profile optimization</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>1 mock interview session</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Email support</span>
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
              <p className="text-gray-600 mb-6">For serious career advancement</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Complete resume rewrite</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Cover letter templates</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>LinkedIn complete optimization</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>3 mock interview sessions</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Job search strategy</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Executive</h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">$1,999</p>
              <p className="text-gray-600 mb-6">For C-level and senior leaders</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Executive resume & bio</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Personal branding strategy</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Unlimited coaching sessions</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Salary negotiation support</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>90-day follow-up support</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Dedicated career coach</span>
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
