import Categories from '@/components/Home/Categories/Categories'
import Header from '@/components/Home/Header/Header'
import OurService from '@/components/Home/OurService/OurService'
import SchemeOfWork from '@/components/Home/SchemeOfWork/SchemeOfWork'
import WorkWithUs from '@/components/Home/WorkWithUs/WorkWithUs'
import React from 'react'

export default function HomePage() {
  return (
    <div>
        <Header />
        <Categories/>
        <OurService />
        <WorkWithUs />
        <SchemeOfWork />
    </div>
  )
}
