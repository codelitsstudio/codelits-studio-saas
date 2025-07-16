
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check,ShieldCheck, Headphones, AppWindow, EthernetPort  } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVGPattern } from "@/components/svg-pattern";
import { HeroIllustration } from "@/components/hero-illustration";
import { FeaturesIllustration } from "@/components/features-illustration";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    // Animate Hero Section
    gsap.from(heroRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        delay: 0.2
    });

    // Animate Features Section
    gsap.from(featuresRef.current, {
        scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out'
    });
    
    // Animate Pricing Cards
    gsap.from(".pricing-card", {
        scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden relative">
        
<section className="relative container grid lg:grid-cols-2 gap-10 items-center py-12 md:py-20 lg:py-24 isolate">
        <div className="absolute -top-1/4 -left-1/4 -z-20">
        
            <SVGPattern />
        </div>
     
<div 
  ref={heroRef} 
  className="flex flex-col mx-auto items-start text-left max-w-[900px] md:ml-8 lg:ml-12  sm:px-0"
>
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-headline leading-tight">
    The Central Hub for Your Digital Applications <AppWindow className="w-14 h-14 inline-block text-accent rotate-12" />

  </h1>
  <p className="text-muted-foreground md:text-lg mt-4">
    Codelits Hub provides a seamless experience for managing your apps, subscriptions, and support all in one place.
  </p>
    {/* New elements below buttons */}

  <div className="flex flex-row gap-4 mt-4">
    <Button asChild size="lg" className="w-auto">
      <Link href="/signup">Get Started for Free</Link>
    </Button>
    <Button asChild size="lg" variant="outline" className="w-auto">
      <Link href="/login">Login</Link>
    </Button>
  </div>


</div>



        <div className="flex items-center justify-center">
            <HeroIllustration />
        </div>
      </section>

      <section ref={featuresRef} id="features" className="container py-12 md:py-24 lg:py-32 bg-secondary dark:bg-card rounded-lg">
<div className="mx-auto flex flex-col-reverse max-w-5xl items-center gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
                <FeaturesIllustration />
            </div>
            <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Key Features</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    Everything you need to manage your applications efficiently and effectively.
                    </p>
                </div>
                <ul className="grid gap-4">
                    <li className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                            <h3 className="font-semibold">Client Dashboard</h3>
                            <p className="text-sm text-muted-foreground">Overview of apps, statistics, and quick access.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                            <h3 className="font-semibold">App Management</h3>
                            <p className="text-sm text-muted-foreground">Install, configure, and update your apps with ease.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                            <h3 className="font-semibold">Subscription & User Management</h3>
                            <p className="text-sm text-muted-foreground">Manage plans, billing, and team roles seamlessly.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      <section ref={pricingRef} id="pricing" className="container py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your business. No hidden fees.
            </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="pricing-card">
                <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>For individuals and small teams starting out.</CardDescription>
                    <p className="pt-4"><span className="text-4xl font-bold">$29</span>/month</p>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 5 Apps</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Basic Analytics</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Email Support</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" asChild><Link href="/signup">Choose Plan</Link></Button>
                </CardFooter>
            </Card>
            <Card className="border-primary shadow-lg pricing-card relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-12 mt-6">
                    <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-12 transform rotate-45">
                        Popular
                    </div>
                </div>
                <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>For growing businesses that need more power.</CardDescription>
                    <p className="pt-4"><span className="text-4xl font-bold">$99</span>/month</p>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 25 Apps</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Advanced Analytics</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Priority Support</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> User Roles</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" asChild><Link href="/signup">Choose Plan</Link></Button>
                </CardFooter>
            </Card>
            <Card className="pricing-card">
                <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large organizations with custom needs.</CardDescription>
                    <p className="pt-4"><span className="text-4xl font-bold">Contact Us</span></p>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited Apps</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Dedicated Infrastructure</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 24/7 Phone Support</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" variant="outline" asChild><Link href="#">Contact Sales</Link></Button>
                </CardFooter>
            </Card>
        </div>
      </section>
    </div>
  );
}
