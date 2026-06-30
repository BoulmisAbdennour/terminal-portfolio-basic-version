export default function skills(): string {
    return `
<div class="command-output">
  <div class="section-header">TECHNICAL SKILLS</div>
  
  <div class="info-grid" style="grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-cyan);">
      <div class="cyan" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">💻 Programming</div>
      
      <div class="skill-bar">
        <span class="skill-name">Python</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      <div class="skill-proof">→ ANN Adsorption Predictor, TP Diffusion-Réaction</div>

      <div class="skill-bar">
        <span class="skill-name">C++</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-proof">→ Neural Network (autodiff + BLAS), Atmospheric Pollution Simulator</div>

      <div class="skill-bar">
        <span class="skill-name">C</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-proof">→ EXPRESSO library, 2D Heat Equation Solver, LB Solver</div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">NumPy, Pandas, Scikit-learn</div>
        <div class="list-item">STL, Modern C++17</div>
        <div class="list-item">Memory management, Pointers</div>
      </div>
    </div>
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-blue);">
      <div class="blue" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">⚡ HPC & Parallel Computing</div>
      
      <div class="skill-bar">
        <span class="skill-name">MPI</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-proof">→ Hybrid D2Q9 Lattice-Boltzmann Solver (distributed memory)</div>

      <div class="skill-bar">
        <span class="skill-name">OpenMP</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      <div class="skill-proof">→ Neural Network (tensor ops), LB Solver (shared memory)</div>

      <div class="skill-bar">
        <span class="skill-name">Cache Optimization</span>
        <div class="skill-level"><div class="skill-fill" style="width: 75%;"></div></div>
      </div>
      <div class="skill-proof">→ 2D Heat Equation Solver (locality + benchmarking)</div>

      <div class="skill-bar">
        <span class="skill-name">Work-Stealing</span>
        <div class="skill-level"><div class="skill-fill" style="width: 75%;"></div></div>
      </div>
      <div class="skill-proof">→ EXPRESSO Parallelism Library (static/dynamic/steal)</div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Thread-level & process-level parallelism</div>
        <div class="list-item">Domain decomposition, halo exchange</div>
        <div class="list-item">BLAS, SLURM, performance profiling</div>
      </div>
    </div>
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-purple);">
      <div class="purple" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">🔧 CFD & Simulation</div>
      
      <div class="skill-bar">
        <span class="skill-name">ANSYS Fluent</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-proof">→ Process Engineering projects (ENP Alger)</div>

      <div class="skill-bar">
        <span class="skill-name">Numerical Methods</span>
        <div class="skill-level"><div class="skill-fill" style="width: 85%;"></div></div>
      </div>
      <div class="skill-proof">→ Poisson/Diffusion-Réaction solvers, LU/Jacobi/Gauss-Seidel</div>

      <div class="skill-bar">
        <span class="skill-name">Aspen HYSYS</span>
        <div class="skill-level"><div class="skill-fill" style="width: 75%;"></div></div>
      </div>
      <div class="skill-proof">→ Process simulation (distillation, heat exchangers)</div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">Navier-Stokes, Lattice-Boltzmann</div>
        <div class="list-item">FD schemes, stability & convergence</div>
        <div class="list-item">Thermodynamics, Transport Phenomena</div>
      </div>
    </div>
    
    <div style="background: var(--bg-card); padding: 2rem; border-radius: 14px; border-top: 4px solid var(--accent-green);">
      <div class="green" style="font-weight: 600; margin-bottom: 1.5rem; font-size: var(--font-xl);">🤖 AI & Data Science</div>
      
      <div class="skill-bar">
        <span class="skill-name">Neural Networks</span>
        <div class="skill-level"><div class="skill-fill" style="width: 80%;"></div></div>
      </div>
      <div class="skill-proof">→ C++ autodiff engine from scratch (MNIST), ANN Adsorption</div>

      <div class="skill-bar">
        <span class="skill-name">Machine Learning</span>
        <div class="skill-level"><div class="skill-fill" style="width: 70%;"></div></div>
      </div>
      <div class="skill-proof">→ TensorFlow/Scikit-learn, DoE, statistical modeling</div>

      <div class="skill-bar">
        <span class="skill-name">Data Analysis</span>
        <div class="skill-level"><div class="skill-fill" style="width: 75%;"></div></div>
      </div>
      <div class="skill-proof">→ Accenture Data Analytics simulation, experimental validation</div>
      
      <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
        <div class="list-item">TensorFlow, PyTorch basics</div>
        <div class="list-item">Statistical modeling, DoE</div>
        <div class="list-item">Jupyter, Pandas, Matplotlib</div>
      </div>
    </div>
    
  </div>
  
  <div class="section-header">TOOLS & WORKFLOW</div>
  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; padding: 1.5rem; background: var(--bg-card); border-radius: 12px;">
    <span class="tag tag-primary">MPI / OpenMP</span>
    <span class="tag tag-primary">Git & GitHub</span>
    <span class="tag tag-primary">CMake</span>
    <span class="tag tag-primary">SLURM</span>
    <span class="tag">Linux</span>
    <span class="tag">GDB / Valgrind</span>
    <span class="tag">Gnuplot</span>
    <span class="tag">LaTeX</span>
    <span class="tag">MATLAB</span>
    <span class="tag">VS Code</span>
    <span class="tag">Jupyter</span>
    <span class="tag">Docker</span>
    <span class="tag">ParaView</span>
  </div>
</div>
`;
}
