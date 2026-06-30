export default function education(): string {
    return `
<div class="command-output">
  <div class="section-header">ACADEMIC JOURNEY</div>
  
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-date">2025 — 2027 (M1 in progress)</div>
      <div class="timeline-title">Master's Degree — High Performance Computing & Simulation</div>
      <div class="timeline-company">UVSQ Université de Versailles Saint-Quentin-en-Yvelines, France</div>
      <div style="margin-top: 1rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Parallel programming & Distributed systems</div>
        <div class="list-item">Numerical methods & Scientific computing</div>
        <div class="list-item">Performance optimization & Code parallelization</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-date">2021 — 2025</div>
      <div class="timeline-title">Engineer's Degree + Master — Chemical Engineering</div>
      <div class="timeline-company">École Nationale Polytechnique (ENP), Alger, Algeria</div>
      <div style="margin-top: 1rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Process Engineering & Unit Operations</div>
        <div class="list-item">Thermodynamics & Transport Phenomena</div>
        <div class="list-item">Process Simulation & Optimization</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-date">2019 — 2021</div>
      <div class="timeline-title">Preparatory Classes — Scientific Track</div>
      <div class="timeline-company">ESTI Annaba, Algeria</div>
      <div style="margin-top: 1rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Intensive preparation for engineering schools</div>
        <div class="list-item">Mathematics, Physics, Chemistry fundamentals</div>
      </div>
    </div>
  </div>
  
  <div class="section-header">CERTIFICATIONS</div>
  <div class="info-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
    <div class="edu-card" style="border-left: 4px solid var(--accent-green); padding: 1.5rem; background: var(--bg-card); border-radius: 10px;">
      <div class="green" style="font-weight: 600; font-size: var(--font-lg);">Accenture Data Analytics</div>
      <div class="grey" style="margin-top: 0.5rem;">Data Analytics & Visualization Job Simulation</div>
    </div>
    <div class="edu-card" style="border-left: 4px solid var(--accent-yellow); padding: 1.5rem; background: var(--bg-card); border-radius: 10px;">
      <div class="yellow" style="font-weight: 600; font-size: var(--font-lg);">Google Data Analytics</div>
      <div class="grey" style="margin-top: 0.5rem;">Professional Certificate (In Progress)</div>
    </div>
    <div class="edu-card" style="border-left: 4px solid var(--accent-blue); padding: 1.5rem; background: var(--bg-card); border-radius: 10px;">
      <div class="blue" style="font-weight: 600; font-size: var(--font-lg);">Industrial Biotechnology</div>
      <div class="grey" style="margin-top: 0.5rem;">Specialized Certification</div>
    </div>
  </div>
</div>
`;
}
