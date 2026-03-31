import React, { useState } from "react";
import {
    Sparkles,
    Bot,
    Zap,
    Workflow,
    Image,
    Search,
    ArrowRight,
    Star,
    Loader2
} from "lucide-react";

import { ChevronDown } from "lucide-react"

import { motion } from "framer-motion";
import { saveDetails } from "./authApi";
import PricingPage from "./Pricing";

export default function Luomo() {

    /* NAV STATE FOR MODAL */
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [form, setForm] = useState({
        name: "",
        business: "",
        location: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    /* FEATURE LIST */
    const features = [
        {
            icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b20000]" />,
            title: "AI Auto Review Replies",
            desc: "Automatically reply to customer reviews with human-like responses based on sentiment, intent, tone, and language."
        },
        {
            icon: <Image className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b20000]" />,
            title: "AI Google Post Creation",
            desc: "Generate engaging Google Business posts with optimized captions, offers, updates, and visual-ready content in seconds."
        },
        {
            icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b20000]" />,
            title: "Smart Auto Publishing",
            desc: "Schedule and publish posts automatically at the right time to keep your profile active and consistent without manual effort."
        },
        {
            icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b20000]" />,
            title: "Competitor Intelligence",
            desc: "Track nearby competitors, analyze their activity, and discover opportunities to improve your Google visibility and local ranking."
        },
        {
            icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b20000]" />,
            title: "Multi-Location Management",
            desc: "Manage multiple business locations from one dashboard with centralized automation, posting, and review management."
        },
        {
            icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#b20000]" />,
            title: "SEO-Optimized Content",
            desc: "Boost your Google Business Profile with AI-generated posts and replies optimized using local SEO and customer search keywords."
        }
    ];

    /* STEPS */
    const steps = [
        { number: "01", title: "Login With Google", desc: "Connect your Google Business Profile in one click." },
        { number: "02", title: "Enable Automations", desc: "Turn on Auto-Reply, set delays, schedule posts." },
        { number: "03", title: "AI Runs Everything", desc: "Replies, posts, insights - all done automatically." }
    ];

    const stats = [
        {
            value: "700+",
            label: "Businesses Listed",
            desc: "Trusted by local businesses using AI to manage and grow their Google Business Profile."
        },
        {
            value: "10K+",
            label: "Reviews Replied",
            desc: "AI-powered review responses generated with intent, tone, and language understanding."
        },
        {
            value: "5K+",
            label: "Google Posts Created",
            desc: "Businesses stay active on Google with consistent AI-generated posts and updates."
        },
        {
            value: "24/7",
            label: "Automation Running",
            desc: "Your Google Business Profile stays active around the clock without manual effort."
        }
    ];

    const faqs = [
        {
            question: "How does the AI help grow my Google Business Profile?",
            answer:
                "Our AI helps keep your Google Business Profile active and optimized by automatically generating posts, replying to reviews intelligently, and using relevant local SEO keywords to improve visibility and engagement."
        },
        {
            question: "Can the AI automatically reply to customer reviews?",
            answer:
                "Yes. The AI can generate smart, human-like replies based on the review’s sentiment, tone, intent, and language. This helps you respond faster while maintaining a professional and natural brand voice."
        },
        {
            question: "Will the replies sound robotic or generic?",
            answer:
                "No. The system is designed to create natural, contextual, and human-like replies instead of repetitive or robotic responses. Higher plans also support more personalized and brand-tone-based replies."
        },
        {
            question: "Can it create and publish Google Business posts automatically?",
            answer:
                "Yes. Depending on your plan, the platform can generate Google Business Profile posts, optimize them with keywords, and schedule or publish them automatically to keep your profile active."
        },
        {
            question: "Does it support multiple business locations?",
            answer:
                "Yes. Our Business plan supports multi-location management, allowing you to manage posting, reviews, and growth activity for multiple Google Business Profiles from one dashboard."
        },
        {
            question: "How does competitor analytics work?",
            answer:
                "The platform analyzes nearby competitors and their Google Business activity to help you identify opportunities, understand local competition, and improve your own profile strategy."
        },
        {
            question: "Can the AI reply in different languages?",
            answer:
                "Yes. The AI can understand and generate replies based on the language and intent of the customer review, helping you communicate more naturally with a wider audience."
        },
        {
            question: "Do I need technical knowledge to use this platform?",
            answer:
                "No. The platform is built for business owners, marketers, and teams who want to grow their Google presence without needing technical or SEO expertise."
        },
        {
            question: "Is my Google Business Profile safe to connect?",
            answer:
                "Yes. We focus on secure integrations and smart automation designed to help you manage your Google Business Profile more efficiently while maintaining control over your business presence."
        },
        {
            question: "Can I upgrade my plan later?",
            answer:
                "Absolutely. You can start with the plan that fits your business today and upgrade anytime as your needs grow."
        }
    ];


    const reviews = [
        {
            id: 1,
            name: "Rohan Mehta",
            review: "This AI auto-reply tool has completely transformed how I manage my Google reviews. Every reply feels human and warm. Total time-saver!",
            rating: 5,
        },
        {
            id: 2,
            name: "Neha Jain",
            review: "My café's engagement increased within a week. Customers love the thoughtful replies. Highly recommended!",
            rating: 5,
        },
        {
            id: 3,
            name: "Siddharth Khurana",
            review: "Competitor insights feature is brilliant. Now I know exactly what nearby shops are doing better.",
            rating: 4,
        },
        {
            id: 4,
            name: "Pooja Deshmukh",
            review: "Running a salon means zero free time, but this tool replies instantly to every customer. Love it!",
            rating: 5,
        },
        {
            id: 5,
            name: "Harish Kumar",
            review: "Within 3 weeks my Google rating increased because customers appreciated personalized replies. Amazing!",
            rating: 5,
        },
        {
            id: 6,
            name: "Karan Patel",
            review: "Best AI-powered review tool. Replies are super natural and save me hours every day.",
            rating: 5,
        },
        {
            id: 7,
            name: "Simran Arora",
            review: "The posting feature is impressive! My bakery now posts daily updates automatically.",
            rating: 5,
        },
        {
            id: 8,
            name: "Amit Yadav",
            review: "I used to struggle replying to negative reviews, but now the AI handles them very professionally.",
            rating: 5,
        },
        {
            id: 9,
            name: "Farhan Sheikh",
            review: "The dashboard is super clean and easy to use. Even someone non-technical like me can manage everything.",
            rating: 4,
        },
        {
            id: 10,
            name: "Vaishnavi Pillai",
            review: "My spa business saw a boost in conversions because every review now has a lovely reply. Customers feel valued.",
            rating: 5,
        },
        {
            id: 11,
            name: "Dhruv Kapoor",
            review: "Scheduled posting + auto replies = perfect combo. My gym's online presence is finally consistent.",
            rating: 5,
        },
        {
            id: 12,
            name: "Monika Sinha",
            review: "The AI actually understands tone and context. Replies don't feel robotic at all.",
            rating: 5,
        },
        {
            id: 13,
            name: "Ankit Verma",
            review: "100% accurate and fast. Saves me at least 1–2 hours daily. Perfect tool for busy business owners.",
            rating: 5,
        },
        {
            id: 14,
            name: "Vivek Rana",
            review: "My real estate business now looks more professional online because every review gets a polite and smart response.",
            rating: 5,
        },
        {
            id: 15,
            name: "Ria Chatterjee",
            review: "Posting photos and updates automatically is such a relief. No need to hire a social media manager!",
            rating: 5,
        },
        {
            id: 16,
            name: "Nikhil Bansal",
            review: "The tool even handles long reviews nicely. Replies are detailed, thoughtful and customer-friendly.",
            rating: 5,
        },
        {
            id: 17,
            name: "Ayesha Khan",
            review: "Loved the competitor analysis! Helped me understand why nearby salons were ranking higher.",
            rating: 4,
        },
        {
            id: 18,
            name: "Kabir Malhotra",
            review: "Very impressed with the AI. My dental clinic's online presence improved within days.",
            rating: 5,
        },
        {
            id: 19,
            name: "Shruti Nair",
            review: "Quick replies, great UI, perfect automation. Couldn't ask for more!",
            rating: 5,
        },
        {
            id: 20,
            name: "Manoj Gupta",
            review: "I run a small electronics shop and this tool helped maintain good customer relationships through proper replies.",
            rating: 5,
        },
        {
            id: 21,
            name: "Tanya Khosla",
            review: "Earlier I used to forget replying to reviews. Now everything works automatically. Very happy!",
            rating: 5,
        },
        {
            id: 22,
            name: "Jay Thakur",
            review: "Great support team and excellent AI performance. Perfect for small businesses like mine.",
            rating: 5,
        },
        {
            id: 23,
            name: "Snehal Gaikwad",
            review: "The tool understands multilingual reviews too! This is a huge advantage for businesses in India.",
            rating: 5,
        },
        {
            id: 24,
            name: "Sagar Shah",
            review: "Helped me grow my restaurant's visibility on Google. Customers appreciate the quick replies.",
            rating: 5,
        },
        {
            id: 25,
            name: "Dhara Patel",
            review: "Loved how simple the setup was. Took less than 5 minutes to connect my GBP.",
            rating: 5,
        },
        {
            id: 26,
            name: "Aditya Narang",
            review: "The AI-generated replies are better than what I used to manually write. Very professional.",
            rating: 5,
        },
        {
            id: 27,
            name: "Komal Rajput",
            review: "Posting + auto replies + competitor insights…everything in one place. Total value for money.",
            rating: 5,
        },
        {
            id: 28,
            name: "Bharat Goswami",
            review: "Amazing experience! My repair shop now gets more positive reviews because customers feel acknowledged.",
            rating: 5,
        },
        {
            id: 29,
            name: "Yash Vora",
            review: "Analytics are super helpful. I can finally track my review performance clearly.",
            rating: 4,
        },
        {
            id: 30,
            name: "Harleen Kaur",
            review: "Every business owner should try this. It's like having a personal assistant replying to all reviews.",
            rating: 5,
        },
        {
            id: 31,
            name: "Rajesh Iyer",
            review: "My boutique clothing store has seen a huge improvement in customer engagement. The replies are always spot-on!",
            rating: 5,
        },
        {
            id: 32,
            name: "Priya Sharma",
            review: "As a physiotherapy clinic owner, I hardly have time to respond. This tool does it perfectly for me.",
            rating: 5,
        },
        {
            id: 33,
            name: "Arjun Reddy",
            review: "The automated posting feature keeps my automobile workshop visible online consistently. Great tool!",
            rating: 5,
        },
        {
            id: 34,
            name: "Divya Menon",
            review: "My jewellery store's Google reviews now get instant professional replies. Customers notice and appreciate it.",
            rating: 5,
        },
        {
            id: 35,
            name: "Kunal Joshi",
            review: "Setting up was effortless. Within minutes, my hardware store was connected and replies started flowing.",
            rating: 5,
        },
        {
            id: 36,
            name: "Lakshmi Sundaram",
            review: "The AI understands cultural nuances perfectly. Replies feel authentic and respectful every time.",
            rating: 5,
        },
        {
            id: 37,
            name: "Manish Agarwal",
            review: "My optical store's rating jumped from 4.2 to 4.7 in just one month. Customers love the quick responses!",
            rating: 5,
        },
        {
            id: 38,
            name: "Ritu Bhatia",
            review: "Managing multiple locations was a nightmare before. Now all my pharmacies get instant, personalized replies.",
            rating: 5,
        },
        {
            id: 39,
            name: "Sandeep Ghosh",
            review: "The competitor tracking helped me adjust my pet store's strategy. Now I know what works in my area.",
            rating: 4,
        },
        {
            id: 40,
            name: "Tanvi Kulkarni",
            review: "My dance academy's online reputation improved dramatically. Parents appreciate the thoughtful communication.",
            rating: 5,
        },
        {
            id: 41,
            name: "Rahul Saxena",
            review: "Perfect for my automobile service center. Every customer review gets acknowledged professionally within minutes.",
            rating: 5,
        },
        {
            id: 42,
            name: "Anjali Mishra",
            review: "The tool even suggests improvements based on review patterns. Helped me fix issues in my boutique hotel.",
            rating: 5,
        },
        {
            id: 43,
            name: "Vikram Singh",
            review: "My printing shop now looks way more professional online. AI replies are better than my own!",
            rating: 5,
        },
        {
            id: 44,
            name: "Meera Desai",
            review: "Running a tuition center leaves no time for social media. This tool handles everything automatically.",
            rating: 5,
        },
        {
            id: 45,
            name: "Gaurav Chopra",
            review: "The insights dashboard gives me clear data on what customers love about my fitness studio.",
            rating: 4,
        },
        {
            id: 46,
            name: "Nisha Pandey",
            review: "My catering business gets reviews at odd hours. This AI replies instantly, even at midnight!",
            rating: 5,
        },
        {
            id: 47,
            name: "Deepak Rao",
            review: "Handles Hindi and English reviews equally well. Perfect for my construction supply business.",
            rating: 5,
        },
        {
            id: 48,
            name: "Swati Bhardwaj",
            review: "My yoga studio's engagement doubled. Students feel heard and valued with every personalized reply.",
            rating: 5,
        },
        {
            id: 49,
            name: "Akash Chauhan",
            review: "The scheduling feature is a game-changer. My mobile repair shop posts updates without me lifting a finger.",
            rating: 5,
        },
        {
            id: 50,
            name: "Kavita Pillai",
            review: "Professional replies to even difficult customers. My beauty parlor's reputation has never been better.",
            rating: 5,
        },
        {
            id: 51,
            name: "Suresh Nambiar",
            review: "My travel agency now responds to reviews 24/7. Customers appreciate the constant availability.",
            rating: 5,
        },
        {
            id: 52,
            name: "Ishita Dutta",
            review: "The AI captures my brand voice perfectly. Replies sound like they're coming directly from me!",
            rating: 5,
        },
        {
            id: 53,
            name: "Prakash Hegde",
            review: "My supermarket's Google profile looks actively managed now. Sales have increased thanks to better online presence.",
            rating: 5,
        },
        {
            id: 54,
            name: "Pallavi Jain",
            review: "Setting up took literally 3 minutes. My interior design firm immediately started looking more professional.",
            rating: 5,
        },
        {
            id: 55,
            name: "Arun Kumar",
            review: "The AI handles technical reviews about my computer repair shop with impressive accuracy.",
            rating: 5,
        },
        {
            id: 56,
            name: "Sonali Patil",
            review: "My event management company gets complex reviews. AI always finds the right tone and response.",
            rating: 5,
        },
        {
            id: 57,
            name: "Vishal Sood",
            review: "Competitor analysis opened my eyes. Made strategic changes to my stationery shop based on insights.",
            rating: 4,
        },
        {
            id: 58,
            name: "Radhika Menon",
            review: "My wedding planning business now maintains consistent communication. Every bride feels special!",
            rating: 5,
        },
        {
            id: 59,
            name: "Sameer Malik",
            review: "The tool understands regional languages too. Huge benefit for my grocery store in a small town.",
            rating: 5,
        },
        {
            id: 60,
            name: "Ananya Bose",
            review: "My art gallery's reviews get thoughtful, cultured responses. Visitors appreciate the personal touch.",
            rating: 5,
        },
        {
            id: 61,
            name: "Rohit Bajaj",
            review: "Best investment for my coaching institute. Parents get instant responses to their review questions.",
            rating: 5,
        },
        {
            id: 62,
            name: "Preeti Kapoor",
            review: "My home bakery exploded after I started using this. Every review gets a warm, friendly reply instantly.",
            rating: 5,
        },
        {
            id: 63,
            name: "Naveen Rao",
            review: "The analytics helped me identify service gaps in my laundry business. Made immediate improvements!",
            rating: 4,
        },
        {
            id: 64,
            name: "Shweta Ahluwalia",
            review: "My photography studio's online reputation transformed. Clients notice the professional communication style.",
            rating: 5,
        },
        {
            id: 65,
            name: "Pankaj Tiwari",
            review: "Handles bulk reviews effortlessly. My chain of medical stores all get personalized responses automatically.",
            rating: 5,
        },
        {
            id: 66,
            name: "Gayatri Shastri",
            review: "My astrology consultation business looks more credible with prompt, respectful replies to every review.",
            rating: 5,
        },
        {
            id: 67,
            name: "Chetan Bhatt",
            review: "The posting scheduler keeps my furniture showroom active online even during busy exhibition seasons.",
            rating: 5,
        },
        {
            id: 68,
            name: "Madhavi Iyer",
            review: "My co-working space attracts more professionals now. AI replies make us look highly organized and responsive.",
            rating: 5,
        },
        {
            id: 69,
            name: "Tushar Mehta",
            review: "Simply outstanding! My footwear store's customer satisfaction scores went up after implementing this tool.",
            rating: 5,
        },
        {
            id: 70,
            name: "Jaya Krishnan",
            review: "Every feature works flawlessly. My Ayurvedic clinic's Google presence is now professional and engaging.",
            rating: 5,
        },
        {
            id: 71,
            name: "Rakesh Solanki",
            review: "My pathology lab receives many patient reviews daily. This tool helps us respond quickly and professionally without extra staff.",
            rating: 5,
        },
        {
            id: 72,
            name: "Nupur Bedi",
            review: "The AI-generated posts saved my boutique from going inactive on Google. Super useful and easy to manage.",
            rating: 5,
        },
        {
            id: 73,
            name: "Faizan Ali",
            review: "My car detailing studio now looks much more active online. Reviews and posts are finally handled consistently.",
            rating: 5,
        },
        {
            id: 74,
            name: "Pooja Nanda",
            review: "I run a skin clinic and this tool saves me hours every week. Replies are respectful, warm, and never robotic.",
            rating: 5,
        },
        {
            id: 75,
            name: "Himanshu Sethi",
            review: "Very helpful for my local electronics showroom. Customers notice that we reply fast and that builds trust.",
            rating: 5,
        },
        {
            id: 76,
            name: "Ritu Malhotra",
            review: "The review reply quality is honestly better than what my team used to write manually.",
            rating: 5,
        },
        {
            id: 77,
            name: "Abhishek Nair",
            review: "My dental clinic gets multilingual reviews, and this tool handles them surprisingly well.",
            rating: 5,
        },
        {
            id: 78,
            name: "Nidhi Bansal",
            review: "The competitor insights gave me a better idea of how nearby salons were staying more active than us.",
            rating: 4,
        },
        {
            id: 79,
            name: "Rohit Malpani",
            review: "Simple setup, clean dashboard, and useful automation. Great for busy business owners.",
            rating: 5,
        },
        {
            id: 80,
            name: "Shreya Kapoor",
            review: "Our café started looking much more responsive online after we connected this tool.",
            rating: 5,
        },
        {
            id: 81,
            name: "Devansh Arora",
            review: "The AI understands whether a customer is happy, upset, or just giving feedback. Very smart system.",
            rating: 5,
        },
        {
            id: 82,
            name: "Mitali Shah",
            review: "I use it for my beauty studio and the auto replies sound natural enough that customers think I wrote them.",
            rating: 5,
        },
        {
            id: 83,
            name: "Sahil Bhat",
            review: "The scheduling feature alone is worth it. My profile stays active even when I forget to post.",
            rating: 5,
        },
        {
            id: 84,
            name: "Anusha Iyer",
            review: "As a preschool owner, I don’t have time to manage Google updates regularly. This tool solved that problem.",
            rating: 5,
        },
        {
            id: 85,
            name: "Nitin Chawla",
            review: "It helped my hardware business maintain a much more professional image online.",
            rating: 5,
        },
        {
            id: 86,
            name: "Kritika Sood",
            review: "The replies are polite, personalized, and surprisingly relevant. Very useful for service businesses.",
            rating: 5,
        },
        {
            id: 87,
            name: "Aman Khurana",
            review: "My gym’s Google profile finally looks active and managed properly. Big improvement in consistency.",
            rating: 5,
        },
        {
            id: 88,
            name: "Saloni Verma",
            review: "I liked that it doesn’t just automate blindly — the responses still feel thoughtful.",
            rating: 5,
        },
        {
            id: 89,
            name: "Naveena Pillai",
            review: "The AI posting feature is excellent for my bakery. Offers and updates now go live without effort.",
            rating: 5,
        },
        {
            id: 90,
            name: "Tarun Sikka",
            review: "This has been very helpful for my furniture store. Great value compared to hiring someone just for profile management.",
            rating: 5,
        },
        {
            id: 91,
            name: "Ira Banerjee",
            review: "The language understanding is genuinely impressive. It handles customer tone much better than expected.",
            rating: 5,
        },
        {
            id: 92,
            name: "Mukul Tandon",
            review: "Our repair center gets many repetitive reviews, and this tool still manages to keep replies fresh and relevant.",
            rating: 5,
        },
        {
            id: 93,
            name: "Pallak Arora",
            review: "My makeup studio’s Google page feels much more alive now. Great for keeping customer engagement strong.",
            rating: 5,
        },
        {
            id: 94,
            name: "Harshit Dhingra",
            review: "Competitor benchmarking helped me understand why other local shops were ranking above mine.",
            rating: 4,
        },
        {
            id: 95,
            name: "Rachna Joshi",
            review: "Very practical product. It removes repetitive work and keeps my business looking responsive online.",
            rating: 5,
        },
        {
            id: 96,
            name: "Sourabh Goyal",
            review: "The support team was helpful and setup was smooth. Connected my profile in minutes.",
            rating: 5,
        },
        {
            id: 97,
            name: "Megha Venkatesh",
            review: "I use this for my wellness clinic and the review replies have definitely improved our online impression.",
            rating: 5,
        },
        {
            id: 98,
            name: "Varun Kaul",
            review: "Good automation, clean interface, and useful posting tools. Solid product overall.",
            rating: 5,
        },
        {
            id: 99,
            name: "Ishaani Roy",
            review: "The AI sounds professional without feeling too formal. Perfect for my boutique hotel.",
            rating: 5,
        },
        {
            id: 100,
            name: "Prateek Sehgal",
            review: "If you want to stay active on Google without manually doing everything, this tool is genuinely worth trying.",
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-inter overflow-x-hidden">

            {/* NAVBAR */}
            <Navbar openModal={() => setShowModal(true)} />

            <div className="pt-16"> {/* Push content below navbar */}


                {/* HERO SECTION */}
                <section className="relative px-6 sm:px-10 md:px-20 md:py-16 py-8 md:min-h-screen flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-indigo-100 opacity-60"></div>

                    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* LEFT */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-medium mb-4">
                                <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-[#b20000]" />
                                AI-Powered Business Automation
                            </div>

                            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
                                Automate Your Google Business Profile with{" "}
                                {/* <span className="text-[#b20000]">Next-Gen AI</span> */}
                                <span
                                    className="text-[#b20000] font-semibold"
                                    style={{
                                        textShadow: "0 0 6px rgba(178, 0, 0, 0.6), 0 0 12px rgba(178, 0, 0, 0.4)",
                                    }}
                                >
                                    LUOM
                                    <span
                                        className="text-[#9f9f9f]"
                                        style={{
                                            textShadow: "0 0 6px rgba(159, 159, 159, 0.6)",
                                        }}
                                    >
                                        O AI
                                    </span>
                                </span>

                            </h1>

                            <p className="text-xs sm:text-base md:text-xl opacity-80 mb-6 md:mb-10 max-w-xl">
                                Smart review replies, scheduled posts, competitor analysis - all done automatically.
                            </p>

                            <button
                                onClick={() => setShowModal(true)}
                                className="px-5 py-2 sm:px-7 sm:py-3 md:px-10 md:py-4 bg-[#b20000] hover:bg-red-700 text-white text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2 transition "
                            >
                                Start Free Trial
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        {/* IMAGE */}
                        <div className="relative rounded-sm overflow-hidden">
                            <img
                                src="/gbp2.png"
                                alt="AI Dashboard"
                                className="w-[350px] h-[230px] sm:w-[350px] sm:h-[260px] md:w-[520px] md:h-[400px] object-fill"
                            />

                            <div className="bg-[#b20000] inline text-white  font-semibold py-1 px-2 absolute right-0 bottom-0 rounded-tr-lg rounded-bl-lg">Loved By 200+ Businesses</div>

                        </div>
                    </div>
                </section>

                {/* TRUST / STATS SECTION */}
                <section className="px-6 md:px-20 py-14 bg-white border-t border-b">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-sm font-semibold tracking-widest uppercase text-[#b20000] mb-3">
                                Trusted by Growing Businesses
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Helping Businesses Stay Active and Visible on Google
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                                From review replies to automated posting, businesses are already using our AI tools
                                to save time, improve engagement, and grow their Google Business Profile.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 border rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#b20000] mb-2">
                                        {item.value}
                                    </h3>
                                    <p className="text-gray-800 font-semibold mb-2">{item.label}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section id="features" className="px-6 md:px-20 md:py-24 py-12 bg-gray-50 border-t">
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <p className="text-sm font-semibold tracking-widest uppercase text-[#b20000] mb-3">
                            Powerful AI Features
                        </p>
                        <h2 className="text-[29px] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            AI Tools Built to Grow Your Google Business Profile
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            Automate posting, reply to reviews intelligently, outrank competitors,
                            and keep your Google Business Profile active - all from one smart dashboard.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {features.map((item, i) => (
                            <FeatureCard key={i} icon={item.icon} title={item.title} desc={item.desc} />
                        ))}
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how" className="px-6 md:px-20 py-24">
                    <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <Step key={i} number={step.number} title={step.title} desc={step.desc} />
                        ))}
                    </div>
                </section>

                {/* ⭐⭐⭐ PRICING SECTION ADDED HERE ⭐⭐⭐ */}
                <PricingPage />
                {/* ⭐⭐⭐ END PRICING SECTION ⭐⭐⭐ */}

                <section className="w-full py-20 bg-white overflow-hidden">
                    <h2 className="text-4xl font-bold text-center mb-12">Loved by Our Customers</h2>

                    {/* Two-side moving reviews */}
                    <div className="grid grid-cols-1 gap-6 w-full overflow-hidden px-6 max-w-7xl mx-auto">

                        {/* Left-to-Right (starts off-screen left and moves to center) */}
                        <div className="relative w-full overflow-hidden p-1">
                            <motion.div
                                className="flex gap-6 whitespace-nowrap"
                                animate={{ x: [-1800, 0] }}
                                transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                            >
                                {[...reviews, ...reviews].map((item, index) => (
                                    <div
                                        key={`${item.id}-${index}-l`}
                                        className="min-w-[320px] bg-gray-50 p-6 flex flex-col gap-3 border border-gray-00"
                                    >
                                        <div className="flex gap-1 text-yellow-400">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-sm italic text-wrap">“{item.review}”</p>
                                        <h4 className="text-gray-900 font-semibold">- {item.name}</h4>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right-to-Left (starts centered and moves left) */}
                        <div className="relative w-full overflow-hidden py-1">
                            <motion.div
                                className="flex gap-6 whitespace-nowrap"
                                animate={{ x: [0, -1800] }}
                                transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                            >
                                {[...reviews, ...reviews].map((item, index) => (
                                    <div
                                        key={`${item.id}-${index}-r`}
                                        className="min-w-[320px] bg-gray-50 p-6 flex flex-col gap-3 border border-gray-00"
                                    >
                                        <div className="flex gap-1 text-yellow-400">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-sm italic text-wrap">“{item.review}”</p>
                                        <h4 className="text-gray-900 font-semibold">- {item.name}</h4>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* FAQ SECTION */}
                <section id="faq" className="px-6 md:px-20 py-20 bg-gray-50 border-t">
                    <div className="max-w-4xl mx-auto text-center mb-14">
                        <p className="text-sm font-semibold tracking-widest uppercase text-[#b20000] mb-3">
                            Frequently Asked Questions
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Know
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            Learn how our AI helps automate and grow your Google Business Profile
                            with smarter posting, review replies, and local visibility tools.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <FaqItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="relative px-6 md:px-20 py-8 md:py-24 text-center bg-[#b20000] text-white rounded-t-3xl">

                    <h2 className="text-[24px] md:text-4xl font-bold mb-4">
                        Ready to Automate Your Entire Google Presence?
                    </h2>
                    <p className="text-sm md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Start your free trial and experience AI that handles everything 24/7.
                    </p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-10 py-4 bg-white text-red-700 font-semibold text-lg hover:bg-gray-100 transition">
                        Start Free Trial
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 bg-red-800 flex items-center justify-center gap-4">
                        <a href="#mail">support@luomoai.com</a>
                        <p>LuomoAI©2025</p>
                    </div>
                </section>

                {/* MODAL */}
                {showModal && (
                    <Modal
                        step={step}
                        setStep={setStep}
                        mobile={mobile}
                        setMobile={setMobile}
                        form={form}
                        setForm={setForm}
                        loading={loading}
                        setLoading={setLoading}
                        error={error}
                        setError={setError}
                        close={() => {
                            setShowModal(false);
                            setStep(1);
                            setMobile("");
                            setForm({ name: "", business: "", location: "", email: "" });
                            setError("");
                        }}
                    />
                )}

            </div>
        </div>
    );
}

/* =============== NAVBAR =============== */
function Navbar({ openModal }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 h-16 flex items-center justify-between">

                <div className="flex items-center">
                    <img
                        src="/image.png"
                        alt="Luomo AI Logo"
                        className="h-8 md:h-18 w-auto"
                    />
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
                    <a href="#features" className="hover:text-[#b20000] transition">Features</a>
                    <a href="#how" className="hover:text-[#b20000] transition">How It Works</a>
                    <a href="#pricing" className="hover:text-[#b20000] transition">Pricing</a>

                    <button
                        onClick={openModal}
                        className="px-5 py-2 bg-[#b20000] text-white rounded-md hover:bg-red-700 transition">
                        Start Free Trial
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t ">
                    <div className="flex flex-col p-6 gap-4 text-gray-700">

                        <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-[#b20000]">Features</a>
                        <a href="#how" onClick={() => setMenuOpen(false)} className="hover:text-[#b20000]">How It Works</a>
                        <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-[#b20000]">Pricing</a>

                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                openModal();
                            }}
                            className="px-5 py-2 bg-[#b20000] text-white rounded-md hover:bg-red-700 transition">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}


/* =============== MODAL =============== */
function Modal({ step, setStep, mobile, setMobile, form, setForm, loading, setLoading, error, setError, close }) {

    const handleSaveDetails = async () => {
        if (!mobile || mobile.length !== 10) {
            setError("Please enter a valid 10-digit mobile number");
            return;
        }

        if (!form.name || !form.business || !form.location) {
            setError("Please fill in all required fields");
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
                email: form.email || ""
            });
            setStep(2); // Success step
        } catch (err) {
            setError(typeof err === 'string' ? err : "Failed to save details. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
            <div className="bg-white p-8 shadow-xl w-full max-w-md text-center rounded-lg relative">
                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    ×
                </button>

                {/* Error message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                        {error}
                    </div>
                )}

                {/* STEP 1: Registration Form */}
                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4 text-[#b20000]">Start Your Free Trial</h2>
                        <p className="text-sm text-gray-600 mb-6">Enter your details to get started</p>

                        <div className="space-y-3 mb-6">
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={mobile}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        setMobile(value);
                                        setError("");
                                    }}
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#b20000]"
                                    placeholder="Mobile Number *"
                                    maxLength={10}
                                    disabled={loading}
                                />
                                <span className="absolute right-3 top-3 text-xs text-gray-400">10 digits</span>
                            </div>

                            <input
                                type="text"
                                placeholder="Full Name *"
                                value={form.name}
                                onChange={(e) => {
                                    setForm({ ...form, name: e.target.value });
                                    setError("");
                                }}
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#b20000]"
                                disabled={loading}
                            />

                            <input
                                type="text"
                                placeholder="Business Name *"
                                value={form.business}
                                onChange={(e) => {
                                    setForm({ ...form, business: e.target.value });
                                    setError("");
                                }}
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#b20000]"
                                disabled={loading}
                            />

                            <input
                                type="text"
                                placeholder="Location *"
                                value={form.location}
                                onChange={(e) => {
                                    setForm({ ...form, location: e.target.value });
                                    setError("");
                                }}
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#b20000]"
                                disabled={loading}
                            />

                            <input
                                type="email"
                                placeholder="Email (Optional)"
                                value={form.email}
                                onChange={(e) => {
                                    setForm({ ...form, email: e.target.value });
                                    setError("");
                                }}
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#b20000]"
                                disabled={loading}
                            />
                        </div>

                        <button
                            onClick={handleSaveDetails}
                            disabled={loading || !mobile || mobile.length !== 10 || !form.name || !form.business || !form.location}
                            className="px-6 py-3 bg-[#b20000] text-white rounded w-full font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Get Started Now"
                            )}
                        </button>
                        <p className="mt-4 text-[10px] text-gray-500">
                            By clicking, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </>
                )}

                {/* STEP 2: Success Message */}
                {step === 2 && (
                    <div className="text-center py-6">
                        <div className="mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#b20000] mb-4">
                            Thank You!
                        </h2>
                        <p className="text-gray-700 text-lg mb-2">
                            Your registration is complete.
                        </p>
                        <p className="text-gray-600 text-sm mb-8">
                            Kindly check the given link to grow your GBP.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-100">
                            <a 
                                href="https://rw.luomo.co.in" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#b20000] font-medium hover:underline break-all"
                            >
                                https://rw.luomo.co.in
                            </a>
                        </div>
                        <button
                            onClick={close}
                            className="px-8 py-3 bg-[#b20000] text-white rounded-md font-semibold hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}


/* FEATURE CARD */
function FeatureCard({ icon, title, desc }) {
    return (
        <div className="p-4 sm:p-6 md:p-8 bg-white border hover:shadow-md transition rounded">
            <div className="mb-3 sm:mb-4">{icon}</div>
            <h3 className="text-[11px] md:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                {title}
            </h3>
            <p className="text-[8px] md:text-base opacity-80 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}

/* STEP CARD */
function Step({ number, title, desc }) {
    return (
        <div className="text-center">
            <div className="text-5xl font-extrabold text-[#b20000] mb-4">{number}</div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 text-sm max-w-sm mx-auto">{desc}</p>
        </div>
    );
}

const FaqItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
                <span className="pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-[#b20000] transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};
