import { SplineHero } from "@/components/SplineHero"
import GrowthStack from "@/components/GrowthStack"
import WhyFlare from "@/components/WhyFlare"
import Contact from "@/components/Contact"

interface HomeProps {
    openModal: () => void;
}

export default function Home({ openModal }: HomeProps) {
    return (
        <main>
            <SplineHero />
            <GrowthStack />
            <WhyFlare />
            <Contact onOpenModal={openModal} />
        </main>
    );
}
