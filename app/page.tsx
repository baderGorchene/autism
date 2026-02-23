"use client";

import React, { useState } from "react";
import { FIELDS } from "./fields";

// 🔥 Update this to your current ngrok URL (no trailing slash)
const API_BASE = "https://xxxx.ngrok-free.dev";

export default function Home() {
  const [output, setOutput] = useState("Submission preview will appear here…");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: Record<string, any> = {};

    let isValid = true;
    for (const f of FIELDS) {
      const val = formData.get(f.id);

      if (!val || val === "") {
        payload[f.question] = null;
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

    setOutput("Submitting to model…");
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: payload }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
      }

      const result = await res.json();

      setOutput(
        `✅ MODEL RESPONSE\n\n` +
        `Recommendation (0/1): ${result.Recommendation}\n` +
        `vote_count (0..3): ${result.vote_count}\n` +
        `votes: ${JSON.stringify(result.votes)}\n\n` +
        `Sent features (JSON):\n\n` +
        JSON.stringify(payload, null, 2)
      );
    } catch (err: any) {
      setOutput(
        `❌ ERROR calling model API\n\n${err.message}\n\n` +
        `Troubleshooting:\n` +
        `- Confirm Colab server is running\n` +
        `- Confirm API_BASE matches the latest ngrok URL\n` +
        `- Confirm CORS is enabled on the FastAPI server`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    const form = document.getElementById("intakeForm") as HTMLFormElement;
    form.reset();
    setOutput("Submission preview will appear here…");
  };

  return (
    <div className="wrap">
      <header>
        <h1>Autism Screening Intake (Prototype)</h1>
        <p className="sub">Two-column form generated from your training template. This page collects inputs and shows a JSON preview on submit.</p>
      </header>

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

        <div className="actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button type="button" id="clearBtn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      <div className="out" id="output">
        {output}
      </div>
    </div>
  );
}
