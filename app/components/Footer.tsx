import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className=" text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start">
          <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/images/logo.png"
              alt="Volleyball Club Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
          </div>
          <div className="mb-4 md:mb-0 md:pl-14 text-center">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Address: Trollesundsvägen 47, 124 34 Bandhagen</p>
            <p className="text-sm">Phone: (+46) 0707356835</p>
            <p className="text-sm">Email: <a href="mailto:volleyboll@ragsvedsif.org " className="text-secondary">volleyboll@ragsvedsif.org </a></p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white w-6 h-6 hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/ragsvedsif_volleybollherr?igsh=NDV4Z2prMWx3cGkw" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white w-6 h-6 hover:text-pink-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white w-6 h-6 hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <p className="text-center text-sm">&copy; {new Date().getFullYear()}, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
