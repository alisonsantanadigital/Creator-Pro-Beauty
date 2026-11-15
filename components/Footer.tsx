import { EditorialReveal } from '@/components/EditorialMotion';
import { CREATOR_PROFILE } from '@/data/creator-data';

export default function Footer() {
  return (
    <footer className="border-t border-[#E3D7CE] bg-[#FAF7F4] py-10">
      <EditorialReveal className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#EDE3DA] pb-8 md:flex-row md:items-center">
          <div>
            <p className="font-editorial text-2xl font-medium tracking-[0.06em] text-[#3A2821]">
              {CREATOR_PROFILE.brandTitle}
            </p>
            <p className="mt-1 text-xs text-[#6B534A]">
              Desenvolvido pela agência {CREATOR_PROFILE.agencyName} · Edição
              Luxury Beauty
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#6B534A]"
          >
            <a href="#inicio" className="transition-colors hover:text-[#3A2821]">
              Início
            </a>
            <a href="#audiencia" className="transition-colors hover:text-[#3A2821]">
              Audiência
            </a>
            <a href="#sobre" className="transition-colors hover:text-[#3A2821]">
              Sobre
            </a>
            <a href="#portfolio" className="transition-colors hover:text-[#3A2821]">
              Portfólio
            </a>
            <a href="#parcerias" className="transition-colors hover:text-[#3A2821]">
              Parcerias
            </a>
            <a href="#contato" className="transition-colors hover:text-[#3A2821]">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 text-xs leading-relaxed text-[#7C6359] md:flex-row md:items-center">
          <p>{CREATOR_PROFILE.demonstrativeNotice}</p>
          <p className="whitespace-nowrap shrink-0">
            © 2026 {CREATOR_PROFILE.agencyName}
          </p>
        </div>
      </EditorialReveal>
    </footer>
  );
}
