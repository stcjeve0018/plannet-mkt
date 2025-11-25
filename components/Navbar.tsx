import Link from 'next/link';
import { siteConfig } from '@/data/content';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {siteConfig.name}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {siteConfig.navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button (暫留位置) */}
        <div className="md:hidden text-white">
            Menu
        </div>
      </div>
    </nav>
  );
}