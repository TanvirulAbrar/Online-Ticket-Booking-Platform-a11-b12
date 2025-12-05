import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src="/logo.png" alt="TicketBari Logo" className="w-14 h-14" />
        <p className="mt-2 max-w-xs">
          Book bus, train, launch & flight tickets easily
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Tickets</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">About</a>
      </nav>

      <nav>
        <h6 className="footer-title">Contact Info</h6>
        <a className="link link-hover">Email: support@ticketbari.com</a>
        <a className="link link-hover">Phone: +880 1234-567890</a>
        <a className="link link-hover">Facebook Page</a>
      </nav>

      <nav>
        <h6 className="footer-title">Payment Methods</h6>
        <img src="/stripe.png" alt="Stripe" className="w-20" />
      </nav>
    </footer>
  );
};

export default Footer;
