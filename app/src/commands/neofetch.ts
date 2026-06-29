export default function neofetch(): string {
    const asciiArt = `
<span class="cyan">       ___      </span>
<span class="cyan">      /   \\     </span>
<span class="cyan">     /     \\    </span>
<span class="cyan">    /  ___  \\   </span>
<span class="cyan">   /  /   \\  \\  </span>
<span class="cyan">  /  /     \\  \\ </span>
<span class="cyan"> /__/       \\__\\</span>
<span class="cyan">                 </span>`;

    return `
<div class="command-output">
  <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
    <pre style="line-height: 1.2; font-size: 0.7rem;">${asciiArt}</pre>
    <div style="flex: 1; min-width: 250px;">
      <div style="margin-bottom: 0.5rem;">
        <span class="cyan" style="font-weight: 600;">abdennour</span><span class="white">@</span><span class="cyan">portfolio</span>
      </div>
      <div style="margin-bottom: 1rem;">━━━━━━━━━━━━━━━━━━━━━━</div>
      
      <div style="display: grid; gap: 0.3rem;">
        <div><span class="cyan">OS:</span> <span class="white">Process Engineer / HPC Student</span></div>
        <div><span class="cyan">Host:</span> <span class="white">UVSQ / ENP Alger</span></div>
        <div><span class="cyan">Kernel:</span> <span class="white">Scientific Computing 5.0</span></div>
        <div><span class="cyan">Uptime:</span> <span class="white">5+ years in engineering</span></div>
        <div><span class="cyan">Packages:</span> <span class="white">Python, C++, C, MATLAB</span></div>
        <div><span class="cyan">Shell:</span> <span class="white">zsh + custom aliases</span></div>
        <div><span class="cyan">Resolution:</span> <span class="white">1920x1080 (optimized)</span></div>
        <div><span class="cyan">DE:</span> <span class="white">Terminal + VS Code</span></div>
        <div><span class="cyan">WM:</span> <span class="white">i3 (productivity focused)</span></div>
        <div><span class="cyan">Theme:</span> <span class="white">Gruvbox Dark</span></div>
        <div><span class="cyan">Icons:</span> <span class="white">Papirus</span></div>
        <div><span class="cyan">Terminal:</span> <span class="white">Alacritty</span></div>
        <div><span class="cyan">CPU:</span> <span class="white">Brain @ 100% (overclocked)</span></div>
        <div><span class="cyan">GPU:</span> <span class="white">NVIDIA (CUDA ready)</span></div>
        <div><span class="cyan">Memory:</span> <span class="white">∞ curiosity</span></div>
      </div>
      
      <div style="margin-top: 1rem;">
        <span style="color: #e06c75;">●</span>
        <span style="color: #98c379;">●</span>
        <span style="color: #e5c07b;">●</span>
        <span style="color: #61afef;">●</span>
        <span style="color: #c678dd;">●</span>
        <span style="color: #56b6c2;">●</span>
        <span style="color: #abb2bf;">●</span>
      </div>
    </div>
  </div>
</div>
`;
}
