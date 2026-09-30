import { Heart, MapPin, Mail, Phone } from 'lucide-react';

const navigateLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/therapists-newbury-park' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const teamLinks = [
  { label: 'Jennifer Anderson', href: '/jennifer-anderson' },
  { label: 'Heather Williams-Baumgart', href: '/heather-williams-baumgart' },
  { label: 'Autumn Bodily', href: '/autumn-bodily' },
  { label: 'Candace Bletscher', href: '/candace-bletscher' },
  { label: 'Samantha Johnson', href: '/samantha-johnson' },
  { label: 'Rosa Gomez', href: '/rosa-gomez' },
  { label: 'Chad Flores', href: '/chad-flores' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="font-serif text-lg font-bold">
                Conejo Valley Family Counseling
              </span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Online & in-person counseling in Newbury Park and across
              California. Rebuild your foundation on solid ground and finally
              begin to thrive.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-background/60">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-background/60">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  925 Broadbeck Dr
                  <br />
                  Suites 200 and 225
                  <br />
                  Newbury Park, CA 91320
                </span>
              </div>
              <a
                href="mailto:info@conejovalleycounseling.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@conejovalleycounseling.com</span>
              </a>
              <a
                href="tel:8052423120"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>805.242.3120</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-background/50 italic">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &
              Simi Valley
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-background/60">
              Our Team
            </h3>
            <ul className="space-y-2">
              {teamLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-background/50">
              &copy; {new Date().getFullYear()} Conejo Valley Family
              Counseling. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-background/50">
              <a href="/terms" className="transition-colors hover:text-primary">
                Terms
              </a>
              <span>|</span>
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/disclaimer"
                className="transition-colors hover:text-primary"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
