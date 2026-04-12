"use client";

import { useRef } from "react";

const reviews = [
  { name: "Shabir Ahmad", initial: "S", color: "blue", time: "a month ago", text: "Very professional and reliable service. They managed our Umrah trip perfectly without any hassle. The local guides were knowledgeable and everything from flights to hotels was perfectly organized. Highly recommended for families." },
  { name: "Faisal Wani", initial: "F", color: "pink", time: "3 months ago", text: "I booked a Kashmir tour package for my parents. Huz Point travels made sure they were comfortable and taken care of throughout the journey. Great hotels, excellent transport, and absolutely breathtaking views of Dal Lake." },
  { name: "Mohammad Yasin", initial: "M", color: "emerald", time: "6 months ago", text: "Best travel agency in Magam! Their custom packages and transparency in pricing sets them apart. Excellent customer support 24x7. We had some flight delays and they instantly re-arranged our accommodation without any stress." },
  { name: "Tariq Bhat", initial: "T", color: "purple", time: "2 weeks ago", text: "Exceptional service! We went for Ziyarat to Iraq and Iran, and the accommodations were very close to the Haram. It made our spiritual journey so much easier." },
  { name: "Zahoor Dar", initial: "Z", color: "indigo", time: "1 month ago", text: "Booked a cab for a full Kashmir tour. The driver was exceptionally polite and guided us nicely. Huz Point is a reliable name for tourists." },
  { name: "Rafiq Lone", initial: "R", color: "red", time: "5 months ago", text: "We found them very cooperative. Visited Pahalgam, Gulmarg, and Sonamarg. All hotel bookings were exactly as promised. No hidden charges." },
  { name: "Aisha Begum", initial: "A", color: "orange", time: "3 weeks ago", text: "Our Umrah travel agent was Huz Point. Honestly, they provided incredible services. Visa processing, ticketing, everything was smooth." },
  { name: "Jaffar Ali", initial: "J", color: "blue", time: "4 months ago", text: "A great experience. The pricing for the Iraq Ziyarat package was very reasonable compared to others in the market. Highly professional staff." },
  { name: "Imran Sheikh", initial: "I", color: "pink", time: "2 months ago", text: "Very good travel agent in the Valley. They care about their customers and ensure they face zero problems during their stay." },
  { name: "Nadeem Qureshi", initial: "N", color: "emerald", time: "1 week ago", text: "Outstanding! Will definitely book my next vacation with Huz Point. The houseboat stay they arranged at Nigeen lake was the highlight of our trip." },
  { name: "Sameer Mir", initial: "S", color: "purple", time: "7 months ago", text: "Quick booking and immediate responses. Even late at night, they were available to answer my queries regarding our flight tickets." },
  { name: "Altaf Hussain", initial: "A", color: "indigo", time: "1 year ago", text: "We have been traveling with Huz point for the last 3 years. Whether it's domestic flights or Umrah, we only trust them." },
  { name: "Uzma Khan", initial: "U", color: "red", time: "3 months ago", text: "Thank you Huz Point Travels for making our honeymoon so memorable. The decorations at the hotel and the shikara ride were fantastic." },
  { name: "Muzamil Shah", initial: "M", color: "orange", time: "2 weeks ago", text: "Best rates for airline tickets from Srinagar. They even helped with web check-in and selecting good seats." },
  { name: "Gulzar Ahmad", initial: "G", color: "blue", time: "5 months ago", text: "Very friendly and well behaved staff. Office is easily accessible in Magam market. Great consultancy for international tours." },
  { name: "Riyaz Ahmed", initial: "R", color: "pink", time: "8 months ago", text: "Highly satisfied with the Umrah package. They delivered what they promised. Special thanks to Tahir bhai for personal attention." },
  { name: "Bilal Waza", initial: "B", color: "emerald", time: "1 month ago", text: "Everything was perfectly managed. The car provided was new and comfortable. Loved the overall hospitality." },
  { name: "Shoaib Sofi", initial: "S", color: "purple", time: "11 months ago", text: "Huz Point is simply the best in Budgam area. Very authentic and transparent. Highly recommended." },
  { name: "Khurshid Malik", initial: "K", color: "indigo", time: "6 months ago", text: "Superb management. From picking up at the airport to dropping back, not a single flaw in our 6 days itinerary." },
  { name: "Omar Farooq", initial: "O", color: "red", time: "4 months ago", text: "Took my family for a trip to Kerala through them. Everything went smoothly. Good flight connections and great resorts booked." }
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  red: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

export default function ReviewsSlider() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group max-w-7xl mx-auto w-full">
      <button 
        onClick={slideLeft} 
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 md:-ml-6 z-10 bg-surface-container-highest dark:bg-surface border border-outline-variant/20 shadow-2xl w-14 h-14 rounded-full flex items-center justify-center text-primary transition-transform hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
      >
        <span className="material-symbols-outlined text-3xl">chevron_left</span>
      </button>

      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 px-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review, idx) => (
          <div 
            key={idx} 
            className="snap-start shrink-0 w-[300px] md:w-[350px] p-8 bg-surface rounded-2xl shadow-lg border border-outline-variant/10 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 ${colorClasses[review.color]}`}>
                  {review.initial}
                </div>
                <div>
                  <p className="font-bold text-on-surface line-clamp-1">{review.name}</p>
                  <div className="flex text-amber-500 dark:text-amber-400 text-xs mt-1">
                    ★★★★★ <span className="text-on-surface-variant font-medium ml-2 whitespace-nowrap">{review.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed italic line-clamp-[7]">"{review.text}"</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 absolute bottom-6 right-6 opacity-30" />
          </div>
        ))}
      </div>

      <button 
        onClick={slideRight} 
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 md:-mr-6 z-10 bg-surface-container-highest dark:bg-surface border border-outline-variant/20 shadow-2xl w-14 h-14 rounded-full flex items-center justify-center text-primary transition-transform hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
      >
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>
    </div>
  );
}
