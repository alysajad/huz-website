import Link from "next/link";
import DestinationGuide from "@/components/DestinationGuide";
import BookingForm from "@/components/BookingForm";
import SnowEffect from "@/components/SnowEffect";

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <main className="">
        <section className="relative min-h-[100svh] flex flex-col items-center overflow-hidden pt-[140px] pb-16 h-auto">
          <div className="absolute inset-0 z-0">
            <img
              alt="Gulmarg in Winter"
              className="w-full h-full object-cover"
              src="/gulmarg_winter_hero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-surface"></div>
            <SnowEffect />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl my-auto">
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] font-light italic">
              Kashmir: The Heaven on Earth
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide font-serif mb-12">
              Tailored journeys through the valleys of Srinagar, Gulmarg, and
              beyond.
            </p>

            <form action="#booking" method="GET" className="glass-panel p-2 rounded-xl shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-2 relative z-20">
              <input type="hidden" name="destination" value="Kashmir" />
              <div className="flex-1 min-w-[180px] md:min-w-[220px] px-4 py-3 flex flex-col items-start border-r border-outline-variant/30">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                  Select Package
                </span>
                <select name="tier" defaultValue="Explorer — ₹5,999/person" className="bg-transparent border-none p-0 pr-8 focus:ring-0 text-on-surface font-medium w-full truncate appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em` }}>
                  <option value="Explorer — ₹5,999/person">Kashmir Explorer</option>
                  <option value="Classic — ₹10,999/person">Kashmir Classic</option>
                  <option value="Royale — ₹19,999/person">Kashmir Royale</option>
                </select>
              </div>
              <div className="flex-1 px-4 py-3 flex flex-col items-start border-r border-outline-variant/30">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                  Available Dates
                </span>
                <div className="flex items-center gap-2 w-full">
                  <input 
                    name="fromDate"
                    type="date" 
                    min={today}
                    className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium text-xs w-full cursor-pointer" 
                    title="From Date"
                  />
                  <span className="text-on-surface-variant font-medium text-xs">-</span>
                  <input 
                    name="toDate"
                    type="date" 
                    min={today}
                    className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium text-xs w-full cursor-pointer" 
                    title="To Date"
                  />
                </div>
              </div>
              <div className="flex-1 px-4 py-3 flex flex-col items-start border-r border-outline-variant/30">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                  Travelers
                </span>
                <input
                  name="travelers"
                  className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium w-full"
                  type="number"
                  defaultValue={2}
                  min="1"
                />
              </div>
              <button type="submit" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold tracking-widest uppercase text-xs scale-98-on-click transition-all flex items-center justify-center gap-2 cursor-pointer">
                Check Availability
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block mb-4">
              The Crown Jewels
            </span>
            <h2 className="font-serif text-5xl text-on-surface italic">
              Enchanting Destinations
            </h2>
            <div className="w-24 h-1 bg-tertiary mx-auto opacity-30 mt-6"></div>
          </div>
          <div className="relative w-full px-4 md:px-0">
            <DestinationGuide />
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto relative">
          <div className="absolute inset-0 geometric-veil z-0"></div>
          <div className="relative z-10 text-center mb-20">
            <h2 className="font-serif text-5xl text-primary mb-4 italic">
              Choose Your Experience
            </h2>
            <div className="w-24 h-1 bg-tertiary mx-auto opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="group bg-surface-container-low p-1 rounded-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    alt="Srinagar Gardens"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="lush green mughal gardens with symmetrical stone fountains and ancient chinar trees under a bright blue sky"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-W-lPc4AYubDVpSMa2i_UtU9w1BlUreOYcOkt7yQ_wzVSZeCmqMTUoAjS5NPVMyHeDHXMBWN2CMr-Cdv_Clzy6TS1LkSvBMqvx6pGilm2C6De0SjMVkvELTETg8V1g_NGnc2-7CsY6JmhmmRxPkKQThPvD9FCEZUaRljYadMxpJfnxFimEM0zQxBk65CZMNJ7gLBB89lD_X3H0lS7og3eV7si3A6VlOC-pyC-EVEyW0qCcT_Fcoh9IgEPqmBfw46aSyMh902RwXn"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary/90 text-on-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                    Budget Friendly
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-3xl mb-4 text-on-surface">
                    Explorer
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    A curated introduction to the soul of Kashmir, focusing on
                    the timeless Mughal Gardens and the heart of Srinagar.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-xs text-on-surface-variant font-medium uppercase tracking-tighter">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      3 Nights/4 Days
                    </li>
                    <li className="flex items-center gap-3 text-xs text-on-surface-variant font-medium uppercase tracking-tighter">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      Deluxe Stay
                    </li>
                  </ul>
                  <div className="mt-auto pt-6 border-t border-outline-variant/20 flex justify-between items-end">
                    <div>
                      <span className="block text-[10px] uppercase text-on-surface-variant tracking-widest">
                        Starting at
                      </span>
                      <span className="text-2xl font-serif text-primary">
                        ₹5,999
                      </span>
                      <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                    </div>
                    <a href="#booking" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details{" "}
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-tertiary p-1 rounded-2xl shadow-[0_20px_50px_rgba(107,63,0,0.15)] transition-all duration-500 hover:-translate-y-4 md:scale-105 z-20">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    alt="Gulmarg Gondola"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="breathtaking aerial view of snow-capped himalayan peaks seen from a colorful cable car gondola in gulmarg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIiSARISsrd73tXoWHzke0wc9W9yivcVHtgeSWuUfj6ecoleeI9AdEQuRpDhPo1XaH96MioX7fwrlHv8UU12V_y8MTg9FgiegIBgv6cKK29y3u4XnwbsRVBfZrLYT41owELy1Mp1Dc_uLRwv4QhEYPiYbWUjuzQwXScrW6gY6Qm9zu2C9SJRkT4y5m2bHYnTcNy0zvkwxB5lIKVZOfGNfZs1pOAm0xBFzDMHfHnWCcxlz4ODvicxKzOBZLyz5iky82bwQl0gZ-5nv"
                  />
                  <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-3xl mb-4 text-on-surface">
                    Classic
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    The quintessential Kashmir journey covering the golden trio:
                    Srinagar’s charm, Gulmarg’s peaks, and Pahalgam’s meadows.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-xs text-on-surface-variant font-medium uppercase tracking-tighter">
                      <span className="material-symbols-outlined text-tertiary text-lg">
                        stars
                      </span>
                      5 Nights/6 Days
                    </li>
                    <li className="flex items-center gap-3 text-xs text-on-surface-variant font-medium uppercase tracking-tighter">
                      <span className="material-symbols-outlined text-tertiary text-lg">
                        houseboat
                      </span>
                      Premium Houseboat Stay
                    </li>
                  </ul>
                  <div className="mt-auto pt-6 border-t border-outline-variant/20 flex justify-between items-end">
                    <div>
                      <span className="block text-[10px] uppercase text-on-surface-variant tracking-widest">
                        Starting at
                      </span>
                      <span className="text-2xl font-serif text-tertiary">
                        ₹10,999
                      </span>
                      <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                    </div>
                    <a href="#booking" className="bg-tertiary text-on-tertiary px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest scale-98-on-click transition-transform inline-block">
                      Book Classic
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-surface-container-low p-1 rounded-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    alt="Gurez Valley"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="a majestic mountain valley with a winding river and traditional wooden houses surrounded by steep pine-covered slopes in gurez"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-QkCMKbMG67Np3lz8eJ95mPtNKYeFpjMxDVTE-clqIPCv0qrHLbfyZdAB2Migwq40CvjkaHaYxs9uApyCct8WRAGxRbsL7BCMPy55WOey8wWumx5Zd_aswZKUshHH8DL8p5DP_Qivf-fduhpar5JFhTzSWHYKAjXO_Q1owy0UHcasuaN2IMIKOIf5NGZYR0iHKRaeZnrCgvMSt9LALfgvO9RPRcbk5rUcVJx0yhnBVkOrvO2k_6_n9ldGygqJHeiVDumsmp72K38I"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                    Ultimate Luxury
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-3xl mb-4 text-on-surface">
                    Royale
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    For the discerning traveler. Explore the hidden gems of
                    Gurez and Doodhpathri with unparalleled 5-star comfort.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-xs text-on-surface-variant font-medium uppercase tracking-tighter">
                      <span className="material-symbols-outlined text-primary text-lg">
                        workspace_premium
                      </span>
                      8 Nights/9 Days
                    </li>
                    <li className="flex items-center gap-3 text-xs text-on-surface-variant font-medium uppercase tracking-tighter">
                      <span className="material-symbols-outlined text-primary text-lg">
                        travel_explore
                      </span>
                      Private Chauffeur
                    </li>
                  </ul>
                  <div className="mt-auto pt-6 border-t border-outline-variant/20 flex justify-between items-end">
                    <div>
                      <span className="block text-[10px] uppercase text-on-surface-variant tracking-widest">
                        Starting at
                      </span>
                      <span className="text-2xl font-serif text-primary">
                        ₹19,999
                      </span>
                      <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                    </div>
                    <a href="#booking" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                      Enquire Royale{" "}
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block mb-4">
                Journey Blueprint
              </span>
              <h2 className="font-serif text-5xl text-on-surface mb-8 italic">
                Typical 6-Night Classic Journey
              </h2>

              <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-surface-container-low z-10"></div>
                  <h4 className="font-serif text-xl font-bold text-primary">
                    Day 1: The Srinagar Welcome
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    Arrival at Srinagar International Airport, transfer to a
                    premium houseboat on Dal Lake. Evening sunset Shikara ride
                    through the floating markets.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low z-10"></div>
                  <h4 className="font-serif text-xl font-bold text-on-surface">
                    Day 3: Gulmarg Gondola Heights
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    Day excursion to Gulmarg. Experience the world's highest
                    cable car, and take in the panoramic views of Apharwat Peak.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low z-10"></div>
                  <h4 className="font-serif text-xl font-bold text-on-surface">
                    Day 5: Pahalgam Valleys
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    Wander through Betaab Valley and Aru Valley. Enjoy a
                    riverside lunch near the Lidder River and soak in the
                    pastoral beauty.
                  </p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low z-10"></div>
                  <h4 className="font-serif text-xl font-bold text-on-surface">
                    Day 7: Farewell to Paradise
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                    Final shopping at Lal Chowk for authentic pashminas and dry
                    fruits before your transfer back to the airport.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:translate-y-12">
                <img
                  alt="Luxury Houseboat"
                  className="w-full h-full object-cover"
                  data-alt="interior view of an ornate kashmiri wooden houseboat with intricately carved ceilings and rich crimson persian carpets"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NexjXljEezTRinyr-WgmLsdSxXryovMzb9nDkIDipbIFlldGwSkDSEMt4l9j8JW8mZg30ju0SgmOY9dWqWLuX25i0IAinay2PIurNs8aDsQfCegaGZtWyHGULvMV46yZ1cEu15R15m21tp91YRpcQLtQ7kseMD-sROg5DNgxKaYLAdSAsJi1yQczfP9VxAUhr6cFDALk-jVvnp-ZLMgw7YFc65ju7V-RUyuhJuM7vncgkPfIZA-e8MZNfQzj_jIv41HqgEJ1Z0VU"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="italic font-serif text-2xl">
                    "Sleep under the stars on the tranquil waters of Dal Lake."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">
                  local_activity
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-4">Local Expertise</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">
                Our guides are born and raised in the valley, offering stories
                and paths that outsiders never find.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">
                  support_agent
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-4">24/7 Guardian</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">
                From airport pickup to late-night needs, our dedicated concierge
                is always just a call away.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">
                  restaurant_menu
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-4">Authentic Wazwan</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">
                Taste the true culture with exclusive access to traditional
                multi-course royal Kashmiri feasts.
              </p>
            </div>
          </div>
        </section>

        <section id="booking" className="py-24 bg-surface relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <div className="bg-surface-container-highest p-12 rounded-3xl shadow-sm">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl text-primary mb-2 italic">
                  Craft Your Journey
                </h2>
                <p className="text-on-surface-variant">
                  Looking for something specific? Let our experts design your
                  perfect escape.
                </p>
              </div>
              <BookingForm defaultPackage="Kashmir" />
            </div>
          </div>

          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-tertiary/5 blur-3xl"></div>
        </section>
      </main>
    </>
  );
}
