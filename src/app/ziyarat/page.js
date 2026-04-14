"use client";
import Link from "next/link";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import BookingForm from "@/components/BookingForm";

export default function ZiyaratPage() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            data-alt="wide cinematic shot of the holy shrine of Imam Hussain in Karbala at dusk with golden domes glowing under a deep indigo sky"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ZIZY25Q0_w_-9n7FO3azbdS8v7vQTjz60D9i3ZhHoVm8KHV6WmGKIdmpPb-5qYfheN-a-mJb6HIkhmmwSsAO_obKPKOBplNW4qFTy0eR_hrRtlE8WjLz_W7sq9bCFs3SfUvpR3Zfb10Li6GyzvnZJ0UAAgs3PbwybYDHcbOKdbFM0q6b2ESatjQy47ywmBEqEZuGh1FEnFYajhtz1CoVSFsdgYid5bq1b73eBvcDjNzePaG2h9sskxjExZBIT0Jq7GDhdOMj69tN"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-tertiary-fixed text-sm font-label uppercase tracking-[0.3em] mb-4 block">
            Huz Point Tours &amp; Travels
          </span>
          <h1 className="text-white font-headline text-6xl md:text-8xl font-light mb-6 leading-tight text-shadow-sm">
            Sacred Journeys to <br />
            the <span className="italic font-normal">Holy Lands</span>
          </h1>
          <p className="text-white/90 font-headline text-xl md:text-2xl italic max-w-2xl mx-auto font-light">
            From the Walk of Arbaeen to the Serenity of Mashhad—experience a
            pilgrimage crafted for the Kashmiri soul.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <a
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-label text-sm uppercase tracking-widest hover:bg-secondary transition-all flex items-center gap-2 group"
              href="#packages"
            >
              View 2026 Qafilas
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 px-6 md:px-12 bg-surface"
        id="packages"
      >
        <div className="geometric-veil absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
                Selected Pilgrimage Tiers
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed">
                Carefully curated itineraries balancing spiritual devotion with
                absolute comfort and local expertise.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Iran + Iraq — 3 tiers */}
            <div className="perspective-card glass-panel p-8 rounded-xl flex flex-col h-full border border-white/20 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-label uppercase tracking-widest text-secondary font-semibold">
                  Iraq + Iran
                </span>
                <h3 className="font-headline text-3xl text-primary mt-2">
                  Grand Ziyarat
                </h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  A complete spiritual journey covering the holy shrines of Iraq (Karbala, Najaf, Kadhimiya, Samarra) and Iran (Mashhad, Qom).
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">explore</span>
                  <span className="text-sm font-body text-on-surface-variant">Iraq (Karbala, Najaf, Kadhimiya, Samarra)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">mosque</span>
                  <span className="text-sm font-body text-on-surface-variant">Iran (Mashhad, Qom)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">groups</span>
                  <span className="text-sm font-body text-on-surface-variant">Kashmiri Group Qafila leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-0.5">menu_book</span>
                  <span className="text-sm font-body text-on-surface-variant">Scheduled Majalis & spiritual sessions</span>
                </li>
              </ul>

              {/* 3 pricing tiers */}
              <div className="pt-6 border-t border-outline-variant/30">
                <p className="text-sm font-label text-on-surface-variant/60 uppercase mb-4 tracking-widest">Select Your Tier</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-outline-variant/40 p-4 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                    <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">Economy</p>
                    <p className="text-xl font-headline text-primary font-semibold">₹1,20,000</p>
                    <p className="text-[10px] text-on-surface-variant mt-1">/person</p>
                    <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                  </div>
                  <div className="rounded-lg border-2 border-primary bg-primary/5 p-4 text-center shadow-md relative cursor-pointer">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[9px] px-2 py-0.5 rounded-full uppercase tracking-tight whitespace-nowrap">Popular</div>
                    <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">Semi Deluxe</p>
                    <p className="text-xl font-headline text-primary font-semibold">₹1,30,000</p>
                    <p className="text-[10px] text-on-surface-variant mt-1">/person</p>
                    <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                  </div>
                  <div className="rounded-lg border border-tertiary/40 bg-tertiary/5 p-4 text-center hover:border-tertiary hover:bg-tertiary/10 transition-all cursor-pointer">
                    <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">Deluxe</p>
                    <p className="text-xl font-headline text-tertiary font-semibold">₹1,50,000</p>
                    <p className="text-[10px] text-on-surface-variant mt-1">/person</p>
                    <span className="block text-[8px] text-on-surface-variant uppercase tracking-wider mt-1 opacity-70">(Prices subject to change)<br/>Please Enquire</span>
                  </div>
                </div>
                <a href="#booking" className="w-full mt-6 bg-surface-container-highest text-primary py-3 rounded-md font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all text-center block">
                  Book Iraq + Iran
                </a>
              </div>
            </div>

            {/* Arbaeen Walk */}
            <div className="perspective-card bg-primary-container p-8 rounded-xl flex flex-col h-full relative overflow-hidden shadow-xl">
              <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-tighter">
                Limited Slots — Arbaeen 2026
              </div>
              <div className="mb-6">
                <span className="text-xs font-label uppercase tracking-widest text-on-primary-container/80 font-semibold">
                  Iraq Only · Special Edition
                </span>
                <h3 className="font-headline text-3xl text-on-primary-container mt-2">
                  Arbaeen Walk
                </h3>
                <p className="text-sm text-on-primary-container/80 mt-2 leading-relaxed">
                  The world's largest annual peaceful gathering — the sacred 80km walk from Najaf to Karbala, honouring Imam Hussain (a.s).
                </p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">directions_walk</span>
                  <span className="text-sm font-body text-on-primary-container/90">The 80km Najaf to Karbala walk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">calendar_today</span>
                  <span className="text-sm font-body text-on-primary-container/90">15 Days full itinerary</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">support_agent</span>
                  <span className="text-sm font-body text-on-primary-container/90">Full logistical support & baggage transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">medical_services</span>
                  <span className="text-sm font-body text-on-primary-container/90">Dedicated medical aid & onsite guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">night_shelter</span>
                  <span className="text-sm font-body text-on-primary-container/90">Mawkib arrangements & spiritual majalis</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm font-label text-on-primary-container/60 uppercase mb-1">Investment</p>
                <p className="text-4xl font-headline text-on-primary-container font-semibold">
                  ₹1,15,000
                  <span className="text-sm font-body font-normal text-on-primary-container/70 ml-1">/person</span>
                </p>
                <span className="block text-[8px] text-on-primary-container/70 uppercase tracking-wider mt-1">(Prices subject to change) — Please Enquire</span>
                <a href="#booking" className="w-full mt-6 bg-tertiary text-on-tertiary py-3 rounded-md font-label text-xs uppercase tracking-widest hover:bg-tertiary-container transition-all text-center block">
                  Book Arbaeen Walk
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-4xl md:text-5xl text-center text-primary pt-24 mb-4">
            Eternal Destinations
          </h2>
          <p className="text-center text-on-surface-variant mb-8 max-w-xl mx-auto">
            Scroll through the sacred cities that define the pilgrimage
            experience.
          </p>
        </div>
        <ScrollStack
          useWindowScroll={true}
          itemDistance={250}
          itemScale={0.04}
          itemStackDistance={100}
          stackPosition="25%"
          scaleEndPosition="15%"
          baseScale={1.0}
          blurAmount={2}
          className="max-w-5xl mx-auto"
        >
          <ScrollStackItem itemClassName="!h-auto !p-0 !mt-0 bg-transparent !shadow-none">
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/9] shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Karbala"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz3lgQC8DGPtSFkrY219GqOZ9cF6WF5MG1nV9LKscCrpFc_j6J3xeVjlAZ5BLQA0wGTgUTCkM-sB4UZz635KnA_FXwfvw4RU9nzJNDV4-gq4KCa6UMLY_Bqp4wzCeayefpTUAv1C7GiAuyhzo9Wk5x0Q8m_Z92vuLgXUveOVsjfhECYWn3Mz_SUhkbLLOD3DBva5sdc53bbp9dY8WyisY37KMna4_maY2ECTf85VY0xiwGa8nJHppwjx6oUYYB9ziQQB6FVB9ao38E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-tertiary text-xs font-label uppercase tracking-widest mb-2">
                  Iraq
                </span>
                <h4 className="text-white font-headline text-4xl mb-2">
                  Karbala
                </h4>
                <p className="text-white/80 text-sm font-body max-w-md">
                  The resting place of Imam Hussain (a.s), the pinnacle of
                  sacrifice and devotion.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!h-auto !p-0 !mt-0 bg-transparent !shadow-none">
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/9] shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Najaf"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4EnVUukp04Z1cEhjHXT00PrMd7ntkOmtt8LyTgm3FpNjQ50_AmqkhQGXX8V1DzQvXyRfz-2wqMYGNIa8mUAXty8AKPt8gTHjBoovsmGD0mm6hlZZVoRs1eAEHE3xK-WKNocn5Opz16b8DSSgKt-C1gIzww7hBzF1UnItLqEILHnTgQdeOIjkJe4IPVuPmc5YuUMUsepUF5h0QGHw8qMN3Hhtr6LWxJm48yLk4_PQVNpPHW0ohOIaAGkoePByHtoGxafm3M2D7KX4A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-tertiary text-xs font-label uppercase tracking-widest mb-2">
                  Iraq
                </span>
                <h4 className="text-white font-headline text-4xl mb-2">
                  Najaf
                </h4>
                <p className="text-white/80 text-sm font-body max-w-md">
                  The golden dome of Imam Ali (a.s), the Commander of the
                  Faithful.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!h-auto !p-0 !mt-0 bg-transparent !shadow-none">
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/9] shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Mashhad"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfNyXAR66Ts0ewzHpmgE9WEbLN9UCs-1ZilTEPrKkA0eB4McOcdIs9MtlGyzcToVBrjcWEUyPn0PgFbICopjXaSJ8eb3iqVHGYbsHHf0aE7TXsirols7zOHwhG6HBSyfXzDpST0G2XO5zQIqX12PsCsVGZ6zh7pnnqlP7BfQitMPJUAJ86q5py1wTZyPHEozlQOZfiXOnGwqLq-lG3yx2xqSbN8b28kOq9XMpfnuidiviRJXFuiddCKRbmfuor-0VQaDRrgHAMer-S"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-tertiary text-xs font-label uppercase tracking-widest mb-2">
                  Iran
                </span>
                <h4 className="text-white font-headline text-4xl mb-2">
                  Mashhad
                </h4>
                <p className="text-white/80 text-sm font-body max-w-md">
                  The majestic shrine of Imam Reza (a.s), adorned with intricate
                  Persian mosaics.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="!h-auto !p-0 !mt-0 bg-transparent !shadow-none">
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/9] shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Qom"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMsI2hICqEbt6gEcRqVlFHAGfiTP34BUkDHJRNCokHuqOp_TOFsq3hYyL5kNoMgD_IHZVt-tTf_f40Yd9Vwj1ryajmdKz4llX98kTVe_DVuTMtrqUn1CmVwnJchvEmyhSjmzrMjnRcVwVLF4eW1y7gcaeY4edwLz5JnN4lCVcpdGm2H69ZRLWyzVTxqqy5ddV5Btkg8g3zS0z84lZlh2oe73-xTJ6slELlaF47yXDB859gU_UsetoLyDGwgBztN6-p69A5PRUnIkc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-tertiary text-xs font-label uppercase tracking-widest mb-2">
                  Iran
                </span>
                <h4 className="text-white font-headline text-4xl mb-2">Qom</h4>
                <p className="text-white/80 text-sm font-body max-w-md">
                  The golden dome of Hazrat Masuma (s.a), a center of Islamic
                  scholarship and devotion.
                </p>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-fixed-dim/20 rounded-full blur-3xl"></div>
              <img
                className="relative z-10 rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                data-alt="handheld prayer beads and a holy book on a persian carpet in soft warm window light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD838BB1fMb__a5wfHqEpkp_KUXdnr-dWd_HeTwE0Ys329hx5JyJO56Ovta31QZKon6Tg9GqOo2qPHINaFWoRqptFuLgdhMSz93G0nc8A4i5wnHbSeZC6gCFBq4yrEOCJnVbuYgBEq0YSYI3UB6CmQl9jtXGgzXzkC1PkV8bvIVVUEw4aLamTBGESJGQmNuydENrrvnEGOsHoMAwDk6gy3BxqbOLPnnIJJQrwh37tPMfkRnj6gK20OVsJWaM8JUXNeEULF_N_oPXtaU"
              />
              <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-lg shadow-lg z-20 border border-white/40 max-w-[240px]">
                <p className="font-headline italic text-primary text-lg">
                  "The service was unparalleled. It felt like traveling with
                  family."
                </p>
                <p className="mt-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  — Pilgrim from Srinagar
                </p>
              </div>
            </div>
            <div>
              <span className="text-tertiary text-sm font-label uppercase tracking-[0.2em] mb-4 block">
                The Huz Point Promise
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8 leading-tight">
                Authentic Hospitality <br />
                &amp; Spiritual Depth
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      person_celebrate
                    </span>
                  </div>
                  <div>
                    <h5 className="font-headline text-xl text-on-surface font-semibold mb-2">
                      Kashmiri Qafila Leaders
                    </h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Experienced guides who understand our culture and provide
                      guidance in Kashmiri and Urdu throughout the journey.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      menu_book
                    </span>
                  </div>
                  <div>
                    <h5 className="font-headline text-xl text-on-surface font-semibold mb-2">
                      Spiritual Lectures (Majalis)
                    </h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Scheduled Majalis and educational sessions at holy sites
                      to deepen the spiritual significance of every visit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      volunteer_activism
                    </span>
                  </div>
                  <div>
                    <h5 className="font-headline text-xl text-on-surface font-semibold mb-2">
                      Authentic Hospitality
                    </h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      From home-style meals to seamless transport, we ensure
                      your focus remains entirely on your spiritual devotion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-surface-container-high relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <BookingForm defaultPackage="Ziyarat" />
        </div>
      </section>
    </>
  );
}
