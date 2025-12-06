"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

// Reusable Container Component
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// --- PLANS DATA ---
const plans = [
  {
    name: "Basic",
    description:
      "Perfect for individuals and small teams looking to enhance their content creation with powerful AI features.",
    price: "1.00",
    thenPrice: "15",
    isPopular: false,
    features: [
      { text: "10000 Content Words", included: true },
      { text: "No Free Images", included: false },
      { text: "GPT-4 Integration", included: true },
      { text: "10 Chats Prompts", included: true },
      { text: "Voice Over Limited Words", included: true },
      { text: "No Keyword Research", included: false },
      { text: "AI Based Article Writer", included: true },
      { text: "All Tools Access", included: true },
    ],
  },
  {
    name: "Standard",
    description:
      "Designed for growing businesses and professionals who need unlimited content capabilities and advanced tools.",
    price: "1.00",
    thenPrice: "29",
    isPopular: true,
    features: [
      { text: "150000 Content Words", included: true },
      { text: "500 Images Prompts", included: true },
      { text: "GPT-4 Integration", included: true },
      { text: "5000 Chats Prompts", included: true },
      { text: "Voice Over Unlimited Words", included: true },
      { text: "Keyword Research Unlimited", included: true },
      { text: "Unlimited One Click Blog Creation", included: true },
      { text: "All Tools Access", included: true },
      { text: "Two Seats", included: true },
      { text: "WordPress Blog Integration", included: true },
    ],
  },
  {
    name: "Premium",
    description:
      "The perfect plan for enterprises and larger teams needing scalability and collaboration features.",
    price: "1.00",
    thenPrice: "79",
    isPopular: false,
    features: [
      { text: "Unlimited Content Words", included: true },
      { text: "Unlimited Images Prompts", included: true },
      { text: "GPT-4 Integration", included: true },
      { text: "Unlimited Chats Prompts", included: true },
      { text: "Voice Over Unlimited Words", included: true },
      { text: "Keyword Research Unlimited", included: true },
      { text: "AI Based Article Writer", included: true },
      { text: "All Tools Access", included: true },
      { text: "Four Seats", included: true },
      { text: "WordPress Blog Integration", included: true },
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual"
  );

  return (
    <section className="w-full bg-[#1B1337] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <Container>
        {/* --- HEADER --- */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
          <h2 className="
            text-2xl font-bold text-white 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl
            xl:text-[3.5rem] xl:leading-[1.1]
            px-2
          ">
            Choose Your <span className="text-[#D946EF]">Plan</span>
          </h2>
          <p className="
            mt-1 sm:mt-2 
            text-sm text-gray-400 
            sm:text-base 
            lg:text-lg
            max-w-full 
            sm:max-w-lg 
            md:max-w-xl 
            lg:max-w-2xl
            mx-auto
            px-4 sm:px-2
          ">
            Simple pricing plans for everyone and every budget.
          </p>

          {/* --- TOGGLE SWITCH --- */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 text-sm font-medium text-white">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`
                transition-colors text-sm sm:text-base
                ${billingCycle === "monthly" 
                  ? "text-white font-semibold" 
                  : "text-gray-500 hover:text-gray-300"
                }
              `}
            >
              Monthly
            </button>

            {/* Custom Toggle Switch */}
            <div
              className="
                relative h-5 w-12 sm:w-14 
                rounded-full bg-gray-700 
                cursor-pointer 
                transition-all duration-300
                hover:bg-gray-600
              "
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annual" : "monthly"
                )
              }
            >
              {/* Toggle Knob */}
              <div
                className={`
                  absolute top-1/2 -translate-y-1/2 
                  h-5 w-5 sm:h-6 sm:w-6 
                  rounded-full 
                  transition-all duration-300 
                  ${billingCycle === "annual" 
                    ? "left-7 sm:left-8 bg-purple-500 shadow-lg" 
                    : "left-1 bg-gray-400"
                  }
                `}
              />
            </div>

            <button
              onClick={() => setBillingCycle("annual")}
              className={`
                flex items-center gap-2 
                transition-colors text-sm sm:text-base
                ${billingCycle === "annual" 
                  ? "text-white font-semibold" 
                  : "text-gray-500 hover:text-gray-300"
                }
              `}
            >
              Annual
              <span className="
                rounded-full bg-purple-500/20 
                px-2 py-0.5 
                text-xs text-purple-300
                whitespace-nowrap
              ">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="
          flex flex-col 
          sm:flex-row sm:flex-wrap 
          lg:flex-nowrap 
          items-stretch 
          justify-center 
          gap-4 sm:gap-6 
          md:gap-8
          px-2 sm:px-0
        ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative 
                rounded-lg sm:rounded-xl md:rounded-[20px] 
                p-[1px] sm:p-[1.5px] md:p-[2px] 
                transition-all duration-300 
                hover:-translate-y-1 sm:hover:-translate-y-2
                w-full 
                sm:max-w-[calc(50%-12px)] 
                lg:max-w-none lg:flex-1
                ${plan.isPopular ? "order-first sm:order-none" : ""}
                ${index === 1 ? "lg:scale-105 lg:z-10" : ""}
              `}
              style={{
                background:
                  "linear-gradient(91.87deg, #6B41FF 27%, #F64CFF 68%, #FFC553 100%)",
              }}
            >
              {/* Inner Card */}
              <div
                className="
                  rounded-[calc(1rem-1px)] sm:rounded-[calc(1.25rem-1.5px)] md:rounded-[18px] 
                  p-4 sm:p-5 md:p-6 
                  text-center 
                  flex flex-col justify-between
                  min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]
                "
                style={{
                  background: plan.isPopular
                    ? "linear-gradient(180deg, #8729F5 0%, #4A04A3 100%)"
                    : "#1B1337",
                }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="
                    absolute -top-2 sm:-top-3 md:-top-4 
                    left-1/2 -translate-x-1/2 
                    rounded 
                    bg-[#FF4F4F] 
                    px-3 sm:px-4 
                    py-1 
                    text-xs font-bold uppercase tracking-wider text-white 
                    shadow-lg
                    whitespace-nowrap
                    z-20
                  ">
                    Most Popular
                  </div>
                )}

                {/* --- TOP CONTENT --- */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white">
                    {plan.name}
                  </h3>

                  <p className={`
                    mt-1 sm:mt-2 
                    text-xs sm:text-sm leading-relaxed 
                    ${plan.isPopular ? "text-white/90" : "text-gray-400"}
                    line-clamp-3
                  `}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-3 sm:mt-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                          ${plan.price}
                        </span>
                        <span className="text-sm text-gray-400">/day</span>
                      </div>

                      <span className={`
                        rounded px-2 py-1 
                        text-[10px] sm:text-xs 
                        font-bold uppercase text-white 
                        whitespace-nowrap
                      `}
                      style={{
                        background:
                          "linear-gradient(101.82deg, #00BCFE 35%, #CB41FF 76%, #F64CFF 95%)",
                      }}>
                        1 day free trial
                      </span>
                    </div>

                    <p className={`mt-1 sm:mt-1 text-xs ${plan.isPopular ? "text-purple-200" : "text-gray-500"}`}>
                      then only ${plan.thenPrice}/mo * billed annually
                    </p>
                  </div>

                  <div className={`mt-3 sm:mt-4 h-[1px] w-full ${plan.isPopular ? "bg-white/20" : "bg-white/10"}`}></div>

                  {/* Features List */}
                  <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 md:space-y-4 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className={`
                          flex items-center justify-center 
                          rounded-full flex-shrink-0 mt-0.5
                          ${feature.included ? "bg-white text-purple-600" : "bg-gray-700 text-gray-400"}
                        `} style={{ width: '20px', height: '20px' }}>
                          {feature.included ? (
                            <Check className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" strokeWidth={4} />
                          ) : (
                            <X className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                          )}
                        </div>
                        <span className={`${plan.isPopular ? "text-white" : "text-gray-300"} text-xs sm:text-sm leading-relaxed`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-3 sm:mt-4">
                  <button className={`
                    flex w-full items-center justify-center gap-2 
                    rounded-lg py-2.5 sm:py-3 
                    text-sm font-bold text-white 
                    transition-all duration-300
                    hover:scale-[1.02] 
                    active:scale-95
                    shadow-md sm:shadow-lg
                    ${plan.isPopular
                      ? "bg-gradient-to-r from-[#F472B6] to-[#E879F9] hover:shadow-purple-500/40"
                      : "bg-gradient-to-r from-[#6322C6] to-[#8B5CF6] hover:shadow-purple-500/30"
                    }
                  `}>
                    Start Free Trial Today
                    <ArrowRight className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center text-xs sm:text-sm text-gray-400 px-4">
          <p>All plans come with a 14-day money-back guarantee.</p>
          <p className="mt-1">No credit card required for free trial.</p>
        </div>
      </Container>
    </section>
  );
}
