export default function quote(): string {
    const quotes = [
        {
            text: "Thermodynamiquement, on est designé vers l'échec jusqu'à qu'on ajoute du travail.",
            author: "— Second Law Wisdom"
        },
        {
            text: "The best code is no code at all. The second best is code that looks like it was written by someone who cares.",
            author: "— Unknown"
        },
        {
            text: "Premature optimization is the root of all evil.",
            author: "— Donald Knuth"
        },
        {
            text: "Simplicity is the ultimate sophistication.",
            author: "— Leonardo da Vinci"
        },
        {
            text: "The computer was born to solve problems that did not exist before.",
            author: "— Bill Gates"
        },
        {
            text: "Any sufficiently advanced technology is indistinguishable from magic.",
            author: "— Arthur C. Clarke"
        },
        {
            text: "First, solve the problem. Then, write the code.",
            author: "— John Johnson"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "— Steve Jobs"
        }
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return `
<div class="command-output">
  <div class="quote-box">
    <div style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 0.5rem;">
      ${randomQuote.text}
    </div>
    <div style="text-align: right; color: var(--accent-cyan); font-size: 0.9rem;">
      ${randomQuote.author}
    </div>
  </div>
</div>
`;
}
