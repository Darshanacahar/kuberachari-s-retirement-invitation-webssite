import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import honoree from "@/assets/honoree.jpg";
import honoreeAbout from "@/assets/honoree_about.jpg";
import templeBg from "@/assets/temple-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const EVENT_DATE = new Date("2026-05-30T10:00:00+05:30");

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

function Rangoli() {
  return <div className="divider-rangoli my-12" aria-hidden />;
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className="text-center mb-10"
    >
      {kicker && (
        <div className="text-xs tracking-[0.4em] text-brass uppercase mb-3">॥ {kicker} ॥</div>
      )}
      <h2 className="text-3xl md:text-5xl text-maroon-deep">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      <div className="mt-4 flex justify-center items-center gap-3">
        <span className="h-px w-12 bg-gold" />
        <span className="text-gold text-xl">✦</span>
        <span className="h-px w-12 bg-gold" />
      </div>
    </motion.div>
  );
}

function Countdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, EVENT_DATE.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const items = [
    { v: d, l: "ದಿನಗಳು" },
    { v: h, l: "ಗಂಟೆಗಳು" },
    { v: m, l: "ನಿಮಿಷಗಳು" },
    { v: s, l: "ಸೆಕೆಂಡುಗಳು" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-2xl mx-auto">
      {items.map((it) => (
        <div key={it.l} className="ornate-border bg-card rounded-lg p-3 md:p-5 text-center">
          <div className="text-2xl md:text-4xl font-bold text-maroon-deep tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs text-brass mt-1 tracking-widest">{it.l}</div>
        </div>
      ))}
    </div>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shareText = "ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ ಅವರ ಸೇವಾ ನಿವೃತ್ತಿ ಅಭಿನಂದನ ಸಮಾರಂಭ — 30.05.2026";
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsapp = useMemo(
    () => `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
    [shareUrl],
  );

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: shareText, url: shareUrl });
      } catch {
        // Share interface closed or cancelled by the user
      }
    } else if (typeof navigator !== "undefined") {
      await navigator.clipboard.writeText(shareUrl);
      alert("ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ");
    }
  };

  const timeline = [
    {
      year: "ಪ್ರಾರಂಭ",
      title: "ಸಹ ಶಿಕ್ಷಕ",
      desc: "ಶಾಲಾ ಶಿಕ್ಷಣ ಇಲಾಖೆಯಲ್ಲಿ ಸೇವೆಯ ಆರಂಭ. ಮಕ್ಕಳ ಭವಿಷ್ಯ ರೂಪಿಸುವ ಪವಿತ್ರ ಯಾತ್ರೆ.",
    },
    {
      year: "ನಡುವಿನ ವರ್ಷಗಳು",
      title: "ಪ್ರಭಾರಿ ಮುಖ್ಯ ಗುರು",
      desc: "ಶಾಲೆಯ ನಾಯಕತ್ವದ ಜವಾಬ್ದಾರಿ. ಶಿಸ್ತು ಮತ್ತು ಪ್ರೀತಿಯಿಂದ ಮಾರ್ಗದರ್ಶನ.",
    },
    {
      year: "ಬಡ್ತಿ",
      title: "ಬಡ್ತಿ ಮುಖ್ಯ ಗುರು",
      desc: "ಸ.ಹಿ.ಪ್ರಾ ಶಾಲೆ ವ್ಯಾಸನಕೆರೆಯಲ್ಲಿ ಮುಖ್ಯ ಗುರುಗಳಾಗಿ ಸೇವೆ.",
    },
    {
      year: "30 ವರ್ಷಗಳು",
      title: "ಸುಧೀರ್ಘ ಸೇವೆ",
      desc: "ಮೂರು ದಶಕಗಳ ಅಮೂಲ್ಯ ಶಿಕ್ಷಣ ಕೊಡುಗೆ. ಸಾವಿರಾರು ವಿದ್ಯಾರ್ಥಿಗಳ ಜೀವನಕ್ಕೆ ಬೆಳಕು.",
    },
    { year: "30.05.2026", title: "ವಯೋ ನಿವೃತ್ತಿ", desc: "ಗೌರವಪೂರ್ವಕ ಬೀಳ್ಕೊಡುಗೆ. ಸೇವೆಯ ಹೊಸ ಅಧ್ಯಾಯ." },
  ];

  const guests = [
    "ಶಾಲಾ ಶಿಕ್ಷಣ ಇಲಾಖೆ ಅಧಿಕಾರಿಗಳು",
    "ಶಿಕ್ಷಕ ಬಂಧುಗಳು",
    "ಅನುಷ್ಠಾನ ಅಧಿಕಾರಿಗಳು",
    "ವಿಷಯ ನಿರ್ವಾಹಕರು",
    "ಸಂಪನ್ಮೂಲ ವ್ಯಕ್ತಿಗಳು",
    "ಸಂಘಟನೆಯ ಪದಾಧಿಕಾರಿಗಳು",
    "ಹಿತೈಷಿಗಳು",
    "ಸ್ನೇಹಿತರು",
    "ಸಮಸ್ತ ನಾಗರಿಕರು",
  ];

  return (
    <main className="min-h-screen text-maroon-deep">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-ivory/85 backdrop-blur border-b border-gold/40">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-2xl deepa-glow">🪔</span>
            <span className="font-display font-bold text-maroon-deep text-sm md:text-base">
              ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ
            </span>
          </a>
          <ul className="hidden md:flex gap-6 text-sm text-maroon-deep/90">
            {[
              ["#about", "ಪರಿಚಯ"],
              ["#journey", "ಸೇವಾ ಯಾತ್ರೆ"],
              ["#invitation", "ಆಮಂತ್ರಣ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-maroon transition border-b border-transparent hover:border-gold pb-0.5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-maroon-deep focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-ivory/95 border-t border-gold/30 overflow-hidden"
            >
              <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-maroon-deep font-semibold">
                {[
                  ["#about", "ಪರಿಚಯ"],
                  ["#journey", "ಸೇವಾ ಯಾತ್ರೆ"],
                  ["#invitation", "ಆಮಂತ್ರಣ"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-maroon transition border-b border-transparent hover:border-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(40,10,15,0.78), rgba(40,10,15,0.88)), url(${templeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-ivory">
            <div className="text-gold tracking-[0.35em] text-xs md:text-sm mb-4">
              !! ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ !!
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-gradient-gold">
              ಸೇವಾ ನಿವೃತ್ತಿ
              <br />
              ಅಭಿನಂದನ ಸಮಾರಂಭ
            </h1>
            <div className="mt-6 h-px w-32 bg-gold" />
            <p className="mt-6 text-2xl md:text-3xl font-display text-ivory">ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ</p>
            <p className="text-gold-soft mt-1">ಬಡ್ತಿ ಮುಖ್ಯ ಗುರುಗಳು</p>
            <p className="text-ivory/80 text-sm mt-1">ಸ.ಹಿ.ಪ್ರಾ ಶಾಲೆ, ವ್ಯಾಸನಕೆರೆ</p>
            <p className="mt-8 text-ivory/90 leading-relaxed max-w-lg">
              30 ವರ್ಷಗಳ ಅಮೂಲ್ಯ ಶಿಕ್ಷಣ ಸೇವೆಗೆ <br />
              <span className="text-gold">ಗೌರವಪೂರ್ವಕ ವಂದನೆ</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <div className="ornate-frame rounded-md overflow-hidden max-w-sm">
              <img
                src={honoreeAbout}
                alt="ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ"
                width={896}
                height={1152}
                className="block w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-14">
          <p className="text-center text-gold-soft mb-4 tracking-widest text-xs uppercase">
            ಸಮಾರಂಭಕ್ಕೆ ಉಳಿದಿರುವ ಸಮಯ
          </p>
          <Countdown />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle kicker="ಪರಿಚಯ" title="ಗುರುಗಳ ಬದುಕು" />
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-2"
          >
            <div className="ornate-frame rounded-md overflow-hidden">
              <img
                src={honoree}
                alt="ಗುರುಗಳು"
                loading="lazy"
                width={896}
                height={1152}
                className="block w-full h-auto"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-3 space-y-5 text-lg leading-relaxed"
          >
            <p>
              ಮೂರು ದಶಕಗಳ ಸುಧೀರ್ಘ ಪ್ರಯಾಣ. ಒಂದು ಪೀಳಿಗೆಯ ಮಕ್ಕಳ ಬದುಕಿಗೆ ಬೆಳಕು ತೋರಿಸಿದ ಪವಿತ್ರ ಸೇವೆ.
              <strong className="text-maroon"> ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ</strong> ಅವರು ಶಿಕ್ಷಕ ವೃತ್ತಿಯನ್ನು
              ಕೇವಲ ಉದ್ಯೋಗವಾಗಿ ನೋಡದೆ, ಅದನ್ನು ಒಂದು ತಪಸ್ಸಾಗಿ ಸ್ವೀಕರಿಸಿದರು.
            </p>
            <p>
              ಸಹ ಶಿಕ್ಷಕರಾಗಿ ಆರಂಭಗೊಂಡ ಸೇವೆ, ಪ್ರಭಾರಿ ಮುಖ್ಯ ಗುರುಗಳಾಗಿ, ಅಂತಿಮವಾಗಿ ಬಡ್ತಿ ಮುಖ್ಯ ಗುರುಗಳಾಗಿ
              — ಪ್ರತಿಯೊಂದು ಜವಾಬ್ದಾರಿಯನ್ನು ಶ್ರದ್ಧೆಯಿಂದ ನಿಭಾಯಿಸಿದರು. ಶಿಸ್ತು, ನಿಸ್ವಾರ್ಥತೆ, ವಿದ್ಯಾರ್ಥಿಗಳ
              ಮೇಲಿನ ಅಪಾರ ಪ್ರೀತಿ ಇವು ಅವರ ವ್ಯಕ್ತಿತ್ವದ ಸ್ತಂಭಗಳು.
            </p>
            <p>
              ಶಾಲಾ ಆವರಣದಿಂದ ಹೊರಗೂ ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ಪಾಲ್ಗೊಂಡು, ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರಕ್ಕೆ ಅಮೂಲ್ಯ
              ಕೊಡುಗೆ ಸಲ್ಲಿಸಿದ ಅವರ ಬದುಕು ಎಲ್ಲರಿಗೂ ಆದರ್ಶ.
            </p>
          </motion.div>
        </div>
      </section>

      <Rangoli />

      {/* TIMELINE */}
      <section id="journey" className="max-w-5xl mx-auto px-4 py-16">
        <SectionTitle kicker="ಸೇವಾ ಯಾತ್ರೆ" title="30 ವರ್ಷಗಳ ಪಯಣ" />
        <div className="relative pl-6 md:pl-0">
          <div className="absolute md:left-1/2 left-3 top-0 bottom-0 w-0.5 bg-gold/60" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className={`relative mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}
            >
              <div
                className={`absolute top-3 ${i % 2 ? "md:-left-2" : "md:-right-2"} left-[-22px] md:left-auto h-4 w-4 rounded-full bg-gold border-4 border-maroon`}
              />
              <motion.div
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="ornate-border bg-card rounded-lg p-5 cursor-pointer"
              >
                <div className="text-xs tracking-widest text-brass">{t.year}</div>
                <h3 className="text-xl text-maroon-deep mt-1">{t.title}</h3>
                <p className="text-maroon-deep/80 mt-2 leading-relaxed">{t.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INVITATION */}
      <section
        id="invitation"
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(245,235,210,0.92), rgba(245,235,210,0.92)), url(${templeBg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle kicker="ಆಮಂತ್ರಣ" title="ಆತ್ಮೀಯ ಆಮಂತ್ರಣ ಪತ್ರ" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="ornate-border bg-card rounded-xl p-8 md:p-12 text-center"
          >
            <div className="text-4xl deepa-glow mb-4">🪔</div>
            <p className="text-gold font-display text-2xl">!! ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ !!</p>
            <h3 className="text-2xl md:text-3xl text-maroon-deep mt-6">ಗೌರವಾನ್ವಿತ ಆಮಂತ್ರಿತರು</h3>

            <p className="text-maroon-deep/90 leading-loose mt-6 text-lg max-w-2xl mx-auto">
              ಹೊಸಪೇಟೆ ತಾಲೂಕಿನ ಶಾಲಾ ಶಿಕ್ಷಣ ಇಲಾಖೆಯ ಅಧಿಕಾರಿಗಳು, ಸಮಸ್ತ ಶಿಕ್ಷಕ ಬಂಧುಗಳು, ಅನುಷ್ಠಾನ
              ಅಧಿಕಾರಿಗಳು, ವಿಷಯ ನಿರ್ವಾಹಕರು, ಸಂಪನ್ಮೂಲ ವ್ಯಕ್ತಿಗಳು, ಸಮಸ್ತ ಸಂಘಟನೆಯ ಪದಾಧಿಕಾರಿಗಳು, ನನ್ನ
              ಹಿತೈಷಿಗಳು, ಸ್ನೇಹಿತರು, ಹಾಗೂ ಸಮಸ್ತ ನಾಗರಿಕರು — ಈ ಸಮಾರಂಭಕ್ಕೆ ಆಗಮಿಸಿ ಯಶಸ್ವಿಗೊಳಿಸಬೇಕೆಂದು ಈ
              ಮೂಲಕ ತಮ್ಮೆಲ್ಲರಲ್ಲಿಯೂ ವಿನಂತಿ ಮಾಡಿಕೊಳ್ಳುತ್ತೇನೆ.
            </p>
            <p className="text-maroon font-semibold mt-6 text-xl">ಸರ್ವರಿಗೂ ಹೃತ್ಪೂರ್ವಕ ಸ್ವಾಗತ.</p>

            <div className="my-8 divider-rangoli" />

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-sandal/60 rounded-lg p-5 border border-gold/40">
                <div className="text-xs tracking-widest text-brass uppercase">ದಿನಾಂಕ</div>
                <p className="mt-2 text-2xl font-display text-maroon-deep">30 ಮೇ 2026</p>
                <p className="text-maroon-deep/80">ಶನಿವಾರ</p>
              </div>
              <div className="bg-sandal/60 rounded-lg p-5 border border-gold/40 flex flex-col justify-between">
                <div>
                  <div className="text-xs tracking-widest text-brass uppercase">ಸ್ಥಳ</div>
                  <p className="mt-2 text-maroon-deep font-semibold">ಸರಕಾರಿ ಕಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ</p>
                  <p className="text-maroon-deep/80">ಅಯ್ಯನಹಳ್ಳಿ, ನವನಗರ</p>
                  <p className="text-maroon-deep/80">ಹೊಸಪೇಟೆ ತಾಲೂಕು</p>
                </div>
                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=15.166238,76.341971"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ceremonial text-ivory text-sm font-semibold rounded-md border border-gold hover:opacity-95 transition text-center shadow-md cursor-pointer"
                >
                  📍 ಮಾರ್ಗಸೂಚಿ ಪಡೆಯಿರಿ
                </motion.a>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden border-2 border-gold/60">
              <iframe
                title="ಸ್ಥಳ ನಕ್ಷೆ"
                src="https://www.google.com/maps?q=15.166238,76.341971&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-ceremonial text-ivory rounded-md border border-gold cursor-pointer"
              >
                ಹಂಚಿಕೊಳ್ಳಿ
              </motion.button>
              <motion.a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-leaf text-ivory rounded-md border border-gold cursor-pointer text-center"
              >
                ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GUESTS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle kicker="ಗೌರವಾನ್ವಿತ ಅತಿಥಿಗಳು" title="ಆಮಂತ್ರಿತರು" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {guests.map((g, i) => (
            <motion.div
              key={g}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 10px 30px -5px rgba(40,10,15,0.15)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="ornate-border bg-card rounded-lg p-5 text-center cursor-pointer"
            >
              <div className="text-2xl mb-2">🌼</div>
              <p className="text-maroon-deep font-medium">{g}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-maroon-deep text-ivory py-12 border-t-4 border-gold">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl deepa-glow mb-3">🪔</div>
            <p className="font-display text-2xl text-gradient-gold">
              ಸರ್ವರಿಗೂ ಹೃತ್ಪೂರ್ವಕ ಧನ್ಯವಾದಗಳು
            </p>
            <p className="text-ivory/70 mt-3 text-sm">
              ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ • ಬಡ್ತಿ ಮುಖ್ಯ ಗುರುಗಳು • ಸ.ಹಿ.ಪ್ರಾ ಶಾಲೆ, ವ್ಯಾಸನಕೆರೆ
            </p>
            <div className="mt-5 divider-rangoli max-w-md mx-auto opacity-60" />
            <p className="text-gold/80 text-xs mt-4 tracking-widest">!! ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ !!</p>
          </div>

          <div className="mt-10 pt-6 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/60 gap-4">
            <p>© {new Date().getFullYear()} ಶ್ರೀ ಎ. ಕುಬೇರಾಚಾರಿ.</p>
            <p className="md:text-right text-gold-soft font-display">
              ದರ್ಶನಾಚಾರ್ ಅವರಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
