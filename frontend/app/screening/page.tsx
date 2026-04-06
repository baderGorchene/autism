"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FIELDS } from "../fields";

// 🔥 Dynamic API Base for seamless deployment (Vercel -> Render)
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8001";

export default function Home() {
  const [output, setOutput] = useState<{ type: string; data?: any; message?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {};

    let isValid = true;
    for (const f of FIELDS) {
      const val = formData.get(f.id);

      if (!val || val === "") {
        // Omit the key entirely so Pydantic uses its default=0.0 value
        // Passing null explicitly throws a 422 error because the schema expects a float
        continue;
      }

      const numVal = Number(val);

      if (f.type === "number") {
        if (isNaN(numVal) || (f.min !== undefined && numVal < f.min) || (f.max !== undefined && numVal > f.max)) {
          alert(`Value out of range for: ${f.question}\nExpected ${f.min}–${f.max}`);
          const el = document.getElementById(f.id);
          el?.focus();
          isValid = false;
          break;
        }
      }

      payload[f.question] = numVal;
    }

    if (!isValid) return;

    setOutput({ type: "loading" });
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/v1/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: payload }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));

        if (res.status === 422) {
          throw new Error(data.detail ? JSON.stringify(data.detail) : "Invalid or missing input features.");
        }
        if (res.status === 429) {
          throw new Error("You have exceeded the rate limit. Please wait a moment and try again.");
        }

        throw new Error(data.detail || `API error ${res.status}`);
      }

      const result = await res.json();
      setOutput({ type: "success", data: result });

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setOutput({ type: "error", message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    const form = document.getElementById("intakeForm") as HTMLFormElement;
    form.reset();
    setOutput(null);
  };

  return (
    <div className="wrap">
      <header style={{ border: "none", background: "transparent", padding: 0 }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "var(--text, #ffffff)" }}>
          Fill out the screening form below to request a prediction from our technology
        </h2>
      </header>

      <div style={{
        background: "var(--panel, rgba(255, 255, 255, 0.03))",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid var(--border, rgba(255, 255, 255, 0.1))",
        position: "relative",
        overflow: "hidden",
        marginBottom: "2rem",
        color: "var(--text, #ffffff)"
      }}>
        <div style={{ position: "absolute", top: "-4rem", right: "-4rem", width: "16rem", height: "16rem", background: "rgba(254, 112, 215, 0.15)", filter: "blur(60px)", borderRadius: "50%", zIndex: 0 }}></div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#fe70d7", position: "relative", zIndex: 10 }}>Medical Disclaimer & Tool Guide</h3>
        <p style={{ lineHeight: 1.6, position: "relative", zIndex: 10, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
          This screening tool is designed to support early awareness and professional follow-up. <strong>It does not replace clinical diagnosis.</strong>
          <br /><br />
          If you would like a detailed explanation of the fields and behaviors being screened in the form below, please refer to our comprehensive guide.
        </p>
        <div style={{ position: "relative", zIndex: 10 }}>
          <a href="/SheSignals_Questions_W_Explanation.pdf" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 1.5rem",
            background: "#fe70d7",
            color: "#ffffff",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(254, 112, 215, 0.2)"
          }}>
            <svg style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Fields Explanation Guide (PDF)
          </a>
        </div>
      </div>

      <form id="intakeForm" onSubmit={handleSubmit}>

        {FIELDS.map((f) => (
          <div className="row" key={f.id}>
            <div className="q">{f.question}</div>
            <div className="a">
              {f.type === "select" ? (
                <select id={f.id} name={f.id} required defaultValue="">
                  <option value="" disabled>Select…</option>
                  {f.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={f.id}
                  name={f.id}
                  type="number"
                  min={f.min}
                  max={f.max}
                  step="1"
                  required
                />
              )}
              <div className="hint">{f.hint}</div>
            </div>
          </div>
        ))}

        <div className="actions" style={{ justifyContent: "center", gap: "1rem" }}>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>
          <button type="button" id="clearBtn" onClick={handleClear}>
            Clear Form
          </button>
        </div>
      </form>

      {output && (
        <div className="out" id="output" style={{ marginTop: "2rem" }}>
          {output.type === "loading" && (
            <div style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
              <div className="spinner"></div>
              <p>Analyzing patient metrics...</p>
            </div>
          )}

          {output.type === "error" && (
            <div style={{ background: "#fef2f2", color: "#b91c1c", padding: "1.5rem", borderRadius: "8px", border: "1px solid #fca5a5" }}>
              <h3 style={{ marginTop: 0 }}>Prediction Error</h3>
              <p>{output.message}</p>
            </div>
          )}

          {output.type === "success" && output.data && (
            <div style={{
              background: output.data.prediction === 1 ? "#fff1f2" : "#f0fdf4",
              border: `1px solid ${output.data.prediction === 1 ? "#fda4af" : "#86efac"}`,
              padding: "2rem",
              borderRadius: "8px",
              color: "#0f172a"
            }}>
              <h2 style={{ fontSize: "1.5rem", marginTop: 0, color: output.data.prediction === 1 ? "#be123c" : "#15803d" }}>
                {output.data.Recommendation}
              </h2>

              <div style={{ display: "flex", gap: "2rem", marginTop: "1.5rem" }}>
                <div>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "#64748b" }}>Model Used</p>
                  <p style={{ margin: "0.25rem 0 0", fontWeight: 600 }}>{output.data.model_used}</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "#64748b" }}>Confidence</p>
                  <p style={{ margin: "0.25rem 0 0", fontWeight: 600 }}>
                    {Math.round(output.data.probability[String(output.data.prediction)] * 100)}%
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "4rem", marginBottom: "2rem" }}>
        <Link href="/">
          <button style={{ padding: "12px 24px", fontSize: "14pt" }}>BACK TO HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
}
