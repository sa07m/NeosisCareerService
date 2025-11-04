import { Award, Users, Target, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Software Engineer at Google',
    content: 'The interview coaching was phenomenal. I went from nervous to confident and landed my dream role with a 50% salary increase. The team truly cares about your success.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    content: 'My LinkedIn profile went from invisible to getting 20+ recruiter messages per week. The optimization strategy was worth every penny.',
    rating: 5,
  },
  {
    name: 'Jennifer Chen',
    role: 'Financial Analyst',
    content: 'The resume transformation was incredible. I started getting interview requests within days of applying. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'VP of Operations',
    content: 'As an executive, I needed strategic guidance for my next move. The executive coaching helped me land a C-suite position with better compensation and work-life balance.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Data Scientist',
    content: 'The H1B sponsorship guidance was invaluable. They helped me target the right companies and I secured sponsorship within 3 months.',
    rating: 5,
  },
  {
    name: 'James Anderson',
    role: 'Product Manager at Amazon',
    content: 'Career counseling helped me transition from engineering to product management. The roadmap they created was clear and actionable.',
    rating: 5,
  },
];

export default function About() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-400 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About CareerPro
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We're on a mission to transform careers and help professionals achieve their full potential.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2010, CareerPro has grown from a small consulting practice to a leading career services firm trusted by thousands of professionals worldwide. Our team of certified career coaches, resume writers, and industry experts brings decades of combined experience across technology, finance, healthcare, marketing, and more.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-orange-400 mb-2">5,000+</div>
                <div className="text-gray-300">Clients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-teal-400 mb-2">35%</div>
                <div className="text-gray-300">Avg Salary Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering professionals to achieve career success through expert guidance, personalized strategies, and unwavering support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-2xl inline-block mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Client-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our priority. We create personalized strategies tailored to your unique goals and circumstances.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-5 rounded-2xl inline-block mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in everything we do, from resume writing to executive coaching.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-2xl inline-block mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Results-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We measure success by your results - job offers, salary increases, and career advancement.
              </p>
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

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who transformed their careers with CareerPro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex text-orange-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you write your career success story. Schedule a free consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
