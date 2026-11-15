'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  EDITORIAL_EASE,
  EditorialReveal,
} from '@/components/EditorialMotion';
import {
  CONTACT_INFO,
  CREATOR_PROFILE,
  PARTNERSHIP_FORMATS,
} from '@/data/creator-data';

interface ContactSectionProps {
  selectedFormatId: string;
  onChangeFormatId: (id: string) => void;
}

export default function ContactSection({
  selectedFormatId,
  onChangeFormatId,
}: ContactSectionProps) {
  const [brandName, setBrandName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [proposalReady, setProposalReady] = useState(false);

  const selectedFormat =
    PARTNERSHIP_FORMATS.find((f) => f.id === selectedFormatId) ??
    PARTNERSHIP_FORMATS[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.emailDisplay);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const buildMessageText = () => {
    const brand = brandName.trim() || 'Marca Parceira';
    const email = contactEmail.trim() || 'Não informado';
    const extra = notes.trim()
      ? `\nBriefing inicial: ${notes.trim()}`
      : '';
    return `Olá equipe PRUMO CREATORS! Gostaria de solicitar uma proposta comercial demonstrativa para parceria com ${CREATOR_PROFILE.creatorName}.\n\nMarca/Empresa: ${brand}\nE-mail de retorno: ${email}\nFormato de interesse: ${selectedFormat.name} (${selectedFormat.channel})${extra}`;
  };

  const validateBeforeAction = () => {
    if (!brandName.trim()) {
      setFeedbackError('Informe o nome da marca ou empresa para compor a solicitação.');
      return false;
    }
    if (contactEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) {
      setFeedbackError('Informe um endereço de e-mail válido.');
      return false;
    }
    setFeedbackError('');
    setProposalReady(true);
    return true;
  };

  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumberRaw}?text=${encodeURIComponent(
    buildMessageText()
  )}`;

  const mailtoHref = `mailto:${CONTACT_INFO.emailDisplay}?subject=${encodeURIComponent(
    `Proposta Comercial (Demo) — ${brandName.trim() || 'Parceria'} × ${CREATOR_PROFILE.creatorName}`
  )}&body=${encodeURIComponent(buildMessageText())}`;

  return (
    <section
      id="contato"
      className="bg-[#EDE3DA]/55 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Demonstrative Channels */}
          <EditorialReveal className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.14em] text-[#6B534A] uppercase">
              05. Contato Comercial
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-normal tracking-tight text-[#3A2821] sm:text-4xl text-balance">
              Solicite uma proposta comercial
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5C463D]">
              Para receber disponibilidade de agenda, valores ilustrativos e
              planejamento personalizado para sua próxima campanha de beleza,
              utilize os canais demonstrativos abaixo.
            </p>

            <div className="mt-8 space-y-4">
              {/* WhatsApp Comercial Demonstrativo */}
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
                className="group flex items-center justify-between rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-5 transition-colors hover:border-[#3A2821] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
              >
                <div className="flex items-start gap-3.5">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3A2821]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                      WhatsApp Comercial (Demo)
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#3A2821] tabular-figures">
                      {CONTACT_INFO.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-[#6B534A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.a>

              {/* Email Demonstrativo */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
                className="flex flex-col justify-between gap-3 rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-5 transition-colors hover:border-[#C99E93] sm:flex-row sm:items-center"
              >
                <a
                  href={mailtoHref}
                  className="flex items-start gap-3.5 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
                >
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3A2821]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                      E-mail Comercial (Demo)
                    </p>
                    <p className="mt-1 break-all text-sm font-medium text-[#3A2821]">
                      {CONTACT_INFO.emailDisplay}
                    </p>
                  </div>
                </a>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  aria-label="Copiar e-mail demonstrativo"
                  className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-sm border border-[#E3D7CE] bg-[#F3ECE6] px-3 py-1.5 text-xs font-medium text-[#3A2821] transition-colors hover:bg-[#E8DFD1] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Instagram Demonstrativo */}
              <motion.a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
                className="group flex items-center justify-between rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-5 transition-colors hover:border-[#3A2821] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
              >
                <div className="flex items-start gap-3.5">
                  <Instagram
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3A2821]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium tracking-[0.08em] text-[#6B534A] uppercase">
                      Instagram (Demo)
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#3A2821]">
                      {CONTACT_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-[#6B534A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.a>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-[#6B534A]">
              {CONTACT_INFO.agencyCredit}
            </p>
          </EditorialReveal>

          {/* Right Column: Commercial Proposal Composer */}
          <EditorialReveal
            delay={0.08}
            className="rounded-sm border border-[#E3D7CE] bg-[#FAF7F4] p-6 sm:p-8 lg:col-span-7"
          >
            <div className="border-b border-[#EDE3DA] pb-5">
              <p className="text-xs font-medium tracking-[0.12em] text-[#6B534A] uppercase">
                Atendimento de Parcerias
              </p>
              <h3 className="mt-1 font-editorial text-2xl font-medium text-[#3A2821]">
                Montar solicitação de proposta
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                validateBeforeAction();
              }}
              noValidate
              className="mt-6 space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="brand-name"
                    className="block text-xs font-medium tracking-[0.06em] text-[#3A2821] uppercase"
                  >
                    Marca ou Empresa *
                  </label>
                  <input
                    id="brand-name"
                    type="text"
                    value={brandName}
                    onChange={(e) => {
                      setBrandName(e.target.value);
                      if (feedbackError) setFeedbackError('');
                    }}
                    placeholder="Ex.: Atelier Lumière (Exemplo)"
                    className="mt-2 block min-h-[44px] w-full rounded-sm border border-[#D9CCB8] bg-[#FAF7F4] px-3.5 py-2.5 text-sm text-[#3A2821] transition-colors placeholder:text-[#9A8379] focus:border-[#3A2821] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium tracking-[0.06em] text-[#3A2821] uppercase"
                  >
                    E-mail Corporativo
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => {
                      setContactEmail(e.target.value);
                      if (feedbackError) setFeedbackError('');
                    }}
                    placeholder="parcerias@suamarca.com.br"
                    className="mt-2 block min-h-[44px] w-full rounded-sm border border-[#D9CCB8] bg-[#FAF7F4] px-3.5 py-2.5 text-sm text-[#3A2821] transition-colors placeholder:text-[#9A8379] focus:border-[#3A2821] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="partnership-format"
                  className="block text-xs font-medium tracking-[0.06em] text-[#3A2821] uppercase"
                >
                  Formato Comercial de Interesse
                </label>
                <select
                  id="partnership-format"
                  value={selectedFormatId}
                  onChange={(e) => onChangeFormatId(e.target.value)}
                  className="mt-2 block min-h-[44px] w-full rounded-sm border border-[#D9CCB8] bg-[#FAF7F4] px-3.5 py-2.5 text-sm text-[#3A2821] transition-colors focus:border-[#3A2821] focus:outline-none"
                >
                  {PARTNERSHIP_FORMATS.map((format) => (
                    <option key={format.id} value={format.id}>
                      {format.index}. {format.name} ({format.channel})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="campaign-notes"
                  className="block text-xs font-medium tracking-[0.06em] text-[#3A2821] uppercase"
                >
                  Objetivo da Campanha ou Produto
                </label>
                <textarea
                  id="campaign-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Descreva brevemente o lançamento, período previsto ou linha de skincare/maquiagem."
                  className="mt-2 block w-full rounded-sm border border-[#D9CCB8] bg-[#FAF7F4] px-3.5 py-2.5 text-sm text-[#3A2821] transition-colors placeholder:text-[#9A8379] focus:border-[#3A2821] focus:outline-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {feedbackError && (
                  <motion.p
                    key="error-msg"
                    role="alert"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: EDITORIAL_EASE }}
                    className="rounded-sm border border-[#C99E93] bg-[#DFC1B8]/25 px-4 py-2.5 text-xs font-medium text-[#3A2821]"
                  >
                    {feedbackError}
                  </motion.p>
                )}

                {proposalReady && !feedbackError && (
                  <motion.div
                    key="ready-msg"
                    role="status"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: EDITORIAL_EASE }}
                    className="rounded-sm border border-[#D9CCB8] bg-[#E8DFD1]/60 px-4 py-3 text-xs leading-relaxed text-[#3A2821]"
                  >
                    Solicitação formatada com sucesso para ambiente demonstrativo.
                    Escolha abaixo o canal para abrir sua mensagem preenchida.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <motion.a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.15, ease: EDITORIAL_EASE }}
                  onClick={(e) => {
                    if (!validateBeforeAction()) {
                      e.preventDefault();
                    }
                  }}
                  className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-sm bg-[#3A2821] px-5 py-3 text-xs font-medium tracking-wide text-[#FAF7F4] transition-colors hover:bg-[#291B16] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar via WhatsApp (Demo)</span>
                </motion.a>

                <motion.a
                  href={mailtoHref}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.15, ease: EDITORIAL_EASE }}
                  onClick={(e) => {
                    if (!validateBeforeAction()) {
                      e.preventDefault();
                    }
                  }}
                  className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-sm border border-[#3A2821] bg-[#FAF7F4] px-5 py-3 text-xs font-medium tracking-wide text-[#3A2821] transition-colors hover:bg-[#F3ECE6] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2821]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar por E-mail (Demo)</span>
                </motion.a>
              </div>
            </form>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
}
