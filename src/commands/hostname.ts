export default function hostname(): string {
    const a = navigator.userAgent;
    const os = a.slice(a.indexOf('(') + 1, a.indexOf(')')).split('; ');
    const system = os.join(' ').toLowerCase().replace(/[, \s]+/g, '-');
    
    return `
<div class="command-output">
  <div>
    <div><span class="cyan">System:</span> <span class="white">${system}</span></div>
    <div><span class="cyan">Browser:</span> <span class="white">${navigator.appName}</span></div>
    <div><span class="cyan">Platform:</span> <span class="white">${navigator.platform}</span></div>
    <div><span class="cyan">Language:</span> <span class="white">${navigator.language}</span></div>
    <div><span class="cyan">Cores:</span> <span class="white">${navigator.hardwareConcurrency || 'unknown'}</span></div>
    <div><span class="cyan">Online:</span> <span class="white">${navigator.onLine ? 'Yes' : 'No'}</span></div>
  </div>
</div>
`;
}
