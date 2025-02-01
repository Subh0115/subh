import React from 'react';
import { Search, Bell, List, CreditCard, CheckSquare, ArrowLeftRight, FileText, Globe, ClipboardText } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const NewDashboard = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <div className="app">
        {/* Header */}
        <header className="grid grid-cols-[175px_1fr_400px] gap-16 items-end border-b border-[#313131] p-4">
          <div className="logo flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="https://assets.codepen.io/285131/almeria-logo.svg" alt="logo" />
            </div>
            <div className="ml-3 flex flex-col">
              <span className="text-white">BtrackiFiS</span>
              <span className="text-[#969593]">NeoBank</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden lg:block">
            <nav className="flex justify-between text-[#969593] border-b border-[#313131]">
              <a href="#" className="py-4 border-t-2 border-transparent hover:text-white hover:border-white transition-colors">
                Overview
              </a>
              <a href="#" className="py-4 border-t-2 border-white text-white">
                Payments
              </a>
              <a href="#" className="py-4 border-t-2 border-transparent hover:text-white hover:border-white transition-colors">
                Cards
              </a>
              <a href="#" className="py-4 border-t-2 border-transparent hover:text-white hover:border-white transition-colors">
                Account
              </a>
              <a href="#" className="py-4 border-t-2 border-transparent hover:text-white hover:border-white transition-colors">
                System
              </a>
              <a href="#" className="py-4 border-t-2 border-transparent hover:text-white hover:border-white transition-colors">
                Business
              </a>
            </nav>
          </div>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center justify-end">
            <button className="flex items-center text-[#969593] hover:text-white transition-colors">
              <span className="mr-6">Matheo Peterson</span>
              <span className="w-[42px] h-[42px] rounded-full overflow-hidden">
                <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" alt="avatar" className="w-full h-full object-cover" />
              </span>
            </button>
            <div className="flex items-center ml-8 pl-8 border-l border-[#313131]">
              <button className="w-[42px] h-[42px] flex items-center justify-center border border-[#969593] rounded-full hover:bg-[#313131] transition-colors mr-4">
                <Search className="w-5 h-5" />
              </button>
              <button className="w-[42px] h-[42px] flex items-center justify-center border border-[#969593] rounded-full hover:bg-[#313131] transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden w-[42px] h-[42px] flex items-center justify-center border border-[#969593] rounded-full">
            <List className="w-5 h-5" />
          </button>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-[175px_1fr_400px] gap-16 pt-10">
          {/* Sidebar Navigation */}
          <div className="hidden lg:flex flex-col justify-between h-full">
            <nav className="flex flex-col text-[#969593]">
              <a href="#" className="flex items-center mb-5 hover:text-white hover:translate-x-1 transition-all">
                <CreditCard className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center mb-5 hover:text-white hover:translate-x-1 transition-all">
                <CheckSquare className="w-5 h-5 mr-3" />
                <span>Scheduled</span>
              </a>
              <a href="#" className="flex items-center mb-5 hover:text-white hover:translate-x-1 transition-all">
                <ArrowLeftRight className="w-5 h-5 mr-3" />
                <span>Transfers</span>
              </a>
              <a href="#" className="flex items-center mb-5 hover:text-white hover:translate-x-1 transition-all">
                <FileText className="w-5 h-5 mr-3" />
                <span>Templates</span>
              </a>
              <a href="#" className="flex items-center mb-5 hover:text-white hover:translate-x-1 transition-all">
                <Globe className="w-5 h-5 mr-3" />
                <span>SWIFT</span>
              </a>
              <a href="#" className="flex items-center mb-5 hover:text-white hover:translate-x-1 transition-all">
                <ClipboardText className="w-5 h-5 mr-3" />
                <span>Exchange</span>
              </a>
            </nav>

            <footer className="mt-auto pt-8 border-t border-[#313131]">
              <h1 className="text-2xl flex items-start">
                BtrackiFiS
                <small className="text-sm ml-1">©</small>
              </h1>
              <div className="mt-4 text-xs text-[#969593]">
                BtrackiFiS ©<br />
                All Rights Reserved 2024
              </div>
            </footer>
          </div>

          {/* Main Content Area */}
          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="pr-6">
              <ServiceSection />
              <TransferSection />
            </div>
          </ScrollArea>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <PaymentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-5">Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServiceCard
          icon={<CreditCard className="w-8 h-8" />}
          title="Electricity"
          subtitle="UrkEnergo LTD."
          bgColor="bg-[#e3ffa8]"
        />
        <ServiceCard
          icon={<Bell className="w-8 h-8" />}
          title="Heating Gas"
          subtitle="Gazprom UA"
          bgColor="bg-[#45ffbc]"
        />
        <ServiceCard
          icon={<FileText className="w-8 h-8" />}
          title="Tax online"
          subtitle="Kharkov 62 str."
          bgColor="bg-[#f1f1f1]"
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, subtitle, bgColor }: { icon: React.ReactNode; title: string; subtitle: string; bgColor: string }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg text-black min-h-[200px] flex flex-col justify-between hover:-translate-y-1 transition-transform`}>
      <div className="flex items-start">
        {icon}
        <div className="ml-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-75">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="font-semibold">Go to service</span>
        <ArrowLeftRight className="w-5 h-5" />
      </div>
    </div>
  );
};

const TransferSection = () => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#313131]">
        <h2 className="text-2xl font-semibold">Latest transfers</h2>
        <div className="flex items-center gap-4">
          <p className="text-sm text-[#969593]">Filter selected: more than 100 $</p>
          <button className="w-8 h-8 flex items-center justify-center border border-[#969593] rounded-full">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <TransferItem
          logo="https://assets.codepen.io/285131/apple.svg"
          company="Apple Inc."
          description="Apple ID Payment"
          lastDigits="4012"
          date="28 Oct. 21"
          amount="- $ 550"
        />
        <TransferItem
          logo="https://assets.codepen.io/285131/pinterest.svg"
          company="Pinterest"
          description="2 year subscription"
          lastDigits="5214"
          date="26 Oct. 21"
          amount="- $ 120"
        />
        <TransferItem
          logo="https://assets.codepen.io/285131/warner-bros.svg"
          company="Warner Bros."
          description="Cinema"
          lastDigits="2228"
          date="22 Oct. 21"
          amount="- $ 70"
        />
      </div>
    </section>
  );
};

const TransferItem = ({ logo, company, description, lastDigits, date, amount }: { 
  logo: string; 
  company: string; 
  description: string; 
  lastDigits: string; 
  date: string; 
  amount: string 
}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="w-[42px] h-[42px] bg-[#f1f1f1] rounded flex items-center justify-center">
        <img src={logo} alt={company} className="w-1/2" />
      </div>
      <div className="flex-1 grid grid-cols-3 gap-4">
        <div>
          <dt className="font-semibold">{company}</dt>
          <dd className="text-sm text-[#969593]">{description}</dd>
        </div>
        <div>
          <dt className="font-semibold">{lastDigits}</dt>
          <dd className="text-sm text-[#969593]">Last four digits</dd>
        </div>
        <div>
          <dt className="font-semibold">{date}</dt>
          <dd className="text-sm text-[#969593]">Date payment</dd>
        </div>
      </div>
      <div className="text-lg font-semibold">{amount}</div>
    </div>
  );
};

const PaymentSection = () => {
  return (
    <section className="bg-[#1f1f1f] p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">New Payment</h2>
      <div className="mb-6">
        <p className="text-[#969593] text-sm mb-4">Choose a card to transfer money</p>
        <div className="flex gap-2">
          <button className="w-[50px] h-[34px] border-2 border-[#313131] rounded flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <CreditCard className="w-5 h-5" />
          </button>
          <button className="w-[50px] h-[34px] border-2 border-[#313131] rounded flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <CreditCard className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <PaymentCard
          expiryDate="01/22"
          lastDigits="4012"
          title="Internet"
          amount="$ 2,110"
          color="bg-[#45ffbc]"
        />
        <PaymentCard
          expiryDate="12/23"
          lastDigits="2228"
          title="Universal"
          amount="$ 5,621"
          color="bg-[#e3ffa8]"
        />
        <PaymentCard
          expiryDate="03/22"
          lastDigits="5214"
          title="Gold"
          amount="$ 3,473"
          color="bg-[#f1f1f1]"
        />
      </div>

      <div className="mb-6">
        <p className="text-[#969593] text-sm mb-4">Most frequently asked questions</p>
        <div className="flex border-y border-[#313131] py-3">
          <label className="pr-4 mr-4 border-r border-[#313131]">Question</label>
          <input
            type="text"
            placeholder="Type here"
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button className="px-10 py-3 border border-[#969593] rounded-md text-[#969593] hover:text-white transition-colors">
          Save
        </button>
        <button className="flex items-center ml-6 text-[#969593] hover:text-white transition-colors">
          <Search className="w-5 h-5 mr-2" />
          <span>More settings</span>
        </button>
      </div>
    </section>
  );
};

const PaymentCard = ({ expiryDate, lastDigits, title, amount, color }: {
  expiryDate: string;
  lastDigits: string;
  title: string;
  amount: string;
  color: string;
}) => {
  return (
    <div className="flex items-center gap-6">
      <div className={`${color} w-[125px] aspect-[3/2] rounded p-1.5 text-black text-sm font-semibold flex flex-col justify-between`}>
        <span>{expiryDate}</span>
        <span className="self-end">•••• {lastDigits}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-[#969593]">{title}</h3>
        <div className="flex items-center justify-between mt-3 py-3 border-y border-[#313131]">
          <span className="text-2xl">{amount}</span>
          <button className="w-8 h-8 flex items-center justify-center border border-[#969593] rounded-full">
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;