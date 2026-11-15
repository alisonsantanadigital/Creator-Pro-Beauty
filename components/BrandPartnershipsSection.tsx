'use client';

import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import {
  EDITORIAL_EASE,
  EditorialReveal,
  VIEWPORT_ONCE,
} from '@/components/EditorialMotion';
import {
  PARTNERSHIP_FORMATS,
  type PartnershipFormat,
} from '@/data/creator-data';

interface BrandPartnershipsSectionProps {
  selectedFormatId: string;
  onSelectFormat: (format: PartnershipFormat) => void;
}

export default function BrandPartnershipsSection({
  selectedFormatId,
  onSelectFormat,
}: BrandPartnershipsSectionProps) {
  const handleChooseFormat = (format: PartnershipFormat) => {
    onSelectFormat(format);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="parcerias"
      className="border-b border-[#E3D7CE] bg-[#FAF7F4] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <EditorialReveal className="flex flex-col justify-between gap-4 border-b border-[#E3D7CE] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase">
              04. Brand Partnerships
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-normal tracking-tight text-[#3A2821] sm:text-4xl text-balance">
              Formatos comerciais e colaborações
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6B534A] md:text-right">
            Estruturas desenhadas para lançamentos, educação de produto e
            produção de conteúdo com estética de beleza premium.
          </p>
        </EditorialReveal>

        {/* Commercial Formats Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PARTNERSHIP_FORMATS.map((format, idx) => {
            const isSelected = selectedFormatId === format.id;
            return (
              <motion.article
                key={format.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={VIEWPORT_ONCE}
                transition={{
                  duration: 0.38,
                  delay: idx * 0.05,
                  ease: EDITORIAL_EASE,
                }}
                className={`flex flex-col justify-between rounded-sm border p-6 transition-colors duration-150 sm:p-7 ${
                  isSelected
                    ? 'border-[#3A2821] bg-[#E8DFD1]/65'
                    : 'border-[#E3D7CE] bg-[#F3ECE6]/45 hover:border-[#C99E93]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                    <span>
                      {format.index} · {format.channel}
                    </span>
                    {isSelected && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, ease: EDITORIAL_EASE }}
                        className="inline-flex items-center gap-1 text-[#3A2821]"
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Selecionado</span>
                      </motion.span>
                    )}
                  </div>

                  <h3 className="mt-3 font-editorial text-2xl font-medium text-[#3A2821]">
                    {format.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#5C463D]">
                    {format.summary}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[#E3D7CE] pt-4">
                    {format.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#3A2821]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#6B534A]"
                        />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-[#E3D7CE] pt-4">
                  <p className="text-xs text-[#6B534A]">
                    <span className="font-medium text-[#3A2821]">
                      Indicado para:{' '}
                    </span>
                    {format.idealFor}
                  </p>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.985 }}
                    onClick={() => handleChooseFormat(format)}
                    className={`mt-4 inline-flex min-h-[42px] w-full items-center justify-between rounded-sm px-4 py-2.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821] ${
                      isSelected
                        ? 'bg-[#3A2821] text-[#FAF7F4]'
                        : 'border border-[#3A2821]/25 bg-[#FAF7F4] text-[#3A2821] hover:border-[#3A2821] hover:bg-[#3A2821] hover:text-[#FAF7F4]'
                    }`}
                  >
                    <span>
                      {isSelected
                        ? 'Continuar na proposta'
                        : 'Incluir na proposta'}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
