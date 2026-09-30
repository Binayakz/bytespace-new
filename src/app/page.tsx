import {Header} from "@/components/layout/header";

export default function Home() {
    return (
        <>
            <Header/>

            <main id="main-content">
                <section
                    id="home"
                    aria-label="Introduction"
                    className="min-h-[calc(100vh-5rem)] bg-brand-blue"
                />
            </main>
        </>
    );
}
