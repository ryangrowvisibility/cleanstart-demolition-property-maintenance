import Reveal from "./Reveal";

const PHONE = "(905) 802-6998";
const TEL = "tel:+19058026998";
const SMS = "sms:+19058026998";
const GOOGLE = "https://www.google.com/maps/search/?api=1&query=CLEANSTART%20Demolition%20%26%20Property%20Maintenance&query_place_id=ChIJc04fTZFmzAcRjxsg966QoEI";
const FACEBOOK = "https://www.facebook.com/61584752680409";

function Icon({ d, className = "h-6 w-6" }: { d: string | string[]; className?: string }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const ic = {
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  shield: ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
  pin: ["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  hammer: ["m15 12-8.37 8.37a2.12 2.12 0 1 1-3-3L12 9", "m17.64 15 4.36-4.36", "m21.5 11.5-1.91-1.91a2 2 0 0 1-.59-1.41V7l-2.26-2.26a6 6 0 0 0-4.24-1.76H9.5l.92.82A6.18 6.18 0 0 1 12.5 9v1.34l2 2h1.16a2 2 0 0 1 1.41.59l1.93 1.93"],
  ruler: ["M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0z", "m14.5 12.5 2-2", "m11.5 9.5 2-2", "m8.5 6.5 2-2", "m17.5 15.5 2-2"],
  broom: ["m13 11 9-9", "M14.6 12.6c.8.8.9 2.1.2 3L10 21l-7-7 5.4-4.8c.9-.7 2.2-.6 3 .2z", "m6.8 15.8-2.3 2.3", "m9.4 18.4-2.3 2.3"],
  house: ["M3 10.5 12 3l9 7.5", "M5 9.5V21h14V9.5", "M9 21v-6h6v6"],
  leaf: ["M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z", "M2 21c0-3 1.85-5.36 5.08-6"],
  tree: ["M12 22v-7", "M8 15h8l-4-6-4 6z", "M9 9h6l-3-5-3 5z"],
  check: "M20 6 9 17l-5-5",
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  repeat: ["m17 2 4 4-4 4", "M3 11v-1a4 4 0 0 1 4-4h14", "m7 22-4-4 4-4", "M21 13v1a4 4 0 0 1-4 4H3"],
  arrow: ["M5 12h14", "m12 5 7 7-7 7"],
  plus: ["M12 5v14", "M5 12h14"],
  fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
};

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.94 6.2 6.81.8-5.03 4.66 1.33 6.72L12 17.52l-6.05 3.36 1.33-6.72L2.25 9.5l6.81-.8z" />
        </svg>
      ))}
    </span>
  );
}

const demo = [
  { icon: ic.hammer, name: "Residential demolition", text: "Basements, kitchens, bathrooms and other interior demo, done carefully and cleaned up at the end of every day. Renovation contractors use us as their go-to demo crew." },
  { icon: ic.ruler, name: "Renovation preparation", text: "We strip the space down and get it ready so your trades can walk in and start work, not spend their first morning hauling debris." },
  { icon: ic.broom, name: "Site cleaning", text: "Daily clean-up during the job and a full clean when we finish. Customers say the same thing again and again: the site was left spotless." },
];

const property = [
  { icon: ic.house, name: "Estate & property clear-outs", text: "Stress-free clear-outs of estates and foreclosed, evicted or abandoned homes. Homeowners also call us to clean up a property before listing it for sale." },
  { icon: ic.leaf, name: "Spring, fall & overgrown yard clean-ups", text: "Weeds up to your waist? We cut back and clear badly overgrown backyards and gardens so you can use the space again." },
  { icon: ic.tree, name: "Tree & root removal", text: "We take out unwanted trees and roots and clean up after, leaving a yard that is ready for whatever comes next." },
];

const reviews = [
  { name: "Casey Q.", job: "Basement demolition", text: "Ryan was professional, friendly and fairly priced. He cleaned up the mess every single day, even after we told him he didn't need to. We'll use him for future projects." },
  { name: "Running Renos", job: "Renovation contractor · Demolition", text: "Our first choice for demolition. Great communication, always on time, accountable, and the site is left spotless." },
  { name: "Olfat E.", job: "Overgrown backyard clean-up", text: "My backyard was so overgrown with weeds I was close to giving up. Ryan cut it all back and cleaned it up for a fair price, and he was kind and helpful the whole way through." },
  { name: "Maria L.", job: "Multiple projects", text: "We've used Ryan's team on several projects. Punctual, clean and efficient, and the demolition site is always left spotless." },
  { name: "Graham O.", job: "Tree & root removal", text: "Ryan took out our trees and roots and cleaned up well. The yard is usable again and the price was fair." },
  { name: "Michael B.", job: "Pre-sale property clean-up", text: "I've used Ryan several times, most recently to clean up the property before we sold the house. Easy to deal with, professional and fair." },
  { name: "Mark D.", job: "Quote & job", text: "He quoted the job, showed up exactly when he said he would, and got it done." },
];

const steps = [
  { title: "Call or text", text: "Tell Ryan what needs to come out, cleaned up or cleared. Photos by text help." },
  { title: "Fair, clear quote", text: "You get a straight price before any work starts." },
  { title: "On time, every day", text: "We show up when we say we will and clean the site before we leave each day." },
  { title: "Spotless hand-off", text: "The space is cleared, swept and ready for your trades, your sale or your summer." },
];

const faqs = [
  { q: "Are you insured?", a: "Yes. CLEANSTART is fully insured, so you are covered whether we are taking out a basement or clearing a yard." },
  { q: "What areas do you serve?", a: "We work across the 905, including Burlington and nearby communities in Halton and the west GTA. Call and tell us where the job is; we will confirm right away." },
  { q: "Do you work for contractors as well as homeowners?", a: "Both. Homeowners call us for demo, clear-outs and yard clean-ups, and renovation companies use us as their regular demolition crew." },
  { q: "Will you clean up after the demolition?", a: "Every day. We clean the site at the end of each day, not just at the finish, so your home stays livable and your trades can start fresh." },
  { q: "Can you clear out a house before it goes up for sale?", a: "Yes. We do estate clear-outs, foreclosed, evicted and abandoned property clean-outs, and pre-listing clean-ups for homeowners getting ready to sell." },
  { q: "How do I get a price?", a: `Call or text Ryan at ${PHONE}. Describe the job or send a few photos and he will give you a fair quote before anything starts.` },
  { q: "When can you start?", a: "We start our day at 8 a.m. Call to check our next opening; we will give you a real date and stick to it." },
];

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-wider text-muted">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold leading-tight text-ink md:text-[2.7rem]">{title}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </div>
  );
}

function ServiceCard({ icon, name, text }: { icon: string | string[]; name: string; text: string }) {
  return (
    <article className="lift flex h-full flex-col rounded-xl border border-line bg-surface p-6">
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-cta"><Icon d={icon} /></span>
      <h3 className="mt-5 text-xl font-semibold text-ink">{name}</h3>
      <p className="mt-2 flex-1 text-[1rem] text-muted">{text}</p>
      <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-ink underline decoration-cta decoration-2 underline-offset-4 hover:decoration-ink">
        Call about this <Icon d={ic.arrow} className="h-4 w-4" />
      </a>
    </article>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "CLEANSTART Demolition & Property Maintenance",
    telephone: "+1-905-802-6998",
    areaServed: [{ "@type": "City", name: "Burlington" }, { "@type": "AdministrativeArea", name: "Halton Region" }],
    address: { "@type": "PostalAddress", addressLocality: "Burlington", addressRegion: "ON", addressCountry: "CA" },
    hasMap: GOOGLE,
    sameAs: [FACEBOOK],
    founder: { "@type": "Person", name: "Ryan" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "9" },
    slogan: "Are YOU ready for your CLEAN START?",
    makesOffer: [...demo, ...property].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 md:h-20 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="CLEANSTART home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-cta"><Icon d={ic.hammer} className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="font-display block text-2xl font-bold tracking-wide text-ink">CLEANSTART</span>
              <span className="mt-0.5 block text-xs font-semibold text-muted">Demolition &amp; Property Maintenance</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold text-muted lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#reviews" className="hover:text-ink">Reviews</a>
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#area" className="hover:text-ink">Service Area</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-bold text-ink md:block">{PHONE}</a>
            <a href={TEL} className="btn-press hidden min-h-12 items-center gap-2 rounded-lg bg-cta px-5 font-bold text-cta-ink hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink sm:inline-flex">
              <Icon d={ic.phone} className="h-5 w-5" /> Call Now
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn-press grid h-12 w-12 place-items-center rounded-lg bg-cta text-cta-ink sm:hidden">
              <Icon d={ic.phone} className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-1.5 text-sm font-semibold text-white">
                <Icon d={ic.shield} className="h-4 w-4 text-cta" /> Fully insured · Owner-run by Ryan
              </p>
              <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,3.9rem)] font-bold leading-[1.05] text-ink">
                Demolition &amp; Property Clean-Ups in Burlington and the 905
              </h1>
              <p className="mt-5 max-w-[56ch] text-lg text-muted md:text-xl">
                Basement and interior demo, renovation prep, estate clear-outs and overgrown yard clean-ups for homeowners and contractors. Fair quotes, on time, and the site left spotless every day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-lg font-bold text-cta-ink shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <Icon d={ic.phone} className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href={SMS} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-ink px-7 text-lg font-bold text-ink hover:bg-surface">
                  <Icon d={ic.message} className="h-5 w-5" /> Text Photos for a Quote
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars /> 5.0</span>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-ink">9 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Fully insured</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Repeat customers</span>
              </div>
            </div>

            <figure className="rounded-xl border border-line bg-surface p-7 shadow-[0_20px_44px_-24px_oklch(0.21_0.01_260/0.45)] md:p-8">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 text-xl font-semibold leading-snug text-ink md:text-[1.35rem]">
                &ldquo;He cleaned up the mess every day, even though we told him he didn&rsquo;t need to.&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-[0.95rem]">
                <span className="font-bold text-ink">Casey Q.</span>
                <span className="text-muted"> · Basement demolition · Google review</span>
              </figcaption>
              <dl className="mt-6 grid grid-cols-2 gap-3 text-[0.95rem]">
                <div className="rounded-lg bg-tint p-3">
                  <dt className="text-muted">Starts at</dt>
                  <dd className="font-bold text-ink">8 a.m.</dd>
                </div>
                <div className="rounded-lg bg-tint p-3">
                  <dt className="text-muted">Serving</dt>
                  <dd className="font-bold text-ink">Burlington &amp; the 905</dd>
                </div>
              </dl>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers hire us" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-5 px-5 py-7 md:grid-cols-4 md:px-6">
            {[
              { icon: ic.check, t: "5.0 on Google", s: "9 five-star reviews" },
              { icon: ic.shield, t: "Fully insured", s: "Demo and clean-up work" },
              { icon: ic.broom, t: "Spotless sites", s: "Cleaned every day" },
              { icon: ic.repeat, t: "Repeat clients", s: "Homeowners & contractors" },
            ].map((x) => (
              <li key={x.t} className="flex items-start gap-3">
                <span className="mt-0.5 text-cta"><Icon d={x.icon} /></span>
                <span>
                  <span className="block font-bold leading-tight">{x.t}</span>
                  <span className="text-sm text-white/75">{x.s}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal>
              <SectionHead eyebrow="Services" title="Demolition and clean-ups, done right" intro="Two sides of one promise: we take out what needs to go and leave the place clean behind us." />
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-ink"><span className="h-1 w-8 rounded bg-cta" aria-hidden="true" /> Demolition</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {demo.map((s) => <ServiceCard key={s.name} {...s} />)}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-ink"><span className="h-1 w-8 rounded bg-cta" aria-hidden="true" /> Property maintenance &amp; clean-outs</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {property.map((s) => <ServiceCard key={s.name} {...s} />)}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHead eyebrow="Reviews" title="Rated 5.0 from 9 Google reviews" intro="Nearly every review names Ryan, and several come from customers who have hired us more than once." />
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-lg border-2 border-ink/20 bg-surface px-5 font-bold text-ink hover:border-ink md:self-auto">
                Read all reviews on Google <Icon d={ic.arrow} className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.slice(1).map((r) => (
                <figure key={r.name} className="mb-5 break-inside-avoid rounded-xl border border-line bg-surface p-6">
                  <Stars />
                  <blockquote className="mt-3 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-[0.95rem]">
                    <span className="font-bold text-ink">{r.name}</span>
                    <span className="text-muted"> · {r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-2 text-sm text-muted">Reviews are lightly shortened from the originals on our Google listing.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal>
              <SectionHead eyebrow="About us" title="For the Pros and the Joes" />
              <div className="mt-6 space-y-4 text-ink/90">
                <p>
                  CLEANSTART Demolition &amp; Property Maintenance is run by Ryan and his crew. We help two kinds of customers: renovation pros who need a reliable demo crew, and homeowners (the Joes) who need a basement gutted, a yard reclaimed or a property cleared.
                </p>
                <p>
                  Either way, the job goes the same: a fair quote, a crew that shows up when it says it will, clear communication, and a site that is cleaned at the end of every day. That last part is the one customers mention most.
                </p>
                <p>We are fully insured, and our first question on every job is simple: are you ready for your clean start?</p>
              </div>
            </Reveal>
            <Reveal>
              <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
                {[
                  { icon: ic.clock, t: "On time, as promised", s: "Customers say Ryan shows up exactly when he says he will." },
                  { icon: ic.broom, t: "Clean every day", s: "Not just at the end. Your home stays livable during the job." },
                  { icon: ic.message, t: "Clear communication", s: "You always know what is happening and what it costs." },
                  { icon: ic.user, t: "Fair prices, kind service", s: "Repeat customers keep coming back for the next project." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-ink"><Icon d={d.icon} className="h-5 w-5" /></span>
                    <span>
                      <span className="block font-bold text-ink">{d.t}</span>
                      <span className="text-[0.98rem] text-muted">{d.s}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal><SectionHead eyebrow="How it works" title="Four steps to a clean start" /></Reveal>
            <ol className="mt-12 grid gap-5 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl bg-surface p-6">
                  <span className="font-display grid h-11 w-11 place-items-center rounded-lg bg-cta text-xl font-bold text-cta-ink">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[1rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <SectionHead eyebrow="Service area" title="Working across Burlington and the 905" intro="We take on demolition and clean-up jobs in Burlington and the surrounding Halton and west-GTA area code. Not sure if you're in range? One call settles it." />
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Burlington", "Halton Region", "West GTA (905)"].map((c) => (
                  <li key={c} className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-semibold text-ink">
                    <Icon d={ic.pin} className="h-4 w-4" /> {c}
                  </li>
                ))}
              </ul>
              <a href={TEL} className="btn-press mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-cta px-6 font-bold text-cta-ink hover:bg-cta-hover">
                <Icon d={ic.phone} className="h-5 w-5" /> Ask if we cover your address
              </a>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  title="Map of the CLEANSTART service area around Burlington, Ontario"
                  src="https://maps.google.com/maps?q=Burlington%2C%20Ontario&z=10&output=embed"
                  className="h-[340px] w-full md:h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <SectionHead eyebrow="FAQ" title="Questions before you call" />
              <p className="mt-4 text-muted">Anything else? Call or text Ryan at <a href={TEL} className="font-bold text-ink underline decoration-cta decoration-2 underline-offset-4">{PHONE}</a>.</p>
            </Reveal>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-surface">
                  <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-4 font-bold text-ink">
                    {f.q}
                    <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-ink"><Icon d={ic.plus} className="h-4 w-4" /></span>
                  </summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 md:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight md:text-[2.7rem]">Ready for your clean start? Call Ryan at {PHONE}.</h2>
              <p className="mt-3 text-lg text-white/80">Demolition, clear-outs and yard clean-ups across Burlington and the 905. Fully insured. Day starts at 8 a.m.</p>
            </div>
            <a href={TEL} className="btn-press inline-flex min-h-14 shrink-0 items-center justify-center gap-2.5 rounded-lg bg-cta px-8 text-lg font-bold text-cta-ink hover:bg-cta-hover">
              <Icon d={ic.phone} className="h-5 w-5" /> Call {PHONE}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-brand-deep pb-28 pt-14 text-white/80 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-display text-2xl font-bold text-white">CLEANSTART</p>
            <p className="mt-1 text-[0.98rem]">Demolition &amp; Property Maintenance. Owner-run by Ryan. Fully insured.</p>
            <div className="mt-4 flex gap-3">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="CLEANSTART on Facebook" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-white/20"><Icon d={ic.fb} className="h-5 w-5" /></a>
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" aria-label="CLEANSTART on Google Maps" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-white/20"><Icon d={ic.pin} className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-[0.98rem]">
              <li><a href={TEL} className="font-semibold text-white hover:underline">{PHONE}</a></li>
              <li>Call or text for a fair quote</li>
              <li>Day starts at 8 a.m.</li>
              <li>Serving Burlington &amp; the 905, Ontario</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-[0.98rem]">
              {[...demo, ...property].map((s) => (
                <li key={s.name}><a href="#services" className="hover:text-white hover:underline">{s.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-white/10 px-5 pt-6 text-sm text-white/60 md:px-6">
          © {new Date().getFullYear()} CLEANSTART Demolition &amp; Property Maintenance. All rights reserved.
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-cta-ink"><Icon d={ic.phone} className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-ink font-bold text-ink"><Icon d={ic.message} className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
