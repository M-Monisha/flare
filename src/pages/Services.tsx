
import ServicesComponent from "@/components/Services"

interface ServicesPageProps {
    openModal: () => void;
}

export default function Services({ openModal }: ServicesPageProps) {
    return (
        <main className="min-h-screen">
            <ServicesComponent openModal={openModal} />
        </main>
    );
}
