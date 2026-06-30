export default function about(): string {
    return `
<div class="command-output">
  <div class="profile-card">
    <img src="/profile.png" alt="Abdennour Boulmis" class="profile-image" />
    <div class="profile-info">
      <div class="status-indicator" style="margin-bottom: 0.75rem;">
        <span class="status-dot"></span>
        <span>Open to opportunities</span>
      </div>
      <h2>Abdennour Boulmis</h2>
      <div class="title">Process Engineer • HPC Student • Scientific Computing Enthusiast</div>
      <p style="color: var(--text-secondary); line-height: 1.8; margin-top: 1rem; font-size: var(--font-base);">
        Bridging the gap between chemical engineering principles and high-performance computing. 
        I transform complex physical phenomena into optimized computational solutions.
      </p>
      <div style="margin-top: 1.5rem;">
        <span class="tag tag-primary">CFD</span>
        <span class="tag tag-primary">HPC</span>
        <span class="tag tag-primary">Python</span>
        <span class="tag tag-primary">C++</span>
        <span class="tag tag-primary">OpenMP</span>
        <span class="tag">ANSYS Fluent</span>
        <span class="tag">Machine Learning</span>
      </div>
    </div>
  </div>
  
  <div class="section-header">MISSION STATEMENT</div>
  <div class="quote-box">
    From molecular interactions to massive parallel computations — 
    I believe the most elegant solutions emerge at the intersection of 
    <span class="cyan">physics</span>, <span class="blue">mathematics</span>, and <span class="purple">code</span>.
  </div>
  
  <div class="section-header">CURRENT FOCUS</div>
  <div class="info-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
    <div class="info-card" style="border-left-color: var(--accent-cyan);">
      <div class="cyan" style="font-weight: 600; font-size: var(--font-lg); margin-bottom: 0.5rem;">🎓 Master's in HPC</div>
      <div class="grey" style="margin-bottom: 0.75rem;">UVSQ | 2025 — 2027 (M1 en cours)</div>
      <div style="line-height: 1.7;">High Performance Computing, Simulation & Optimization</div>
    </div>
    <div class="info-card" style="border-left-color: var(--accent-blue);">
      <div class="blue" style="font-weight: 600; font-size: var(--font-lg); margin-bottom: 0.5rem;">🔬 Research Interest</div>
      <div class="grey" style="margin-bottom: 0.75rem;">Numerical Simulation</div>
      <div style="line-height: 1.7;">CFD, Parallel Computing, Scientific Modeling</div>
    </div>
    <div class="info-card" style="border-left-color: var(--accent-purple);">
      <div class="purple" style="font-weight: 600; font-size: var(--font-lg); margin-bottom: 0.5rem;">💼 Seeking Internship</div>
      <div class="grey" style="margin-bottom: 0.75rem;">Starting June 2026</div>
      <div style="line-height: 1.7;">3-4 months in Energy, Industry, or Research</div>
    </div>
  </div>
</div>
`;
}
