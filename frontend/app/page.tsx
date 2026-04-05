import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Activity, Target } from 'lucide-react';

export default function Home() {
    return (
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 16px" }}>
            {/* Hero Section */}
            <section style={{ textAlign: "center", padding: "4rem 0 3rem" }}>
                <Image src="/center_logo.png" alt="Application Logo" width={200} height={200} priority style={{ display: "inline-block", marginBottom: "2rem" }} />
                <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1.5rem", background: "linear-gradient(to right, #e2e8f0, #94a3b8)", WebkitBackgroundClip: "text", color: "transparent" }}>
                    Accelerating Autism Insights<br />with Machine Learning
                </h1>
                <p style={{ fontSize: "1.25rem", color: "var(--muted)", maxWidth: "700px", margin: "0 auto 3rem", lineHeight: 1.6 }}>
                    A clinical decision-support tool utilizing Logistic Regression, Random Forests, and XGBoost to evaluate ASD characteristics accurately and securely.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <Link href="/screening" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.5rem", background: "#fe70d7", color: "#ffffff", borderRadius: "8px", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none" }}>
                        Run Autism Test <ArrowRight size={20} />
                    </Link>
                    <Link href="/technology" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.5rem", background: "rgba(255,255,255,0.05)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: "8px", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none" }}>
                        View Model Details
                    </Link>
                </div>
            </section>

            {/* Feature Grid */}
            <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", padding: "4rem 0" }}>

                <div style={{ background: "var(--panel)", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                    <ShieldCheck size={36} color="#fe70d7" style={{ marginBottom: "1rem" }} />
                    <h3 style={{ fontSize: "1.25rem", marginTop: 0, marginBottom: "0.75rem" }}>Secure & Confidential</h3>
                    <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                        Data is processed strictly in-memory over HTTPS. Results are returned instantly without persistent storage.
                    </p>
                </div>

                <div style={{ background: "var(--panel)", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                    <Target size={36} color="#fe70d7" style={{ marginBottom: "1rem" }} />
                    <h3 style={{ fontSize: "1.25rem", marginTop: 0, marginBottom: "0.75rem" }}>High Accuracy Ensembles</h3>
                    <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                        Three pre-trained ML models validate exactly 36 behavioral variables to generate precise confidence scores.
                    </p>
                </div>

                <div style={{ background: "var(--panel)", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                    <Activity size={36} color="#fe70d7" style={{ marginBottom: "1rem" }} />
                    <h3 style={{ fontSize: "1.25rem", marginTop: 0, marginBottom: "0.75rem" }}>Live API Health Check</h3>
                    <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                        Our highly available backend guarantees model serialization and dynamic response logic via FastAPI lifetimes.
                    </p>
                </div>
            </section>
        </div>
    );
}
