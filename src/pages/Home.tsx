import { SplineHero } from "@/components/SplineHero"
import GrowthStack from "@/components/GrowthStack"
import WhyFlare from "@/components/WhyFlare"

interface HomeProps {
    openModal: () => void;
}

export default function Home({ openModal: _openModal }: HomeProps) {
    return (
        <main>
            <SplineHero />
            <GrowthStack />
            <WhyFlare />
        </main>
    );
}
