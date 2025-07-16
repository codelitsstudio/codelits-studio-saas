'use client';

import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname !== '/') return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-20 items-center px-4 md:px-8">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo expanded />
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            <Link
              href="/#features"
              onClick={(e) => handleScroll(e, 'features')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              onClick={(e) => handleScroll(e, 'pricing')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex flex-1 justify-end items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            {/* Hide Sign Up on mobile */}
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full pt-0 pb-10">
        <div className="container mx-auto px-4 md:px-8">{children}</div>
      </main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-0 md:h-24">
          <div className="flex items-center space-x-2">
            <Logo expanded />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Codelits Hub. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
