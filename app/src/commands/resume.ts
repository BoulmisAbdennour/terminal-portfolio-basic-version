export default function resume(): string {
    setTimeout(() => {
        window.open('https://drive.google.com/file/d/1gJwy1HWFlLAWoRceDXLL9cY4M8tDbhWa/view?usp=sharing', '_blank');
    }, 100);
    return `
<div class="command-output">
  <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; text-align: center;">
    <div style="font-size: 3rem; margin-bottom: 1rem;">📄</div>
    <div class="cyan" style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">Opening Resume</div>
    <div class="grey" style="margin-bottom: 1rem;">Google Drive PDF Viewer</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">
      If it doesn't open automatically, <a href="https://drive.google.com/file/d/1gJwy1HWFlLAWoRceDXLL9cY4M8tDbhWa/view?usp=sharing" target="_blank" class="cyan">click here</a>
    </div>
  </div>
</div>
`;
}
