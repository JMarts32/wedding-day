import Hero from "../components/Hero"
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
// import DividerFlourish from "../components/DividerFlourish"

export default function Home() {
  return (
    <div className="min-h-screen text-sand-500">
      <Hero />

      <Section>
        <div className="text-center">
          <div className="invite-text mb-3 font-bold text-[22px]">¡BIENVENIDOS!</div>

          <p className="invite-text text-[20px] sm:text-[22px]">
            Nos llena de alegría compartir este momento tan especial con ustedes.
            Estamos dando un paso muy importante en nuestras vidas y{" "}
            <span className="font-bold">
              será un honor que nos acompañen a celebrarlo.
            </span>
          </p>

          <p className="invite-text text-[20px] sm:text-[22px] mt-6">
            Hemos preparado este espacio con mucho amor para que{" "}
            <span className="font-bold text-sand-500/90">
              encuentren todos los detalles de nuestra boda
            </span>{" "}
            y puedan ser parte de este día tan significativo para nosotros.
          </p>

          <p className="invite-text text-[20px] sm:text-[22px] mt-6 font-bold">
            Aquí podrás conocer la información del evento.
          </p>
        </div>
      </Section>


      <Section>
        <h2 className=" text-center text-7xl sm:text-8xl text-sand-500 font-['Brittany','Great_Vibes',cursive]">
          Nos vemos en
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

      <Section>
        <Timeline />
      </Section>

      <Section>
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
        Silvia & Owen · 27.06.2026
      </footer>
    </div>
  )
}
