export default function stack(): string {
    return `
<div class="command-output">
  <div class="section-header">MY HPC & CFD STACK</div>
  
  <div style="background: var(--bg-secondary); padding: 2rem; border-radius: 12px; margin: 1rem 0;">
    <pre style="font-size: 0.75rem; line-height: 1.4; color: var(--text-secondary);">
<span class="cyan">┌─────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>                    <span class="white" style="font-weight: 600;">COMPUTATIONAL WORKFLOW</span>                      <span class="cyan">│</span>
<span class="cyan">└─────────────────────────────────────────────────────────────────┘</span>

    <span class="purple">┌─────────────┐</span>     <span class="blue">┌─────────────┐</span>     <span class="cyan">┌─────────────┐</span>
    <span class="purple">│   Problem   │</span>────▶<span class="blue">│  Modeling   │</span>────▶<span class="cyan">│  Numerical  │</span>
    <span class="purple">│  Definition │</span>     <span class="blue">│   & Math    │</span>     <span class="cyan">│  Methods    │</span>
    <span class="purple">└─────────────┘</span>     <span class="blue">└─────────────┘</span>     <span class="cyan">└─────────────┘</span>
                                                        │
                                                        ▼
    <span class="green">┌─────────────┐</span>     <span class="orange">┌─────────────┐</span>     <span class="red">┌─────────────┐</span>
    <span class="green">│  Results &  │</span>◀────<span class="orange">│Optimization │</span>◀────<span class="red">│  Parallel   │</span>
    <span class="green">│Visualization│</span>     <span class="orange">│   & Tuning  │</span>     <span class="red">│   Code      │</span>
    <span class="green">└─────────────┘</span>     <span class="orange">└─────────────┘</span>     <span class="red">└─────────────┘</span>
    </pre>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
    
    <div style="background: linear-gradient(180deg, var(--bg-secondary), transparent); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-cyan);">
      <div class="cyan" style="font-weight: 600; margin-bottom: 0.75rem;">🖥️ Development Environment</div>
      <div class="list-item">Linux (Ubuntu/WSL)</div>
      <div class="list-item">VS Code + Extensions</div>
      <div class="list-item">Git & GitHub</div>
      <div class="list-item">CMake Build System</div>
    </div>
    
    <div style="background: linear-gradient(180deg, var(--bg-secondary), transparent); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-blue);">
      <div class="blue" style="font-weight: 600; margin-bottom: 0.75rem;">📊 Data & Visualization</div>
      <div class="list-item">NumPy & Pandas</div>
      <div class="list-item">Matplotlib & Seaborn</div>
      <div class="list-item">Gnuplot</div>
      <div class="list-item">Jupyter Notebooks</div>
    </div>
    
    <div style="background: linear-gradient(180deg, var(--bg-secondary), transparent); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-purple);">
      <div class="purple" style="font-weight: 600; margin-bottom: 0.75rem;">⚙️ Simulation Tools</div>
      <div class="list-item">ANSYS Fluent</div>
      <div class="list-item">Aspen HYSYS</div>
      <div class="list-item">MATLAB/Simulink</div>
      <div class="list-item">COMSOL (basics)</div>
    </div>
    
    <div style="background: linear-gradient(180deg, var(--bg-secondary), transparent); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-green);">
      <div class="green" style="font-weight: 600; margin-bottom: 0.75rem;">🚀 Performance</div>
      <div class="list-item">OpenMP</div>
      <div class="list-item">Intel MKL / BLAS</div>
      <div class="list-item">Cache Optimization</div>
      <div class="list-item">Profiling (gprof, perf)</div>
    </div>
    
    <div style="background: linear-gradient(180deg, var(--bg-secondary), transparent); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-orange);">
      <div class="orange" style="font-weight: 600; margin-bottom: 0.75rem;">🧠 Machine Learning</div>
      <div class="list-item">TensorFlow / Keras</div>
      <div class="list-item">Scikit-learn</div>
      <div class="list-item">Custom ANN (C++)</div>
      <div class="list-item">Hyperparameter tuning</div>
    </div>
    
    <div style="background: linear-gradient(180deg, var(--bg-secondary), transparent); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
      <div class="red" style="font-weight: 600; margin-bottom: 0.75rem;">📝 Documentation</div>
      <div class="list-item">LaTeX</div>
      <div class="list-item">Markdown</div>
      <div class="list-item">Doxygen</div>
      <div class="list-item">Technical Writing</div>
    </div>
    
  </div>
</div>
`;
}
