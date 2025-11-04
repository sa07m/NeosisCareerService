import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-slate-400 via-slate-800 to-slate-900 text-white py-20"
      style={{
    backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('/image4.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Schedule a free consultation and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@neosisitsolutions.com</p>
                      <p className="text-gray-600">support@neosisitsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                      <p className="text-gray-600">1300 Greenbrook Blvd</p>
                      <p className="text-gray-600">Hanover Park, IL 60133</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-600">Saturday: 10am - 4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Personalized career strategies',
                    '95% success rate',
                    'Industry-certified coaches',
                    'Flexible scheduling options',
                    'Money-back guarantee',
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your career goals and how we can help..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Our Location
          </h2>
          <div className="bg-slate-200 rounded-2xl overflow-hidden h-96 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-semibold">1300 Greenbrook Blvd, Hanover Park, IL 60133</p>
                <p className="text-slate-500 text-sm mt-2">Map integration available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
