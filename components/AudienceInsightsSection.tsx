'use client';

import { motion } from 'motion/react';
import {
  EDITORIAL_EASE,
  EditorialReveal,
  VIEWPORT_ONCE,
} from '@/components/EditorialMotion';
import { AUDIENCE_INSIGHTS } from '@/data/creator-data';

export default function AudienceInsightsSection() {
  const kpiCards = [
    {
      label: 'Base Combinada',
      value: AUDIENCE_INSIGHTS.totalReach,
      sub: 'Seguidores fictícios totais',
    },
    {
      label: 'Impressões Mensais',
      value: AUDIENCE_INSIGHTS.monthlyImpressions,
      sub: 'Média estimada (demo)',
    },
    {
      label: 'Engajamento Médio',
      value: AUDIENCE_INSIGHTS.avgEngagement,
      sub: 'Taxa consolidada (demo)',
    },
    {
      label: 'Taxa de Salvamentos',
      value: AUDIENCE_INSIGHTS.audienceSaveRate,
      sub: 'Conteúdo educativo (demo)',
    },
  ];

  return (
    <section
      id="audiencia"
      className="border-b border-[#E3D7CE] bg-[#F3ECE6]/55 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <EditorialReveal className="flex flex-col justify-between gap-4 border-b border-[#E3D7CE] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase">
              01. Audience Insights
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-normal tracking-tight text-[#3A2821] sm:text-4xl text-balance">
              Alcance, engajamento e perfil da audiência
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-[#6B534A] md:text-right">
            Indicadores fictícios para demonstração comercial de mídia kit no
            segmento de beleza e cuidados pessoais.
          </p>
        </EditorialReveal>

        {/* Top Consolidated Metric Strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {kpiCards.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={VIEWPORT_ONCE}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: EDITORIAL_EASE,
              }}
              className="rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-5 sm:p-6"
            >
              <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                {card.label}
              </p>
              <p className="mt-2 font-editorial text-3xl font-medium text-[#3A2821] tabular-figures sm:text-4xl">
                {card.value}
              </p>
              <p className="mt-1 text-xs text-[#7C6359]">{card.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {AUDIENCE_INSIGHTS.platforms.map((platform, index) => (
            <motion.article
              key={platform.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={VIEWPORT_ONCE}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: EDITORIAL_EASE,
              }}
              className="rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#EDE3DA] pb-4">
                <div>
                  <h3 className="font-editorial text-2xl font-medium text-[#3A2821]">
                    {platform.platform}
                  </h3>
                  <p className="text-xs text-[#6B534A]">
                    {platform.handle} · Dados demonstrativos
                  </p>
                </div>
                <p className="font-editorial text-3xl font-medium text-[#3A2821] tabular-figures">
                  {platform.followers}
                </p>
              </div>

              <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs text-[#6B534A]">Alcance Médio</dt>
                  <dd className="mt-1 text-sm font-medium text-[#3A2821] tabular-figures">
                    {platform.avgReach}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#6B534A]">Engajamento</dt>
                  <dd className="mt-1 text-sm font-medium text-[#3A2821] tabular-figures">
                    {platform.engagementRate}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#6B534A]">Visualizações</dt>
                  <dd className="mt-1 text-sm font-medium text-[#3A2821] tabular-figures">
                    {platform.avgViews}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 border-t border-[#EDE3DA] pt-4 text-xs leading-relaxed text-[#6B534A]">
                <span className="font-medium text-[#3A2821]">
                  Foco de entrega:{' '}
                </span>
                {platform.formatFocus}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Demographics & Interests */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Age */}
          <EditorialReveal
            delay={0.04}
            className="rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-6 sm:p-7"
          >
            <h3 className="font-editorial text-2xl font-medium text-[#3A2821]">
              Perfil Etário
            </h3>
            <p className="mt-1 text-xs text-[#6B534A]">
              Distribuição ilustrativa por faixa de idade
            </p>
            <div className="mt-6 space-y-4">
              {AUDIENCE_INSIGHTS.ageGroups.map((group, idx) => (
                <div key={group.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#3A2821]">{group.label}</span>
                    <span className="font-medium text-[#3A2821] tabular-figures">
                      {group.percentage}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EDE3DA]">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={VIEWPORT_ONCE}
                      transition={{
                        duration: 0.65,
                        delay: 0.1 + idx * 0.06,
                        ease: EDITORIAL_EASE,
                      }}
                      className="h-full origin-left rounded-full bg-[#6B534A]"
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </EditorialReveal>

          {/* Gender & Geography */}
          <EditorialReveal
            delay={0.1}
            className="rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-6 sm:p-7"
          >
            <h3 className="font-editorial text-2xl font-medium text-[#3A2821]">
              Gênero & Regiões
            </h3>
            <p className="mt-1 text-xs text-[#6B534A]">
              Concentração demográfica demonstrativa
            </p>

            <div className="mt-6 space-y-3 border-b border-[#EDE3DA] pb-5">
              {AUDIENCE_INSIGHTS.genderSplit.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-[#5C463D]">{item.label}</span>
                  <span className="font-medium text-[#3A2821] tabular-figures">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {AUDIENCE_INSIGHTS.topLocations.map((loc, idx) => (
                <div key={loc.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#3A2821]">{loc.label}</span>
                    <span className="font-medium text-[#3A2821] tabular-figures">
                      {loc.percentage}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EDE3DA]">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={VIEWPORT_ONCE}
                      transition={{
                        duration: 0.65,
                        delay: 0.15 + idx * 0.06,
                        ease: EDITORIAL_EASE,
                      }}
                      className="h-full origin-left rounded-full bg-[#C99E93]"
                      style={{ width: `${loc.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </EditorialReveal>

          {/* Interests */}
          <EditorialReveal
            delay={0.16}
            className="flex flex-col justify-between rounded-sm border border-[#E3D7CE] bg-[#E8DFD1]/55 p-6 sm:p-7"
          >
            <div>
              <h3 className="font-editorial text-2xl font-medium text-[#3A2821]">
                Interesses da Audiência
              </h3>
              <p className="mt-1 text-xs text-[#6B534A]">
                Temas com maior aderência editorial
              </p>

              <ul className="mt-6 space-y-4">
                {AUDIENCE_INSIGHTS.interests.map((interest, idx) => (
                  <li
                    key={interest}
                    className="flex items-start gap-3 border-b border-[#D9CCB8] pb-3 text-sm leading-relaxed text-[#3A2821] last:border-b-0 last:pb-0"
                  >
                    <span className="mt-0.5 text-xs font-medium text-[#6B534A] tabular-figures">
                      0{idx + 1}.
                    </span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs text-[#6B534A]">
              Nota: Dados apresentados exclusivamente para fins de demonstração
              comercial do formato CREATOR PRO.
            </p>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
}
