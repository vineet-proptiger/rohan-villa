'use client'
import React from 'react'

const locationList = [
  {
    title: 'Manyata Tech Park (IT Hub)',
    desc: "Bangalore's largest IT hub just a short drive away",
    time: '7.5 Km / 15 Mins',
    icon: 'fa-solid fa-building-user',
  },
  {
    title: 'Kempegowda Int\'l Airport',
    desc: 'Smooth transit via Hennur-Bagalur airport corridor',
    time: '26 Km / 30 Mins',
    icon: 'fa-solid fa-plane-departure',
  },
  {
    title: 'Outer Ring Road (ORR)',
    desc: 'Direct arterial route linking prime tech hubs & city centers',
    time: '2.5 Km / 5 Mins',
    icon: 'fa-solid fa-route',
  },
  {
    title: 'Hebbal Flyover',
    desc: 'Crucial connection ensuring fast city-wide commutes',
    time: '11.5 Km / 20 Mins',
    icon: 'fa-solid fa-bridge',
  },
  {
    title: 'Reputed Schools & Colleges',
    desc: 'NPS, DPS, Ryan International & New Horizon within minutes',
    time: '3.0 Km / 8 Mins',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    title: 'Malls & Entertainment Zones',
    desc: 'Elements Mall, Bhartiya Mall, supermarkets & dining',
    time: '5.5 Km / 12 Mins',
    icon: 'fa-solid fa-bag-shopping',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Location That Keeps You Connected
          </h2>
          <p className="text-[#4A5568] text-[14px] sm:text-[15px] mt-2.5 font-normal max-w-2xl mx-auto leading-relaxed">
            Situated on Hennur Road in one of North Bangalore’s fastest-growing corridors, enjoy peaceful villa living while staying seamlessly connected to major IT hubs, top schools, healthcare, and the airport.
          </p>
        </div>

        {/* ── 2-Column Grid: Left List (8 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 6 Location Points */}
          <div className="flex flex-col justify-between gap-3 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#F9F8F3] border border-[#EAE6DF] hover:border-[#8B6A34]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200"
              >
                {/* Left side: Icon & Title + Context */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-[#8B6A34] flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className={`${item.icon} text-[#111111] group-hover:text-[#8B6A34]`}></i>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-[#1f2937] group-hover:text-[#111111] font-bold text-[13px] sm:text-[14px] transition-colors duration-200 leading-snug truncate">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-[11px] sm:text-[11.5px] transition-colors duration-200 leading-tight truncate">
                      {item.desc}
                    </span>
                  </div>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-white font-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9612193870735!2d77.6480788!3d13.038140499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1749cb04dc23%3A0x7159c6f08b07867e!2sHoramavu%20Agara%20Rd%2C%20Bengaluru%2C%20Karnataka%20560113!5e0!3m2!1sen!2sin!4v1793184435163!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Rohan Villa Hennur, Bangalore Location Map"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
