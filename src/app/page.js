import Link from "next/link";
import Stack from "@/components/Stack";
import TeamCard from "@/components/TeamCard";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Dal Lake Kashmir" className="w-full h-full object-cover scale-105" src="/dal_lake_hero.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="font-serif text-5xl md:text-8xl font-light text-white mb-6 tracking-wide drop-shadow-2xl">
            Heaven on Earth, <br/>
            <span className="italic">Sacred Lands Beyond</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 mb-10 tracking-widest uppercase font-light">
            Explore Kashmir's Valleys • Journey to Mecca • Ziyarat to Karbala
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/kashmir" className="text-center w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-md text-lg font-medium transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-95">
              Explore Kashmir
            </Link>
            <Link href="/umrah" className="text-center w-full md:w-auto px-10 py-4 border border-tertiary-fixed text-tertiary-fixed rounded-md text-lg font-medium backdrop-blur-sm transition-all hover:bg-tertiary-fixed/10 active:scale-95">
              Pilgrimage Packages
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      <section className="py-24 bg-surface relative overflow-hidden" id="packages">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4 italic">Discover Paradise</h2>
            <div className="w-24 h-1 bg-tertiary mx-auto opacity-30 mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="perspective-card group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="Gulmarg Meadow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXOAk9pMP1NRM82R4Hc1F4Fx-1n5rc9LnLFY065R7gyNeJhYjiNI9ekT-_sLgWHcW2-v_V1OEdzxakAOUqj7QvUcNUpnePcliNsmoZ4WcZ5V-glVWKoMPiMeLewEc6M3IL4mdpU6ERUiV-FqMbQMqhU68TfG2XjB9_7SF3_q4puKtQVyirSSx2SbZ63vqnzDG8jELV-04yy-X3mI7Rhvu5h9hYSuuwhk-vtHmTIrmvusOKsxcjo3JE_R3yPcR-c7y-kZptyV8wWyYI" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest uppercase text-outline mb-2 block">7 Days / 6 Nights</span>
                <h3 className="font-serif text-2xl text-primary mb-4">Kashmir Explorer</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Essential sights including Srinagar, Gulmarg, and the serenity of Pahalgam valleys.</p>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-serif text-tertiary">₹12,999</span>
                  <Link href="/kashmir" className="text-primary font-bold flex items-center gap-2 group/btn">
                    Details <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="perspective-card group relative rounded-xl overflow-hidden bg-white shadow-2xl scale-105 z-10 border-2 border-tertiary/20">
              <div className="absolute top-4 right-4 bg-tertiary text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter font-bold z-20">Popular</div>
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="Srinagar Houseboat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOQCDuZj218mgLfpXf4Ie0P54ZggCZyg9OGSVSg5EGYwY-jJGCoMFC2SlO3YCYhJGPCi0EIgPWm4bH15_4OwUmtQC8nUxf7qRPFGy4MBjVb_a510ozUK3-x3KbQxvEcX4n__dLa1_qMOqYV0Q-IJVveEfS0lQV42TYM4OH8D0hnA2Weo0L4zeI2iAhGdEhqFvxEaByS0poo8_fJf-GKYTwlX9w0KWhuLudLn6NezCjCYNUkfcDtAl7cA6h8fNyKKJxZ2hnxi8cFOWJ" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest uppercase text-tertiary mb-2 block">10 Days / 9 Nights</span>
                <h3 className="font-serif text-3xl text-primary mb-4">Kashmir Classic</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Full immersion with Shikara rides, heritage tours, and premium houseboat stays.</p>
                <div className="flex justify-between items-end">
                  <span className="text-3xl font-serif text-tertiary">₹24,999</span>
                  <Link href="/kashmir" className="inline-block bg-primary text-on-primary px-5 py-2 rounded text-sm hover:bg-primary-container transition-colors">Book Classic</Link>
                </div>
              </div>
            </div>

            <div className="perspective-card group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="Luxury Resort Kashmir" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnp98Bzz33l54L3YiPkD_RTRGdGHHI0ti359XNkDo5H5Zdgcq5aZi_YZwcqS5xXwojUFvys9nPxieGXtlDwNCQn53qT_Lt0iphNg5Q-KFn_pVrv9rI92tv3on9ZKBbiz2hBHPrn29prVw0S2OTX9tnxU8D1_7PmRSPIc9Uh7HdvmiPJSLYdM_CdZywJ52Ks6OLGtwAgC2k1DwzUQJDlVB5I2_tbaY4U-_BnsFz6djY_PgwpYCpMCEJZCF8HeQGadoN4ehAECOEl0p" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest uppercase text-outline mb-2 block">12 Days / 11 Nights</span>
                <h3 className="font-serif text-2xl text-primary mb-4">Kashmir Royale</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Ultra-luxury stay in 5-star resorts, private transfers, and curated off-beat experiences.</p>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-serif text-tertiary">₹49,999</span>
                  <Link href="/kashmir" className="text-primary font-bold flex items-center gap-2 group/btn">
                    Details <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-950 text-white relative" id="sacred">
        <div className="absolute inset-0 geometric-veil opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-tertiary-fixed font-sans text-sm tracking-[0.3em] uppercase block mb-4">The Path of Faith</span>
              <h2 className="font-serif text-5xl md:text-6xl text-emerald-50">Sacred Journeys</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-emerald-800/50">
              <img alt="Mecca" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1r9NsKo7SEFENM39SWp2Iis6mXp_NCYxnIWO8no-M7_OatS5MVw442_dw5O40iK2Qg-fY0BjKMSTZFbkGKYhl4tb8l8A48Fae4e6aPqxi4KiLj2CWgHTcKwhJafOXuV9nwGWmHIg-XZXcv4QvfE390PqZYiXGSwIxcOux8Bc86k91KxvFIImHNijgP9tkTHw8VRnmRMNp3ClaCJ93Wb_T2wNwE8pe2A04AvMF1kQz70cJVnMYUOIWo6cvwMDDtO6KfS_guDp5eR_X" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-serif text-3xl mb-2 text-emerald-50">Hajj & Umrah</h3>
                <p className="text-emerald-200/80 text-sm mb-6">Complete logistics and spiritual guidance for your pilgrimage to the holy cities.</p>
                <Link href="/umrah" className="text-tertiary-fixed font-bold tracking-widest uppercase text-xs border-b border-tertiary-fixed/40 pb-1 hover:text-white hover:border-white transition-all inline-block">Learn More</Link>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-emerald-800/50">
              <img alt="Shrine of Imam Ali A.S. in Najaf, Iraq" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/najaf_shrine.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-serif text-3xl mb-2 text-emerald-50">Ziyarat Iraq</h3>
                <p className="text-emerald-200/80 text-sm mb-6">Visit Karbala, Najaf, Kufa, and Samarra with specialized guides and comfortable stays.</p>
                <Link href="/ziyarat" className="text-tertiary-fixed font-bold tracking-widest uppercase text-xs border-b border-tertiary-fixed/40 pb-1 hover:text-white hover:border-white transition-all inline-block">Explore Iraq</Link>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-emerald-800/50">
              <img alt="Imam Reza Shrine in Mashhad, Iran" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/mashhad_shrine.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-serif text-3xl mb-2 text-emerald-50">Ziyarat Iran</h3>
                <p className="text-emerald-200/80 text-sm mb-6">Spiritual journey to Mashhad and Qom, exploring the rich history and shrines of Iran.</p>
                <Link href="/ziyarat" className="text-tertiary-fixed font-bold tracking-widest uppercase text-xs border-b border-tertiary-fixed/40 pb-1 hover:text-white hover:border-white transition-all inline-block">Explore Iran</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low" id="about">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-5xl text-primary mb-8 leading-tight">Crafting Journeys <br/>of a Lifetime</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">Founded with the mission to bridge the gap between spiritual longing and physical travel, Huz Point Tours & Travels provides more than just a booking service—we provide peace of mind.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-surface-container-highest rounded-lg border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">history_edu</span>
                <h4 className="font-bold text-primary mb-2">Est. 2018</h4>
                <p className="text-sm text-on-surface-variant">Years of excellence in hospitality.</p>
              </div>
              <div className="p-6 bg-surface-container-highest rounded-lg border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">star</span>
                <h4 className="font-bold text-primary mb-2">4.5★ Rating</h4>
                <p className="text-sm text-on-surface-variant">Trusted by thousands of travelers.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-gradient-to-br from-surface to-surface-container-high flex flex-col items-center justify-center p-12 border border-outline-variant/20">
              <img alt="Huz Point Tours & Travels Logo" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="/logo.png" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-tertiary-container rounded-2xl -z-0 opacity-20"></div>
            <div className="absolute -top-10 -left-10 w-1/3 aspect-square border border-primary/20 rounded-2xl -z-0"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface" id="team">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl text-primary mb-4 italic">Meet the Team</h2>
            <div className="w-24 h-1 bg-tertiary mx-auto opacity-30 mt-6 mb-4"></div>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our experts work around the clock to ensure your journey is seamless, spiritual, and unforgettable.
            </p>
          </div>
          
          {/* Centered responsive grid for luxury Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <TeamCard 
              name="Tahir Ahmad" 
              role="Founder & CEO" 
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
            />
            <TeamCard 
              name="Aisha Malik" 
              role="Head of Hajj & Umrah" 
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
            />
            <TeamCard 
              name="Zaid Ali" 
              role="Lead Destinations Guide" 
              imageUrl="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&q=80"
            />
            <TeamCard 
              name="Fatima Noor" 
              role="Customer Experience" 
              imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
            />
            <TeamCard 
              name="Irfan Bhat" 
              role="Logistics Manager" 
              imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
            />
          </div>
        </div>
      </section>
      <section id="booking" className="py-24 bg-surface-container-high overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <BookingForm defaultPackage="" />
        </div>
      </section>
    </>
  );
}
