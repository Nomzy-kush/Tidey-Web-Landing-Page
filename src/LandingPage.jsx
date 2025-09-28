import React, { useEffect, useState } from "react";
import "./App.css"
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import mixpanel from "mixpanel-browser";
import TiedyLogo from "./assets/images/Tiedy Logo.png";
import AppleLogo from "./assets/images/Applelogo.svg";
import AndroidLogo from "./assets/images/Android.svg";
import HeroBackground from "./assets/images/Hero background.jpeg";
import ClothesImg from "./assets/images/clothes.jpeg";
import ShoesImg from "./assets/images/shoes.jpeg";
import DuvetImg from "./assets/images/duvet.jpeg";
import { Clock, Truck, ThumbsUp } from "lucide-react";
import CustomFaqList from "./components/CustomFaqList"; // adjust path if needed
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // core styles
import "swiper/css/autoplay"; // autoplay styles




export default function LandingPage() {
  // Optional: initialize Mixpanel if you want analytics -> replace TOKEN with your token
  // mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN || "YOUR_MIXPANEL_TOKEN_HERE");

  const [menuOpen, setMenuOpen] = useState(false);

  /* ----------------------
     rotating hero questions
     ---------------------- */
  const heroQuestions = [
    "Laundry dey stress you?",
    "What do you want to wash?",
    "Too tired for laundry?",
    "Too busy for laundry?",
    "Need to do staff laundry?",
    "Need to wash and dry your uniforms today?",
  ];
  const [qIndex, setQIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setQIndex((i) => (i + 1) % heroQuestions.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  /* ----------------------
     FAQ data (laundry related)
     ---------------------- */
  const faqItems = [
    {
      id: 1,
      question: "What areas do you serve?",
      answer:
        "We offer pickup and delivery across our listed service zones. Enter your postcode in the app to confirm availability for your address.",
    },
    {
      id: 2,
      question: "How long does pickup and delivery take?",
      answer:
        "Choose same-day, 24-hour, 48-hour, or 3-4 day turnaround when you place an order. Time options may vary by location and demand.",
    },
    {
      id: 3,
      question: "Do you do corporate/staff laundry?",
      answer:
        "Yes — we provide commercial laundry services for staff uniforms and bulk orders. Contact our sales team via the app or email for pricing and scheduling.",
    },
    {
      id: 4,
      question: "What payment methods are accepted?",
      answer:
        "We accept card payments in-app. If available in your region, mobile wallets and corporate billing options can be arranged.",
    },
    {
      id: 5,
      question: "Can I request special detergents or instructions?",
      answer:
        "Yes — specify special instructions (hypoallergenic detergents, delicate handling, or item-specific notes) when placing your order.",
    },
    {
      id: 6,
      question: "What about lost or damaged items?",
      answer:
        "We take great care with your items. Report an issue within 48 hours and our support team will investigate and handle compensation as appropriate.",
    },
    {
      id: 7,
      question: "How should I prepare items for pickup?",
      answer:
        "Place items in a bag or hamper with any special notes attached. Our team will confirm pickup time and method in the app.",
    },
    {
      id: 8,
      question: "Do you offer wash-and-fold, dry cleaning, and pressing?",
      answer:
        "Yes — we provide wash & fold, dry cleaning, pressing/ironing and specialty care (rugs, duvets). Select service type in the app at checkout.",
    },
    {
      id: 9,
      question: "Do you have bulk or subscription discounts?",
      answer:
        "We offer subscription plans and bulk pricing for regular users and corporate customers. Check the app for plan options and pricing.",
    },
    {
      id: 10,
      question: "Is contactless pickup available?",
      answer:
        "Yes. You can request contactless pickup/delivery through the app and leave items in a secure spot for our delivery partner.",
    },
  ];

  /* ----------------------
     helper: track events safely
     ---------------------- */
  function safeTrack(eventName, props = {}) {
    try {
      if (mixpanel && typeof mixpanel.track === "function") {
        mixpanel.track(eventName, props);
      }
    } catch (e) {
      // silent
    }
  }


  /* ----------------------
     UI
     ---------------------- */
  return (
    <div className="font-[Work Sans,sans-serif] text-[#111618] overflow-x-hidden">

      {/* Header */}
  <header className="navbar-container w-full flex flex-col xs:flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-6 py-4 shadow-sm border-b border-gray-200 bg-white sticky top-0 z-50 gap-4 sm:gap-0">

{/* Left: Logo + Title */}
<div className="navbar-left flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5 text-center sm:text-left">
  {/* Logo */}
  <img
    src={TiedyLogo}
    alt="Tiedy logo"
    className="navbar-logo h-16 sm:h-14 md:h-16 object-contain max-w-full"
  />
  {/* Title */}
  <h1 className="navbar-title text-2xl sm:text-xl md:text-2xl font-bold">
    Tiedy
  </h1>
</div>

{/* Right: Navigation */}
<nav className="navbar-right flex flex-col sm:flex-row gap-4 sm:gap-8 items-center w-full sm:w-auto">
  <a href="#how" className="navbar-link">
    <span className="font-semibold text-black hover:text-[#06AED5] transition-colors text-base sm:text-sm">
      How it works
    </span>
  </a>
  <a href="#contact" className="navbar-link">
    <span className="font-semibold text-black hover:text-[#06AED5] transition-colors text-base sm:text-sm">
      Contact Us
    </span>
  </a>

  {/* Store buttons */}
  <div className="navbar-buttons flex flex-col sm:flex-row gap-3 sm:gap-3 items-center w-full sm:w-auto">
    <a
      href="#download"
      className="navbar-btn inline-flex items-center justify-center gap-2 w-4/5 sm:w-auto max-w-xs px-4 py-3 rounded-md bg-[#06AED5] hover:bg-[#0496c2] text-white font-semibold shadow"
    >
      <img
        src={AndroidLogo}
        alt="Google Play"
        className="w-5 h-5 filter grayscale invert"
      />
      <span className="navbar-btn-text text-white text-base sm:text-sm">
        Google Play
      </span>
    </a>
    <a
      href="#download"
      className="navbar-btn inline-flex items-center justify-center gap-2 w-4/5 sm:w-auto max-w-xs px-4 py-3 rounded-md bg-[#06AED5] hover:bg-[#0496c2] text-white font-semibold shadow"
    >
      <img src={AppleLogo} alt="App Store" className="w-5 h-5 invert" />
      <span className="navbar-btn-text text-white text-base sm:text-sm">
        App Store
      </span>
    </a>
  </div>
</nav>
</header>





    

    
{/* Hero Section */}
<section
  className="hero-section w-full mx-auto flex flex-col items-center justify-center text-center px-4 py-24 bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)), url(${HeroBackground})`,
  }}
  aria-live="polite"
>
  <div className="hero-content flex flex-col gap-6 items-center">
    {/* rotating questions */}
    <div className="hero-text max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.h2
          key={qIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="hero-heading text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.02em]"
        >
          {heroQuestions[qIndex]}
        </motion.h2>
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="hero-subtext text-gray-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto"
      >
        Get your laundry picked up, washed, dried, and delivered with just a
        few taps. Choose same-day, 24-hour, 48-hour, or 3-4 day options.
      </motion.p>
    </div>

    {/* two store buttons side-by-side */}
    <div className="hero-buttons flex gap-4 mt-6 flex-wrap justify-center">
      <a
        href="#download"
        className="hero-btn inline-flex items-center justify-center gap-3 px-5 py-3 rounded-md bg-[#06AED5] hover:bg-[#0496c2] text-white font-bold shadow"
        onClick={() => safeTrack("Download Click", { store: "google" })}
      >
        <img
          src={AndroidLogo}
          alt="Google Play"
          className="hero-icon w-5 h-5 invert"
        />
        <span className="text-white">Google Play</span>
      </a>
      <a
        href="#download"
        className="hero-btn inline-flex items-center justify-center gap-3 px-5 py-3 rounded-md bg-[#06AED5] hover:bg-[#0496c2] shadow"
        onClick={() => safeTrack("Download Click", { store: "apple" })}
      >
        <img
          src={AppleLogo}
          alt="App Store"
          className="hero-icon w-5 h-5 invert"
        />
        <span className="text-white font-bold">App Store</span>
      </a>
    </div>
  </div>
</section>


   

{/* Services Section */}
<section
  id="services"
  className="services-section w-full mx-auto px-6 py-20 bg-gray-50 text-center"
>
  <h3 className="services-heading text-4xl font-bold mb-6">We wash it all</h3>

  <p className="services-subheading text-gray-600 max-w-2xl mx-auto mb-12">
    From everyday wear to specialty items, our expert team handles everything with care. 
    We've got you covered, no matter the fabric or item.
  </p>

  <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Clothes",
        desc: "Shirts, pants, dresses, and more. We handle all types of clothing with care.",
        img: ClothesImg,
      },
      {
        title: "Shoes",
        desc: "Sneakers, boots, and sandals. We clean and refresh your footwear.",
        img: ShoesImg,
      },
      {
        title: "Bedsheets & Duvets",
        desc: "Drapes, sheers, and bedding. We clean and press your home textiles.",
        img: DuvetImg,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="service-card border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
      >
        {/* Image */}
        <div className="service-image h-1/2 w-full">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Text */}
        <div className="service-text p-6 flex-1 flex flex-col justify-center">
          <h4 className="service-title text-xl font-semibold mb-2">
            {item.title}
          </h4>
          <p className="service-desc text-gray-500">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  

{/* Why Choose Section */}
<section
  id="how"
  className="why-choose-section w-full mx-auto px-6 py-20 bg-cover bg-center relative"
  style={{ backgroundImage: `url(${HeroBackground})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative text-center">
    <h3 className="why-choose-heading text-4xl font-bold mb-6 text-white">
      Why Choose Tiedy?
    </h3>
    <p className="why-choose-subheading text-gray-200 max-w-2xl mx-auto mb-12">
      Experience the convenience and quality that sets us apart. We are
      dedicated to making your life easier.
    </p>

    <div className="why-choose-grid grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="why-choose-card p-6 bg-white/10 rounded-lg text-left">
        <Clock className="why-choose-icon w-10 h-10 text-[#06AED5] mb-4" />
        <h4 className="why-choose-title text-xl font-semibold mb-2 text-white">
          Fast Turnaround
        </h4>
        <p className="why-choose-text text-gray-200">
          Choose from same-day, 24-hour, 48-hour, or 3-4 day service options
          to fit your schedule.
        </p>
      </div>

      {/* Card 2 */}
      <div className="why-choose-card p-6 bg-white/10 rounded-lg text-left">
        <Truck className="why-choose-icon w-10 h-10 text-[#06AED5] mb-4" />
        <h4 className="why-choose-title text-xl font-semibold mb-2 text-white">
          Free Pickup & Delivery
        </h4>
        <p className="why-choose-text text-gray-200">
          We come to you, saving you time and effort. Enjoy free pickup and
          delivery on all orders.
        </p>
      </div>

      {/* Card 3 */}
      <div className="why-choose-card p-6 bg-white/10 rounded-lg text-left">
        <ThumbsUp className="why-choose-icon w-10 h-10 text-[#06AED5] mb-4" />
        <h4 className="why-choose-title text-xl font-semibold mb-2 text-white">
          Quality Guaranteed
        </h4>
        <p className="why-choose-text text-gray-200">
          We use premium detergents and state-of-the-art equipment to ensure
          your clothes are cleaned to perfection.
        </p>
      </div>
    </div>
  </div>
</section>



{/* Service Areas Section */}
<section
  id="service-areas"
  className="service-areas-section w-full mx-auto px-6 py-20 bg-white"
>
  <div className="service-areas-grid grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Map Side */}
    <div className="service-map w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Yaba Lagos Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.799050827978!2d3.379206915331878!3d6.517581325112172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d94b7dd29c3%3A0x4027b6f33f2e26f!2sYaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695132211344!5m2!1sen!2sng"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>

    {/* Service Areas Side */}
    <div className="service-areas-text text-left h-[450px] flex flex-col">
      <h3 className="service-areas-heading text-3xl font-bold mb-6 text-gray-900">
        Areas We Serve in <span className="text-[#06AED5]">Yaba</span>
      </h3>
      <p className="service-areas-subheading text-lg text-gray-600 mb-6">
        We proudly provide laundry and delivery services across Yaba and its
        surrounding neighborhoods. Wherever you are, Tiedy has you covered.
      </p>

      {/* Scrollable list */}
      <ul className="service-areas-list space-y-4 text-lg font-semibold text-gray-800 overflow-y-auto pr-2 flex-1 custom-scrollbar">
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Alagomeji
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          University of Lagos (UNILAG)
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Akoka
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Sabo Yaba
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Tejuosho
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Onike
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Makoko
        </li>
        <li className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#06AED5] mr-3"></span>
          Harvey Road
        </li>
      </ul>
    </div>
  </div>
</section>




     {/* FAQ Section */}
     <section
  id="faq"
  className="faq-section relative w-full mx-auto px-6 py-16 bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${HeroBackground})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="faq-inner relative z-10 max-w-4xl mx-auto text-center">
    <h3 className="faq-heading text-4xl font-bold mb-10 text-white">
      Frequently Asked Questions
    </h3>

    {/* FAQ List */}
    <CustomFaqList items={faqItems} />
  </div>
</section>




{/* Testimonials Section */}
<section className="testimonials-section w-full px-6 py-20 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <h3 className="testimonials-title text-4xl font-bold text-center mb-12">
      What our customers say
    </h3>

    {/* Marquee container */}
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee gap-6">
        {[
          {
            name: "Sarah M.",
            role: "Happy Customer",
            text: "Washr has been a lifesaver! The app is easy to use, and the service is always reliable. My clothes come back perfectly clean and neatly folded.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXtszU1pwBOtF-lWgJKTxmTcKuogT97SNyiWXu4WRSNe0mI0-a9mcX0IiKiIvPaEVNLvzO-AfYx7oUaWefm2X8urse_2qj0ln8N-Y9-wJDa0IXMq8ukrGvTsQq_Tynx8Gl3vj0QL14UmG93g_q3_vsREEACfKeC_nRYgWxAf77ZVwBLTpU-6OJ234w7AD7Xt7kH301N5U3Rm9TRd8r0ckecv6z3apArUl-at0j1ye7cjOWS9s54g2mQBo6d6vYZayCoWS4E1B6Cdfz",
          },
          {
            name: "David K.",
            role: "Happy Customer",
            text: "I love the convenience of Washr. No more trips to the laundromat! Pickup and delivery are always on time, and the quality is excellent.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACmZ5fBwM08qvrbAbAXT9faBm3bApz_ZoQQYYE3ea-MYKcZKfGwXlXipfdqNaTkqgc31W1eJPLh-PVB-iZgr4ZaS0OSo_3GSXMR3U0MMfcZwR793AsoXBaP1ZM5lZDc5T-7TaIPN2vdHfulray1cdzeLWCgrgQQp-j_AqxQ2O_fV8QDd9vlbMoKFNXq7uW9u-M4beND5iTsFBk9M0ApDKvehr1KzFWohubAKzquUa_gKWuHG7ZGO5mpoDuk3DByDFsYb_QvGBMLH0-",
          },
          {
            name: "Emily L.",
            role: "Happy Customer",
            text: "I was hesitant to try a laundry service, but Washr exceeded my expectations. The prices are reasonable, and the customer service is top-notch. Highly recommend!",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbIh9gUOO8Pdlyaw9kaOCZZNn0sSEPZ6Z66_tQ7e_XK4P1F7Z08yWT4zWxqozdFs0puLjvkGogNIGcW3V5EuBlxX3gSUXMJu6qGtGhPLS5DerGcCywuomD5__AT5AFMLwyQ-3ZpJfnAiaKyUzptlSdoGFthMvCojqKDyxseOiIRmCqiBkrUq5X77CspmmwY_4x23IrJVv-cViPxIdiLwRmXcyndL2cw9Ej13Bslvkx_AfDN5L5S1VGbMVb1iQOwnlfS3-scaYLRprw",
          },
        ]
          // duplicate array so it loops seamlessly
          .concat([
            {
              name: "Sarah M.",
              role: "Happy Customer",
              text: "Washr has been a lifesaver! The app is easy to use, and the service is always reliable. My clothes come back perfectly clean and neatly folded.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXtszU1pwBOtF-lWgJKTxmTcKuogT97SNyiWXu4WRSNe0mI0-a9mcX0IiKiIvPaEVNLvzO-AfYx7oUaWefm2X8urse_2qj0ln8N-Y9-wJDa0IXMq8ukrGvTsQq_Tynx8Gl3vj0QL14UmG93g_q3_vsREEACfKeC_nRYgWxAf77ZVwBLTpU-6OJ234w7AD7Xt7kH301N5U3Rm9TRd8r0ckecv6z3apArUl-at0j1ye7cjOWS9s54g2mQBo6d6vYZayCoWS4E1B6Cdfz",
            },
            {
              name: "David K.",
              role: "Happy Customer",
              text: "I love the convenience of Washr. No more trips to the laundromat! Pickup and delivery are always on time, and the quality is excellent.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACmZ5fBwM08qvrbAbAXT9faBm3bApz_ZoQQYYE3ea-MYKcZKfGwXlXipfdqNaTkqgc31W1eJPLh-PVB-iZgr4ZaS0OSo_3GSXMR3U0MMfcZwR793AsoXBaP1ZM5lZDc5T-7TaIPN2vdHfulray1cdzeLWCgrgQQp-j_AqxQ2O_fV8QDd9vlbMoKFNXq7uW9u-M4beND5iTsFBk9M0ApDKvehr1KzFWohubAKzquUa_gKWuHG7ZGO5mpoDuk3DByDFsYb_QvGBMLH0-",
            },
            {
              name: "Emily L.",
              role: "Happy Customer",
              text: "I was hesitant to try a laundry service, but Washr exceeded my expectations. The prices are reasonable, and the customer service is top-notch. Highly recommend!",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbIh9gUOO8Pdlyaw9kaOCZZNn0sSEPZ6Z66_tQ7e_XK4P1F7Z08yWT4zWxqozdFs0puLjvkGogNIGcW3V5EuBlxX3gSUXMJu6qGtGhPLS5DerGcCywuomD5__AT5AFMLwyQ-3ZpJfnAiaKyUzptlSdoGFthMvCojqKDyxseOiIRmCqiBkrUq5X77CspmmwY_4x23IrJVv-cViPxIdiLwRmXcyndL2cw9Ej13Bslvkx_AfDN5L5S1VGbMVb1iQOwnlfS3-scaYLRprw",
            },
          ])
          .map((t, i) => (
            <div
            key={i}
            className="testimonial-card min-w-[320px] max-w-[380px] p-6 border border-gray-200 rounded-lg shadow-sm bg-white flex gap-4"
          >
            <div className="testimonial-avatar w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {t.text}
              </p>
            </div>
          </div>
          
          ))}
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="footer w-full mx-auto bg-gray-800 text-gray-400 px-6 py-12">
  <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Brand */}
    <div className="footer-brand">
      <h4 className="footer-title text-white font-semibold mb-3">Tiedy</h4>
      <p className="footer-desc">
        On-demand laundry service. We pick up, wash, and deliver your laundry,
        so you can focus on what matters.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-links">
      <h4 className="footer-title text-white font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2">
        <li>Services</li>
        <li>Pricing</li>
        <li>How it works</li>
      </ul>
    </div>

    {/* Support */}
    <div className="footer-support">
      <h4 className="footer-title text-white font-semibold mb-3">Support</h4>
      <ul className="space-y-2">
        <li>Contact Us</li>
        <li>FAQs</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    {/* Social */}
    <div className="footer-social">
      <h4 className="footer-title text-white font-semibold mb-3">Connect with us</h4>
      <div className="footer-icons flex space-x-4">
        <a className="text-gray-400 hover:text-white" href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
        <a className="text-gray-400 hover:text-white" href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
        <a className="text-gray-400 hover:text-white" href="mailto:hello@example.com" aria-label="Email"><HiOutlineMail size={20} /></a>
        <a className="text-gray-400 hover:text-white" href="#" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="footer-bottom border-t border-gray-700 mt-8 pt-6 text-center text-sm">
    © {new Date().getFullYear()} Tiedy. All rights reserved.
  </div>
</footer>

      </div>
  );
}

/* ----------------------
   FaqList & SingleFaq
   ---------------------- */
function FaqList({ items = [], onTrack = () => {} }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div id="FAQs" className="w-full">
      {items.slice(0, showMore ? items.length : 6).map((faq) => (
        <SingleFaq key={faq.id} {...faq} onTrack={onTrack} />
      ))}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowMore((s) => !s)}
          className="text-[#06AED5] font-medium"
        >
          {showMore ? "Hide" : "Expand"}
        </button>
      </div>
    </div>
  );
}

function SingleFaq({ id, question, answer, onTrack = () => {} }) {
  const [expanded, setExpanded] = useState(false);

  function toggle() {
    setExpanded((p) => !p);
    onTrack(id, question);
    safeMixpanelTrack(id, question);
  }

  function safeMixpanelTrack(qId, qString) {
    try {
      if (mixpanel && typeof mixpanel.track === "function") {
        mixpanel.track("FAQ Interaction", { questionId: qId, questionString: qString });
      }
    } catch (e) {}
  }

  const animation = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.25 } },
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full text-left py-3 flex items-center justify-between gap-4"
      >
        <p className="font-medium">{question}</p>
        <span className="text-gray-600">
          {expanded ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-gray-600 text-sm pb-4 pl-1 pr-1"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
