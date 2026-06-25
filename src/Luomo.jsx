import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  Clock3,
  FileSearch,
  ImagePlus,
  Loader2,
  MapPin,
  Menu,
  MessageSquareReply,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import { saveDetails } from "./authApi";
import PricingPage from "./Pricing";

const painPoints = [
  {
    icon: MessageSquareReply,
    title: "Reviews sit unanswered",
    text: "A customer leaves feedback, but daily work gets in the way. Future customers still see the silence.",
  },
  {
    icon: CalendarClock,
    title: "Google posts become stale",
    text: "Offers, updates, and events only go live when someone remembers to create them.",
  },
  {
    icon: FileSearch,
    title: "Profile gaps stay hidden",
    text: "Descriptions, categories, services, photos, and business details slowly become incomplete.",
  },
  {
    icon: Target,
    title: "Competitors look easier to choose",
    text: "Nearby businesses can win attention simply because they look more active and trusted.",
  },
];

const featureGroups = [
  {
    icon: Bot,
    eyebrow: "Review automation",
    title: "Reply to every customer in seconds",
    text: "Generate thoughtful review replies with business context, tone, sentiment awareness, and owner control for sensitive reviews.",
  },
  {
    icon: Sparkles,
    eyebrow: "Profile improvement",
    title: "Find the profile gaps customers notice",
    text: "Use AI-assisted profile checks to improve descriptions, categories, services, media health, and local relevance.",
  },
  {
    icon: CalendarClock,
    eyebrow: "Google posts",
    title: "Keep your business active on Google",
    text: "Plan updates, offers, events, monthly content, and occasion posts so your profile does not depend on memory.",
  },
  {
    icon: Search,
    eyebrow: "Local SEO",
    title: "Track the signals that shape visibility",
    text: "Review keywords, local rank checks, competitor context, and content ideas that support better Google profile quality.",
  },
  {
    icon: BarChart3,
    eyebrow: "Insights",
    title: "Know what needs attention today",
    text: "See pending reviews, automation health, profile activity, post status, and location performance as business actions.",
  },
  {
    icon: Building2,
    eyebrow: "Multi-location",
    title: "Manage branches from one command center",
    text: "Centralize work across locations so every branch gets consistent review replies, posts, and profile attention.",
  },
];

const journeySteps = [
  ["Connect", "Link your Google Business Profile and bring your locations into one workspace."],
  ["Understand", "See reviews, profile gaps, local visibility signals, and competitor context."],
  ["Automate", "Turn on review replies, post scheduling, and recurring profile activity."],
  ["Improve", "Use clear recommendations to keep your profile active, complete, and easier to choose."],
];

const industries = [
  "Restaurants",
  "Salons and spas",
  "Clinics and dentists",
  "Gyms",
  "Hotels",
  "Home services",
  "Retail stores",
  "Professional services",
];

const testimonials = [
  {
    name: "Rohan Mehta",
    business: "Restaurant owner",
    quote:
      "Luomo gives my team one place to see reviews, replies, and profile activity. It feels built for owners who are already busy.",
  },
  {
    name: "Pooja Deshmukh",
    business: "Salon founder",
    quote:
      "The best part is the control. Routine replies are faster, but I can still handle sensitive customers personally.",
  },
  {
    name: "Kabir Malhotra",
    business: "Dental clinic",
    quote:
      "Our Google profile finally feels actively managed. The dashboard makes the next action obvious.",
  },
];

const faqs = [
  {
    question: "What does Luomo help me manage?",
    answer:
      "Luomo helps local businesses manage Google reviews, review replies, profile improvements, Google posts, local SEO signals, competitor insights, billing, and support from one dashboard where those product modules are enabled.",
  },
  {
    question: "Can it reply to Google reviews automatically?",
    answer:
      "Yes. The verified product capabilities include review sync, AI-generated replies, reply scheduling, manual override, and posting to Google.",
  },
  {
    question: "Will replies sound robotic?",
    answer:
      "The reply system is designed around review sentiment, business context, tone settings, signature, and natural delay settings. Owners can also edit replies manually.",
  },
  {
    question: "Can it schedule Google posts?",
    answer:
      "Yes. The broader verified product supports Google post scheduling, AI captions, offer/event posts, occasion posts, and monthly autoposting for eligible plans.",
  },
  {
    question: "Does Luomo guarantee Google rankings?",
    answer:
      "No ethical software can guarantee Google rankings. Luomo focuses on signals you can control: consistent replies, profile completeness, fresh posts, media health, categories, services, keywords, and visibility tracking.",
  },
  {
    question: "Is this useful for multiple locations?",
    answer:
      "Yes. The product positioning and verified capability set support multi-location sync, location activation, review sync, posting, and per-location coverage.",
  },
];

export default function Luomo() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (plan = "") => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Luomo | Google Business Profile Growth Platform</title>
        <meta
          name="description"
          content="Luomo helps local businesses reply to Google reviews, keep profiles active, schedule Google posts, track local visibility signals, and understand competitors."
        />
      </Helmet>

      <div className="min-h-screen bg-[#f7f3ee] text-[#181411]">
        <Navbar openModal={() => openModal()} />
        <main>
          <Hero openModal={() => openModal()} />
          <PainSection openModal={() => openModal()} />
          <SolutionSection />
          <FeatureSection />
          <AutomationSection />
          <JourneySection />
          <IndustrySection openModal={() => openModal()} />
          <PreviewSection />
          <TestimonialsSection />
          <PricingPage openModal={openModal} />
          <FaqSection />
          <FinalCta openModal={() => openModal()} />
        </main>
        <Footer openModal={() => openModal()} />

        {showModal && (
          <LeadModal
            selectedPlan={selectedPlan}
            close={() => {
              setShowModal(false);
              setSelectedPlan("");
            }}
          />
        )}
      </div>
    </>
  );
}

function Navbar({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Outcomes", "#outcomes"],
    ["Product", "#product"],
    ["Industries", "#industries"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fffaf4]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3" aria-label="Luomo home">
          <img src="/mainlogo.png" alt="Luomo" className="h-9 w-auto" />
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#443b33] lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#b20000]">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#product"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold transition hover:border-[#b20000] hover:text-[#b20000]"
          >
            See platform
          </a>
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-[#b20000] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:bg-[#8f0000] focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Start free trial
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-black/10 bg-[#fffaf4] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-base font-semibold text-[#443b33]">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openModal();
              }}
              className="mt-2 rounded-full bg-[#b20000] px-5 py-3 font-bold text-white"
            >
              Start free trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ openModal }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-[#b20000]/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-900/15 bg-white px-4 py-2 text-sm font-bold text-[#7b1515] shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Built for local businesses that depend on Google
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-[#181411] sm:text-6xl lg:text-7xl">
            Make your Google Business Profile work harder every day.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#594f45] sm:text-xl">
            Luomo helps local businesses reply to reviews, keep Google posts fresh, improve profile quality, track local visibility, and understand nearby competitors from one simple command center.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b20000] px-6 py-3 font-bold text-white shadow-xl shadow-red-900/20 transition hover:bg-[#8f0000] focus:outline-none focus:ring-4 focus:ring-red-200"
            >
              Start improving my Google profile
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#product"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 font-bold text-[#181411] transition hover:border-[#b20000] hover:text-[#b20000]"
            >
              See how it works
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 text-sm">
            {["Owner stays in control", "No technical setup", "Multi-location ready"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-3 shadow-sm">
                <Check className="h-4 w-4 flex-none text-[#b20000]" />
                <span className="font-semibold text-[#443b33]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div
      className="relative rounded-[28px] border border-black/10 bg-[#191512] p-3 shadow-2xl shadow-black/25 transition duration-500"
      aria-label="Luomo dashboard preview"
    >
      <div className="rounded-[22px] bg-[#fffaf4] p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b20000]">Today in Luomo</p>
            <h2 className="mt-1 text-xl font-black text-[#181411]">Your Google profile pulse</h2>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Automation healthy</div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <PreviewMetric icon={MessageSquareReply} label="Reviews waiting" value="12" text="Customers need replies" tone="red" />
          <PreviewMetric icon={Star} label="New reviews" value="18" text="This month" tone="amber" />
          <PreviewMetric icon={TrendingUp} label="Visibility signal" value="+23%" text="Improving locally" tone="green" />
          <PreviewMetric icon={Clock3} label="Competitor gap" value="5d" text="Since rival posted" tone="slate" />
        </div>

        <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-black text-[#181411]">Next best actions</p>
              <p className="text-xs text-[#6d6258]">Ranked by business impact</p>
            </div>
            <MousePointer2 className="h-5 w-5 text-[#b20000]" />
          </div>
          <div className="space-y-3">
            {[
              ["Reply to 4 recent reviews", "Protect trust while customers are comparing you"],
              ["Add fresh service photos", "Media health is missing two key categories"],
              ["Schedule a weekend offer post", "Your profile has been quiet for 9 days"],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-3 rounded-xl bg-[#f7f3ee] p-3">
                <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-[#b20000]" />
                <div>
                  <p className="text-sm font-bold text-[#181411]">{title}</p>
                  <p className="text-xs leading-5 text-[#6d6258]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewMetric({ icon: Icon, label, value, text, tone }) {
  const tones = {
    red: "bg-red-50 text-[#b20000]",
    amber: "bg-amber-50 text-amber-700",
    green: "bg-emerald-50 text-emerald-700",
    slate: "bg-stone-100 text-stone-700",
  };

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className={`rounded-full p-2 ${tones[tone]}`}>
          {React.createElement(Icon, { className: "h-4 w-4" })}
        </span>
        <span className="text-xs font-semibold text-[#6d6258]">{label}</span>
      </div>
      <p className="text-3xl font-black text-[#181411]">{value}</p>
      <p className="mt-1 text-sm text-[#6d6258]">{text}</p>
    </div>
  );
}

function PainSection({ openModal }) {
  return (
    <section id="outcomes" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The everyday problem"
          title="Your next customer may decide before they ever call."
          text="They check reviews, compare competitors, look for photos, scan recent updates, and choose the business that feels active and trustworthy."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-[#181411] p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-200">Cost of inaction</p>
            <h3 className="mt-3 max-w-3xl text-2xl font-black sm:text-3xl">
              You may not be losing customers because your service is bad. You may be losing them because your Google profile does not show how good your business is.
            </h3>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#b20000] lg:mt-0"
          >
            Fix my profile gaps
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="product" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b20000]">Try Luomo</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            One command center for the Google presence customers actually see.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#594f45]">
            Luomo brings review replies, profile improvement, Google posts, local SEO signals, competitor insights, and location performance into a workflow built for busy business owners.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Manual process", "Log into Google manually, write replies from scratch, remember posts, guess profile gaps."],
            ["With Luomo", "See what needs attention, generate helpful replies, schedule posts, and improve profile quality from one place."],
          ].map(([title, text], index) => (
            <div key={title} className={`rounded-3xl border p-6 ${index ? "border-[#b20000]/25 bg-white shadow-xl shadow-red-900/10" : "border-black/10 bg-[#ebe3d8]"}`}>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-[#594f45]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Feature showcase"
          title="Business outcomes first. AI working quietly behind the scenes."
          text="Every capability is framed around the daily problem it solves for a local business owner."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b20000]">Google Business automation</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Stay active on Google without adding another daily task.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#594f45]">
              Reviews, posts, photos, profile details, and local keywords all need attention. Luomo helps turn that scattered work into a managed operating system.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5">
            {[
              ["Review arrives", "Luomo syncs it and prepares a reply."],
              ["Owner control", "Edit sensitive replies or let routine ones move forward."],
              ["Natural scheduling", "Replies and posts can publish with timing that feels human."],
              ["Performance loop", "Insights show what improved and what needs attention next."],
            ].map(([title, text], index) => (
              <div key={title} className="flex gap-4 border-b border-black/10 py-5 last:border-b-0">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#b20000] text-sm font-black text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-black text-[#181411]">{title}</h3>
                  <p className="mt-1 leading-7 text-[#594f45]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="bg-[#181411] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Customer journey"
          title="From disconnected Google tasks to one weekly growth rhythm."
          text="Luomo is designed so the next step is always visible."
          dark
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {journeySteps.map(([title, text], index) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-8 text-sm font-black text-red-200">0{index + 1}</div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrySection({ openModal }) {
  return (
    <section id="industries" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b20000]">Industry fit</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Built for businesses customers compare locally.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#594f45]">
              If customers check your reviews, photos, services, and recent activity before choosing you, Luomo is in the right conversation.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b20000] px-6 py-3 font-bold text-white"
            >
              Talk about my business
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#fffaf4] p-4">
                {React.createElement(Store, { className: "h-5 w-5 text-[#b20000]" })}
                <span className="font-bold text-[#181411]">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Live dashboard preview"
          title="A dashboard that explains the business, not just the numbers."
          text="Raw metrics are converted into plain-language actions a business owner can understand at a glance."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            [MapPin, "Location performance", "See which branch needs replies, fresh media, or profile attention."],
            [ImagePlus, "Media health", "Find missing photo categories and profile visuals that affect trust."],
            [BarChart3, "Visibility trend", "Track local keyword signals and understand how your profile is moving."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              {React.createElement(Icon, { className: "h-7 w-7 text-[#b20000]" })}
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-[#594f45]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Customer voice"
          title="Designed for owners who do not have time to babysit Google."
          text="Short, practical workflows replace scattered manual follow-up."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-3xl border border-black/10 bg-[#fffaf4] p-6">
              <div className="mb-5 flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="leading-8 text-[#443b33]">"{item.quote}"</blockquote>
              <figcaption className="mt-6">
                <p className="font-black text-[#181411]">{item.name}</p>
                <p className="text-sm text-[#6d6258]">{item.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers before you connect your profile."
          text="No ranking promises, no vague automation claims. Just the Google profile work Luomo is built to support."
        />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ openModal }) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#b20000] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-100">Ready when you are</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
          Your Google profile is already influencing customers. Give them a better reason to choose you.
        </h2>
        <button
          type="button"
          onClick={openModal}
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-black text-[#b20000]"
        >
          Connect my Google Business Profile
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function Footer({ openModal }) {
  return (
    <footer className="border-t border-black/10 bg-[#181411] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <img src="/mainlogo.png" alt="Luomo" className="h-9 w-auto rounded bg-white px-2 py-1" />
          <p className="mt-5 max-w-sm leading-7 text-white/70">
            Luomo helps local businesses keep their Google profile active, trusted, and easier to choose.
          </p>
          <button type="button" onClick={openModal} className="mt-6 rounded-full bg-white px-5 py-2.5 font-bold text-[#b20000]">
            Start free trial
          </button>
        </div>
        <FooterColumn title="Product" items={["Review replies", "Google posts", "Profile audit", "Local SEO", "Competitor insights"]} />
        <FooterColumn title="Industries" items={["Restaurants", "Salons", "Clinics", "Gyms", "Hotels"]} />
        <div>
          <h3 className="font-black">Contact</h3>
          <a className="mt-4 block text-white/70 hover:text-white" href="mailto:support@luomoai.com">
            support@luomoai.com
          </a>
          <p className="mt-8 text-sm text-white/50">LuomoAI © 2026</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-black">{title}</h3>
      <ul className="mt-4 space-y-3 text-white/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.18em] ${dark ? "text-red-200" : "text-[#b20000]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-black leading-tight sm:text-5xl ${dark ? "text-white" : "text-[#181411]"}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/70" : "text-[#594f45]"}`}>{text}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-[#fffaf4] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      {React.createElement(Icon, { className: "h-7 w-7 text-[#b20000]" })}
      <h3 className="mt-6 text-xl font-black text-[#181411]">{title}</h3>
      <p className="mt-3 leading-7 text-[#594f45]">{text}</p>
    </article>
  );
}

function FeatureCard({ icon: Icon, eyebrow, title, text }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-[#fffaf4] p-6">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b20000] text-white">
        {React.createElement(Icon, { className: "h-6 w-6" })}
      </div>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b20000]">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-black leading-tight text-[#181411]">{title}</h3>
      <p className="mt-4 leading-7 text-[#594f45]">{text}</p>
    </article>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => question.toLowerCase().replace(/[^a-z0-9]+/g, "-"), [question]);

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-black text-[#181411]"
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 flex-none text-[#b20000] transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={id} className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-7 text-[#594f45]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function LeadModal({ close, selectedPlan }) {
  const [mobile, setMobile] = useState("");
  const [form, setForm] = useState({ name: "", business: "", location: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    firstInputRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [close]);

  const handleSaveDetails = async () => {
    if (!mobile || mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      firstInputRef.current?.focus();
      return;
    }

    if (!form.name.trim() || !form.business.trim() || !form.location.trim()) {
      setError("Please fill in your name, business name, and location.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await saveDetails({
        phone: mobile,
        fullName: form.name,
        businessName: form.business,
        location: form.location,
        email: form.email || "",
      });
      setComplete(true);
    } catch (err) {
      setError(typeof err === "string" ? err : "Failed to save details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 px-4 py-4 sm:items-center" onMouseDown={close}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="w-full max-w-lg rounded-[28px] bg-[#fffaf4] p-5 shadow-2xl sm:p-7"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b20000]">{selectedPlan ? `${selectedPlan} plan` : "Free trial"}</p>
            <h2 id="lead-modal-title" className="mt-2 text-3xl font-black leading-tight text-[#181411]">
              {complete ? "Your Luomo setup link is ready." : "Start your Google profile growth plan."}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-black/10 bg-white"
            aria-label="Close setup form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700" aria-live="polite">
            {error}
          </div>
        )}

        {!complete ? (
          <>
            <p className="mb-5 leading-7 text-[#594f45]">
              Tell us where your business operates. We will help you take the next step toward review replies, profile activity, and local visibility.
            </p>
            <div className="space-y-3">
              <Input
                ref={firstInputRef}
                type="tel"
                label="Mobile number"
                value={mobile}
                onChange={(value) => {
                  setMobile(value.replace(/\D/g, "").slice(0, 10));
                  setError("");
                }}
                placeholder="10-digit mobile number"
                disabled={loading}
              />
              <Input label="Full name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} disabled={loading} />
              <Input label="Business name" value={form.business} onChange={(value) => setForm({ ...form, business: value })} disabled={loading} />
              <Input label="City or location" value={form.location} onChange={(value) => setForm({ ...form, location: value })} disabled={loading} />
              <Input type="email" label="Email optional" value={form.email} onChange={(value) => setForm({ ...form, email: value })} disabled={loading} />
            </div>
            <button
              type="button"
              onClick={handleSaveDetails}
              disabled={loading}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#b20000] px-6 py-3 font-black text-white transition hover:bg-[#8f0000] disabled:cursor-not-allowed disabled:bg-stone-400"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Creating your setup step...
                </>
              ) : (
                "Get my setup link"
              )}
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-[#6d6258]">
              No technical setup needed. We use this only to contact you about Luomo.
            </p>
          </>
        ) : (
          <div>
            <div className="mb-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
              <Check className="mb-4 h-8 w-8" />
              <p className="font-bold">
                Your request is saved. Open the setup link below to continue building your Google profile growth system.
              </p>
            </div>
            <a
              href="https://rw.luomo.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#b20000] px-6 py-3 font-black text-white"
            >
              Open Luomo setup
              <ArrowRight className="h-5 w-5" />
            </a>
            <button type="button" onClick={close} className="mt-3 min-h-12 w-full rounded-full border border-black/10 bg-white px-6 py-3 font-bold">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const Input = React.forwardRef(function Input({ label, value, onChange, type = "text", placeholder, disabled }, ref) {
  const id = useMemo(() => label.toLowerCase().replace(/[^a-z0-9]+/g, "-"), [label]);

  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-bold text-[#443b33]">{label}</span>
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder || label}
        disabled={disabled}
        className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-[#181411] outline-none transition focus:border-[#b20000] focus:ring-4 focus:ring-red-100 disabled:bg-stone-100"
      />
    </label>
  );
});
