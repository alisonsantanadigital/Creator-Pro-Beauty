'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CREATOR_PROFILE } from '@/data/creator-data';

const NAV_ITEMS = [
  { label: 'Audiência', href: '#audiencia' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Parcerias', href: '#parcerias' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E3D7CE] bg-[#FAF7F4]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          className="font-editorial text-2xl font-medium tracking-[0.06em] text-[#3A2821] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]/40"
        >
          {CREATOR_PROFILE.brandTitle}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6B534A] underline-offset-4 transition-colors duration-150 hover:text-[#3A2821] hover:underline whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA button + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[#3A2821] px-5 py-2.5 text-xs font-medium tracking-wide text-[#FAF7F4] transition-colors duration-150 hover:bg-[#291B16] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
          >
            Solicitar Proposta
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#E3D7CE] text-[#3A2821] transition-colors hover:bg-[#F3ECE6] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[#E3D7CE] bg-[#FAF7F4] px-6 py-5 md:hidden"
          >
            <nav aria-label="Menu mobile" className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[44px] items-center border-b border-[#EDE3DA] text-base font-medium text-[#3A2821] transition-colors hover:text-[#6B534A]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[#3A2821] px-5 py-3 text-sm font-medium text-[#FAF7F4] transition-colors hover:bg-[#291B16]"
              >
                Solicitar Proposta Comercial
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
