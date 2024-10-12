import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import { Suspense } from 'react'
import LoadingContainer from '@/components/global/LoadingContainer'

function HomePage() {
  return (
    <div>
      <Hero />

      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  )
}
export default HomePage
