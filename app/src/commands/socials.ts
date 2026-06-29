export default function socials(args: string[]): string {
    const social = args[0]?.toLowerCase();
    
    if (social) {
        const links: Record<string, string> = {
            'github': 'https://github.com/BoulmisAbdennour',
            'linkedin': 'https://www.linkedin.com/in/abdennourboulmis/',
            'email': 'mailto:boulmisabdennour@gmail.com',
        };
        
        if (links[social]) {
            setTimeout(() => {
                window.open(links[social], '_blank');
            }, 100);
            return `<div class="command-output"><span class="cyan">Opening ${social}...</span> <span class="grey">(new tab)</span></div>`;
        }
        return `<div class="command-output"><span class="red">Unknown social: "${social}"</span>. Try: github, linkedin, email</div>`;
    }
    
    return `
<div class="command-output">
  <div class="section-header">CONNECT WITH ME</div>
  
  <div class="social-grid">
    <a href="https://github.com/BoulmisAbdennour" target="_blank" class="social-link">
      <div class="social-icon" style="background: rgba(0, 212, 170, 0.15);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-cyan);">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>
      <div>
        <div class="cyan" style="font-weight: 600; font-size: var(--font-lg);">GitHub</div>
        <div class="grey" style="font-size: var(--font-sm);">@BoulmisAbdennour</div>
      </div>
    </a>
    
    <a href="https://www.linkedin.com/in/abdennourboulmis/" target="_blank" class="social-link">
      <div class="social-icon" style="background: rgba(88, 166, 255, 0.15);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-blue);">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </div>
      <div>
        <div class="blue" style="font-weight: 600; font-size: var(--font-lg);">LinkedIn</div>
        <div class="grey" style="font-size: var(--font-sm);">Abdennour Boulmis</div>
      </div>
    </a>
    
    <a href="mailto:boulmisabdennour@gmail.com" class="social-link">
      <div class="social-icon" style="background: rgba(240, 136, 62, 0.15);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-orange);">
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
        </svg>
      </div>
      <div>
        <div class="orange" style="font-weight: 600; font-size: var(--font-lg);">Email</div>
        <div class="grey" style="font-size: var(--font-sm);">boulmisabdennour@gmail.com</div>
      </div>
    </a>
    
    <div class="social-link" style="cursor: default;">
      <div class="social-icon" style="background: rgba(163, 113, 247, 0.15);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-purple);">
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
        </svg>
      </div>
      <div>
        <div class="purple" style="font-weight: 600; font-size: var(--font-lg);">Location</div>
        <div class="grey" style="font-size: var(--font-sm);">Vélizy, France</div>
      </div>
    </div>
    
    <div class="social-link" style="cursor: default;">
      <div class="social-icon" style="background: rgba(63, 185, 80, 0.15);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-green);">
          <path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/>
        </svg>
      </div>
      <div>
        <div class="green" style="font-weight: 600; font-size: var(--font-lg);">Phone</div>
        <div class="grey" style="font-size: var(--font-sm);">+33 7 53 19 67 72</div>
      </div>
    </div>
  </div>
  
  <div style="margin-top: 2rem; padding: 1.25rem; background: var(--bg-card); border-radius: 10px; text-align: center;">
    <span class="grey">💡 Quick access: </span>
    <span class="cyan" style="cursor: pointer; padding: 0.3rem 0.6rem; border-radius: 6px; transition: all 0.2s;" onmouseover="this.style.background='rgba(0,212,170,0.15)'" onmouseout="this.style.background='transparent'">socials github</span>
    <span class="grey"> | </span>
    <span class="blue" style="cursor: pointer; padding: 0.3rem 0.6rem; border-radius: 6px; transition: all 0.2s;" onmouseover="this.style.background='rgba(88,166,255,0.15)'" onmouseout="this.style.background='transparent'">socials linkedin</span>
    <span class="grey"> | </span>
    <span class="orange" style="cursor: pointer; padding: 0.3rem 0.6rem; border-radius: 6px; transition: all 0.2s;" onmouseover="this.style.background='rgba(240,136,62,0.15)'" onmouseout="this.style.background='transparent'">socials email</span>
  </div>
</div>
`;
}
