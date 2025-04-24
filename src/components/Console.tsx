
import React from 'react';

interface ConsoleProps {
  output: string[];
}

const Console: React.FC<ConsoleProps> = ({ output }) => {
  const consoleRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="space-y-2">
      <h3 className="text-md font-medium">Console Output</h3>
      <div ref={consoleRef} className="console-output">
        {output.map((line, index) => (
          <div key={index} className={line.includes('ERROR') ? 'text-red-400' : ''}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Console;
