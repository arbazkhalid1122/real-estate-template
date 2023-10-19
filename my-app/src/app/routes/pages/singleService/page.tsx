  'use client'
import OurExperts from '@/app/common components/OurExperts';
import FeatureProperty from '@/app/common components/featureproperty';
import Getlisted from '@/app/common components/getListed';
import Pageheader from '@/app/common components/pageHeader';
import LogoSection from '@/app/common components/partner';
import Whyus from '@/app/components/whyus';
import React from 'react'

export default function Services() {
    const data = {
        title: "Services",
        mainTitle: "Sale Property",
      };
  return (
    <div>
      <Pageheader data={data} />
      <Whyus image='/about/about1.webp' />
      <FeatureProperty />
      <LogoSection />
      <OurExperts />
      <Getlisted />
    </div>
  )
}
