'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import EditorialImage from '@/components/EditorialImage';
import { EDITORIAL_EASE, VIEWPORT_ONCE } from '@/components/EditorialMotion';
import { CREATOR_PROFILE } from '@/data/creator-data';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="border-b border-[#E3D7CE] bg-[#FAF7F4] pt-10 pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Hierarchy & Positioning (below photo on mobile) */}
          <div className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-7 lg:py-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
                className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase"
              >
                <span>{CREATOR_PROFILE.agencyName}</span>
                <span aria-hidden="true">·</span>
                <span>{CREATOR_PROFILE.niche}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.06,
                  ease: EDITORIAL_EASE,
                }}
                className="font-editorial text-[clamp(2.75rem,5.2vw,4.5rem)] leading-[1.03] font-normal tracking-tight text-[#3A2821] text-balance"
              >
                {CREATOR_PROFILE.creatorName}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.12,
                  ease: EDITORIAL_EASE,
                }}
                className="mt-6 max-w-xl text-base leading-relaxed text-[#5C463D] sm:text-lg"
              >
                {CREATOR_PROFILE.positioning}
              </motion.p>

              {/* Social Channels Summary */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.18,
                  ease: EDITORIAL_EASE,
                }}
                className="mt-8 grid max-w-lg grid-cols-1 gap-4 border-y border-[#E3D7CE] py-5 sm:grid-cols-2 sm:gap-6"
              >
                {CREATOR_PROFILE.socialSummary.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
                    className="group flex items-start justify-between gap-3 rounded-sm p-1 -m-1 transition-colors hover:bg-[#F3ECE6]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]/40"
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
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Primary CTA & Secondary Link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.24,
                ease: EDITORIAL_EASE,
              }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <motion.a
                href="#contato"
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: EDITORIAL_EASE }}
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-sm bg-[#3A2821] px-7 py-3.5 text-sm font-medium text-[#FAF7F4] transition-colors duration-150 hover:bg-[#291B16] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
              >
                <span>Parcerias Comerciais</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>

              <a
                href="#portfolio"
                className="inline-flex min-h-[46px] items-center text-sm font-medium text-[#3A2821] underline decoration-[#C99E93] underline-offset-8 transition-colors duration-150 hover:text-[#6B534A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]/40"
              >
                Explorar Campanhas Conceituais
              </a>
            </motion.div>
          </div>

          {/* Right Column / Top on Mobile: Beauty Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EDITORIAL_EASE }}
            className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
          >
            <div className="relative aspect-[16/9] w-full max-w-[540px] overflow-hidden rounded-sm bg-[#EDE3DA] lg:aspect-[3/4] lg:max-w-[390px] lg:border lg:border-[#E3D7CE]">
              <EditorialImage
                src={CREATOR_PROFILE.heroImage}
                alt={CREATOR_PROFILE.heroImageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 390px"
                fallbackTitle="Isabela Rocha — Beauty Editorial"
                className="object-cover object-[50%_20%] transition-transform duration-700 ease-out lg:object-top lg:hover:scale-[1.015]"
              />
              {/* Bottom fade into page background on mobile */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF7F4] via-[#FAF7F4]/55 to-transparent lg:hidden"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width Demonstrative Context Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.45, delay: 0.1, ease: EDITORIAL_EASE }}
          className="mt-12 grid grid-cols-1 gap-4 rounded-sm border border-[#E3D7CE] bg-[#F3ECE6] px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
