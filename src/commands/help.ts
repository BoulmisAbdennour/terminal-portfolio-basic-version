export default function help(): string {
    return `
<div class="command-output">
<pre class="help-output">
<span class="grey">Available commands ── type a command and press Enter</span>

<span class="cyan">PROFILE</span>
  <span class="yellow">about</span>          Who am I?
  <span class="yellow">education</span>      Academic journey
  <span class="yellow">experiences</span>    Professional path
  <span class="yellow">resume</span>         Download CV

<span class="cyan">TECHNICAL</span>
  <span class="yellow">projects</span>       My builds
  <span class="yellow">skills</span>         Tech stack
  <span class="yellow">stack</span>          HPC & CFD tools
  <span class="yellow">languages</span>      Coding stats

<span class="cyan">CONNECT</span>
  <span class="yellow">socials</span>        Contact info
  <span class="yellow">github</span>         Open GitHub
  <span class="yellow">linkedin</span>       Open LinkedIn
  <span class="yellow">email</span>          Send email

<span class="cyan">SYSTEM</span>
  <span class="yellow">clear</span>          Clean terminal
  <span class="yellow">whoami</span>         Current user
  <span class="yellow">hostname</span>       System info
  <span class="yellow">neofetch</span>       System specs

<span class="cyan">FUN</span>
  <span class="yellow">quote</span>          Thermodynamic wisdom
  <span class="yellow">motivation</span>     Daily boost
  <span class="yellow">source</span>         Site's code

<span class="grey">─────────────────────────────────────────</span>
<span class="grey">Tip:</span> press <span class="green">Tab</span> for autocomplete, <span class="green">↑ ↓</span> for history, <span class="green">Ctrl+L</span> to clear
</pre>
</div>
`;
}
