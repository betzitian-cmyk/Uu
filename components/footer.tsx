import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  team: [
    { name: "Roster", href: "/roster" },
    { name: "Schedule", href: "/schedule" },
    { name: "Statistics", href: "/stats" },
    { name: "News", href: "/news" },
  ],
  club: [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Join Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary))] font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--primary-foreground))]">
                TH
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[hsl(var(--foreground))]">
                  THUNDER HAWKS
                </p>
                <p className="text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
                  Football Club
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Building champions on and off the field since 1985. Excellence, integrity, and teamwork define who we are.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] transition-all hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
                Team
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.team.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
                Club
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.club.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[hsl(var(--primary))]" />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  Thunder Hawks Stadium<br />
                  1234 Victory Lane<br />
                  Thunder City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[hsl(var(--primary))]" />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[hsl(var(--primary))]" />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  info@thunderhawks.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[hsl(var(--border))] pt-8">
          <p className="text-center text-sm text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} Thunder Hawks Football Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
