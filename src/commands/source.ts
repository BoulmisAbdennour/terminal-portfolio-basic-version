export default function source(): string {
    setTimeout(() => {
        window.open('https://github.com/BoulmisAbdennour/terminal-portfolio', '_blank');
    }, 100);
    return `
<div class="command-output">
  <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px;">
    <div class="cyan" style="font-weight: 600; margin-bottom: 0.5rem;">📦 Source Code</div>
    <div class="grey" style="margin-bottom: 1rem;">This portfolio is built with React + TypeScript + Vite</div>
    <div class="list-item">React 18 for UI components</div>
    <div class="list-item">TypeScript for type safety</div>
    <div class="list-item">Vite for fast builds</div>
    <div class="list-item">Custom CSS animations</div>
    <div style="margin-top: 1rem;">
      <span class="cyan">Opening GitHub repository...</span>
    </div>
  </div>
</div>
`;
}
