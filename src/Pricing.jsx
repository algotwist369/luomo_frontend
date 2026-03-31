"use client";
import React, { useState } from "react";

const pricingData = {
    monthly: [
        {
            name: "Basic",
            price: "₹199",
            duration: "/month",
            description: "Best for small local businesses starting to grow their Google presence.",
            isPopular: false,
            features: [
                "1 Google Business Profile",
                "AI Auto Review Replies",
                "1 AI Google Post Generation Per Month",
                "Unlimited Google Post Scheduling",
                "Keyword-Optimized Content for Better GBP Reach",
                "Basic Performance Insights",
                "Email Support",
            ],
        },
        {
            name: "Pro",
            price: "₹399",
            duration: "/month",
            description: "Perfect for growing businesses that want more visibility and automation.",
            isPopular: true,
            features: [
                "Everything in Basic",
                "AI Auto Post Creation & Publishing",
                "Smart AI Review Replies with Intent Understanding",
                "Intent & Language-Based Review Response",
                "Competitor Analytics",
                "Keyword Targeting Based on Customer Search Intent",
                "Performance Reports",
                "Priority Support",
            ],
        },
        {
            name: "Business",
            price: "₹599",
            duration: "/month",
            description: "Built for serious local growth, multi-location businesses, and advanced automation.",
            isPopular: false,
            features: [
                "Everything in Pro",
                "Advanced AI Auto Post Generation & Publishing",
                "Auto Review Replies with Brand Tone & Personality",
                "SEO Keyword-Optimized Replies & Posts",
                "Competitor Benchmarking",
                "Multi-Location Management",
                "Detailed Growth Analytics",
                "24/7 Premium Support",
            ],
        },
    ],

    quarterly: [
        {
            name: "Basic",
            price: "₹549",
            duration: "/quarter",
            description: "Affordable quarterly plan for consistent local presence and better savings.",
            isPopular: false,
            features: [
                "1 Google Business Profile",
                "AI Auto Review Replies",
                "1 AI Google Post Generation Per Month",
                "Unlimited Google Post Scheduling",
                "Keyword-Optimized Content for Better GBP Reach",
                "Basic Performance Insights",
                "Email Support",
            ],
        },
        {
            name: "Pro",
            price: "₹1,099",
            duration: "/quarter",
            description: "Ideal for businesses that want stronger local SEO growth and automation.",
            isPopular: true,
            features: [
                "Everything in Basic",
                "AI Auto Post Creation & Publishing",
                "Smart AI Review Replies with Intent Understanding",
                "Intent & Language-Based Review Response",
                "Competitor Analytics",
                "Keyword Targeting Based on Customer Search Intent",
                "Performance Reports",
                "Priority Support",
            ],
        },
        {
            name: "Business",
            price: "₹1,899",
            duration: "/quarter",
            description: "Powerful plan for scaling local visibility across locations with advanced AI growth tools.",
            isPopular: false,
            features: [
                "Everything in Pro",
                "Advanced AI Auto Post Generation & Publishing",
                "Auto Review Replies with Brand Tone & Personality",
                "SEO Keyword-Optimized Replies & Posts",
                "Competitor Benchmarking",
                "Multi-Location Management",
                "Detailed Growth Analytics",
                "24/7 Premium Support",
            ],
        },
    ],

    yearly: [
        {
            name: "Basic",
            price: "₹1,999",
            duration: "/year",
            description: "Best value for solo business owners who want to stay active on Google consistently.",
            isPopular: false,
            features: [
                "1 Google Business Profile",
                "AI Auto Review Replies",
                "1 AI Google Post Generation Per Month",
                "Unlimited Google Post Scheduling",
                "Keyword-Optimized Content for Better GBP Reach",
                "Basic Performance Insights",
                "Email Support",
            ],
        },
        {
            name: "Pro",
            price: "₹2,999",
            duration: "/year",
            description: "Recommended for businesses focused on visibility, customer engagement, and local SEO growth.",
            isPopular: true,
            features: [
                "Everything in Basic",
                "AI Auto Post Creation & Publishing",
                "Smart AI Review Replies with Intent Understanding",
                "Intent & Language-Based Review Response",
                "Competitor Analytics",
                "Keyword Targeting Based on Customer Search Intent",
                "Performance Reports",
                "Priority Support",
            ],
        },
        {
            name: "Business",
            price: "₹3,999",
            duration: "/year",
            description: "Complete AI growth system for brands, agencies, and multi-location businesses.",
            isPopular: false,
            features: [
                "Everything in Pro",
                "Advanced AI Auto Post Generation & Publishing",
                "Auto Review Replies with Brand Tone & Personality",
                "SEO Keyword-Optimized Replies & Posts",
                "Competitor Benchmarking",
                "Multi-Location Management",
                "Detailed Growth Analytics",
                "24/7 Premium Support",
            ],
        },
    ],
};

const comparisonRows = [
    ["Google Business Profiles", "1", "1", "1"],
    ["AI Auto Review Replies", "✔", "✔", "✔"],
    ["AI Google Post Generation", "1 / Month", "Unlimited", "Unlimited"],
    ["Google Post Scheduling", "Unlimited", "Unlimited", "Unlimited"],
    ["Auto Google Post Publishing", "-", "✔", "✔"],
    ["Keyword-Optimized Content", "✔", "✔", "✔"],
    ["Customer Search Intent Keyword Targeting", "-", "✔", "✔"],
    ["Smart AI Review Replies", "Basic", "Advanced", "Advanced + Brand Tone"],
    ["Intent-Based Review Understanding", "-", "✔", "✔"],
    ["Language-Based Review Replies", "-", "✔", "✔"],
    ["SEO Keyword-Optimized Replies & Posts", "-", "-", "✔"],
    ["Competitor Analytics", "-", "✔", "✔"],
    ["Competitor Benchmarking", "-", "-", "✔"],
    ["Growth & Performance Insights", "Basic", "Advanced", "Detailed"],
    ["Multi-Location Management", "-", "-", "✔"],
    ["Support", "Email", "Priority", "24/7 Premium"],
];

export default function PricingPage() {
    const [billing, setBilling] = useState("monthly");
    const plans = pricingData[billing];

    return (
        <div className="bg-white text-zinc-900">
            {/* HERO */}
            <section className="px-6 md:px-20 py-20 bg-gray-50 border-b">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[#b20000] mb-3">
                        AI Pricing Plans
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Grow Your Google Business Profile with AI
                    </h1>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Automate your Google Business Profile with AI-powered post creation,
                        smart review replies, competitor analytics, and growth insights -
                        all in one platform.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-10 inline-flex bg-white rounded-full p-1 shadow border">
                        {["monthly", "quarterly", "yearly"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setBilling(type)}
                                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium capitalize transition ${billing === type
                                    ? "bg-[#b20000] text-white"
                                    : "text-gray-600 hover:text-[#b20000]"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    <p className="mt-4 text-sm text-[#b20000] font-medium">
                        {billing === "quarterly" && "Save more with quarterly billing"}
                        {billing === "yearly" && "Best value - save more with yearly billing"}
                    </p>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="px-6 md:px-20 py-20">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl border p-8 shadow-sm hover:shadow-xl transition duration-300 bg-white ${plan.isPopular
                                ? "border-[#b20000] ring-2 ring-[#b20000]/10 scale-[1.02]"
                                : "border-gray-200"
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 bg-[#b20000] text-white text-xs font-bold px-4 py-2 rounded-tr-2xl rounded-bl-2xl">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-600 mb-4">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-[#b20000]">
                                    {plan.price}
                                </span>
                                <span className="text-gray-500 ml-2">{plan.duration}</span>
                            </div>

                            <ul className="space-y-3 text-gray-700 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#b20000] text-lg">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full px-6 py-3 bg-[#b20000] hover:bg-red-700 text-white rounded-lg font-semibold transition">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="px-6 md:px-20 py-20 bg-gray-50 border-t">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Compare Features
                        </h2>
                        <p className="text-gray-600">
                            See which plan fits your business growth goals.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
                        <table className="w-full min-w-[850px] text-left">
                            <thead className="bg-[#b20000] text-white">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Features</th>
                                    <th className="px-6 py-4 font-semibold">Basic</th>
                                    <th className="px-6 py-4 font-semibold">Pro</th>
                                    <th className="px-6 py-4 font-semibold">Business</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {comparisonRows.map((row, i) => (
                                    <tr key={i} className="border-t">
                                        {row.map((cell, idx) => (
                                            <td key={idx} className="px-6 py-4">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-20 py-20">
                <div className="max-w-4xl mx-auto text-center bg-[#b20000] text-white rounded-3xl p-10 md:p-14 shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need a Custom Plan for Multiple Locations?
                    </h2>
                    <p className="text-white/90 text-lg mb-8">
                        Running multiple branches or managing several business profiles?
                        Let’s create a custom plan tailored to your business.
                    </p>
                    <button className="px-8 py-3 bg-white text-[#b20000] font-semibold rounded-lg hover:bg-gray-100 transition">
                        Contact Sales
                    </button>
                </div>
            </section>
        </div>
    );
}