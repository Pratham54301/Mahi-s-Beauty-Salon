import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  "About Us": [
    { title: "Our Story", href: "/#about" },
    { title: "Contact Us", href: "/#contact" },
    { title: "Salon Locator", href: "/#salon-locator" },
    { title: "Franchise", href: "/#franchise" },
  ],
  "Customer Service": [
    { title: "FAQs", href: "#" },
    { title: "Booking Policy", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms & Conditions", href: "#" },
  ],
  "Our Services": [
    { title: "Hair Care", href: "/#services" },
    { title: "Skin Care", href: "/#services" },
    { title: "Makeup", href: "/#services" },
    { title: "Bridal Packages", href: "/bridal" },
  ],
};

const socialLinks = [
  { icon: <Facebook />, href: "#", name: "Facebook" },
  { icon: <Twitter />, href: "#", name: "Twitter" },
  { icon: <Instagram />, href: "#", name: "Instagram" },
  { icon: <Youtube />, href: "#", name: "Youtube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-foreground border-t">
      <div className="container max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">Mahi's</h3>
            <p className="text-muted-foreground">
              Experience the art of beauty, where expertise meets elegance. Your journey to radiance begins here.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-headline text-lg font-bold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Mahi's Beauty Salon. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
