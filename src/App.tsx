import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import DOMPurify from 'dompurify';
import { commands, commandNames } from './commands';

interface CommandHistory {
    command: string;
    output: string;
}

const bootLines = [
    { text: 'Loading system...', color: 'grey' },
    { text: 'OK: HPC modules loaded', color: 'green' },
    { text: 'OK: CFD tools initialized', color: 'green' },
    { text: 'OK: Portfolio ready', color: 'green' },
    { text: '', color: 'grey' },
];

const asciiBanner = `
    ___    __  _______________  ______  ____  _____ __________ 
   /   |  /  |/  / ____/ __ \\/ __ \\/ / __ \\/ ___// ____/ __ \
  / /| | / /|_/ / __/ / / / / / / / / / / /\\__ \\/ __/ / /_/ /
 / ___ |/ /  / / /___/ /_/ / /_/ / / /_/ /___/ / /___/ _, _/ 
/_/  |_/_/  /_/_____/_____/\\____/  \\____//____/_____/_/ |_|  
`;

function BootSequence({ onComplete }: { onComplete: () => void }) {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < bootLines.length) {
                setVisibleLines(currentLine + 1);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 300);
            }
        }, 100);

        // Filet de sécurité : force la fin du boot après 2.5s max
        const safetyTimeout = setTimeout(onComplete, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(safetyTimeout);
        };
    }, [onComplete]);

    return (
        <div className="boot-sequence">
            {bootLines.slice(0, visibleLines).map((line, index) => (
                <div key={index} className={line.color}>
                    {line.text}
                </div>
            ))}
        </div>
    );
}

function App() {
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const [input, setInput] = useState('');
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [bootComplete, setBootComplete] = useState(false);
    const [mobileWarningDismissed, setMobileWarningDismissed] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        const handleClick = () => {
            if (inputRef.current && !window.getSelection()?.toString()) {
                inputRef.current.focus();
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const executeCommand = async (cmd: string) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        const parts = trimmedCmd.split(' ');
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (commandName === 'clear') {
            setHistory([]);
            return;
        }

        let output = '';

        if (commands[commandName]) {
            try {
                output = await commands[commandName](args);
            } catch (error) {
                output = `<div class="command-output"><span class="red">Error: ${error}</span></div>`;
            }
        } else {
            output = `
<div class="command-output">
  <span class="red">Command not found:</span> <span class="grey">"${trimmedCmd}"</span>
  <br/>
  <span class="grey">Type </span><span class="yellow">help</span><span class="grey"> for available commands</span>
</div>`;
        }

        setHistory((prev) => [...prev, { command: trimmedCmd, output }]);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            executeCommand(input);
            setInput('');
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const commandHistory = history.map((h) => h.command);
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                const commandHistory = history.map((h) => h.command);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'l' && e.ctrlKey) {
            e.preventDefault();
            setHistory([]);
            setInput('');
        } else if (e.key === 'c' && e.ctrlKey) {
            e.preventDefault();
            setInput('');
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setMobileWarningDismissed(true);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const trimmedInput = input.trim().toLowerCase();
            const matches = commandNames.filter((cmd) => cmd.startsWith(trimmedInput));
            if (matches.length === 1) {
                setInput(matches[0]);
            }
        }
    };

    const handleHelpClick = () => {
        executeCommand('help');
    };

    return (
        <div className="terminal-container" role="application" aria-label="Terminal Portfolio">
            <div id="terminal-help" className="visually-hidden">Terminal interactif. Tapez une commande et appuyez sur Entrée. Utilisez les flèches haut et bas pour naviguer dans l'historique. Appuyez sur Tab pour l'autocomplétion. Ctrl+L pour effacer, Ctrl+C pour annuler.</div>
            {!mobileWarningDismissed && (
                <div className="mobile-warning">
                    <span>For the best experience, please visit on desktop.</span>
                    <button
                        className="mobile-warning-btn"
                        onClick={() => setMobileWarningDismissed(true)}
                    >
                        Continue anyway
                    </button>
                </div>
            )}

            {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

            {bootComplete && (
                <div className="welcome-banner">
                    <pre className="ascii-art">{asciiBanner}</pre>
                    <div style={{ textAlign: 'center' }}>
                        <span className="cyan">Process Engineer • HPC Student • Scientific Computing</span>
                        <br />
                        <span className="grey">Type </span>
                        <span className="yellow help-cursor" onClick={handleHelpClick}>help</span>
                        <span className="grey"> to explore</span>
                    </div>
                </div>
            )}

            <pre ref={terminalRef} style={{ margin: 0, padding: 0 }} role="log" aria-live="polite" aria-atomic="false">
                {history.map((item, index) => (
                    <div key={index} className="command-output">
                        <div className="prompt">
                            <label>
                                <span className="cyan">visitor</span>
                                <span className="grey">@</span>
                                <span className="white">abdennourboulmis</span>
                                <span className="grey">:$</span>
                            </label>
                            <span className="white">{item.command}</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.output, { ADD_ATTR: ['target'] }) }} />
                    </div>
                ))}

                {bootComplete && (
                    <div className="prompt">
                        <label htmlFor="prompt">
                            <span className="cyan">visitor</span>
                            <span className="grey">@</span>
                            <span className="white">abdennourboulmis</span>
                            <span className="grey">:$</span>
                        </label>
                        <div className="prompt-input-wrapper">
                            <input
                                ref={inputRef}
                                id="prompt"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoComplete="off" aria-label="Terminal command input"
                                autoFocus
                                className="prompt-input"
                            />
                        </div>
                        <span className="grey">(</span>
                        <span className="yellow help-cursor" onClick={handleHelpClick}>help?</span>
                        <span className="grey">)</span>
                    </div>
                )}
            </pre>
        </div>
    );
}

export default App;
