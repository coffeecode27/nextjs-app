import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="hero-section">
      <LeftSideSection/>
      <RightSideSection/>
    </div>
  );
};

export default HeroSection;


const LeftSideSection = () => {
  return (
      <div className="hero-content">

        <div className="title-section">
        <p className="h1">Electronic Store</p>
        <p className="paragraf">Ayo Belanja Disini.</p>
        </div>
        
        <div className="desc-section">
        <p className="head-desc">Menjual perlengkapan elektronik dengan kualitas super premium.</p>
        <p className="content-desc">kepuasan anda adalah tujuan kami.</p>
        </div>
      </div>
  );
}

const RightSideSection = () => {
  return (
    <nav className = 'right-navbar-section'>
      <ul>
        <li>
          <Link href="/">Beranda</Link>
        </li>
        <li>
          <Link href="/tentang">Tentang</Link>
        </li>
        <li>
          <Link href="/kontak">Kontak</Link>
        </li>
        <li>
          <Link href="/kontak">Kontak</Link>
        </li>
        <li>
          <Link href="/kontak">Kontak</Link>
        </li>
        <li>
          <Link href="/kontak">Kontak</Link>
        </li>
      </ul>
    </nav>
  );
}