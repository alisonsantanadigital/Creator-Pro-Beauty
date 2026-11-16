'use client';

import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import EditorialImage from '@/components/EditorialImage';
import {
  EDITORIAL_EASE,
  EditorialReveal,
  VIEWPORT_ONCE,
} from '@/components/EditorialMotion';
import {
  CAMPAIGN_PORTFOLIO,
  type CampaignCategory,
  type CampaignItem,
} from '@/data/creator-data';

const CATEGORIES: CampaignCategory[] = [
  'Todas',
  'Maquiagem',
  'Skincare',
  'Beleza Natural',
  'Autocuidado',
];

export default function CampaignPortfolioSection() {
  const [activeCategory, setActiveCategory] =
    useState<CampaignCategory>('Todas');
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignItem | null>(
    null
  );

  const filteredCampaigns =
    activeCategory === 'Todas'
      ? CAMPAIGN_PORTFOLIO
      : CAMPAIGN_PORTFOLIO.filter((c) => c.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCampaign(null);
      }
    };
    if (selectedCampaign) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCampaign]);

  return (
    <section
      id="portfolio"
      className="border-b border-[#E3D7CE] bg-[#F3ECE6]/55 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header & Category Filter */}
        <EditorialReveal className="flex flex-col justify-between gap-6 border-b border-[#E3D7CE] pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase">
              03. Campaign Portfolio
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-normal tracking-tight text-[#3A2821] sm:text-4xl text-balance">
              Direção visual em campanhas conceituais
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6B534A]">
              Série de quatro produções fictícias que ilustram o padrão estético
              para lançamentos de maquiagem, skincare, beleza natural e
              autocuidado.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar campanhas por categoria"
            className="flex flex-wrap items-center gap-1 rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative min-h-[38px] rounded-sm px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821] ${
                    isActive
                      ? 'text-[#FAF7F4]'
                      : 'text-[#6B534A] hover:bg-[#F3ECE6] hover:text-[#3A2821]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-active-tab"
                      transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                      className="absolute inset-0 rounded-sm bg-[#3A2821]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </EditorialReveal>

        {/* 2x2 Editorial Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ y: -3 }}
                viewport={VIEWPORT_ONCE}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: EDITORIAL_EASE,
                }}
                className="group flex flex-col overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#FAF7F4]"
              >
                <div className="px-6 pt-6 sm:px-7 sm:pt-7">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedCampaign(item)}
                    aria-label={`Ampliar campanha ${item.title}`}
                    className="relative mx-auto block aspect-[16/9] w-full max-w-[280px] overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#EDE3DA] text-left sm:max-w-[420px] lg:max-w-[480px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3A2821]"
                  >
                    <EditorialImage
                      src={item.image}
                      alt={item.imageAlt}
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 480px"
                      fallbackTitle={item.title}
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-sm bg-[#3A2821]/85 px-3 py-1.5 text-xs font-medium text-[#FAF7F4] opacity-95 backdrop-blur-xs transition-all duration-150 group-hover:bg-[#3A2821]">
                      <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Detalhes</span>
                    </span>
                  </motion.button>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[#6B534A] uppercase">
                      <span className="tabular-figures">{item.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Conceitual (Demo)</span>
                    </div>

                    <h3 className="mt-2 font-editorial text-2xl font-medium text-[#3A2821]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C463D]">
                      {item.conceptNote}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#EDE3DA] pt-4 text-xs text-[#6B534A]">
                    <span>{item.suggestedFormat}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedCampaign(item)}
                      className="font-medium text-[#3A2821] underline decoration-[#C99E93] underline-offset-4 transition-colors hover:text-[#6B534A] whitespace-nowrap shrink-0"
                    >
                      Ver ficha
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Editorial Lightbox Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCampaign(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#291B16]/75 p-4 backdrop-blur-xs sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.975 }}
              transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 items-center overflow-y-auto rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-6 sm:p-8 md:grid-cols-12 md:gap-8"
            >
              <motion.button
                type="button"
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelectedCampaign(null)}
                aria-label="Fechar visualização"
                className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#E3D7CE] bg-[#FAF7F4]/95 text-[#3A2821] transition-colors hover:bg-[#EDE3DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </motion.button>

              <div className="md:col-span-7">
                <div className="relative mx-auto aspect-[16/9] w-full max-w-[290px] overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#EDE3DA] sm:max-w-[460px] md:max-w-[520px]">
                  <EditorialImage
                    src={selectedCampaign.image}
                    alt={selectedCampaign.imageAlt}
                    sizes="(max-width: 640px) 290px, (max-width: 768px) 460px, 520px"
                    fallbackTitle={selectedCampaign.title}
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-between md:col-span-5 md:mt-0">
                <div>
                  <p className="text-xs font-medium tracking-[0.12em] text-[#6B534A] uppercase">
                    {selectedCampaign.index} · {selectedCampaign.category}
                  </p>
                  <h3
                    id="lightbox-title"
                    className="mt-2 font-editorial text-3xl font-normal text-[#3A2821]"
                  >
                    {selectedCampaign.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#7C6359]">
                    {selectedCampaign.subtitle}
                  </p>

                  <div className="mt-6 space-y-4 border-t border-[#EDE3DA] pt-5 text-sm leading-relaxed text-[#5C463D]">
                    <div>
                      <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                        Conceito Editorial
                      </p>
                      <p className="mt-1">{selectedCampaign.conceptNote}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                        Direção de Arte
                      </p>
                      <p className="mt-1">{selectedCampaign.visualDirection}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                        Entregáveis Sugeridos
                      </p>
                      <p className="mt-1">{selectedCampaign.suggestedFormat}</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="#contato"
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setSelectedCampaign(null)}
                  className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#3A2821] px-5 py-3 text-xs font-medium tracking-wide text-[#FAF7F4] transition-colors hover:bg-[#291B16]"
                >
                  Solicitar campanha neste estilo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
