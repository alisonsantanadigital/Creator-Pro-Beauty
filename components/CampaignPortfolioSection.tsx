'use client';

import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import EditorialImage from '@/components/EditorialImage';
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
        <div className="flex flex-col justify-between gap-6 border-b border-[#E3D7CE] pb-8 lg:flex-row lg:items-end">
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
                  className={`min-h-[38px] rounded-sm px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821] ${
                    isActive
                      ? 'bg-[#3A2821] text-[#FAF7F4]'
                      : 'text-[#6B534A] hover:bg-[#F3ECE6] hover:text-[#3A2821]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Editorial Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredCampaigns.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#FAF7F4]"
            >
              <button
                type="button"
                onClick={() => setSelectedCampaign(item)}
                aria-label={`Ampliar campanha ${item.title}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE3DA] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3A2821]"
              >
                <EditorialImage
                  src={item.image}
                  alt={item.imageAlt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackTitle={item.title}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-sm bg-[#3A2821]/85 px-3 py-1.5 text-xs font-medium text-[#FAF7F4] opacity-95 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Detalhes</span>
                </span>
              </button>

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
        </div>
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
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] md:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setSelectedCampaign(null)}
                aria-label="Fechar visualização"
                className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#E3D7CE] bg-[#FAF7F4]/95 text-[#3A2821] transition-colors hover:bg-[#EDE3DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="relative aspect-[4/3] w-full bg-[#EDE3DA] md:col-span-7 md:aspect-auto md:min-h-[420px]">
                <EditorialImage
                  src={selectedCampaign.image}
                  alt={selectedCampaign.imageAlt}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  fallbackTitle={selectedCampaign.title}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-5">
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

                <a
                  href="#contato"
                  onClick={() => setSelectedCampaign(null)}
                  className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#3A2821] px-5 py-3 text-xs font-medium tracking-wide text-[#FAF7F4] transition-colors hover:bg-[#291B16]"
                >
                  Solicitar campanha neste estilo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
