'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Snowflake } from 'lucide-react'
import BeforeAfter from './components/BeforeAfter'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020B14] text-white">
      <motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020B14]/75 backdrop-blur-2xl"
>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">

<div className="relative flex items-center justify-center">

  {/* glow */}
  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />

  {/* logo */}
  <img
    src="/logo.png"
    alt="MXB Logo"
    className="relative h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]"
  />
</div>

<div className="leading-tight">

  <div className="text-sm font-medium text-slate-400">
  Hausmeisterservice & Dienstleistung
  </div>

</div>

</div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#leistungen" className="hover:text-cyan-300">Leistungen</a>
            <a href="#vergleich" className="hover:text-cyan-300">Vergleich</a>
            <a href="#about" className="hover:text-cyan-300">Über uns</a>
            <a href="#kontakt" className="hover:text-cyan-300">Kontakt</a>
          </div>

          
        </div>
        </motion.nav>

        <section className="relative flex min-h-screen items-center px-6 pb-20 pt-36">
      <div className="absolute inset-0 overflow-hidden">

<motion.div
  animate={{
    x: [0, 40, -20, 0],
    y: [0, -30, 20, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute left-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[140px]"
/>

<motion.div
  animate={{
    x: [0, -40, 20, 0],
    y: [0, 40, -10, 0],
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="absolute bottom-[-20%] right-[-10%] h-[620px] w-[620px] rounded-full bg-blue-600/20 blur-[160px]"
/>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%)]" />

<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#020B14)]" />
</div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
  <img
    src="/logo.png"
    alt="MXB Background Logo"
    className="w-[700px] max-w-[90vw] object-contain"
  />
</div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Premium Objektbetreuung in Schleswig-Holstein
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl text-4xl">
            Zuverlässige Betreuung für gepflegte Immobilien und professionelle Außenwirkung
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
  Strukturierte Objektpflege, saubere Ausführung und zuverlässige Betreuung
  für Eigentümer, Verwaltungen und gewerbliche Immobilien.
</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black shadow-[0_0_45px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight size={18} />
              </a>

              <a
                href="#leistungen"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-cyan-400/50"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {['Zuverlässig', 'Termintreu', 'Klare Kommunikation', 'Werterhaltung'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-cyan-300" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <img
                src="/hero-worker.png"
                alt="Gepflegte Immobilie"
                className="h-[520px] w-full rounded-[1.5rem] object-cover object-center brightness-[0.82] contrast-110 saturate-110"
              />

            </div>
          </motion.div>
        </div>
      </section>
      <SectionDivider />
      <PremiumComparisons />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
<ContactSection />
<Footer />
<FloatingContactButton />
    </main>
  )
}
function PremiumComparisons() {
  const comparisons = [
    {
      label: 'GLASREINIGUNG',
      title: 'Klare Sicht durch professionelle Glaspflege',
      text: 'Verschmutzte Glasflächen, Wasserflecken und matte Rückstände werden sichtbar reduziert. Das Ergebnis ist ein gepflegter, klarer und repräsentativer Eindruck.',
      points: ['Streifenfreie Glasflächen', 'Gepflegte Eingangsbereiche', 'Repräsentative Außenwirkung'],
      beforeImage: '/comparisons/glass-before.webp',
      afterImage: '/comparisons/glass-after.webp',
      reverse: false,
    },
    {
      label: 'WINTERDIENST',
      title: 'Sichere Wege bei Schnee und Glätte',
      text: 'Verschneite und vereiste Wege werden zuverlässig geräumt und gestreut. So bleibt der Zugang zur Immobilie sicherer, ordentlicher und besser nutzbar.',
      points: ['Geräumte Zugangswege', 'Unterstützung sicherer Wege', 'Ordentliche Außenbereiche im Winter'],
      beforeImage: '/comparisons/winter-before.webp',
      afterImage: '/comparisons/winter-after.webp',
      reverse: true,
    },
    {
      label: 'WOHNUNGSREINIGUNG',
      title: 'Saubere Wohnräume mit gepflegter Wirkung',
      text: 'Unordnung, Staub und sichtbare Verschmutzungen werden sorgfältig entfernt. Das Ergebnis ist ein sauberer, frischer und wohnlicher Eindruck.',
      points: ['Gründliche Reinigung', 'Ordentliche Raumwirkung', 'Frischer Wohnbereich'],
      beforeImage: '/comparisons/apartment-before.webp',
      afterImage: '/comparisons/apartment-after.webp',
      reverse: false,
    },
    {
      label: 'RAUMAUFBEREITUNG',
      title: 'Frische Räume mit moderner Ausstrahlung',
      text: 'Matt wirkende Räume erhalten durch sorgfältige Aufbereitung, Ordnung und saubere Flächen eine deutlich gepflegtere Wirkung.',
      points: ['Gepflegte Oberflächen', 'Ordentliche Raumwirkung', 'Sauberer Gesamteindruck'],
      beforeImage: '/comparisons/room-before.webp',
      afterImage: '/comparisons/room-after.webp',
      reverse: true,
    },
  ]

  return (
    <section id="vergleich" className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            INTERAKTIVE VERGLEICHE
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Sehen Sie den Unterschied
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Bewegen Sie den Regler und erleben Sie, wie gepflegte Flächen,
            sichere Wege und saubere Räume sichtbar entstehen.
          </p>
        </div>

        <div className="space-y-28">
          {comparisons.map((item) => (
            <div key={item.label} className="grid items-center gap-12 lg:grid-cols-2">
              {!item.reverse && (
                <BeforeAfter
                  title={item.label}
                  subtitle={item.title}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
              )}

              <div>
                <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
                  {item.label}
                </div>

                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {item.title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  {item.text}
                </p>

                <div className="mt-8 space-y-3 text-slate-300">
                  {item.points.map((point) => (
                    <div key={point}>✓ {point}</div>
                  ))}
                </div>
              </div>

              {item.reverse && (
                <BeforeAfter
                  title={item.label}
                  subtitle={item.title}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
function SectionDivider() {
  return (
    <div className="relative h-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 bg-cyan-400/10 blur-3xl" />
    </div>
  )
}
function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: 'Glasreinigung',
      text: 'Sorgfältige Reinigung von Glasflächen, Fenstern und Eingangsbereichen für ein gepflegtes Erscheinungsbild.',
    },
    {
      icon: Sparkles,
      title: 'Treppenhausreinigung',
      text: 'Regelmäßige Reinigung von Treppenhäusern, Fluren und gemeinschaftlich genutzten Bereichen.',
    },
    {
      icon: Snowflake,
      title: 'Winterdienst',
      text: 'Schneeräumung und Streudienst zur Unterstützung sicherer Wege in der kalten Jahreszeit.',
    },
    {
      icon: Sparkles,
      title: 'Gartenpflege',
      text: 'Pflege von Grünflächen, Rückschnittarbeiten und Ordnung in Außenanlagen.',
    },
    {
      icon: Sparkles,
      title: 'Gebäudepflege',
      text: 'Strukturierte Betreuung von Liegenschaften mit Fokus auf Sauberkeit, Ordnung und Werterhaltung.',
    },
    {
      icon: Sparkles,
      title: 'Sichtkontrollen',
      text: 'Regelmäßige Sichtkontrollen und einfache Funktionsprüfungen im Rahmen des Hausmeisterservices.',
    },
  ]

  return (
    <section id="leistungen" className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            LEISTUNGEN
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Unsere Leistungen im Überblick
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Von Glasreinigung über Winterdienst bis zur laufenden Objektbetreuung – MXB unterstützt private, gewerbliche und verwaltete Immobilien mit klar definierten Leistungen.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/45"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {service.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
function AboutSection() {
  const values = [
    'Klare Kommunikation',
    'Saubere Ausführung',
    'Termintreue Betreuung',
    'Fokus auf Werterhaltung',
  ]

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
  <img
    src="/logo.png"
    alt="MXB Background Logo"
    className="w-[700px] max-w-[90vw] object-contain"
  />
</div>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            ÜBER MXB
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          So arbeitet MXB
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-slate-300">
            MXB Hausmeisterservice & Dienstleistung steht für zuverlässige,
            saubere und praxisorientierte Betreuung von Liegenschaften,
            Gebäudebereichen und Außenanlagen.
          </p>

          <p className="mt-5 leading-relaxed text-slate-400">
            Unser Ziel ist es, Immobilien in einem gepflegten, ordentlichen und
            funktionsfähigen Zustand zu halten – mit klarer Abstimmung,
            strukturierter Arbeitsweise und verlässlicher Ausführung.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-cyan-300" size={20} />
                {value}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-cyan-400/20 via-slate-800 to-slate-950 p-8">
              <div className="grid gap-6">
                {[
                  ['01', 'Anfrage aufnehmen'],
                  ['02', 'Bedarf sauber klären'],
                  ['03', 'Transparentes Angebot'],
                  ['04', 'Zuverlässige Ausführung'],
                ].map(([number, text]) => (
                  <div
                    key={number}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-lg font-bold text-black">
                      {number}
                    </div>
                    <div className="font-semibold text-white">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!isValid) return

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="relative px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              KONTAKT
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Jetzt unverbindlich anfragen
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Schreiben Sie uns kurz, welche Leistung Sie benötigen. Wir melden
              uns zeitnah mit einer klaren Rückmeldung.
            </p>

            <div className="mt-10 space-y-4 text-slate-300">
  <div>
    Telefon:{' '}
    <a href="tel:+4917683325207" className="text-cyan-300 hover:text-cyan-200">
      +49 176 83325207
    </a>
  </div>

  <div>
    E-Mail:{' '}
    <a href="mailto:kontakt@mxb-h.com" className="text-cyan-300 hover:text-cyan-200">
    kontakt@mxb-h.com
    </a>
  </div>

  <div>
    Adresse:{' '}
    <a
      href="https://www.google.com/maps/search/?api=1&query=Am%20Krankenhaus%2014%2C%2024211%20Preetz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-300 hover:text-cyan-200"
    >
      Am Krankenhaus 14, 24211 Preetz
    </a>
  </div>

  <div>Region: Schleswig-Holstein</div>
</div>
<div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10">
  <iframe
    title="MXB Standort auf Google Maps"
    src="https://www.google.com/maps?q=Am%20Krankenhaus%2014%2C%2024211%20Preetz&output=embed"
    className="h-[360px] w-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Name *"
              className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            />

<input
  name="phone"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  placeholder="Telefon"
  className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
/>

            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="E-Mail *"
              className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            />

            <textarea
              name="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Nachricht *"
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={!isValid || status === 'sending'}
              className="w-full rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black shadow-[0_0_45px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300 disabled:shadow-none"
            >
              {status === 'sending' ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>

            {status === 'success' && (
              <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-300">
                Ihre Anfrage wurde erfolgreich gesendet.
              </p>
            )}

            {status === 'error' && (
              <p className="rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-sm text-red-300">
                Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es
                später erneut.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-14 text-sm text-slate-400">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold text-white">MXB</div>
          <div className="mt-2 text-slate-400">
          Hausmeisterservice & Dienstleistung
          </div>
        </div>

        <div>
          <div className="mb-3 font-semibold text-white">Leistungen</div>
          <div className="space-y-2">
            <div>Objektbetreuung</div>
            <div>Glasreinigung</div>
            <div>Winterdienst</div>
            <div>Gartenpflege</div>
          </div>
        </div>

        <div>
          <div className="mb-3 font-semibold text-white">Hinweis</div>
          <p className="leading-relaxed">
            Es werden ausschließlich Tätigkeiten im Rahmen zulassungsfreier und
            nicht eintragungspflichtiger Leistungen ausgeführt.
          </p>
        </div>
        <div className="flex gap-6 pt-6 text-sm">
  <a href="/impressum" className="hover:text-cyan-300">
    Impressum
  </a>

  <a href="/datenschutz" className="hover:text-cyan-300">
    Datenschutz
  </a>
</div>
<div className="mt-6 flex flex-wrap gap-3">
  <a href="#" className="rounded-full border border-white/10 px-4 py-2 hover:border-cyan-400 hover:text-cyan-300">
    Facebook
  </a>
  <a href="#" className="rounded-full border border-white/10 px-4 py-2 hover:border-cyan-400 hover:text-cyan-300">
    Instagram
  </a>
  <a href="#" className="rounded-full border border-white/10 px-4 py-2 hover:border-cyan-400 hover:text-cyan-300">
    LinkedIn
  </a>
  <a href="#" className="rounded-full border border-white/10 px-4 py-2 hover:border-cyan-400 hover:text-cyan-300">
    X
  </a>
  <a href="#" className="rounded-full border border-white/10 px-4 py-2 hover:border-cyan-400 hover:text-cyan-300">
    TikTok
  </a>
</div>
      </div>
    </footer>
  )
}
function FloatingContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      <a
  href="https://wa.me/4917683325207"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-[58px] min-w-[210px] items-center justify-center rounded-full bg-[#25D366] px-8 font-bold text-white shadow-[0_0_45px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe5d]"
>
  WhatsApp
</a>

<a
  href="tel:+4917683325207"
  className="flex h-[58px] min-w-[210px] items-center justify-center rounded-full bg-cyan-400 px-8 font-bold text-black shadow-[0_0_45px_rgba(34,211,238,0.55)] transition hover:scale-105 hover:bg-cyan-300"
>
  Jetzt anrufen
</a>

    </div>
  )
}