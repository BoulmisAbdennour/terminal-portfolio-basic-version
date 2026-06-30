export default function projects(): string {
    return `
<div class="command-output">
  <div class="section-header">FEATURED PROJECTS</div>
  
  <div class="info-grid" style="grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));">
    
    <div class="project-card" style="border-top: 3px solid var(--accent-cyan);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <a href="https://github.com/BoulmisAbdennour/PooCpp/tree/master/atmosphere_polution_simulator" target="_blank" class="cyan" style="font-weight: 600; font-size: var(--font-xl); text-decoration: none;">🌫️ Atmospheric Pollution Simulator</a>
        <span class="tag tag-primary">C++17</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        2D physical modeling of pollutant transport and diffusion using advection-diffusion equations.
        Features parallel implementation with C++ STL, modular architecture using Strategy and Observer 
        patterns, and real-time visualization with Gnuplot.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">STL</span>
        <span class="tag">Design Patterns</span>
        <span class="tag">Gnuplot</span>
        <span class="tag">PDE</span>
      </div>
    </div>
    
    <div class="project-card" style="border-top: 3px solid var(--accent-blue);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <span class="blue" style="font-weight: 600; font-size: var(--font-xl);">☕ EXPRESSO Parallelism Library</span>
        <span class="tag" style="background: rgba(88, 166, 255, 0.15); color: var(--accent-blue);">C</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        Custom parallelism library with fork-join model and asynchronous task management. 
        Implements three scheduling policies: static, dynamic, and work-stealing for optimal 
        load balancing across threads.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">OpenMP</span>
        <span class="tag">Threading</span>
        <span class="tag">Work-Stealing</span>
        <span class="tag">HPC</span>
      </div>
    </div>
    
    <div class="project-card" style="border-top: 3px solid var(--accent-purple);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <a href="https://github.com/BoulmisAbdennour/TP_Poisson_C_students_2022_part1" target="_blank" class="purple" style="font-weight: 600; font-size: var(--font-xl); text-decoration: none;">🌡️ 2D Heat Equation Solver</a>
        <span class="tag" style="background: rgba(163, 113, 247, 0.15); color: var(--accent-purple);">C</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        Numerical solution of 2D Poisson equation using direct (LU decomposition) and iterative 
        methods (Jacobi, Gauss-Seidel). Includes cache optimizations for improved locality and 
        performance benchmarking.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">Numerical Methods</span>
        <span class="tag">Cache Optimization</span>
        <span class="tag">Linear Algebra</span>
      </div>
    </div>
    
    <div class="project-card" style="border-top: 3px solid var(--accent-orange);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <a href="https://github.com/hibouwu/ppn-mnist-neural-network" target="_blank" class="orange" style="font-weight: 600; font-size: var(--font-xl); text-decoration: none;">🧠 Neural Network from Scratch</a>
        <span class="tag" style="background: rgba(240, 136, 62, 0.15); color: var(--accent-orange);">C++</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        Complete neural network framework with autodifferentiation engine based on computational 
        graph (DAG). Features optimized tensor computation with OpenMP parallelization and BLAS 
        calls for matrix operations.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">Deep Learning</span>
        <span class="tag">Autodiff</span>
        <span class="tag">BLAS</span>
        <span class="tag">OpenMP</span>
      </div>
    </div>
    
    <div class="project-card" style="border-top: 3px solid var(--accent-green);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <span class="green" style="font-weight: 600; font-size: var(--font-xl);">🔬 ANN Adsorption Predictor</span>
        <span class="tag" style="background: rgba(63, 185, 80, 0.15); color: var(--accent-green);">Python</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        Neural network model to predict fuchsine adsorption efficiency on Algerian diatomite 
        based on operational parameters (concentration, temperature, pH). Final year project 
        with experimental validation.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">TensorFlow</span>
        <span class="tag">DoE</span>
        <span class="tag">Process Optimization</span>
      </div>
    </div>

    <div class="project-card" style="border-top: 3px solid var(--accent-red);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <a href="https://github.com/BoulmisAbdennour/Optimization-of-an-hybrid-parallel-D2Q9-lattice-Boltzmann-solver-for-K-rm-n-vortex-street" target="_blank" class="red" style="font-weight: 600; font-size: var(--font-xl); text-decoration: none;">🌀 Hybrid Parallel Lattice-Boltzmann Solver</a>
        <span class="tag" style="background: rgba(248, 81, 73, 0.15); color: var(--accent-red);">C / MPI</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        Hybrid MPI + OpenMP parallel implementation of a D2Q9 lattice-Boltzmann solver, applied to 
        the simulation of a Kármán vortex street. Optimized domain decomposition and inter-process 
        communication for distributed-memory architectures.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">MPI</span>
        <span class="tag">OpenMP</span>
        <span class="tag">Lattice-Boltzmann</span>
        <span class="tag">CFD</span>
      </div>
    </div>

    <div class="project-card" style="border-top: 3px solid var(--accent-yellow);">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <a href="https://github.com/BoulmisAbdennour/TP_TM" target="_blank" class="yellow" style="font-weight: 600; font-size: var(--font-xl); text-decoration: none;">🔥 Diffusion-Reaction Equation Solver</a>
        <span class="tag" style="background: rgba(210, 153, 34, 0.15); color: var(--accent-yellow);">Python</span>
      </div>
      <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-base);">
        Numerical resolution of a diffusion-reaction PDE (Techniques de Modélisation, UVSQ 2025-2026). 
        Implements and compares finite difference schemes, with stability and convergence analysis.
      </div>
      <div style="margin-top: 1.25rem;">
        <span class="tag">Numerical Methods</span>
        <span class="tag">PDE</span>
        <span class="tag">Finite Difference</span>
      </div>
    </div>
    
  </div>
  
  <div style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-card); border-radius: 12px; text-align: center;">
    <span class="grey">View more projects on </span>
    <a href="https://github.com/BoulmisAbdennour" target="_blank" style="color: var(--accent-cyan); font-weight: 600;">github.com/BoulmisAbdennour</a>
  </div>
</div>
`;
}
