export default function about(): string {
    return `
<div class="command-output">
  <div class="about-header">
    <img src="/profile.png" alt="Abdennour Boulmis" class="about-photo" />
    <div class="about-headline">
      <div class="status-indicator">
        <span class="status-dot"></span>
        <span>Open to opportunities</span>
      </div>
      <h2 class="cyan">Abdennour Boulmis</h2>
      <div class="blue">Process Engineer • HPC Student • Scientific Computing Enthusiast</div>
      <div class="about-tags">
        <span class="cyan">CFD</span> <span class="cyan">HPC</span> <span class="cyan">Python</span> <span class="cyan">C++</span> <span class="cyan">OpenMP</span> <span class="grey">ANSYS Fluent</span> <span class="grey">Machine Learning</span>
      </div>
    </div>
  </div>

  <p class="term-paragraph grey">
    Bridging the gap between chemical engineering principles and high-performance computing. I transform complex physical phenomena into optimized computational solutions.
  </p>

  <div class="term-section-title yellow">─── MISSION STATEMENT ───</div>
  <p class="term-paragraph purple">
    "From molecular interactions to massive parallel computations — I believe the most elegant solutions emerge at the intersection of physics, mathematics, and code."
  </p>

  <div class="term-section-title yellow">─── CURRENT FOCUS ───</div>

  <div class="term-block">
    <div class="cyan">🎓 Master's in HPC</div>
    <div class="grey">UVSQ | 2025 — 2027 (M1 in progress)</div>
    <div>High Performance Computing, Simulation & Optimization</div>
  </div>

  <div class="term-block">
    <div class="blue">🔬 Research Interest</div>
    <div class="grey">Numerical Simulation</div>
    <div>CFD, Parallel Computing, Scientific Modeling</div>
  </div>

  <div class="term-block">
    <div class="purple">💼 Seeking Internship</div>
    <div class="grey">Starting June 2026</div>
    <div>3-4 months in Energy, Industry, or Research</div>
  </div>
</div>
`;
}
