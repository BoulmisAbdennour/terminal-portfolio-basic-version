export default function github(): string {
    setTimeout(() => {
        window.open('https://github.com/BoulmisAbdennour', '_blank');
    }, 100);
    return `
<div class="command-output">
  <span class="cyan">Opening GitHub...</span> <span class="grey">(https://github.com/BoulmisAbdennour)</span>
</div>
`;
}
