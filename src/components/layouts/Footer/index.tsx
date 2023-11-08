import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer-container">
          <div className="footer-left-section">
            {/* Bagian Informasi Sosial Media */}
            <div className="footer-title">
            <p className="h3">Electronic Store</p>
            <p className="paragraf">Ayo Belanja Disini.</p>
            </div>
            <div className="footer-socmed-item">
                <ul className='socmed-item'>
                    <li>
                    <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faYoutube} />
                    </li>
                </ul>
            </div>

            <div className='copyright'>
                <p>Copyright &copy; 2023 Elektronik Store</p>
            </div>
            
            {/* Tambahkan tautan atau ikon sosial media di sini */}
          </div>
          <div className="footer-right-section">
            <div className='nav-footer'>
            <nav className = 'left-navbar-footer'>
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
          </ul>
        </nav>
        </div>
        <div className='underline'></div>
         
        <div className='item-list-navbar-container'>
            <div className='item-list-navbar-left'>
                <ul>
                    <li>
                        <p>item1</p>
                    </li>
                    <li>
                        <p>item1</p>
                    </li>
                    <li>
                        <p>item1</p>
                    </li>
                    <li>
                        <p>item1</p>
                    </li>
                    <li>
                        <p>item1</p>
                    </li>
                    <li>
                        <p>item1</p>
                    </li>
                    <li>
                        <p>item1</p>
                    </li>
                </ul>
            </div>
            <div className='item-list-navbar-right'>
                <ul>
                    <li>
                        <p>item2</p>
                    </li>
                    <li>
                        <p>item2</p>
                    </li>
                    <li>
                        <p>item2</p>
                    </li>
                    <li>
                        <p>item2</p>
                    </li>
                    <li>
                        <p>item2</p>
                    </li>
                    <li>
                        <p>item2</p>
                    </li>
                    <li>
                        <p>item2</p>
                    </li>
                </ul>
            </div>

        </div>

        </div>
        </footer>
      );
}

export default Footer;