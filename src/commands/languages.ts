export default function languages(): string {
    return `
<div class="command-output">
  <div class="section-header">NATURAL LANGUAGES</div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; text-align: center; border: 2px solid var(--accent-cyan);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🇩🇿</div>
      <div class="cyan" style="font-weight: 600;">Arabic</div>
      <div class="grey" style="font-size: 0.85rem;">Native</div>
      <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">اللغة الأم</div>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; text-align: center; border: 2px solid var(--accent-blue);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🇫🇷</div>
      <div class="blue" style="font-weight: 600;">French</div>
      <div class="grey" style="font-size: 0.85rem;">Fluent (C1)</div>
      <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">Courant</div>
    </div>
    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; text-align: center; border: 2px solid var(--accent-purple);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🇬🇧</div>
      <div class="purple" style="font-weight: 600;">English</div>
      <div class="grey" style="font-size: 0.85rem;">Fluent (C1)</div>
      <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">Professional</div>
    </div>
  </div>
  
  <div class="section-header">PROGRAMMING LANGUAGES</div>
  
  <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BoulmisAbdennour&langs_count=8&layout=compact&hide=gnuplot,TeX,Lua&theme=dark&bg_color=161b22&title_color=00d4aa&text_color=c9d1d9&border_color=21262d" 
         alt="GitHub Language Stats" 
         style="max-width: 100%; display: block; margin: 0 auto;" />
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
    <div style="text-align: center; padding: 1rem;">
      <div class="cyan" style="font-size: 1.5rem; font-weight: 600;">Python</div>
      <div class="grey" style="font-size: 0.85rem;">Data Science & ML</div>
    </div>
    <div style="text-align: center; padding: 1rem;">
      <div class="blue" style="font-size: 1.5rem; font-weight: 600;">C++</div>
      <div class="grey" style="font-size: 0.85rem;">HPC & Systems</div>
    </div>
    <div style="text-align: center; padding: 1rem;">
      <div class="purple" style="font-size: 1.5rem; font-weight: 600;">C</div>
      <div class="grey" style="font-size: 0.85rem;">Low-level & Embedded</div>
    </div>
    <div style="text-align: center; padding: 1rem;">
      <div class="green" style="font-size: 1.5rem; font-weight: 600;">MATLAB</div>
      <div class="grey" style="font-size: 0.85rem;">Numerical Computing</div>
    </div>
  </div>
</div>
`;
}
