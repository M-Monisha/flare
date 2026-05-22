
import MethodologyComponent from "@/components/Methodology"

interface MethodologyProps {
    openModal: () => void;
}

export default function Methodology({ openModal }: MethodologyProps) {
    return (
        <main className="pt-24 pb-12 min-h-screen">
            <MethodologyComponent openModal={openModal} />
        </main>
    );
}
