'use client';

import { motion } from 'motion/react';
import EditorialImage from '@/components/EditorialImage';
import {
  EDITORIAL_EASE,
  EditorialReveal,
  VIEWPORT_ONCE,
} from '@/components/EditorialMotion';
import { ABOUT_CONTENT, CREATOR_PROFILE } from '@/data/creator-data';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-b border-[#E3D7CE] bg-[#FAF7F4] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Close-Up Skincare Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
            className="flex justify-center lg:col-span-5 lg:justify-start"
          >
            <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#EDE3DA] sm:max-w-[290px] lg:aspect-[4/5] lg:max-w-[380px]">
              <EditorialImage
                src={CREATOR_PROFILE.aboutImage}
                alt={CREATOR_PROFILE.aboutImageAlt}
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 290px, 380px"
                fallbackTitle="Pele & Skincare Editorial"
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </div>
          </motion.div>

          {/* Right Column: Biography, Specialties & Differentiators */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <EditorialReveal>
                <p className="text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase">
                  02. Sobre a Criadora
                </p>
                <h2 className="mt-2 font-editorial text-3xl font-normal tracking-tight text-[#3A2821] sm:text-4xl text-balance">
                  {ABOUT_CONTENT.headline}
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5C463D]">
                  {ABOUT_CONTENT.biography.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </EditorialReveal>

              {/* Specialties Grid */}
              <div className="mt-10 border-t border-[#E3D7CE] pt-8">
                <h3 className="text-xs font-medium tracking-[0.12em] text-[#6B534A] uppercase">
                  Especialidades & Estilo de Conteúdo
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {ABOUT_CONTENT.specialties.map((item, idx) => (
                    <motion.div
                      key={item.index}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VIEWPORT_ONCE}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.06,
                        ease: EDITORIAL_EASE,
                      }}
                      className="border-b border-[#EDE3DA] pb-5"
                    >
                      <p className="text-xs font-medium text-[#7C6359] tabular-figures">
                        {item.index}.
                      </p>
                      <h4 className="mt-1 font-editorial text-xl font-medium text-[#3A2821]">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B534A]">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Creator Differentiators */}
            <EditorialReveal
              delay={0.12}
              className="mt-8 rounded-sm border border-[#E3D7CE] bg-[#F3ECE6] p-6"
            >
              <h3 className="text-xs font-medium tracking-[0.12em] text-[#6B534A] uppercase">
                Diferenciais para Marcas
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT_CONTENT.differentials.map((diff) => (
                  <li
                    key={diff.slice(0, 24)}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3A2821]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3A2821]"
                    />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </EditorialReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
