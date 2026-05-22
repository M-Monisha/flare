
import ResultsComponent from "@/components/Results"

interface ResultsProps {
    openModal: () => void;
}

export default function Results({ openModal }: ResultsProps) {
    return (
        <main className="pt-24 pb-12 min-h-screen">
            <ResultsComponent openModal={openModal} />
        </main>
    );
}
