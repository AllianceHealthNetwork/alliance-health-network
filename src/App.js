// Alliance Health Network Corp.
// 🔥 COMPLETE SIMPLE RESET VERSION
// Clean + Professional Hero Section with Logo (Public Folder Method)

import React from "react";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Helmet>
        <title>Alliance Health Network Corp. | Healthcare Staffing Across Canada</title>
        <meta name="description" content="Alliance Health Network Corp. is a leading healthcare staffing agency in Ontario and across Canada, providing licensed nurses, PSWs, and allied health professionals to hospitals, long-term care homes, and clinics with rapid 24/7 deployment." />
        <meta name="keywords" content="Healthcare Staffing Canada, Nursing Agency Ontario, PSW Staffing, Hospital Staffing Services, Healthcare Recruitment Canada, Healthcare Staffing London Ontario, LTC Staffing Agency Canada" />
        <meta name="author" content="Alliance Health Network Corp." />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Alliance Health Network Corp." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Alliance Health Network Corp.",
            "url": "https://alliancehealthnetwork.ca",
            "telephone": "+1-519-300-4435",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressRegion": "Ontario",
              "addressCountry": "Canada"
            },
            "areaServed": "Canada",
            "sameAs": []
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How quickly can staffing be deployed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Emergency healthcare staffing placements can often be coordinated within hours depending on role, province, and regulatory requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Are your healthcare professionals licensed and verified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All nurses, PSWs, and allied health professionals undergo credential verification, licensing validation, background checks, and compliance screening before placement."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide WSIB and liability coverage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Alliance Health Network maintains WSIB compliance and comprehensive liability insurance for institutional healthcare partners."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer long-term healthcare staffing contracts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We provide structured long-term staffing agreements for hospitals, long-term care facilities, and clinics across Canada."
                }
              }
            ]
          })}
        </script>
        <meta property="og:title" content="Alliance Health Network Corp." />
        <meta property="og:description" content="Canada’s Premier Healthcare Staffing Partner." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alliancehealthnetwork.ca" />
        <meta property="og:image" content="/logo.png" />
        <link rel="canonical" href="https://alliancehealthnetwork.ca" />
      </Helmet>
      {/* NAVIGATION BAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-red-700">
            Alliance Health Network
          </div>

          <div className="hidden md:flex space-x-8 font-medium items-center">
            <a href="#about" className="hover:text-red-700 transition">About</a>
            <a href="#why" className="hover:text-red-700 transition">Why Choose Us</a>
            <a href="#services" className="hover:text-red-700 transition">Services</a>
            <a href="#expansion" className="hover:text-red-700 transition">Expansion</a>
            <a href="#contact" className="hover:text-red-700 transition">Contact</a>

            <a
              href="#staffing"
              className="bg-red-700 text-white px-5 py-2 rounded-lg shadow hover:bg-red-800 transition"
            >
              Request Staffing
            </a>
          </div>
        </div>
      </nav>

      
      {/* HERO SECTION */}
      <section className="relative text-white text-center py-32 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/hospital-bg.jpg')" }}>
        <div className="absolute inset-0 bg-red-900/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">

            {/* Left Side - Logo + Headline + Buttons */}
            <div className="md:w-1/2 text-center md:text-left">

              {/* Logo on Top (Left Side) */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl">
                  <img
                    src="/logo.png"
                    alt="Alliance Health Network Logo"
                    className="w-32 md:w-44 object-contain"
                  />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                Canada’s Premier Healthcare Staffing Partner
              </h1>

              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <a
                  href="tel:5193004435"
                  className="bg-white text-red-700 font-semibold px-8 py-4 rounded-lg text-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Call Now (519) 300-4435
                </a>

                <a
                  href="mailto:info@alliancehealthnetwork.ca"
                  className="border-2 border-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-red-700 transition"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* Right Side - Empty Space for Background Visibility */}
            <div className="md:w-1/2 hidden md:block"></div>

          </div>
        </div>
      </section>

      {/* CREDIBILITY TAGLINE BAR */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-700 font-medium tracking-wide">
            Serving Hospitals • Long-Term Care Facilities • Clinics • Private Care Clients Across Canada
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-gray-50 text-center scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Rapid, Reliable Healthcare Staffing Across Canada
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Alliance Health Network provides emergency, short-term, and long-term
            staffing solutions to hospitals, long-term care homes, clinics, and
            community healthcare facilities. Our professionals are fully
            credentialed, WSIB compliant, and ready to deploy 24/7.
          </p>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-700">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver reliable, compassionate, and highly skilled healthcare staffing
              solutions that strengthen hospitals, long-term care facilities, and
              community agencies across Canada.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-700">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become Canada’s most trusted healthcare workforce partner,
              recognized for excellence, integrity, and commitment to quality
              patient care in every province we serve.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why" className="py-16 px-6 bg-gray-50 text-center scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Healthcare Facilities Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">24/7 Rapid Deployment</h3>
              <p className="text-gray-600">
                Immediate staffing support for urgent shortages and planned coverage gaps
                across Ontario, Newfoundland and Labrador, and expanding Canadian provinces.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Fully Credentialed Professionals</h3>
              <p className="text-gray-600">
                All staff are verified, compliant, and aligned with provincial healthcare standards.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">WSIB & Regulatory Compliant</h3>
              <p className="text-gray-600">
                Operates with full insurance coverage and regulatory adherence
                for institutional partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 text-center scroll-mt-24">
        <h2 className="text-4xl font-bold mb-12">Our Comprehensive Care Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Personal Care</h3>
            <p className="text-gray-600">
              Assistance with bathing, grooming, dressing, mobility, and other daily activities to promote independence.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Companionship & Support</h3>
            <p className="text-gray-600">
              Friendly support and engagement to reduce isolation and encourage meaningful social interaction.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Skilled Nursing Services</h3>
            <p className="text-gray-600">
              Professional clinical care including medication support, wound management, and health monitoring.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Household Assistance</h3>
            <p className="text-gray-600">
              Light housekeeping, meal preparation, errands, and safe home support to maintain a comfortable environment.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Transportation Support</h3>
            <p className="text-gray-600">
              Safe and reliable transportation assistance for appointments, errands, and community outings.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Allied Health Support</h3>
            <p className="text-gray-600">
              Coordinated allied health professionals including physiotherapists, occupational therapists, and more.
            </p>
          </div>
        </div>
      </section>

      {/* EXPANSION SECTION */}
      <section id="expansion" className="py-20 px-6 bg-gray-50 text-center scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">National Expansion Strategy</h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Alliance Health Network Corp. is expanding operations beyond Ontario
            to support healthcare facilities across multiple Canadian provinces.
            Our phased expansion ensures regulatory compliance, workforce readiness,
            and strong institutional partnerships in each region.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-xl mb-2">Active Provinces</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Ontario</li>
                <li>• Newfoundland and Labrador</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">Planned Expansion</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Nova Scotia</li>
                <li>• New Brunswick</li>
                <li>• Western Canada (Future Phase)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Trusted by Healthcare Leaders Across Canada</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                “Alliance Health Network reduced our vacancy coverage gap by over 35% within the first quarter. Their clinicians arrived credentialed, confident, and ready to integrate immediately into our care teams.”
              </p>
              <p className="font-semibold">— Executive Director, Long-Term Care Facility (Ontario)</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                “Their 24/7 coordination model eliminated last‑minute scheduling crises for our hospital units. Compliance documentation and onboarding standards exceeded expectations.”
              </p>
              <p className="font-semibold">— Hospital Operations Director (Acute Care)</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                “Alliance Health Network delivers professionals who meet rigorous provincial standards while maintaining exceptional patient-centered care outcomes.”
              </p>
              <p className="font-semibold">— Regional Clinical Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP SECTION */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Service Area</h2>
          <p className="text-gray-600 mb-10">
            Headquartered in London, Ontario, serving healthcare facilities across Canada.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Alliance Health Network Service Area"
              src="https://www.google.com/maps?q=London,Ontario,Canada&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & CREDENTIALS SECTION */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Compliance & Professional Standards</h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-700">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">WSIB Compliant</h3>
              <p className="text-sm">Workplace Safety & Insurance Board coverage maintained for all deployed professionals.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Fully Insured</h3>
              <p className="text-sm">Comprehensive liability insurance protecting healthcare institutions and staff.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Credential Verification</h3>
              <p className="text-sm">Licensing, background checks, and reference screening completed prior to placement.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">24/7 Coordination</h3>
              <p className="text-sm">Dedicated staffing coordination team available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

            {/* JOIN OUR TEAM SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join Our Healthcare Team</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Are you a Registered Nurse, RPN, PSW, or Allied Health Professional seeking flexible opportunities across Canada? 
            Join Alliance Health Network and become part of a trusted, rapidly expanding healthcare workforce.
          </p>
          <a
            href="mailto:careers@alliancehealthnetwork.ca?subject=Healthcare Job Application"
            className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-red-800 transition"
          >
            Apply by Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <section id="staffing" className="py-20 px-6 bg-red-700 text-white text-center scroll-mt-24">
        <h2 className="text-4xl font-bold mb-6">Request Staffing Support</h2>
        <p className="mb-8 text-lg">
          Submit your staffing request for immediate response from our 24/7 coordination team. We provide emergency deployment, short-term contracts, and long-term workforce partnerships.
        </p>
        <a
          href="mailto:staffing@alliancehealthnetwork.ca?subject=Staffing Request"
          className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Submit Staffing Request
        </a>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            <div>
              <h3 className="font-semibold text-xl mb-2">How quickly can staffing be deployed?</h3>
              <p className="text-gray-600">Emergency placements can often be coordinated within hours, depending on role, region, and regulatory requirements.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Are your professionals licensed and verified?</h3>
              <p className="text-gray-600">Yes. All clinicians undergo credential verification, licensing validation, background checks, and compliance screening before placement.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Do you provide WSIB and liability coverage?</h3>
              <p className="text-gray-600">Alliance Health Network maintains WSIB compliance and comprehensive liability insurance for institutional protection.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Do you offer long-term workforce partnerships?</h3>
              <p className="text-gray-600">Yes. We provide structured long-term staffing agreements to stabilize workforce gaps and support operational continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-black text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alliance Health Network Corp.</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Head Office: London, Ontario, Canada <br />
              Serving: Ontario • Newfoundland and Labrador • Expanding Across Canada
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
            <p className="text-gray-300 text-sm">
              Phone: (519) 300-4435 <br />
              Email: info@alliancehealthnetwork.ca
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Standards</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Federally Registered Corporation <br />
              WSIB Compliant <br />
              Fully Insured Staffing Provider
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} Alliance Health Network Corp. All rights reserved.
        </div>
      </section>
    </div>
  );
}
