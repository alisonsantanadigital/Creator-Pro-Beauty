'use client';

import { motion } from 'motion/react';
import EditorialImage from '@/components/EditorialImage';
import { ABOUT_CONTENT, CREATOR_PROFILE } from '@/data/creator-data';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-b border-[#E3D7CE] bg-[#FAF7F4] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Close-Up Skincare Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#E3D7CE] bg-[#EDE3DA] lg:h-full lg:min-h-[580px]">
              <EditorialImage
                src={CREATOR_PROFILE.aboutImage}
                alt={CREATOR_PROFILE.aboutImageAlt}
                sizes="(max-width: 1024px) 100vw, 42vw"
                fallbackTitle="Pele & Skincare Editorial"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Biography, Specialties & Differentiators */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
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

              {/* Specialties Grid */}
              <div className="mt-10 border-t border-[#E3D7CE] pt-8">
                <h3 className="text-xs font-medium tracking-[0.12em] text-[#6B534A] uppercase">
                  Especialidades & Estilo de Conteúdo
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {ABOUT_CONTENT.specialties.map((item) => (
                    <div
                      key={item.index}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Creator Differentiators */}
            <div className="mt-8 rounded-sm border border-[#E3D7CE] bg-[#F3ECE6] p-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
