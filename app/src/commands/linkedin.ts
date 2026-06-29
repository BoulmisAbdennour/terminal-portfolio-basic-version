export default function linkedin(): string {
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/abdennourboulmis/', '_blank');
    }, 100);
    return `
<div class="command-output">
  <span class="blue">Opening LinkedIn...</span> <span class="grey">(https://www.linkedin.com/in/abdennourboulmis/)</span>
</div>
`;
}
