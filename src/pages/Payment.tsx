import { TrendingUp, Target, Award, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackground";
// Data structure representing the new pricing model
const pricingPlans = [
  {
    level: "Fresher",
    experience: "0-3 Years of Experience",
    total: 450,
    isPopular: false,
    icon: Target,
    iconBgColor: "from-orange-500 to-orange-600",
    // Calculated Services: Resume (250) + Cover Letter (50) + AI Coaching (150) = $450
    services: [
      { name: "Resume Writing ($250)" },
      { name: "Cover Letter ($50)" },
      { name: "AI Coaching (Foundational) ($150)" },
    ],
    // !!! PLACEHOLDER LINK - REPLACE WITH YOUR $450 STRIPE LINK !!!
    stripeLink: "https://buy.stripe.com/test_dRmdR88fCdtegkF0V34ko03",
  },
  {
    level: "Mid-level",
    experience: "4-7 Years of Experience",
    total: 530,
    isPopular: true,
    icon: TrendingUp,
    iconBgColor: "from-teal-500 to-teal-600",
    // Calculated Services: Resume (300) + Cover Letter (50) + AI Coaching (180) = $530
    services: [
      { name: "Resume Writing ($300)" },
      { name: "Cover Letter ($50)" },
      { name: "AI Coaching (Advanced) ($180)" },
    ],
    // !!! PLACEHOLDER LINK - REPLACE WITH YOUR $530 STRIPE LINK !!!
    stripeLink: "https://buy.stripe.com/test_5kQ14mdzWah23xTfPX4ko01",
  },
  {
    level: "Senior Level",
    experience: "8+ Years of Experience",
    total: 600,
    isPopular: false,
    icon: Award,
    iconBgColor: "from-sky-500 to-sky-600",
    // Calculated Services: Resume (350) + Cover Letter (50) + AI Coaching (200) = $600
    services: [
      { name: "Resume Writing ($350)" },
      { name: "Cover Letter ($50)" },
      { name: "AI Coaching (Executive) ($200)" },
    ],
    // !!! PLACEHOLDER LINK - REPLACE WITH YOUR $600 STRIPE LINK !!!
    stripeLink: "https://buy.stripe.com/test_5kQ6oGeE0fBm2tPdHP4ko02",
  },
];

export default function Payment() {
  // Scrolls to the top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 font-sans">
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-900 text-white py-20"
      style={{
    backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('/image5.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  }}>
        <div className="max-w-7xl mx-auto pb-3 px-4 sm:px-6 lg:px-8 text-center ">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight ">
            Tailored Career Packages
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the package that matches your professional experience level.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 -mt-10"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              // Styling for the popular card
              const shadowClass = plan.isPopular 
                ? "shadow-2xl border-orange-500 ring-4 ring-orange-300" 
                : "shadow-xl border-gray-200";

              return (
                <div 
                  key={index} 
                  className={`relative p-8 rounded-3xl bg-white border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${shadowClass} ${plan.isPopular ? 'md:scale-[1.03] transform z-10' : ''}`}
                >
                  
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-md tracking-wider">
                        Best Value
                      </div>
                    </div>
                  )}

                  <div className={`bg-gradient-to-br ${plan.iconBgColor} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{plan.level}</h3>
                  <p className="text-lg font-semibold text-orange-600 mb-4">{plan.experience}</p>
                  
                  <p className="text-5xl font-extrabold text-slate-900 mb-1">
                    ${plan.total}
                  </p>
                  <p className="text-gray-500 mb-8 font-medium">Bundle Price</p>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {/* Core Services */}
                    {plan.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">{service.name}</span>
                      </li>
                    ))}
                    
                    {/* Unique Tiered Benefits for differentiation */}
                    {plan.level === "Fresher" && (
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">1 Round of Revisions</span>
                      </li>
                    )}
                    {plan.level === "Mid-level" && (
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">2 Rounds of Revisions</span>
                      </li>
                    )}
                    {plan.level === "Senior Level" && (
                      <>
                        <li className="flex items-start gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="font-medium">LinkedIn Optimization Included</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="font-medium">Unlimited Revisions</span>
                        </li>
                      </>
                    )}
                  </ul>

                  <a 
                    href={plan.stripeLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full text-center px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
                  >
                    Select {plan.level} →
                  </a>
                  
                  
                </div>
              );
            })}
          </div>

          {/* Guarantee/Callout Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h4 className='text-xl font-bold text-slate-800 mb-4'>What's Included in Every Package:</h4>
            <div className='grid sm:grid-cols-2 gap-4'>
                <div className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>**Satisfaction Guarantee** and Revisions</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>**Free 15-min Discovery Call**</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Tailored to **Target Industries**</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Secure checkout via Stripe</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
