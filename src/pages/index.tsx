// note: apapun yg ada didalam folder pages, akan menjadi path routing (dan akan mengakses file index)
import HeroSection from '@/components/layouts/HeroSection';
import Navbar from '@/components/layouts/Navbar';
import ProductPage from './products';
import Footer from '@/components/layouts/Footer';



export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductPage/>
      <Footer/>
    </div>
  )
}
