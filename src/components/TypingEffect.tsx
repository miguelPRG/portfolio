import React, { useState, useEffect } from 'react';

interface Props {
  words: string[];
  className?: string;
}

const TypingEffect: React.FC<Props> = ({ words, className }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[1em] ml-1 bg-blue-400 animate-pulse align-middle" />
    </span>
  );
};

export default TypingEffect;
