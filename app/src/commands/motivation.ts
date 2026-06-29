export default function motivation(): string {
    const motivations = [
        {
            title: "🚀 Progress, Not Perfection",
            text: "Every expert was once a beginner. Every master was once a disaster. Keep pushing forward."
        },
        {
            title: "💡 The Power of Consistency",
            text: "Small daily improvements compound into extraordinary results over time."
        },
        {
            title: "🔥 Embrace the Challenge",
            text: "The harder the battle, the sweeter the victory. Difficult roads often lead to beautiful destinations."
        },
        {
            title: "⚡ Action Over Intention",
            text: "Dreams don't work unless you do. Start where you are, use what you have, do what you can."
        },
        {
            title: "🎯 Focus on the Process",
            text: "Success is the sum of small efforts, repeated day in and day out."
        },
        {
            title: "🌟 Believe in Yourself",
            text: "Your only limit is you. If you can dream it, you can achieve it."
        }
    ];
    
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    
    return `
<div class="command-output">
  <div style="background: linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(163, 113, 247, 0.1)); padding: 2rem; border-radius: 12px; border: 1px solid rgba(0, 212, 170, 0.3); text-align: center;">
    <div class="cyan" style="font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem;">
      ${randomMotivation.title}
    </div>
    <div style="font-size: 1.1rem; line-height: 1.6; color: var(--text-secondary);">
      ${randomMotivation.text}
    </div>
    <div style="margin-top: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
      💪 You've got this! Now go write some code.
    </div>
  </div>
</div>
`;
}
