import React, { useState } from "react";
import { Building2, Check, ChevronDown, Store, TrendingUp } from "lucide-react";

const pricingData = {
  monthly: [
    {
      name: "Basic",
      price: "Rs. 199",
      duration: "/month",
      icon: Store,
      bestFor: "One location starting with review consistency",
      outcome: "Respond faster and keep your profile from looking ignored.",
      features: [
        "1 Google Business Profile",
        "AI review reply support",
        "1 AI Google post generation per month",
        "Unlimited Google post scheduling",
        "Basic performance insights",
      ],
    },
    {
      name: "Pro",
      price: "Rs. 399",
      duration: "/month",
      icon: TrendingUp,
      bestFor: "Growing businesses that want profile activity and insights",
      outcome: "Stay active on Google and understand where competitors are stronger.",
      popular: true,
      features: [
        "Everything in Basic",
        "AI post creation and publishing",
        "Smarter review replies with intent understanding",
        "Competitor analytics",
        "Performance reports and priority support",
      ],
    },
    {
      name: "Business",
      price: "Rs. 599",
      duration: "/month",
      icon: Building2,
      bestFor: "Serious local growth and multi-location control",
      outcome: "Manage advanced automation, brand tone, and branch-level visibility.",
      features: [
        "Everything in Pro",
        "Advanced AI post generation and publishing",
        "Brand-tone review replies",
        "SEO keyword-optimized replies and posts",
        "Multi-location management and premium support",
      ],
    },
  ],
  quarterly: [
    {
      name: "Basic",
      price: "Rs. 549",
      duration: "/quarter",
      icon: Store,
      bestFor: "One location starting with review consistency",
      outcome: "Respond faster and keep your profile from looking ignored.",
      features: [
        "1 Google Business Profile",
        "AI review reply support",
        "1 AI Google post generation per month",
        "Unlimited Google post scheduling",
        "Basic performance insights",
      ],
    },
    {
      name: "Pro",
      price: "Rs. 1,099",
      duration: "/quarter",
      icon: TrendingUp,
      bestFor: "Growing businesses that want profile activity and insights",
      outcome: "Stay active on Google and understand where competitors are stronger.",
      popular: true,
      features: [
        "Everything in Basic",
        "AI post creation and publishing",
        "Smarter review replies with intent understanding",
        "Competitor analytics",
        "Performance reports and priority support",
      ],
    },
    {
      name: "Business",
      price: "Rs. 1,899",
      duration: "/quarter",
      icon: Building2,
      bestFor: "Serious local growth and multi-location control",
      outcome: "Manage advanced automation, brand tone, and branch-level visibility.",
      features: [
        "Everything in Pro",
        "Advanced AI post generation and publishing",
        "Brand-tone review replies",
        "SEO keyword-optimized replies and posts",
        "Multi-location management and premium support",
      ],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "Rs. 1,999",
      duration: "/year",
      icon: Store,
      bestFor: "One location starting with review consistency",
      outcome: "Respond faster and keep your profile from looking ignored.",
      features: [
        "1 Google Business Profile",
        "AI review reply support",
        "1 AI Google post generation per month",
        "Unlimited Google post scheduling",
        "Basic performance insights",
      ],
    },
    {
      name: "Pro",
      price: "Rs. 2,999",
      duration: "/year",
      icon: TrendingUp,
      bestFor: "Growing businesses that want profile activity and insights",
      outcome: "Stay active on Google and understand where competitors are stronger.",
      popular: true,
      features: [
        "Everything in Basic",
        "AI post creation and publishing",
        "Smarter review replies with intent understanding",
        "Competitor analytics",
        "Performance reports and priority support",
      ],
    },
    {
      name: "Business",
      price: "Rs. 3,999",
      duration: "/year",
      icon: Building2,
      bestFor: "Serious local growth and multi-location control",
      outcome: "Manage advanced automation, brand tone, and branch-level visibility.",
      features: [
        "Everything in Pro",
        "Advanced AI post generation and publishing",
        "Brand-tone review replies",
        "SEO keyword-optimized replies and posts",
        "Multi-location management and premium support",
      ],
    },
  ],
};

const comparisonRows = [
  ["Google Business Profiles", "1", "1", "Multi-location support"],
  ["AI review replies", "Included", "Advanced", "Advanced + brand tone"],
  ["Google post generation", "1 per month", "Unlimited", "Unlimited"],
  ["Google post scheduling", "Unlimited", "Unlimited", "Unlimited"],
  ["Competitor insights", "Not included", "Included", "Benchmarking included"],
  ["Growth reporting", "Basic", "Advanced", "Detailed"],
  ["Support", "Email", "Priority", "Premium"],
];

export default function PricingPage({ openModal = () => {} }) {
  const [billing, setBilling] = useState("monthly");
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const plans = pricingData[billing];

  return (
    <section id="pricing" className="bg-[#fffaf4] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b20000]">Pricing</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#181411] sm:text-5xl">
            Choose the level of Google profile support your business needs.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#594f45]">
            Start with review consistency, add active posting and competitor insight, or scale profile growth across locations.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-black/10 bg-white p-1 shadow-sm" role="group" aria-label="Billing period">
            {["monthly", "quarterly", "yearly"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setBilling(type)}
                aria-pressed={billing === type}
                className={`rounded-full px-4 py-2 text-sm font-black capitalize transition sm:px-6 ${
                  billing === type ? "bg-[#b20000] text-white" : "text-[#594f45] hover:text-[#b20000]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm font-bold text-[#b20000]">
            {billing === "quarterly" && "Quarterly billing keeps the rhythm consistent."}
            {billing === "yearly" && "Best value for businesses ready to stay active all year."}
            {billing === "monthly" && "Flexible monthly plans for getting started."}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} openModal={openModal} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-black/10 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setComparisonOpen((value) => !value)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            aria-expanded={comparisonOpen}
            aria-controls="pricing-comparison"
          >
            <div>
              <h3 className="text-xl font-black text-[#181411]">Compare key plan differences</h3>
              <p className="mt-1 text-sm text-[#6d6258]">A quick scan for owners choosing between plans.</p>
            </div>
            <ChevronDown className={`h-5 w-5 flex-none text-[#b20000] transition ${comparisonOpen ? "rotate-180" : ""}`} />
          </button>
          <div id="pricing-comparison" className={`grid transition-all duration-300 ${comparisonOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
              <div className="overflow-x-auto border-t border-black/10">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-[#181411] text-white">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-black">Capability</th>
                      <th scope="col" className="px-5 py-4 font-black">Basic</th>
                      <th scope="col" className="px-5 py-4 font-black">Pro</th>
                      <th scope="col" className="px-5 py-4 font-black">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-t border-black/10">
                        {row.map((cell, index) => (
                          <td key={cell} className={`px-5 py-4 ${index === 0 ? "font-bold text-[#181411]" : "text-[#594f45]"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-[#181411] p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-black">Need a plan for multiple locations?</h3>
            <p className="mt-2 max-w-2xl text-white/70">
              Tell us how many branches you manage and what Google profile work is most urgent.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openModal("Business")}
            className="mt-6 rounded-full bg-white px-6 py-3 font-black text-[#b20000] lg:mt-0"
          >
            Talk about Business
          </button>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, openModal }) {
  const Icon = plan.icon;

  return (
    <article
      className={`relative rounded-[28px] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        plan.popular ? "border-[#b20000] ring-4 ring-red-100" : "border-black/10"
      }`}
    >
      {plan.popular && (
        <div className="absolute right-5 top-5 rounded-full bg-[#b20000] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
          Recommended
        </div>
      )}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#b20000]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-black text-[#181411]">{plan.name}</h3>
      <p className="mt-2 min-h-12 text-sm font-bold text-[#6d6258]">{plan.bestFor}</p>
      <p className="mt-5 text-4xl font-black text-[#b20000]">
        {plan.price}
        <span className="ml-2 text-base font-bold text-[#6d6258]">{plan.duration}</span>
      </p>
      <p className="mt-5 leading-7 text-[#594f45]">{plan.outcome}</p>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm font-semibold text-[#443b33]">
            <Check className="mt-0.5 h-4 w-4 flex-none text-[#b20000]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openModal(plan.name)}
        className={`mt-8 min-h-12 w-full rounded-full px-5 py-3 font-black transition ${
          plan.popular ? "bg-[#b20000] text-white hover:bg-[#8f0000]" : "border border-black/10 bg-[#fffaf4] text-[#181411] hover:border-[#b20000] hover:text-[#b20000]"
        }`}
      >
        {plan.name === "Business" ? "Talk about Business" : `Start with ${plan.name}`}
      </button>
    </article>
  );
}
