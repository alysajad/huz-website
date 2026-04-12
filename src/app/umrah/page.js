import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export default function UmrahPage() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Masjid al-Haram at dawn"
            className="w-full h-full object-cover scale-105"
            src="/umrah_hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1 mb-6 border border-white/20 bg-white/10 backdrop-blur-md rounded-full text-white text-sm tracking-[0.2em] uppercase font-medium">
            Huz Point Tours &amp; Travels
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Sacred Hajj & Umrah Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-10 max-w-2xl mx-auto">
            Experience a spiritual transformation with our expert-guided
            pilgrimage.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              className="bg-tertiary text-white px-8 py-4 rounded-xl font-medium text-lg hover:scale-95 transition-transform"
              href="#booking"
            >
              Reserve Your Spot
            </a>
            <a
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/20 transition-all"
              href="#itinerary"
            >
              View Itinerary
            </a>
          </div>
        </div>
      </section>

      <section className="relative -mt-24 z-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-xl border border-outline-variant/15 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-3xl"
                  data-icon="calendar_month"
                >
                  calendar_month
                </span>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-outline font-semibold mb-1">
                  Duration
                </p>
                <p className="text-xl font-serif text-primary">
                  15 Days / 14 Nights
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-3xl"
                  data-icon="groups"
                >
                  groups
                </span>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-outline font-semibold mb-1">
                  Tour Type
                </p>
                <p className="text-xl font-serif text-primary">Guided Group</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-3xl"
                  data-icon="verified"
                >
                  verified
                </span>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-outline font-semibold mb-1">
                  Inclusions
                </p>
                <p className="text-xl font-serif text-primary">
                  Visa &amp; Flights Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-surface relative overflow-hidden">
        <div className="geometric-veil absolute inset-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Choose Your Pilgrimage
            </h2>
            <div className="w-24 h-1 bg-tertiary mx-auto opacity-50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col hover:translate-y-[-8px] transition-all duration-300">
              <h3 className="text-2xl font-serif text-primary mb-2">Economy</h3>
              <p className="text-sm text-outline mb-6 font-medium tracking-tight">
                Essential comfort for devout seekers
              </p>
              <div className="mb-8">
                <span className="text-4xl font-serif text-on-surface">
                  ₹1,55,000
                </span>
                <span className="text-outline text-sm">/person</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-primary text-lg"
                    data-icon="hotel"
                  >
                    hotel
                  </span>
                  3-Star Hotels (800m+ distance)
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-primary text-lg"
                    data-icon="restaurant"
                  >
                    restaurant
                  </span>
                  Daily Buffet Meals
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-primary text-lg"
                    data-icon="directions_bus"
                  >
                    directions_bus
                  </span>
                  Standard Shared Transport
                </li>
              </ul>
              <a href="#booking" className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors block text-center">
                Select Economy
              </a>
            </div>

            <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col scale-105 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-4 right-4 bg-tertiary text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                Recommended
              </div>
              <h3 className="text-2xl font-serif mb-2">Standard</h3>
              <p className="text-sm text-on-primary-container mb-6 font-medium tracking-tight">
                The perfect balance of proximity and price
              </p>
              <div className="mb-8">
                <span className="text-4xl font-serif">₹2,05,000</span>
                <span className="text-on-primary-container text-sm">
                  /person
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-lg"
                    data-icon="hotel"
                  >
                    hotel
                  </span>
                  4-Star Hotels (Closer to Haram)
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-lg"
                    data-icon="directions_car"
                  >
                    directions_car
                  </span>
                  Private Group Transfers
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-lg"
                    data-icon="explore"
                  >
                    explore
                  </span>
                  Dedicated Local Guide
                </li>
              </ul>
              <a href="#booking" className="w-full py-3 rounded-xl bg-tertiary text-white font-medium hover:scale-95 transition-transform block text-center">
                Book Standard
              </a>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col hover:translate-y-[-8px] transition-all duration-300">
              <h3 className="text-2xl font-serif text-primary mb-2">Premium</h3>
              <p className="text-sm text-outline mb-6 font-medium tracking-tight">
                Utmost serenity and VIP care
              </p>
              <div className="mb-8">
                <span className="text-4xl font-serif text-on-surface">
                  ₹3,30,000
                </span>
                <span className="text-outline text-sm">/person</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-primary text-lg"
                    data-icon="hotel"
                  >
                    hotel
                  </span>
                  5-Star Front-Row Hotels
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-primary text-lg"
                    data-icon="airport_shuttle"
                  >
                    airport_shuttle
                  </span>
                  VIP Private Transport
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span
                    className="material-symbols-outlined text-primary text-lg"
                    data-icon="person_celebration"
                  >
                    person_celebrate
                  </span>
                  Personal Concierge Guide
                </li>
              </ul>
              <a href="#booking" className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors block text-center">
                Inquire VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-surface-container-low" id="itinerary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">
              Your Spiritual Journey
            </h2>
            <p className="text-outline max-w-xl mx-auto">
              A meticulously planned timeline to ensure your focus remains on
              devotion.
            </p>
          </div>
          <div className="relative space-y-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h4 className="text-2xl font-serif text-primary mb-2">
                  Mecca Al-Mukarramah
                </h4>
                <p className="text-on-surface-variant text-sm mb-4">
                  Umrah performance and guided Ziyarats including Jabal al-Nour,
                  Cave of Hira, and Mina.
                </p>
                <div className="flex flex-wrap justify-end gap-2">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                    Haram Rituals
                  </span>
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                    Cave Hira
                  </span>
                </div>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-white font-serif order-1 md:order-2 border-4 border-surface">
                1-7
              </div>
              <div className="md:w-1/2 order-3">
                <img
                  alt="Mecca scenery"
                  className="rounded-xl w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
                  data-alt="Close up of a religious pilgrim touching the Kaaba black stone, emotional and spiritual atmosphere with soft morning light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoX3N9oWh3oKCxZPImAb44MK9ufS3tCzpvxnTw46PXquUhI46a9lBGTOvBZnr7pnQlnmF7vqT3jaPWP7d35jbEScCMuLLIwE8kNTWJlehm62rtXRQ6qIlvaVORQc31s2RV3kYwVbnWwEUv-JhAm3juSfNinXSOYC1nfiRW1nFVy3ZMhbqolIk7xVmKjeSZlKWdWIMZWIV3JNn3MYtt-lmy2j0NoTEYCsU1Zq1HfKNwo0PmRXJhxZEpRHkHOdSn3tqu5FB7WqgJVutV"
                />
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
              <div className="md:w-1/2 order-2 md:order-1 hidden md:block">
                <img
                  alt="Bullet Train Saudi"
                  className="rounded-xl w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
                  data-alt="Modern high speed bullet train moving through the Saudi desert landscape at sunset, blurred background, sleek aesthetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvAR8hIICTKhTXcTVHDiGI5NLhI2S41KnS62VLu0P_ZFThL8syMdFhKIjPqov88YztgRskRWDDIFBBuYlifDyl-lnLPU3SBrg7XAIZsQqR9rZf-qL0ALDAQ0jxCZE_aeSF8-ZkH7Qnfrkmn_7IzTJhg8YSbhDsicXHk9BjXLm7admUrabHhLnvKrLwRXK8uqsi0a8hi-ALrIt40Wm4zgJHR_3Nqyjt00QFIBjh6eXEgl2kJv5NVyg-Hs95qG1bTM9BRZAX5RvHWG-l"
                />
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-serif order-1 md:order-2 border-4 border-surface">
                8
              </div>
              <div className="md:w-1/2 order-3">
                <h4 className="text-2xl font-serif text-primary mb-2">
                  Journey to Madinah
                </h4>
                <p className="text-on-surface-variant text-sm mb-4">
                  Transition to the City of the Prophet via the Haramain
                  High-Speed Bullet Train in premium seating.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                    Bullet Train
                  </span>
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                    VIP Transit
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h4 className="text-2xl font-serif text-primary mb-2">
                  Madinah Al-Munawwarah
                </h4>
                <p className="text-on-surface-variant text-sm mb-4">
                  Spiritual residence at Masjid al-Nabawi. Visits to Quba
                  Mosque, Mount Uhud, and the Seven Mosques.
                </p>
                <div className="flex flex-wrap justify-end gap-2">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                    Prophet's Mosque
                  </span>
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
                    Quba Mosque
                  </span>
                </div>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-white font-serif order-1 md:order-2 border-4 border-surface">
                9-15
              </div>
              <div className="md:w-1/2 order-3">
                <img
                  alt="Madinah Mosque"
                  className="rounded-xl w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
                  data-alt="The green dome of the Prophets Mosque in Madinah, soft blue hour lighting with traditional architecture and palm trees"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEhCAnNGzKyRs20lQQBsgKWb7VD_48-lId_8OFn2958hfE3Xf9835uK6cQNMw6ng4--OG81u0FD202a9U9mQ1_PPRRH7Ai47blnIK6uYD1oeGmptd2fNqpICTBWGugm6vznc6GNjhyGTIlhAbo-DwcZveVFwr_5-ZM5uP0H_Yklezwa6ldj9y91ZL-9vy3tqAV2IpdcqXNHBw3G6HjBwalAgtxjBOUrC9Dh0d11IO7FVe-1STiB6P61Qp7tSkgy6HVoRIqEz72J4uC"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-tertiary font-bold tracking-widest uppercase text-xs">
                Curated Residences
              </span>
              <h2 className="text-4xl font-serif text-primary">
                Sanctuaries of Rest
              </h2>
            </div>
            <p className="text-outline max-w-sm">
              Hand-picked hotels chosen for their comfort and proximity to the
              Holy Sites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                alt="Luxury Hotel Mecca"
                className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Luxury hotel room interior with a view of the Mecca clock tower and Masjid al-Haram, warm lighting and premium textiles"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRAlkiqBxhbfN6BShvzgkLj8F8TDnp_AEJ5TqMGVd47yWHpBczlpVqcwSSLRTMP24NjP6C29TEyghzdaNX_plDz2t0_7jdwQAWd8Y7RlPTX-c7NibhzCjJPt3dFEes02gTVKT52-B97XzBprOwZD9Ha1cIF0p2QdV4p_gg63M0BTFPXGMrX1l5Z8e6DP9GX299DUjFpCKpEoux3L8tEUPPEvsh939JxHSogOYAqdvi8lQsjs1LEGHmsgz54OpPYgutdHsNLrnUGdyJ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h4 className="text-3xl font-serif mb-2">
                  Mecca: Conrad Towers
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  Experience the proximity to King Fahd Gate with unparalleled
                  hospitality.
                </p>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs bg-tertiary/20 backdrop-blur-md px-3 py-1 rounded-full border border-tertiary/30">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="distance"
                    >
                      distance
                    </span>
                    50m to Haram
                  </span>
                  <span className="flex items-center gap-1 text-xs bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                    >
                      star
                    </span>
                    5-Star Luxury
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img
                alt="Luxury Hotel Madinah"
                className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Elegant hotel lobby in Madinah with Islamic geometric architectural details and soft golden ambient lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlGa8ZTVWHDboZDUyZFTmYYRh4uFhoIdNjfsNvUwm_7vtC20hoRW4yG3wYjD3uqGfpwtpCGbaP6LVEx5goMrT42TS0SzwH0bhGww1BqzsQfNkVe8wPU3_SAaE7_vkMP3AwWFsM5ufPEbpmFMWSDaQ5GQJ0t60CwzGlUMZ-i15HCBy8mwxJ35ySs3uRf1HXWSUEqUvpAPjmY7z_PpdkxvbZBn3togdPLqKSn87xKoprilwckGrab0ngEQF6LgPKaWkzjnEPkLz33iRp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h4 className="text-3xl font-serif mb-2">
                  Madinah: Oberoi Al-Madinah
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  Steps away from the Ladies' Entrance of the Prophet's Mosque.
                </p>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs bg-tertiary/20 backdrop-blur-md px-3 py-1 rounded-full border border-tertiary/30">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="distance"
                    >
                      distance
                    </span>
                    20m to Courtyard
                  </span>
                  <span className="flex items-center gap-1 text-xs bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="star"
                    >
                      star
                    </span>
                    5-Star Heritage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-surface-container-low">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-serif text-primary mb-8 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-tertiary"
                data-icon="check_circle"
              >
                check_circle
              </span>
              What's Included
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary text-lg mt-1"
                  data-icon="done"
                >
                  done
                </span>
                <div>
                  <p className="font-semibold text-on-surface">
                    Umrah Visa Processing
                  </p>
                  <p className="text-sm text-outline">
                    Complete documentation and stamp handling.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary text-lg mt-1"
                  data-icon="done"
                >
                  done
                </span>
                <div>
                  <p className="font-semibold text-on-surface">
                    Return Flight Tickets
                  </p>
                  <p className="text-sm text-outline">
                    Major airlines with generous luggage allowance.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary text-lg mt-1"
                  data-icon="done"
                >
                  done
                </span>
                <div>
                  <p className="font-semibold text-on-surface">Zam-Zam Water</p>
                  <p className="text-sm text-outline">
                    5-liter bottle provided upon return.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary text-lg mt-1"
                  data-icon="done"
                >
                  done
                </span>
                <div>
                  <p className="font-semibold text-on-surface">
                    Ziyarats in Mecca &amp; Madinah
                  </p>
                  <p className="text-sm text-outline">
                    Historical site visits with scholarly guides.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-serif text-primary mb-8 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-outline"
                data-icon="cancel"
              >
                cancel
              </span>
              Exclusions
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-error text-lg mt-1"
                  data-icon="close"
                >
                  close
                </span>
                <div>
                  <p className="font-semibold text-on-surface">
                    Personal Laundry
                  </p>
                  <p className="text-sm text-outline">
                    Hotel laundry services are additional.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-error text-lg mt-1"
                  data-icon="close"
                >
                  close
                </span>
                <div>
                  <p className="font-semibold text-on-surface">
                    Travel Insurance
                  </p>
                  <p className="text-sm text-outline">
                    Optional coverage for medical emergencies.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-error text-lg mt-1"
                  data-icon="close"
                >
                  close
                </span>
                <div>
                  <p className="font-semibold text-on-surface">Room Service</p>
                  <p className="text-sm text-outline">
                    Orders outside of scheduled buffet meals.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden" id="booking">
        <div className="absolute inset-0 bg-primary-container/5 z-0"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <BookingForm defaultPackage="Umrah" />
        </div>
      </section>
    </>
  );
}
