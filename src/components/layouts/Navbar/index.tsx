import Link from 'next/link';
const Navbar = () => {
     return(
      <div className='navbar'>
      <LeftNavbar/>
      <RightNavbar/>
        </div>
     )
    };

    const LeftNavbar = () => {
      return (
        <nav className = 'leftNavbar'>
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
          </ul>
        </nav>
      );
    }

    const RightNavbar = () => {
      return (
        <nav className = 'rightNavbar'>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
            type="text"
            placeholder="Search..."
          />
            </li>
          </ul>
        </nav>
      );
    }


export default Navbar;