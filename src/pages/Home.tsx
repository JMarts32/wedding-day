import Hero from "../components/Hero"
import FloralBackground from "../components/FloralBackground"
import Section from "../components/Section"
import Countdown from "../components/Countdown"
import AudioCard from "../components/AudioCard"
import PhotoStrip from "../components/PhotoStrip"
import InfoCards from "../components/InfoCards"
import Timeline from "../components/Timeline"
import DressCode from "../components/DressCode"
import Envelope from "../components/Envelope"
import Recommendations from "../components/Recomendations"
import RSVP from "../components/RSVP"
import { useT } from "../i18n/LocaleContext"
// import DividerFlourish from "../components/DividerFlourish"

export default function Home() {
  const t = useT()

  return (
    <div className="min-h-screen text-sand-500">
      <FloralBackground />
      <Hero />

      <Section>
        <div className="text-center">
          <div className="invite-text mb-3 font-bold text-[22px]">{t.welcome.title}</div>

          <p className="invite-text text-[23px] sm:text-[20px]">
            {t.welcome.p1}
            <span className="font-bold">{t.welcome.p1bold}</span>
          </p>

          <p className="invite-text text-[23px] sm:text-[20px] mt-6">
            {t.welcome.p2}
            <span className="font-bold text-sand-500/90">{t.welcome.p2bold}</span>
            {t.welcome.p2end}
          </p>

          <p className="invite-text text-[23px] sm:text-[20px] mt-6 font-bold">
            {t.welcome.p3}
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-[clamp(3.5rem,14vw,6rem)] text-sand-500 font-['Brittany','Great_Vibes',cursive]">
          {t.countdown.title}
        </h2>

        <div className="mt-6">
          <Countdown targetIso="2026-06-27T16:00:00-05:00" />
        </div>

        <div className="mt-8">
          <AudioCard />
        </div>
      </Section>

      <Section>
        <PhotoStrip />
      </Section>

      <Section>
        <InfoCards />
      </Section>

      <Section className="pb-2 sm:pb-3">
        <Timeline />
      </Section>

      <Section className="pt-2 sm:pt-3">
        <DressCode />
      </Section>

      <Section>
        <Envelope />
      </Section>

      <Section>
        <Recommendations />
      </Section>

      <Section>
        <RSVP />
      </Section>

      <footer className="py-10 text-center text-xs font-sans tracking-wide text-sand-500/60">
        {t.footer}
      </footer>
    </div>
  )
}
