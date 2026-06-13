import {
  Activity,
  ArrowRight,
  Boxes,
  Braces,
  Check,
  ChevronRight,
  CloudUpload,
  Code2,
  DatabaseZap,
  FileCode2,
  Gauge,
  Globe2,
  Headphones,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Play,
  Send,
  ServerCog,
  ShieldCheck,
  Sun,
  TerminalSquare,
  Workflow,
  Zap
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const routes = {
  home: 'Home',
  about: 'About Us',
  services: 'Services',
  pricing: 'Pricing',
  cdn: 'CDN Network',
  storage: 'Cloud Storage',
  developers: 'Developers',
  contact: 'Contact Us',
  terms: 'Terms',
  privacy: 'Privacy',
  conditions: 'Conditions'
};

const baseUrl = 'https://mediacloudhub.com';
const appLoginUrl = 'https://app.mediacloudhub.com/login';
const appRegisterUrl = 'https://app.mediacloudhub.com/register';

const seo = {
  home: {
    title: 'MediaCloudHub | CDN Storage, Media Optimization and Developer APIs',
    description: 'MediaCloudHub provides CDN storage, media optimization, signed URLs, private buckets, developer APIs, and global asset delivery for modern products.',
    image: `${baseUrl}/og-image.jpg`
  },
  about: {
    title: 'About MediaCloudHub | CDN Storage for Media-Heavy Products',
    description: 'Learn about MediaCloudHub, a CDN storage platform helping developers store, optimize, secure, and deliver media at scale.'
  },
  services: {
    title: 'Services | CDN, Cloud Storage and Media Optimization',
    description: 'Explore MediaCloudHub services for global CDN acceleration, cloud media storage, signed delivery, image optimization, analytics, and API integration.'
  },
  pricing: {
    title: 'Pricing | MediaCloudHub CDN Storage Plans',
    description: 'Compare MediaCloudHub pricing plans for CDN storage, private buckets, signed URLs, media optimization, bandwidth, and developer APIs.'
  },
  cdn: {
    title: 'CDN Network | Fast Global Media Delivery',
    description: 'Deliver images, video, static files, downloads, and application assets through MediaCloudHub global CDN with cache controls and analytics.'
  },
  storage: {
    title: 'Cloud Storage | Secure Media and Object Storage',
    description: 'Store customer uploads, product assets, private files, and transformed media in organized MediaCloudHub cloud storage buckets.'
  },
  developers: {
    title: 'Developers | MediaCloudHub APIs and Automation',
    description: 'Use MediaCloudHub developer APIs for uploads, signed URLs, metadata, media transforms, cache purges, webhooks, and delivery automation.'
  },
  contact: {
    title: 'Contact MediaCloudHub | CDN Storage Support and Sales',
    description: 'Contact MediaCloudHub for CDN storage consultation, media migration planning, developer integration, sales, and technical support.'
  },
  terms: {
    title: 'Terms of Service | MediaCloudHub',
    description: 'Read the MediaCloudHub terms for CDN storage, media delivery, APIs, dashboards, billing, and acceptable customer responsibilities.'
  },
  privacy: {
    title: 'Privacy Policy | MediaCloudHub',
    description: 'Read how MediaCloudHub handles account data, technical logs, support messages, analytics, security controls, and privacy requests.'
  },
  conditions: {
    title: 'Acceptable Use and Conditions | MediaCloudHub',
    description: 'Review the acceptable use conditions for lawful, secure, and fair use of MediaCloudHub CDN storage and developer services.'
  }
};

const metrics = [
  { value: '99.99%', label: 'delivery uptime' },
  { value: '220+', label: 'edge locations' },
  { value: '<90ms', label: 'global media fetch' },
  { value: '24/7', label: 'API monitoring' }
];

const features = [
  {
    icon: CloudUpload,
    title: 'Media-first storage',
    text: 'Upload images, video, audio, documents, and app assets into organized buckets with versioning and lifecycle rules.'
  },
  {
    icon: Globe2,
    title: 'Global CDN delivery',
    text: 'Serve optimized files through edge caching, smart routing, compression, and signed delivery URLs.'
  },
  {
    icon: Braces,
    title: 'Developer APIs',
    text: 'Use REST endpoints, SDK-ready auth, webhooks, and predictable responses for automated content pipelines.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    text: 'Control access with scoped API keys, signed URLs, private buckets, audit events, and encrypted storage.'
  }
];

const services = [
  {
    title: 'Global CDN acceleration',
    text: 'Deliver websites, applications, images, video, and downloads through edge caching, compression, and fast route selection.'
  },
  {
    title: 'Object and media storage',
    text: 'Store customer uploads, static assets, documents, and transformed media in organized buckets with lifecycle controls.'
  },
  {
    title: 'Image and video optimization',
    text: 'Generate responsive image sizes, compressed variants, posters, previews, and streaming-ready media outputs.'
  },
  {
    title: 'Signed URL delivery',
    text: 'Protect private content, paid downloads, learning files, and member-only media with expiring tokenized links.'
  },
  {
    title: 'Private bucket access',
    text: 'Keep sensitive files away from public delivery while still allowing controlled API, admin, and app access.'
  },
  {
    title: 'Realtime traffic analytics',
    text: 'Monitor requests, bandwidth, cache hit ratio, geographic demand, edge latency, and delivery errors.'
  },
  {
    title: 'Cache purge automation',
    text: 'Clear stale files by URL, prefix, bucket, tag, or deployment event when your product content changes.'
  },
  {
    title: 'Developer API integration',
    text: 'Connect uploads, transforms, asset metadata, access policies, and delivery events into your application workflow.'
  }
];

const workflow = [
  { icon: CloudUpload, title: 'Upload', detail: 'Push assets from dashboard, API, CLI, or CI workflows.' },
  { icon: DatabaseZap, title: 'Optimize', detail: 'Transform, compress, resize, and cache media automatically.' },
  { icon: Globe2, title: 'Deliver', detail: 'Ship files from the nearest edge with usage analytics.' }
];

const homeUseCases = [
  {
    icon: FileCode2,
    title: 'SaaS products',
    text: 'Host customer files, product assets, exports, invoices, and private downloads behind reliable access rules.'
  },
  {
    icon: Play,
    title: 'Video and learning',
    text: 'Deliver course media, previews, member files, and streaming-ready content with signed delivery options.'
  },
  {
    icon: Boxes,
    title: 'Marketplaces',
    text: 'Manage seller uploads, product images, documents, and user-generated assets through controlled storage.'
  },
  {
    icon: Workflow,
    title: 'Agencies and dev teams',
    text: 'Automate client asset deployment, cache purges, image variants, and media delivery from CI workflows.'
  }
];

const homeSecurity = [
  'Scoped API keys for frontend, backend, and automation',
  'Signed URLs for private media and time-limited downloads',
  'Private buckets with controlled delivery policies',
  'Realtime logs for cache, bandwidth, and error visibility'
];

const showcaseTabs = [
  {
    id: 'cdn',
    label: 'CDN delivery',
    title: 'Route every request through a faster edge layer.',
    text: 'Set cache behavior, signed delivery, compression, origin fallback, and purge rules without managing CDN infrastructure manually.',
    stat: '220+ edge locations',
    items: ['Smart cache policies', 'Instant purge controls', 'Bandwidth and hit-ratio analytics']
  },
  {
    id: 'storage',
    label: 'Storage control',
    title: 'Keep public and private media in clean buckets.',
    text: 'Organize customer uploads, product media, downloads, and transformed files with lifecycle rules and scoped access.',
    stat: 'Private and public buckets',
    items: ['Lifecycle management', 'Signed URL access', 'Scoped API keys']
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Connect media workflows to your product logic.',
    text: 'Trigger uploads, metadata changes, webhooks, cache purges, and transformed variants from your backend or CI pipeline.',
    stat: 'API-first workflows',
    items: ['Upload sessions', 'Webhook events', 'CI deployment hooks']
  }
];

const faqs = [
  {
    question: 'Can MediaCloudHub serve both public and private files?',
    answer: 'Yes. You can keep public assets on CDN URLs and protect private media with signed URLs, private buckets, and scoped API keys.'
  },
  {
    question: 'Is this only for images?',
    answer: 'No. MediaCloudHub is designed for images, video, audio, documents, static assets, app downloads, customer uploads, and transformed media.'
  },
  {
    question: 'Can developers automate uploads and cache purges?',
    answer: 'Yes. The platform is API-first, so uploads, metadata, webhooks, access rules, and cache purge workflows can be connected to your app or CI pipeline.'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$19',
    cadence: '/month',
    description: 'For small apps, portfolios, and early product teams launching media delivery.',
    features: ['100 GB storage', '500 GB CDN bandwidth', 'Public buckets', 'Basic image optimization', 'Email support'],
    cta: 'Start Starter'
  },
  {
    name: 'Growth',
    price: '$49',
    cadence: '/month',
    description: 'Larger upload and delivery limits for growing teams.',
    features: ['100 GB storage', '1000 GB CDN bandwidth', '1,000,000 API calls', '512 MB upload limit', '15 day trial', 'Private buckets'],
    cta: 'Choose Growth',
    featured: true
  },
  {
    name: 'Business',
    price: '$199',
    cadence: '/month',
    description: 'High-volume media plan with large upload support.',
    features: ['500 GB storage', '5000 GB CDN bandwidth', '5,000,000 API calls', '2048 MB upload limit', '15 day trial', 'Priority support'],
    cta: 'Choose Business'
  }
];

const codeSample = `const media = await mch.files.upload({
  bucket: 'production-assets',
  file: './banner-video.mp4',
  access: 'signed',
  transform: {
    video: 'streaming',
    poster: true
  }
});

return media.cdn_url;`;

function getRoute() {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const pathRoute = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  if (routes[pathRoute]) {
    return pathRoute;
  }

  const hash = window.location.hash.replace('#/', '').replace('#', '');
  return routes[hash] ? hash : 'home';
}

function routePath(route) {
  return route === 'home' ? '/' : `/${route}`;
}

function navigateRoute(route, event) {
  if (event) {
    event.preventDefault();
  }

  window.history.pushState({}, '', routePath(route));
  window.dispatchEvent(new Event('popstate'));
}

function updateMetaTag(selector, attribute, value) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    const [name, content] = selector.includes('property=')
      ? ['property', selector.match(/property="([^"]+)"/)?.[1]]
      : ['name', selector.match(/name="([^"]+)"/)?.[1]];
    tag.setAttribute(name, content);
    document.head.appendChild(tag);
  }

  tag.setAttribute(attribute, value);
}

function updateLinkTag(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [activeRoute, setActiveRoute] = useState(getRoute);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const meta = seo[activeRoute] || seo.home;
    const canonical = `${baseUrl}${routePath(activeRoute)}`;
    const image = meta.image || `${baseUrl}/og-image.jpg`;

    document.title = meta.title;
    updateMetaTag('meta[name="description"]', 'content', meta.description);
    updateMetaTag('meta[name="robots"]', 'content', 'index, follow');
    updateMetaTag('meta[property="og:title"]', 'content', meta.title);
    updateMetaTag('meta[property="og:description"]', 'content', meta.description);
    updateMetaTag('meta[property="og:url"]', 'content', canonical);
    updateMetaTag('meta[property="og:image"]', 'content', image);
    updateMetaTag('meta[property="og:type"]', 'content', activeRoute === 'home' ? 'website' : 'article');
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', meta.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', meta.description);
    updateMetaTag('meta[name="twitter:image"]', 'content', image);
    updateLinkTag('canonical', canonical);
  }, [activeRoute]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right'));
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      animatedElements.forEach((element) => element.classList.add('in-view'));
      return undefined;
    }

    animatedElements.forEach((element) => element.classList.remove('in-view'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -90px 0px',
        threshold: 0.14
      }
    );

    const frame = window.requestAnimationFrame(() => {
      animatedElements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [activeRoute]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className="site-shell">
      <Nav activeRoute={activeRoute} theme={theme} onThemeToggle={toggleTheme} />
      {activeRoute === 'home' && <HomePage />}
      {activeRoute === 'about' && <AboutPage />}
      {activeRoute === 'services' && <ServicesPage />}
      {activeRoute === 'pricing' && <PricingPage />}
      {activeRoute === 'cdn' && <CdnPage />}
      {activeRoute === 'storage' && <StoragePage />}
      {activeRoute === 'developers' && <DevelopersPage />}
      {activeRoute === 'contact' && <ContactPage />}
      {activeRoute === 'terms' && <LegalPage type="terms" />}
      {activeRoute === 'privacy' && <LegalPage type="privacy" />}
      {activeRoute === 'conditions' && <LegalPage type="conditions" />}
      <Footer />
    </main>
  );
}

function Nav({ activeRoute, theme, onThemeToggle }) {
  const mainLinks = ['home', 'about', 'services', 'pricing', 'cdn', 'storage', 'developers', 'contact'];
  const [mobileOpen, setMobileOpen] = useState(false);
  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  const handleNavClick = (route, event) => {
    setMobileOpen(false);
    navigateRoute(route, event);
  };

  return (
    <nav className="nav-bar solid-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a className="brand" href={routePath('home')} onClick={(event) => handleNavClick('home', event)} aria-label="MediaCloudHub home">
          <span className="brand-mark">
            <Layers3 size={22} aria-hidden="true" />
          </span>
          <span>MediaCloudHub</span>
        </a>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {mainLinks.map((route) => (
            route === 'services' ? (
              <div className="services-nav-item" key={route}>
                <a className={activeRoute === route ? 'active' : ''} href={routePath(route)} onClick={(event) => handleNavClick(route, event)}>
                  {routes[route]}
                  <ChevronRight size={15} aria-hidden="true" />
                </a>
                <div className="services-mega" aria-label="Services menu">
                  <div className="services-mega-intro">
                    <p className="eyebrow">
                      <Boxes size={16} aria-hidden="true" />
                      Services
                    </p>
                    <h3>Managed media infrastructure for production teams.</h3>
                    <p>Choose the services your app needs now, then add storage, delivery, security, and automation as traffic grows.</p>
                    <a className="mega-cta" href={routePath('services')} onClick={(event) => handleNavClick('services', event)}>
                      View all services
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                  <div className="services-mega-grid">
                    {services.slice(0, 6).map((service, index) => {
                      const icons = [Globe2, CloudUpload, DatabaseZap, LockKeyhole, ShieldCheck, Activity];
                      const Icon = icons[index];
                      return (
                        <a href={routePath('services')} onClick={(event) => handleNavClick('services', event)} key={service.title}>
                          <Icon size={20} aria-hidden="true" />
                          <span>
                            <strong>{service.title}</strong>
                            <small>{service.text}</small>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a className={activeRoute === route ? 'active' : ''} href={routePath(route)} onClick={(event) => handleNavClick(route, event)} key={route}>
                {routes[route]}
              </a>
            )
          ))}
          <a className="mobile-register-link" href={appRegisterUrl} target="_blank" rel="noreferrer">
            Register
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="nav-mega" aria-label="Platform quick links">
          <button type="button">
            Platform
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          <div className="mega-panel">
            <a href={routePath('cdn')} onClick={(event) => handleNavClick('cdn', event)}>
              <Globe2 size={20} aria-hidden="true" />
              <span><strong>CDN Network</strong><small>Fast global edge delivery</small></span>
            </a>
            <a href={routePath('storage')} onClick={(event) => handleNavClick('storage', event)}>
              <CloudUpload size={20} aria-hidden="true" />
              <span><strong>Cloud Storage</strong><small>Public and private buckets</small></span>
            </a>
            <a href={routePath('developers')} onClick={(event) => handleNavClick('developers', event)}>
              <Code2 size={20} aria-hidden="true" />
              <span><strong>Developer APIs</strong><small>Uploads, webhooks, purges</small></span>
            </a>
          </div>
        </div>
        <a className="nav-action" href={appLoginUrl} target="_blank" rel="noreferrer">
          <TerminalSquare size={18} aria-hidden="true" />
          Login
        </a>
        <a className="nav-action nav-register" href={appRegisterUrl} target="_blank" rel="noreferrer">
          <ArrowRight size={18} aria-hidden="true" />
          Register
        </a>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={onThemeToggle}
        >
          <ThemeIcon size={19} aria-hidden="true" />
        </button>
        <button className="mobile-menu" type="button" aria-label="Navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <EdgeMap />
        </div>
        <div className="hero-image-stack" aria-label="Media delivery infrastructure imagery">
          <figure className="hero-blend-image hero-blend-main">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82" alt="Cloud infrastructure server racks for media delivery" />
          </figure>
          <figure className="hero-blend-image hero-blend-top">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=82" alt="Developers reviewing cloud platform dashboards" />
          </figure>
          <figure className="hero-blend-image hero-blend-bottom">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82" alt="Media workflow dashboard on a laptop" />
          </figure>
        </div>
        <div className="hero-content animate-hero">
          <p className="eyebrow motion-item">
            <Zap size={16} aria-hidden="true" />
            CDN storage built for media-heavy products
          </p>
          <h1 className="motion-item">MediaCloudHub</h1>
          <p className="hero-copy motion-item">
            Store, optimize, secure, and deliver your application media through a developer-ready CDN platform.
            One clean API for uploads, transformations, signed URLs, analytics, and global edge delivery.
          </p>
          <div className="hero-actions motion-item">
            <a className="primary-button" href={appRegisterUrl} target="_blank" rel="noreferrer">
              <Play size={18} aria-hidden="true" />
              Start building
            </a>
            <a className="secondary-button" href={routePath('services')} onClick={(event) => navigateRoute('services', event)}>
              Explore platform
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Metrics />
      <HomeImageBand />
      <HomeInteractiveShowcase />
      <FeatureSection />
      <HomeUseCases />
      <DeveloperSection />
      <WorkflowSection />
      <HomeSecuritySection />
      <DeliveryStackSection />
      <OperationsBand />
      <HomeFaq />
      <CtaBand />
    </>
  );
}

function HomeImageBand() {
  return (
    <section className="home-image-band reveal" aria-label="MediaCloudHub platform visuals">
      <figure className="blend-card blend-card-large">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=82" alt="Product team planning a media infrastructure workflow" />
        <figcaption>
          <span>Media teams</span>
          Upload, optimize, and ship assets from one workflow.
        </figcaption>
      </figure>
      <figure className="blend-card">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=82" alt="Analytics dashboard showing traffic and performance charts" />
        <figcaption>
          <span>Realtime analytics</span>
          Track bandwidth, cache behavior, and edge delivery.
        </figcaption>
      </figure>
      <figure className="blend-card">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=82" alt="Developers collaborating around cloud software" />
        <figcaption>
          <span>Developer ready</span>
          Connect storage, signed URLs, APIs, and automation.
        </figcaption>
      </figure>
    </section>
  );
}

function AboutPage() {
  return (
    <StandardPage
      eyebrow="About MediaCloudHub"
      title="A CDN storage company for builders shipping media at scale."
      intro="MediaCloudHub helps product teams, agencies, marketplaces, education platforms, OTT brands, and SaaS companies manage heavy media without building storage and delivery infrastructure from scratch."
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Developers working together on cloud infrastructure dashboards"
    >
      <div className="split-section page-split">
        <div className="developer-copy">
          <h2>Our mission</h2>
          <p>
            We make cloud media infrastructure practical for developers: simple enough for a startup launch,
            reliable enough for production traffic, and flexible enough for custom workflows.
          </p>
          <ul className="check-list">
            <li><Check size={18} aria-hidden="true" />Media delivery with clear controls and predictable APIs</li>
            <li><Check size={18} aria-hidden="true" />Storage that supports private, public, and signed assets</li>
            <li><Check size={18} aria-hidden="true" />Support for teams that need implementation guidance</li>
          </ul>
        </div>
        <div className="values-panel">
          <InfoRow icon={Globe2} title="Global by design" text="Edge-first delivery for audiences across regions." />
          <InfoRow icon={Code2} title="Developer friendly" text="Clean endpoints, webhooks, keys, and examples." />
          <InfoRow icon={ShieldCheck} title="Security-minded" text="Private access, audit trails, encryption, and signed URLs." />
        </div>
      </div>
      <section className="section compact-section">
        <div className="section-heading">
          <p className="eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            What we focus on
          </p>
          <h2>Reliable media infrastructure without operational clutter.</h2>
        </div>
        <div className="workflow-grid">
          <FeatureCard icon={Gauge} title="Performance" text="Fast asset delivery, strong cache behavior, and routing built for traffic spikes." />
          <FeatureCard icon={LockKeyhole} title="Control" text="Private buckets, signed URLs, scoped keys, and account-level policies for safer delivery." />
          <FeatureCard icon={Headphones} title="Support" text="Practical help for migrations, launch planning, production setup, and developer integration." />
        </div>
      </section>
      <PageCta title="Ready to plan your media delivery setup?" text="Share your storage, CDN, or migration goals and we will help map the right MediaCloudHub configuration." />
    </StandardPage>
  );
}

function ServicesPage() {
  return (
    <StandardPage
      eyebrow="Services"
      title="CDN, storage, optimization, and developer integration services."
      intro="Use MediaCloudHub as a managed layer for the media features your product depends on every day."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Server racks and cloud infrastructure hardware"
    >
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <Check size={20} aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
      <PageCta title="Need a managed CDN and storage layer?" text="We can help with new deployments, migrations from existing storage, and application-level media workflows." />
    </StandardPage>
  );
}

function PricingPage() {
  return (
    <StandardPage
      eyebrow="Pricing"
      title="Simple pricing for CDN storage that can grow with your product."
      intro="Choose a plan for prototypes, production applications, or high-volume media delivery. Each plan includes storage, CDN delivery, developer APIs, and secure asset controls."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Pricing and financial planning dashboard on a desk"
    >
      <section className="pricing-page">
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <article className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`} key={plan.name} style={{ '--delay': `${index * 90}ms` }}>
              {plan.featured && <span className="plan-badge">Popular</span>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="plan-price">
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="primary-button"
                href={plan.price === 'Custom' ? routePath('contact') : appRegisterUrl}
                target={plan.price === 'Custom' ? undefined : '_blank'}
                rel={plan.price === 'Custom' ? undefined : 'noreferrer'}
                onClick={plan.price === 'Custom' ? (event) => navigateRoute('contact', event) : undefined}
              >
                {plan.cta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="section compact-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Gauge size={16} aria-hidden="true" />
            Included
          </p>
          <h2>Every plan includes the foundations for reliable media delivery.</h2>
        </div>
        <div className="feature-grid">
          <FeatureCard icon={Globe2} title="Global CDN" text="Serve assets from a delivery layer built for fast, consistent access across regions." />
          <FeatureCard icon={Code2} title="Developer APIs" text="Automate uploads, metadata, access policies, cache purges, and delivery workflows." />
          <FeatureCard icon={ShieldCheck} title="Secure controls" text="Use private buckets, scoped keys, signed URLs, and delivery rules for safer access." />
          <FeatureCard icon={Activity} title="Usage visibility" text="Track bandwidth, requests, cache behavior, and delivery health as your traffic grows." />
        </div>
      </section>
      <PageCta title="Need a custom CDN storage plan?" text="Tell us your expected storage, bandwidth, traffic regions, and security requirements." />
    </StandardPage>
  );
}

function CdnPage() {
  return (
    <StandardPage
      eyebrow="CDN Network"
      title="Fast global delivery for images, video, apps, downloads, and static files."
      intro="Route user requests through distributed edge locations, smart caching rules, compression, and instant purge controls."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Earth from space representing global CDN delivery"
    >
      <div className="feature-grid page-card-grid">
        <FeatureCard icon={Gauge} title="Performance rules" text="Tune cache headers, compression, redirects, and origin fallback behavior." />
        <FeatureCard icon={Zap} title="Instant purge" text="Clear stale assets by URL, path prefix, bucket, tag, or deployment event." />
        <FeatureCard icon={LockKeyhole} title="Signed delivery" text="Protect paid, private, or time-limited files with tokenized links." />
        <FeatureCard icon={Activity} title="Traffic analytics" text="Track requests, bandwidth, hit ratio, edge latency, and errors." />
      </div>
      <OperationsBand />
      <PageCta title="Speed up your existing media domain." text="Connect your assets to MediaCloudHub CDN delivery and get better caching, security, and visibility." />
    </StandardPage>
  );
}

function StoragePage() {
  return (
    <StandardPage
      eyebrow="Cloud Storage"
      title="Organized asset storage for modern media libraries."
      intro="Keep production assets, customer uploads, application files, and transformed media in secure buckets with lifecycle controls."
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Cloud storage and analytics dashboard on a workstation"
    >
      <div className="workflow-grid page-card-grid">
        <FeatureCard icon={CloudUpload} title="Large file uploads" text="Upload from the browser, server, dashboard, or automated deployment pipeline." />
        <FeatureCard icon={DatabaseZap} title="Transform pipeline" text="Generate responsive images, previews, compressed variants, and streamable video." />
        <FeatureCard icon={KeyRound} title="Access control" text="Use private buckets, scoped API keys, signed URLs, and role-based controls." />
      </div>
      <section className="section compact-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Boxes size={16} aria-hidden="true" />
            Storage use cases
          </p>
          <h2>Keep product media organized from upload to delivery.</h2>
        </div>
        <div className="feature-grid">
          <FeatureCard icon={FileCode2} title="Application assets" text="Host static files, release assets, customer downloads, and product documents." />
          <FeatureCard icon={Globe2} title="Public media libraries" text="Deliver images, videos, course files, marketplace media, and marketing assets globally." />
          <FeatureCard icon={ShieldCheck} title="Private files" text="Store sensitive uploads behind signed links, private buckets, and controlled API access." />
          <FeatureCard icon={Workflow} title="Automation" text="Trigger transforms, metadata updates, webhooks, and cache purges from your app workflow." />
        </div>
      </section>
      <PageCta title="Move your media storage into a cleaner workflow." text="Tell us what you store today and how your users access it." />
    </StandardPage>
  );
}

function DevelopersPage() {
  return (
    <StandardPage
      eyebrow="Developers"
      title="APIs, SDK patterns, and automation for media delivery."
      intro="Build file upload flows, content libraries, protected downloads, and media optimization into your product with clear primitives."
      image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Developer writing code for cloud services"
    >
      <DeveloperSection />
      <section className="section compact-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Workflow size={16} aria-hidden="true" />
            Integration paths
          </p>
          <h2>Connect the way your product already works.</h2>
        </div>
        <div className="workflow-grid">
          <FeatureCard icon={ServerCog} title="Backend API" text="Issue signed upload sessions and manage files from your application server." />
          <FeatureCard icon={FileCode2} title="Frontend uploads" text="Let users upload directly through short-lived keys and validated upload rules." />
          <FeatureCard icon={Workflow} title="CI automation" text="Publish static assets, purge paths, and tag releases from your deployment pipeline." />
        </div>
      </section>
      <PageCta title="Build against the MediaCloudHub platform." text="Use the login page to access your console, or contact us for API onboarding and integration planning." />
    </StandardPage>
  );
}

function ContactPage() {
  return (
    <StandardPage
      eyebrow="Contact Us"
      title="Talk to MediaCloudHub about CDN storage for your product."
      intro="Send a project brief, integration question, or support request. We will help you choose the right setup for your media workflow."
      image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Support team discussing a customer project"
    >
      <div className="contact-layout">
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Project type
            <select name="type" defaultValue="cdn">
              <option value="cdn">CDN delivery</option>
              <option value="storage">Cloud storage</option>
              <option value="media">Media optimization</option>
              <option value="developer">Developer integration</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us what you are building" rows="6" />
          </label>
          <button className="primary-button form-button" type="button">
            Send message
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
        <div className="values-panel">
          <InfoRow icon={Mail} title="Email" text="hello@mediacloudhub.com" />
          <InfoRow icon={Phone} title="Mobile" text="+94 72 978 4444" />
          <InfoRow icon={MapPin} title="Address" text="512/9 Highlevel Rd, Pannipitiya" />
          <InfoRow icon={Headphones} title="Support" text="Implementation help, migration planning, and account support." />
        </div>
      </div>
      <section className="section compact-section">
        <div className="feature-grid">
          <FeatureCard icon={ServerCog} title="Technical setup" text="Get help planning origins, buckets, cache rules, signing, and deployment flows." />
          <FeatureCard icon={Globe2} title="Migration planning" text="Move existing assets from local storage, object storage, or another CDN with fewer surprises." />
          <FeatureCard icon={Activity} title="Production review" text="Review bandwidth expectations, delivery patterns, private content, and monitoring needs." />
          <FeatureCard icon={ShieldCheck} title="Security questions" text="Discuss access policies, signed URLs, abuse controls, and private media delivery." />
        </div>
      </section>
    </StandardPage>
  );
}

function LegalPage({ type }) {
  const content = {
    terms: {
      eyebrow: 'Terms',
      title: 'Terms of Service',
      intro: 'These terms outline the basic responsibilities for using MediaCloudHub CDN storage, media delivery, APIs, dashboards, and support services.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=82',
      imageAlt: 'Business documents and contract review on a desk',
      sections: [
        { title: 'Account responsibilities', text: 'Customers are responsible for keeping login credentials, API keys, billing details, and account users accurate and secure.' },
        { title: 'Service usage', text: 'MediaCloudHub services must be used for lawful storage, optimization, delivery, and management of digital files and application assets.' },
        { title: 'Billing and plan limits', text: 'Usage may be measured by storage, bandwidth, requests, transformations, team seats, or agreed service limits shown in the selected plan.' },
        { title: 'Suspension and termination', text: 'Accounts may be limited, suspended, or terminated if usage creates security risk, unpaid balances, abuse, or violation of these terms.' },
        { title: 'Liability and warranties', text: 'Services are provided with reasonable care, but customers remain responsible for backups, legal rights to content, and production implementation choices.' }
      ]
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Privacy Policy',
      intro: 'This policy explains the types of information MediaCloudHub may process to provide accounts, storage, CDN delivery, analytics, and support.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=82',
      imageAlt: 'Security and privacy controls on a computer screen',
      sections: [
        { title: 'Information we collect', text: 'We may process account details, contact information, billing references, support messages, technical logs, device data, and CDN usage analytics.' },
        { title: 'How information is used', text: 'Information is used to provide the platform, secure accounts, process support requests, monitor reliability, prevent abuse, and improve service quality.' },
        { title: 'Data retention', text: 'Operational logs, account records, and support history are retained only as needed for service operation, legal compliance, security, and customer support.' },
        { title: 'Security controls', text: 'MediaCloudHub uses access controls, encryption, audit practices, monitoring, and scoped permissions to reduce unauthorized access risk.' },
        { title: 'Customer rights and requests', text: 'Customers may contact us to request account updates, data export guidance, deletion workflows, or privacy-related support.' }
      ]
    },
    conditions: {
      eyebrow: 'Conditions',
      title: 'Acceptable Use and Conditions',
      intro: 'These conditions define safe, lawful, and fair use of MediaCloudHub CDN storage and related developer services.',
      sections: [
        { title: 'Prohibited content', text: 'Do not store or distribute malware, illegal content, stolen data, abusive material, or files that violate another party rights.' },
        { title: 'Abuse prevention', text: 'Do not use the platform for spam, credential theft, traffic flooding, deceptive downloads, unauthorized scraping, or harmful automation.' },
        { title: 'Bandwidth fairness', text: 'Traffic should follow the selected plan and agreed use case. Unusual spikes, resale patterns, or abusive delivery may require review.' },
        { title: 'Security testing rules', text: 'Security testing must be authorized, scoped, and non-disruptive. Testing may not target other customers, shared infrastructure, or third-party systems.' },
        { title: 'Content takedown process', text: 'MediaCloudHub may review reported content, request customer response, restrict access, or remove delivery for verified legal or safety issues.' }
      ]
    }
  }[type];

  return (
    <StandardPage
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
      image={content.image}
      imageAlt={content.imageAlt}
    >
      <div className="legal-list">
        {content.sections.map((section, index) => (
          <article className="legal-item" key={section.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="legal-note">
        This page is provided as website policy content for MediaCloudHub. For contracts, compliance obligations,
        or jurisdiction-specific legal requirements, use the final reviewed company policy.
      </p>
    </StandardPage>
  );
}

function StandardPage({ eyebrow, title, intro, image, imageAlt, children }) {
  return (
    <>
      <section className={`page-hero ${image ? 'page-hero-with-image' : ''}`}>
        <div className="page-hero-copy">
          <p className="eyebrow">
            <ChevronRight size={16} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="page-hero-pills" aria-label="Page highlights">
            <span>CDN ready</span>
            <span>API first</span>
            <span>Secure delivery</span>
          </div>
        </div>
        {image && (
          <figure className="page-hero-image">
            <img src={image} alt={imageAlt} />
          </figure>
        )}
      </section>
      {children}
    </>
  );
}

function HomeInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState(showcaseTabs[0]);

  return (
    <section className="interactive-showcase reveal">
      <div className="showcase-copy">
        <p className="eyebrow">
          <TerminalSquare size={16} aria-hidden="true" />
          Command center
        </p>
        <h2>Control storage, delivery, and automation from one modern workflow.</h2>
        <p>
          Explore how MediaCloudHub connects CDN delivery, secure storage, and developer automation
          into one product-ready media layer.
        </p>
        <div className="showcase-tabs" role="tablist" aria-label="MediaCloudHub workflow tabs">
          {showcaseTabs.map((tab) => (
            <button
              className={activeTab.id === tab.id ? 'active' : ''}
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab.id === tab.id}
              onClick={() => setActiveTab(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="showcase-panel" role="tabpanel">
        <div className="showcase-panel-top">
          <span>{activeTab.stat}</span>
          <Activity size={22} aria-hidden="true" />
        </div>
        <h3>{activeTab.title}</h3>
        <p>{activeTab.text}</p>
        <div className="showcase-list">
          {activeTab.items.map((item) => (
            <span key={item}>
              <Check size={17} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics-strip reveal" aria-label="Platform metrics">
      {metrics.map((metric, index) => (
        <div className="metric" key={metric.label} style={{ '--delay': `${index * 90}ms` }}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="section reveal" id="features">
      <div className="section-heading">
        <p className="eyebrow">
          <Boxes size={16} aria-hidden="true" />
          Platform
        </p>
        <h2>Everything your media pipeline needs before it hits production.</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <article className="feature-card motion-card" style={{ '--delay': `${index * 80}ms` }}>
      <Icon size={24} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function HomeUseCases() {
  return (
    <section className="section home-usecases reveal">
      <div className="section-heading">
        <p className="eyebrow">
          <Globe2 size={16} aria-hidden="true" />
          Use cases
        </p>
        <h2>Built for products where media is part of the core experience.</h2>
      </div>
      <div className="feature-grid">
        {homeUseCases.map((item, index) => (
          <FeatureCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section className="split-section reveal" id="developers">
      <div className="developer-copy slide-in-left">
        <p className="eyebrow">
          <Code2 size={16} aria-hidden="true" />
          Developer experience
        </p>
        <h2>Simple API, serious control.</h2>
        <p>
          MediaCloudHub gives teams a storage layer that feels native to modern product engineering:
          predictable endpoints, webhooks for async workflows, signed URLs for private delivery, and observability
          without digging through infrastructure dashboards.
        </p>
        <ul className="check-list">
          <li><Check size={18} aria-hidden="true" />REST API for uploads, folders, metadata, and delivery rules</li>
          <li><Check size={18} aria-hidden="true" />Scoped keys for frontend, backend, CI, and partner access</li>
          <li><Check size={18} aria-hidden="true" />Realtime delivery logs, bandwidth trends, and cache insights</li>
        </ul>
      </div>
      <div className="code-panel slide-in-right" aria-label="Code example">
        <div className="code-toolbar">
          <span />
          <span />
          <span />
          <p>upload.js</p>
        </div>
        <pre><code>{codeSample}</code></pre>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="section workflow-section reveal" id="workflow">
      <div className="section-heading">
        <p className="eyebrow">
          <Workflow size={16} aria-hidden="true" />
          Workflow
        </p>
        <h2>From source file to global edge in three steps.</h2>
      </div>
      <div className="workflow-grid">
        {workflow.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className="workflow-item motion-card" key={item.title} style={{ '--delay': `${index * 100}ms` }}>
              <span className="step-count">{String(index + 1).padStart(2, '0')}</span>
              <Icon size={26} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function HomeSecuritySection() {
  return (
    <section className="home-security reveal">
      <div className="home-security-copy">
        <p className="eyebrow">
          <ShieldCheck size={16} aria-hidden="true" />
          Security and control
        </p>
        <h2>Private when you need it, fast when users request it.</h2>
        <p>
          MediaCloudHub helps teams protect content without slowing delivery. Use private buckets, signed URLs,
          scoped keys, and clear activity logs to keep storage and CDN behavior understandable.
        </p>
      </div>
      <div className="security-checks">
        {homeSecurity.map((item, index) => (
          <div className="security-check motion-card" key={item} style={{ '--delay': `${index * 80}ms` }}>
            <Check size={18} aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-faq reveal">
      <div className="section-heading">
        <p className="eyebrow">
          <Headphones size={16} aria-hidden="true" />
          Questions
        </p>
        <h2>Common questions before teams connect media delivery.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <article className={`faq-item ${openIndex === index ? 'open' : ''}`} key={faq.question}>
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
              <span>{faq.question}</span>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DeliveryStackSection() {
  return (
    <section className="section delivery-stack reveal">
      <div className="section-heading">
        <p className="eyebrow">
          <ServerCog size={16} aria-hidden="true" />
          Delivery stack
        </p>
        <h2>One platform layer for upload, policy, transform, and delivery.</h2>
      </div>
      <div className="stack-timeline">
        {[
          ['01', 'Ingest', 'Receive uploads from apps, dashboards, servers, or CI workflows.'],
          ['02', 'Process', 'Generate variants, metadata, previews, compression, and delivery settings.'],
          ['03', 'Protect', 'Apply bucket rules, scoped keys, signed URLs, and access policies.'],
          ['04', 'Observe', 'Track edge traffic, cache behavior, bandwidth, and delivery errors.']
        ].map(([number, title, text], index) => (
          <article className="stack-step" key={title} style={{ '--delay': `${index * 90}ms` }}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OperationsBand() {
  return (
    <section className="operations-band reveal">
      <div>
        <p className="eyebrow">
          <Activity size={16} aria-hidden="true" />
          Operations
        </p>
        <h2>Built for the teams keeping media reliable.</h2>
      </div>
      <div className="ops-grid">
        <span><Gauge size={20} aria-hidden="true" />Edge performance rules</span>
        <span><KeyRound size={20} aria-hidden="true" />Tokenized asset access</span>
        <span><LockKeyhole size={20} aria-hidden="true" />Private bucket policies</span>
        <span><FileCode2 size={20} aria-hidden="true" />Webhook automation</span>
        <span><ServerCog size={20} aria-hidden="true" />Origin fallback control</span>
        <span><Zap size={20} aria-hidden="true" />Instant cache purge</span>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="pricing-band reveal" id="pricing">
      <div>
        <p className="eyebrow">Plans</p>
        <h2>Start lean, scale cleanly.</h2>
        <p>Free developer storage for prototypes, production-ready plans for apps with serious traffic.</p>
      </div>
      <a className="primary-button" href={routePath('pricing')} onClick={(event) => navigateRoute('pricing', event)}>
        View pricing
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}

function InfoRow({ icon: Icon, title, text }) {
  return (
    <div className="info-row">
      <Icon size={22} aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function PageCta({ title, text }) {
  return (
    <section className="page-cta">
      <div>
        <p className="eyebrow">
          <Mail size={16} aria-hidden="true" />
          Next step
        </p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <a className="primary-button" href={routePath('contact')} onClick={(event) => navigateRoute('contact', event)}>
        Contact us
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}

function EdgeMap() {
  return (
    <div className="edge-map">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} className={`node node-${index + 1}`} />
      ))}
      <svg viewBox="0 0 900 460" role="img" aria-label="">
        <path d="M94 224 C210 88 326 346 456 202 S704 108 814 248" />
        <path d="M124 318 C266 206 380 222 508 318 S706 394 798 184" />
        <path d="M154 142 C286 188 408 104 520 162 S690 276 786 296" />
      </svg>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrap" id="contact">
      <div className="footer">
        <div className="footer-brand">
          <a className="brand" href={routePath('home')} onClick={(event) => navigateRoute('home', event)}>
            <span className="brand-mark">
              <Layers3 size={22} aria-hidden="true" />
            </span>
            <span>MediaCloudHub</span>
          </a>
          <p>Professional CDN storage, media optimization, and developer delivery tools for modern products.</p>
          <div className="footer-badges" aria-label="Platform highlights">
            <span><ShieldCheck size={16} aria-hidden="true" /> Secure delivery</span>
            <span><Globe2 size={16} aria-hidden="true" /> Global edge</span>
          </div>
          <div className="footer-mini-actions">
            <a href="tel:+94729784444">
              <Phone size={17} aria-hidden="true" />
              Call
            </a>
            <a href="mailto:hello@mediacloudhub.com">
              <Send size={17} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Platform</h3>
            <a href={routePath('cdn')} onClick={(event) => navigateRoute('cdn', event)}>CDN Network</a>
            <a href={routePath('storage')} onClick={(event) => navigateRoute('storage', event)}>Cloud Storage</a>
            <a href={routePath('developers')} onClick={(event) => navigateRoute('developers', event)}>Developer APIs</a>
            <a href={routePath('services')} onClick={(event) => navigateRoute('services', event)}>Services</a>
            <a href={routePath('pricing')} onClick={(event) => navigateRoute('pricing', event)}>Pricing</a>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <a href={routePath('about')} onClick={(event) => navigateRoute('about', event)}>About Us</a>
            <a href={routePath('contact')} onClick={(event) => navigateRoute('contact', event)}>Contact Us</a>
            <a href={appLoginUrl} target="_blank" rel="noreferrer">Login</a>
            <a href={appRegisterUrl} target="_blank" rel="noreferrer">Register</a>
            <a href="mailto:hello@mediacloudhub.com">Sales</a>
            <a href="mailto:hello@mediacloudhub.com">Support</a>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <a href={routePath('terms')} onClick={(event) => navigateRoute('terms', event)}>Terms of Service</a>
            <a href={routePath('privacy')} onClick={(event) => navigateRoute('privacy', event)}>Privacy Policy</a>
            <a href={routePath('conditions')} onClick={(event) => navigateRoute('conditions', event)}>Acceptable Use</a>
            <a href={routePath('conditions')} onClick={(event) => navigateRoute('conditions', event)}>Conditions</a>
          </div>
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <a href="mailto:hello@mediacloudhub.com">hello@mediacloudhub.com</a>
            <a href="tel:+94729784444">+94 72 978 4444</a>
            <span>512/9 Highlevel Rd, Pannipitiya</span>
            <span>Remote-first technical support</span>
            <span>CDN storage consultation</span>
            <a className="footer-cta" href={routePath('contact')} onClick={(event) => navigateRoute('contact', event)}>
              Talk to sales
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-contact-strip">
        <div>
          <Mail size={20} aria-hidden="true" />
          <span>Email</span>
          <a href="mailto:hello@mediacloudhub.com">hello@mediacloudhub.com</a>
        </div>
        <div>
          <Phone size={20} aria-hidden="true" />
          <span>Mobile</span>
          <a href="tel:+94729784444">+94 72 978 4444</a>
        </div>
        <div>
          <MapPin size={20} aria-hidden="true" />
          <span>Address</span>
          <p>512/9 Highlevel Rd, Pannipitiya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright {year} MediaCloudHub. All rights reserved.</p>
        <div>
          <a href={routePath('terms')} onClick={(event) => navigateRoute('terms', event)}>Terms</a>
          <a href={routePath('privacy')} onClick={(event) => navigateRoute('privacy', event)}>Privacy</a>
          <a href={routePath('conditions')} onClick={(event) => navigateRoute('conditions', event)}>Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
