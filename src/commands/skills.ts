export default function skills(): string {
    return `
<div class="command-output">
  <div class="section-header">TECHNICAL SKILLS</div>
  
  <div class="info-grid" style="grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-cyan);">
      <div class="cyan" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">💻 Programming</div>
      
      <div class="skill-bar">
        <span class="skill-name">Python</span>
        <div class="skill-level"><div class="skill-fill" style="width: 90%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">C++</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">C</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">NumPy, Pandas, Scikit-learn</div>
        <div class="list-item">STL, Modern C++17</div>
        <div class="list-item">Memory management, Pointers</div>
      </div>
    </div>
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-blue);">
      <div class="blue" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">⚡ HPC & Parallel Computing</div>
      
      <div class="skill-bar">
        <span class="skill-name">OpenMP</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">STL Parallelism</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">Cache Optimization</span>
        <div class="skill-level"><div class="skill-fill" style="width: 75%;"></div></div>
      </div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Thread-level parallelism</div>
        <div class="list-item">Work-stealing schedulers</div>
        <div class="list-item">BLAS, Performance profiling</div>
      </div>
    </div>
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-purple);">
      <div class="purple" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">🔧 CFD & Simulation</div>
      
      <div class="skill-bar">
        <span class="skill-name">ANSYS Fluent</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">Aspen HYSYS</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">Numerical Methods</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Fluid Dynamics (Navier-Stokes)</div>
        <div class="list-item">Thermodynamics</div>
        <div class="list-item">Process Simulation</div>
      </div>
    </div>
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-green);">
      <div class="green" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">🤖 AI & Data Science</div>
      
      <div class="skill-bar">
        <span class="skill-name">Neural Networks</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">Machine Learning</span>
        <div class="skill-level"><div class="skill-fill" style="width: 75%;"></div></div>
      </div>
      <div class="skill-bar">
        <span class="skill-name">Data Analysis</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">TensorFlow, PyTorch basics</div>
        <div class="list-item">Statistical modeling</div>
        <div class="list-item">Experimental design (DoE)</div>
      </div>
    </div>
    
  </div>
  
  <div class="section-header">TOOLS & WORKFLOW</div>
  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; padding: 1.5rem; background: var(--bg-card); border-radius: 12px;">
    <span class="tag tag-primary">Git & GitHub</span>
    <span class="tag tag-primary">CMake</span>
    <span class="tag tag-primary">Gnuplot</span>
    <span class="tag">LaTeX</span>
    <span class="tag">MATLAB</span>
    <span class="tag">Linux</span>
    <span class="tag">VS Code</span>
    <span class="tag">Jupyter</span>
    <span class="tag">Microsoft Office</span>
    <span class="tag">Docker</span>
    <span class="tag">SLURM</span>
    <span class="tag">MPI</span>
  </div>
</div>
`;
}
