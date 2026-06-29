export default function echo(args: string[]): string {
    return `
<div class="command-output">
  <span class="white">${args.join(" ")}</span>
</div>
`;
}
