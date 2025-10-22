 
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineSection() {
  const data = [
    {
      title: "April 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Architected and launched <b>Zap Exchange v2</b> — a next-generation trading platform designed for scalability,
            maintainability, and a cleaner, bug-free experience. Improved trading performance, onboarding, and user security.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Enhanced <b>ZapWallet</b> with faster transaction sync, advanced analytics, and multi-wallet support. Integrated
            secure authentication protocols (JWT, biometrics, and MFA) for improved safety and compliance with Nigerian fintech regulations.
          </p>
             <div className="flex gap-4 mb-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Play Store</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">App Store</a>
            </div>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src="/assets/exchange/Screenshot 0.png"
              alt="Zap Exchange v2 trading screen"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/exchange/Screenshot 1.png"
              alt="Zap Exchange v2 market overview"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
         src="/assets/exchange/Screenshot 3.png"
              alt="Zap Wallet dashboard"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
            src="/assets/exchange/Screenshot 4.png"
              alt="Zap Wallet transactions view"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Designed and built <b>ZapWallet</b> and <b>Zap Exchange v1</b>, powering secure digital payments, peer-to-peer
            transfers, and real-time trading. Implemented performance optimizations and API integrations with multiple
            payment gateways.
          </p>
             <div className="flex gap-4 mb-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Play Store</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">App Store</a>
            </div>
          <div className="grid grid-cols-4 gap-4">
            <Image
              src="/assets/wallet/Zap Wallet iPhone 0.jpeg"
              alt="Exchange interface"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
             src="/assets/wallet/Zap Wallet iPhone 1.jpeg"
              alt="Trading portfolio view"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
             src="/assets/wallet/Zap Wallet iPhone 2.jpeg"
              alt="Zap Wallet history screen"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/wallet/Zap Wallet iPhone 3.jpeg"
              alt="Zap Wallet settings interface"
              width={500}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">NotchHR (formerly MyXalary)</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">HR & Payroll Management App</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
              Collaborated with the team to restructure the codebase for scalability and implemented key features such as Payroll, Chat, Attendance, and Loan management.
              Optimized app navigation and state management using React Navigation and Redux.
              Improved performance and UI consistency across Android and iOS.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React Native</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Redux</span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded">Firebase</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Node.js</span>
            </div>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Play Store</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">App Store</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Image
                src="/assets/notchhr/Screenshot 0.jpg"
                alt="NotchHR dashboard"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/notchhr/Screenshot 1.jpg"
                alt="NotchHR payroll interface"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/notchhr/Screenshot 2.jpg"
                alt="NotchHR attendance tracking"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/notchhr/Screenshot 3.jpg"
                alt="NotchHR chat feature"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Vasrefil</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Bills & Airtime Purchase App</p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
              Architected the app structure and converted Figma designs into responsive React Native UIs.
              Integrated Flutterwave for wallet funding and payment handling.
              Implemented authentication, PIN management, billing, and purchase modules.
              Deployed to TestFlight, Google Play, and the Apple Store.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React Native</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">TypeScript</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Flutterwave</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Redux</span>
            </div>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Play Store</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">App Store</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Image
                src="/assets/vasrefil/Screenshot 0.png"
                alt="Vasrefil dashboard"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/vasrefil/Screenshot 1.png"
                alt="Vasrefil bills payment"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/vasrefil/Screenshot 2.png"
                alt="Vasrefil airtime purchase"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/vasrefil/Screenshot 3.png"
                alt="Vasrefil wallet management"
                width={300}
                height={600}
                className="rounded-lg object-contain h-32 md:h-48 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  
  ];
  
  return (
    <section id="timeline" className="min-h-screen p-8">
      <div className=" top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
