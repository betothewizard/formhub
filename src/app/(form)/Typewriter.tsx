"use client";
import { useEffect, useState } from "react";
interface TypewriterProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}
export default function Typewriter({
  text,
  typingSpeed = 150,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const fullText = text[textIndex];
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }
    };

    const typingTimer = setTimeout(
      handleType,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, textIndex, text, typingSpeed, pauseDuration]);

  return (
    <span className="whitespace-nowrap">
      <span className={className}>{displayedText}</span>
      <span className="animate-caret">|</span>
    </span>
  );
}
