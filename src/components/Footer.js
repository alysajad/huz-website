import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface w-full">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="Huz Point Tours & Travels" className="h-16 w-auto object-contain brightness-200" />
            </Link>
            <p className="text-inverse-on-surface/60 text-sm leading-relaxed mb-6">
              Crafting memories through spiritual and scenic journeys across Kashmir and the world.
            </p>
            {/* Reg badge */}
            <span className="inline-block text-[10px] uppercase tracking-widest border border-inverse-on-surface/20 text-inverse-on-surface/50 px-3 py-1 rounded-full">
              Reg. JKEA00000896
            </span>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-inverse-on-surface text-xs font-bold uppercase tracking-[0.2em] mb-5">Packages</h4>
            <ul className="space-y-3">
              <li><Link href="/kashmir" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Kashmir Explorer</Link></li>
              <li><Link href="/kashmir" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Kashmir Classic</Link></li>
              <li><Link href="/kashmir" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Kashmir Royale</Link></li>
              <li><Link href="/umrah" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Hajj 2026</Link></li>
              <li><Link href="/umrah" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Umrah Packages</Link></li>
              <li><Link href="/ziyarat" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Ziyarat Iraq &amp; Iran</Link></li>
              <li><Link href="/ziyarat" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Arbaeen Walk</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-inverse-on-surface text-xs font-bold uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">About Us</Link></li>
              <li><Link href="/#team" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Our Team</Link></li>
              <li><Link href="/#contact" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Contact</Link></li>
              <li><Link href="/#booking" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-inverse-on-surface text-xs font-bold uppercase tracking-[0.2em] mb-5">Get In Touch</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="tel:+918491852752" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-inverse-primary">call</span>
                  Phone No: +91 8491852752
                </a>
              </li>
              <li>
                <a href="tel:+916005322883" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-inverse-primary">call</span>
                  Office: +91 6005322883
                </a>
              </li>
              <li>
                <a href="tel:01951295233" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-inverse-primary">call</span>
                  Land line: 01951295233
                </a>
              </li>
              <li>
                <a href="https://wa.me/918491852752" target="_blank" rel="noopener noreferrer" className="text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-inverse-primary">chat</span>
                  WhatsApp Us
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://wa.me/918491852752" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-inverse-on-surface/20 flex items-center justify-center text-inverse-on-surface/50 hover:border-inverse-primary hover:text-inverse-primary transition-all"
                title="WhatsApp">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/karrar_hussain_sofi?igsh=cjd5b3B1N3Fubng5" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-inverse-on-surface/20 flex items-center justify-center text-inverse-on-surface/50 hover:border-inverse-primary hover:text-inverse-primary transition-all"
                title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/huzpoint.magam" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-inverse-on-surface/20 flex items-center justify-center text-inverse-on-surface/50 hover:border-inverse-primary hover:text-inverse-primary transition-all"
                title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-inverse-on-surface/10 shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=34.092884377213,74.58731019882507&hl=en&z=14&output=embed"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-inverse-on-surface/10 px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-inverse-on-surface/40 text-xs tracking-wide">
            © 2026 Huz Point Tours &amp; Travels. Journey with Faith. All rights reserved.
          </p>
          <p className="text-inverse-on-surface/40 text-xs">
            Near BHSS Degree College Rd, Magam, Budgam — J&amp;K 193401
          </p>
        </div>
      </div>

    </footer>
  );
}
