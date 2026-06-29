export default function help(): string {
    return `
<div class="command-output">
  <div class="section-header">AVAILABLE COMMANDS</div>
  
  <div class="info-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
    
    <div class="help-category" style="border-color: var(--accent-cyan);">
      <div class="help-category-title cyan">📋 Profile</div>
      <div class="list-item"><span class="cyan">about</span> <span class="grey">—</span> Who am I?</div>
      <div class="list-item"><span class="cyan">education</span> <span class="grey">—</span> Academic journey</div>
      <div class="list-item"><span class="cyan">experiences</span> <span class="grey">—</span> Professional path</div>
      <div class="list-item"><span class="cyan">resume</span> <span class="grey">—</span> Download CV</div>
    </div>
    
    <div class="help-category" style="border-color: var(--accent-blue);">
      <div class="help-category-title blue">💻 Technical</div>
      <div class="list-item"><span class="blue">projects</span> <span class="grey">—</span> My builds</div>
      <div class="list-item"><span class="blue">skills</span> <span class="grey">—</span> Tech stack</div>
      <div class="list-item"><span class="blue">stack</span> <span class="grey">—</span> HPC & CFD tools</div>
      <div class="list-item"><span class="blue">languages</span> <span class="grey">—</span> Coding stats</div>
    </div>
    
    <div class="help-category" style="border-color: var(--accent-purple);">
      <div class="help-category-title purple">🌐 Connect</div>
      <div class="list-item"><span class="purple">socials</span> <span class="grey">—</span> Contact info</div>
      <div class="list-item"><span class="purple">github</span> <span class="grey">—</span> Open GitHub</div>
      <div class="list-item"><span class="purple">linkedin</span> <span class="grey">—</span> Open LinkedIn</div>
      <div class="list-item"><span class="purple">email</span> <span class="grey">—</span> Send email</div>
    </div>
    
    <div class="help-category" style="border-color: var(--accent-orange);">
      <div class="help-category-title orange">⚡ System</div>
      <div class="list-item"><span class="orange">clear</span> <span class="grey">—</span> Clean terminal</div>
      <div class="list-item"><span class="orange">whoami</span> <span class="grey">—</span> Current user</div>
      <div class="list-item"><span class="orange">hostname</span> <span class="grey">—</span> System info</div>
      <div class="list-item"><span class="orange">neofetch</span> <span class="grey">—</span> System specs</div>
    </div>
    
    <div class="help-category" style="border-color: var(--accent-green);">
      <div class="help-category-title green">🎯 Fun</div>
      <div class="list-item"><span class="green">quote</span> <span class="grey">—</span> Thermodynamic wisdom</div>
      <div class="list-item"><span class="green">motivation</span> <span class="grey">—</span> Daily boost</div>
      <div class="list-item"><span class="green">source</span> <span class="grey">—</span> Site's code</div>
    </div>
    
  </div>
  
  <div style="margin-top: 2rem; padding: 1.25rem; background: var(--bg-card); border-radius: 10px;">
    <span class="muted">💡 Pro Tips:</span>
    <div class="list-item" style="margin-top: 0.75rem;">Press <span class="yellow">Tab</span> for auto-completion</div>
    <div class="list-item">Use <span class="yellow">↑ ↓</span> arrows for command history</div>
    <div class="list-item">Type <span class="yellow">clear</span> to reset the terminal</div>
  </div>
</div>
`;
}
