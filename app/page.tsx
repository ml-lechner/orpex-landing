'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import StickyCta from '@/components/StickyCta'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Agents from '@/components/Agents'
import HowItWorks from '@/components/HowItWorks'
import OperationalInbox from '@/components/OperationalInbox'
import Stats from '@/components/Stats'
import Moats from '@/components/Moats'
import Compare from '@/components/Compare'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import SignupFunnel from '@/components/SignupFunnel'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false)
  const [prefillEmail, setPrefillEmail] = useState('')

  const openFunnel = (email?: string) => {
    setPrefillEmail(email || '')
    setFunnelOpen(true)
  }

  return (
    <>
      <Nav onOpenFunnel={() => openFunnel()} />
      <StickyCta onOpenFunnel={openFunnel} />
      <Hero onOpenFunnel={() => openFunnel()} />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Agents />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <OperationalInbox />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <Moats />
      <SectionDivider />
      <Compare />
      <SectionDivider />
      <Pricing onOpenFunnel={() => openFunnel()} />
      <SectionDivider />
      <Faq />
      <SectionDivider />
      <FinalCta onOpenFunnel={openFunnel} />
      <Footer />
      <SignupFunnel isOpen={funnelOpen} prefillEmail={prefillEmail} onClose={() => setFunnelOpen(false)} />
    </>
  )
}
