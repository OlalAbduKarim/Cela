import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.248.637.415 1.363.465 2.428.048 1.066.06 1.405.06 4.122s-.012 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.556.555-1.112.9-1.772 1.153-.637.248-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772A4.908 4.908 0 015.35 2.525c.637-.248 1.363-.415 2.428-.465C8.844 2.013 9.184 2 12 2zm0 2.16c-2.705 0-3.03.01-4.088.06-1.008.046-1.562.207-1.978.372-.5.19-.86.417-1.206.762-.347.347-.573.707-.762 1.207-.165.415-.326.97-.372 1.978-.05 1.058-.06 1.383-.06 4.088s.01 3.03.06 4.088c.046 1.008.207 1.562.372 1.978.19.5.416.86.762 1.207.346.346.706.572 1.206.762.416.165.97.326 1.978.372 1.058.05 1.383.06 4.088.06s3.03-.01 4.088-.06c1.008-.046 1.562-.207 1.978-.372.5-.19.86-.416 1.207-.762.346-.346.572-.706.762-1.206.165-.416.326-.97.372-1.978.05-1.058.06-1.383.06-4.088s-.01-3.03-.06-4.088c-.046-1.008-.207-1.562-.372-1.978-.19-.5-.416-.86-.762-1.207-.346-.346-.706-.572-1.206-.762-.415-.165-.97-.326-1.978-.372C15.03 4.17 14.705 4.16 12 4.16zm0 3.18c-2.502 0-4.525 2.023-4.525 4.525s2.023 4.525 4.525 4.525 4.525-2.023 4.525-4.525S14.502 7.34 12 7.34zm0 7.21c-1.49 0-2.685-1.195-2.685-2.685s1.195-2.685 2.685-2.685 2.685 1.195 2.685 2.685S13.49 14.55 12 14.55zm4.336-7.017a1.046 1.046 0 100-2.092 1.046 1.046 0 000 2.092z" clipRule="evenodd" />
  </svg>
);

const TwitterXIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-.81 1.14-1.99 1.97-3.35 2.48-1.36.51-2.83.65-4.3.48-1.47-.17-2.79-.71-3.93-1.61-.79-.63-1.4-1.47-1.81-2.44-.39-.92-.55-1.93-.4-2.97.11-.7.32-1.37.64-2.01.3-.59.68-1.14 1.14-1.61.46-.45.98-.83 1.56-1.11.58-.28 1.2-.43 1.83-.49l.09-.01c.03-2.22.03-4.44.01-6.67H6.66c.03-1.31.02-2.62 0-3.93.3-.02.6-.03.9-.04.28-.01.56-.01.84-.02 1.31.02 2.61.01 3.91.02z"/>
  </svg>
);


const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "#", icon: <FacebookIcon /> }, // Placeholder, update if FB link provided
    { name: "Instagram", url: "https://www.instagram.com/cela_trips?utm_source=qr&igsh=MWcwcXJzMDJ1dzFtbA==", icon: <InstagramIcon /> },
    { name: "Twitter", url: "https://x.com/CELIA_256?t=udVkd-ZjUtYnl3Kiv3yzgw&s=08", icon: <TwitterXIcon /> },
    { name: "TikTok", url: "https://www.tiktok.com/@cela_trips", icon: <TikTokIcon /> },
  ];

  return (
    <footer className="bg-neutral-dark text-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-4">CELA EVENTS</h2>
            <p className="text-sm text-neutral-300">
              Your partner for unforgettable tourism experiences, parties, travels, tours, and festivals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><ReactRouterDOM.Link to="/" className="text-neutral-300 hover:text-primary text-sm">Home</ReactRouterDOM.Link></li>
              <li><ReactRouterDOM.Link to="/events" className="text-neutral-300 hover:text-primary text-sm">Events</ReactRouterDOM.Link></li>
              <li><ReactRouterDOM.Link to="/letters" className="text-neutral-300 hover:text-primary text-sm">Announcements</ReactRouterDOM.Link></li>
              <li><ReactRouterDOM.Link to="/admin/login" className="text-neutral-300 hover:text-primary text-sm">Admin</ReactRouterDOM.Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-neutral-300 text-sm">Kampala, Uganda</p>
            <p className="text-neutral-300 text-sm">Email: <a href="mailto:celiacelacee@gmail.com" className="hover:text-primary">celiacelacee@gmail.com</a></p>
            <p className="text-neutral-300 text-sm">
              Phone: <a href="tel:+256707589256" className="hover:text-primary">+256 707 589 256</a> / <a href="tel:+256768587590" className="hover:text-primary">+256 768 587 590</a>
            </p>
            <p className="text-neutral-300 text-sm">
              WhatsApp: <a href="https://wa.me/256707589256" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+256 707 589 256</a>
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                   aria-label={`Follow us on ${link.name}`}
                   className="text-neutral-300 hover:text-primary h-8 w-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm text-neutral-400">&copy; {new Date().getFullYear()} CELA EVENTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
