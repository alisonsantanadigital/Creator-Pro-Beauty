'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import EditorialImage from '@/components/EditorialImage';
import { CREATOR_PROFILE } from '@/data/creator-data';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="border-b border-[#E3D7CE] bg-[#FAF7F4] pt-10 pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Hierarchy & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7 lg:py-4"
          >
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase">
                <span>{CREATOR_PROFILE.agencyName}</span>
                <span aria-hidden="true">·</span>
                <span>{CREATOR_PROFILE.niche}</span>
              </div>

              <h1 className="font-editorial text-[clamp(2.75rem,5.2vw,4.5rem)] leading-[1.03] font-normal tracking-tight text-[#3A2821] text-balance">
                {CREATOR_PROFILE.creatorName}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C463D] sm:text-lg">
                {CREATOR_PROFILE.positioning}
              </p>

              {/* Social Channels Summary */}
              <div className="mt-8 grid max-w-lg grid-cols-1 gap-4 border-y border-[#E3D7CE] py-5 sm:grid-cols-2 sm:gap-6">
                {CREATOR_PROFILE.socialSummary.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]/40"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[#6B534A] uppercase">
                        <span>{social.platform}</span>
                        <span aria-hidden="true">·</span>
                        <span>{social.handle}</span>
                      </div>
                      <p className="mt-1 font-editorial text-3xl font-medium text-[#3A2821] tabular-figures">
                        {social.followers}
                      </p>
                      <p className="text-xs text-[#7C6359]">{social.note}</p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 text-[#6B534A] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Primary CTA & Secondary Link */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#contato"
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-sm bg-[#3A2821] px-7 py-3.5 text-sm font-medium text-[#FAF7F4] transition-colors duration-150 hover:bg-[#291B16] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
              >
                <span>Parcerias Comerciais</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex min-h-[46px] items-center text-sm font-medium text-[#3A2821] underline decoration-[#C99E93] underline-offset-8 transition-colors duration-150 hover:text-[#6B534A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]/40"
              >
                Explorar Campanhas Conceituais
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dominant Beauty Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#EDE3DA] lg:h-full lg:min-h-[540px]">
              <EditorialImage
                src={CREATOR_PROFILE.heroImage}
                alt={CREATOR_PROFILE.heroImageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                fallbackTitle="Isabela Rocha — Beauty Editorial"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width Demonstrative Context Bar */}
        <div className="mt-12 grid grid-cols-1 gap-4 rounded-sm border border-[#E3D7CE] bg-[#F3ECE6] px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div>
            <p className="text-xs font-medium tracking-[0.1em] text-[#6B534A] uppercase">
              Representação Demonstrativa
            </p>
            <p className="mt-1 text-sm font-medium text-[#3A2821]">
              {CREATOR_PROFILE.agencyName}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.1em] text-[#6B534A] uppercase">
              Base Editorial
            </p>
            <p className="mt-1 text-sm font-medium text-[#3A2821]">
              {CREATOR_PROFILE.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.1em] text-[#6B534A] uppercase">
              Segmento Principal
            </p>
            <p className="mt-1 text-sm font-medium text-[#3A2821]">
              Luxury Beauty & Skincare
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.1em] text-[#6B534A] uppercase">
              Natureza dos Dados
            </p>
            <p className="mt-1 text-sm font-medium text-[#3A2821]">
              Métricas e contatos fictícios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
