import Link from "next/link";
import Stack from "@/components/Stack";
import TeamCard from "@/components/TeamCard";
import BookingForm from "@/components/BookingForm";
import ReviewsSlider from "@/components/ReviewsSlider";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col items-center overflow-hidden pt-[140px] pb-16 h-auto">
        <div className="absolute inset-0 z-0">
          <img alt="Dal Lake Kashmir" className="w-full h-full object-cover md:scale-105" src="/dal_lake_hero.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl my-auto">
          <h1 className="font-serif text-5xl md:text-8xl font-light text-white mb-6 tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
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
                  <div>
                    <span className="text-2xl font-serif text-tertiary">₹5,999</span>
                    <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                  </div>
                  <Link href="/kashmir" className="text-primary font-bold flex items-center gap-2 group/btn">
                    Details <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="perspective-card group relative rounded-xl overflow-hidden bg-white shadow-2xl md:scale-105 z-10 border-2 border-tertiary/20">
              <div className="absolute top-4 right-4 bg-tertiary text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter font-bold z-20">Popular</div>
              <div className="aspect-[16/10] overflow-hidden">
                <img alt="Srinagar Houseboat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOQCDuZj218mgLfpXf4Ie0P54ZggCZyg9OGSVSg5EGYwY-jJGCoMFC2SlO3YCYhJGPCi0EIgPWm4bH15_4OwUmtQC8nUxf7qRPFGy4MBjVb_a510ozUK3-x3KbQxvEcX4n__dLa1_qMOqYV0Q-IJVveEfS0lQV42TYM4OH8D0hnA2Weo0L4zeI2iAhGdEhqFvxEaByS0poo8_fJf-GKYTwlX9w0KWhuLudLn6NezCjCYNUkfcDtAl7cA6h8fNyKKJxZ2hnxi8cFOWJ" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest uppercase text-tertiary mb-2 block">10 Days / 9 Nights</span>
                <h3 className="font-serif text-3xl text-primary mb-4">Kashmir Classic</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Full immersion with Shikara rides, heritage tours, and premium houseboat stays.</p>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-3xl font-serif text-tertiary">₹10,999</span>
                    <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                  </div>
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
                  <div>
                    <span className="text-2xl font-serif text-tertiary">₹19,999</span>
                    <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                  </div>
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
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-surface-container-highest rounded-lg border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">history_edu</span>
                <h4 className="font-bold text-primary mb-2">Est. 2018</h4>
                <p className="text-sm text-on-surface-variant">Years of excellence in hospitality.</p>
              </div>
              <div className="p-6 bg-surface-container-highest rounded-lg border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <h4 className="font-bold text-primary mb-2">4.8★ Rating</h4>
                <p className="text-sm text-on-surface-variant">Trusted by thousands of travelers.</p>
              </div>
            </div>

            {/* Contact Details */}
            <div id="contact" className="p-8 bg-surface-container-highest rounded-xl border border-tertiary/20 shadow-lg mt-8">
              <h3 className="font-serif text-2xl text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">contact_support</span>
                Contact Us
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Phone</p>
                    <div className="flex flex-col gap-1 text-on-surface-variant text-sm">
                      <a href="tel:+918491852752" className="hover:text-primary transition-colors">Phone No: +91 8491852752</a>
                      <a href="tel:+916005322883" className="hover:text-primary transition-colors">Office: +91 6005322883</a>
                      <a href="tel:01951295233" className="hover:text-primary transition-colors">Land line: 01951295233</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-0.5">Email</p>
                    <a href="mailto:info@huztourandtravel.com" className="text-on-surface-variant text-sm hover:text-blue-600 transition-colors">
                      info@huztourandtravel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-green-600 dark:fill-green-400" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/918491852752" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      +91 8491852752
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2 pt-4 border-t border-outline-variant/20">
                  <p className="text-sm font-bold text-on-surface">Follow Us:</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/karrar_hussain_sofi?igsh=cjd5b3B1N3Fubng5" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-pink-600 transition-colors" title="Instagram">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/huzpoint.magam" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-blue-600 transition-colors" title="Facebook">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
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
        
        {/* Customer Google Reviews Section */}
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 flex items-center justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-10 h-10" />
              Customer Voices
            </h2>
            <div className="w-24 h-1 bg-tertiary mx-auto opacity-30 mt-4 mb-4"></div>
            <p className="text-on-surface-variant">Real reviews from our travelers experiencing the spiritual and scenic beauty with us.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-amber-400 text-2xl">
              4.8 <span>★★★★★</span> <span className="text-sm text-on-surface-variant font-medium ml-2">(120+ Reviews)</span>
            </div>
          </div>
          
          <ReviewsSlider />
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
              name="Haji Mohamad Ashraf" 
              role="CEO & Owner — Trusted since 1998"
              imageUrl="/ashraf.jpg"
            />
            <TeamCard 
              name="Karrar Hussain Sofi" 
              role="Managing Director" 
              imageUrl="/karrar.jpg"
            />
            <TeamCard 
              name="Mr. Shahsaab" 
              role="Ticketing & Visa Head" 
              imageUrl="/shahsaab.jpg"
            />
            <TeamCard 
              name="Mrs. Sumaira" 
              role="Sales Manager" 
              imageUrl="/sumaira.png"
            />
            <TeamCard 
              name="Ms. Aliya" 
              role="Accountant" 
              imageUrl="/aliya.png"
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
