import React from 'react';
import { Terminal, Brain, Mail, ExternalLink, Layers } from 'lucide-react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0B0A12', color: '#F3F4F6', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid #231E39', background: '#0F0E1C' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', color: '#A78BFA' }}>
          <Terminal size={22} />
          <span>sharjeel@giki:~</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ color: '#9CA3AF', textDecoration: 'none' }}>About</a>
          <a href="#skills" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Skills</a>
          <a href="#projects" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Projects</a>
        </div>
      </nav>

      <header id="about" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', background: 'linear-gradient(to right, #C084FC, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Hello, I am Sharjeel
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#9CA3AF', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: '1.7' }}>
          I am a Data Sciences bachelor's student at <strong>GIKI</strong>, aspiring to bridge the gap between heavy statistical intelligence and automated systems infrastructure as an <strong>MLOps Engineer & Manager</strong>.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/ghost-412" target="_blank" rel="noreferrer" style={{ backgroundColor: '#6D28D9', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            GitHub Profile <ExternalLink size={16} />
          </a>
          <a href="https://linkedin.com/in/sharjeel-ellahi-37369b326" target="_blank" rel="noreferrer" style={{ border: '1px solid #231E39', backgroundColor: '#141226', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            LinkedIn Profile
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </header>

      <section id="skills" style={{ backgroundColor: '#0F0E1C', padding: '4rem 2rem', borderTop: '1px solid #231E39', borderBottom: '1px solid #231E39' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#A78BFA', borderLeft: '4px solid #6D28D9', paddingLeft: '0.75rem' }}>Core Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#141226', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #231E39' }}>
              <Brain style={{ color: '#C084FC', marginBottom: '1rem' }} size={32} />
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Data Science & Analytics</h3>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Statistical modeling, machine learning algorithms, dataset curation, and predictive analytical frameworks.</p>
            </div>
            <div style={{ background: '#141226', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #231E39' }}>
              <Layers style={{ color: '#818CF8', marginBottom: '1rem' }} size={32} />
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>MLOps Infrastructure</h3>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Automating machine learning lifecycles, data versioning pipelines, and robust production model orchestration.</p>
            </div>
            <div style={{ background: '#141226', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #231E39' }}>
              <Terminal style={{ color: '#34D399', marginBottom: '1rem' }} size={32} />
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>DevOps Automation</h3>
              <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Constructing unified workflows, automated linting/testing engines, and target cloud environmental scaling.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#A78BFA', borderLeft: '4px solid #6D28D9', paddingLeft: '0.75rem' }}>Featured Projects</h2>
        <div style={{ background: '#0F0E1C', border: '1px solid #231E39', borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', backgroundColor: '#2E1065', color: '#C084FC', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: '600', marginRight: '0.5rem' }}>Python / MLOps</span>
              <span style={{ fontSize: '0.8rem', backgroundColor: '#064E3B', color: '#34D399', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: '600' }}>Lightweight Engine</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.75rem 0 0 0' }}>DataDoc AI / Caliber AI</h3>
            </div>
            <a href="https://github.com/ghost-412" target="_blank" rel="noreferrer" style={{ color: '#A78BFA', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem' }}>
              View Repository <ExternalLink size={16} />
            </a>
          </div>

          <p style={{ color: '#9CA3AF', margin: 0, lineHeight: '1.6' }}>
            A high-performance MLOps telemetry platform engineered to monitor dataset integrity and detect silent model degradation. Avoiding the footprint of bloated enterprise testing suites, I designed and built a <strong>100% custom validation and statistical engine</strong> entirely in in-memory vectorized Pandas, NumPy, and SciPy to process production data batches against golden baseline datasets in real-time.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', margin: '0.5rem 0' }}>
            
            <div style={{ background: '#141226', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #231E39' }}>
              <h4 style={{ color: '#C084FC', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎯 Caliber AI: Statistical Drift
              </h4>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                Executes type-aware mathematical divergence telemetry with sample-size safeguards ($N \ge 30$):
              </p>
              <ul style={{ color: '#9CA3AF', fontSize: '0.85rem', paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                <li><strong>Continuous Features:</strong> Two-Sample Kolmogorov-Smirnov (KS-Test) checks continuous distribution divergence.</li>
                <li><strong>Categorical Features:</strong> Chi-Square ($\chi^2$) Contingency testing utilizing Laplace smoothing ($+0.5$) for bin alignment and stability.</li>
                <li><strong>Population Stability Index (PSI):</strong> Projects data over 10 equal-frequency baseline buckets with logarithmic safety offsets ($\epsilon = 10^{-4}$) to trigger retrains when $PSI > 0.2$.</li>
              </ul>
            </div>

            <div style={{ background: '#141226', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #231E39' }}>
              <h4 style={{ color: '#818CF8', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🩺 DataDoc AI: Diagnostic Health
              </h4>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                Runs instant multi-layered diagnostic checks prior to running intensive statistical sweeps:
              </p>
              <ul style={{ color: '#9CA3AF', fontSize: '0.85rem', paddingLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                <li><strong>Thresholded Null Alerts:</strong> Flags and halts drift runs on columns exceeding $40\%$ missing rates, recommending specific median/placeholder imputations.</li>
                <li><strong>Outliers & Skews:</strong> Implements Interquartile Range boundary evaluations ($1.5 \times IQR$) to catch outliers and flags target class imbalance skew exceeding $75\%$.</li>
                <li><strong>Metadata Filtering:</strong> Runs regex constraints to identify non-predictive tracking keys alongside row redundancy diagnostics.</li>
              </ul>
            </div>

          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['SciPy (Stats)', 'Vectorized Pandas', 'NumPy', 'Streamlit', 'Statistical Drift', 'Data Validation'].map((tech) => (
              <span key={tech} style={{ fontSize: '0.85rem', color: '#9CA3AF', backgroundColor: '#141226', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #231E39' }}>{tech}</span>
            ))}
          </div>

        </div>
      </section>

      <footer style={{ borderTop: '1px solid #231E39', padding: '2.5rem 2rem', textAlign: 'center', backgroundColor: '#0F0E1C', color: '#6B7280', fontSize: '0.9rem' }}>
        <p style={{ margin: '0 0 1rem 0' }}>Built from scratch with React & Vite inside WSL.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="mailto:your-email@example.com" style={{ color: '#9CA3AF', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
            <Mail size={16} /> Contact
          </a>
        </div>
      </footer>

    </div>
  );
}