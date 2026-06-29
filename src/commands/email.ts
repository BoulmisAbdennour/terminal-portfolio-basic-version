export default function email(): string {
    setTimeout(() => {
        window.open('mailto:boulmisabdennour@gmail.com', '_blank');
    }, 100);
    return `
<div class="command-output">
  <span class="orange">Opening email client...</span> <span class="grey">(boulmisabdennour@gmail.com)</span>
</div>
`;
}
