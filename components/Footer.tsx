import { siteConfig } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">{siteConfig.name}</h2>
        <p className="text-slate-400 mb-8">{siteConfig.slogan}</p>
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Plannet MKT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}