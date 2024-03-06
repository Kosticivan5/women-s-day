import React, { useEffect, useRef } from "react";

function TypingAnimation({ sentences, typingSpeed }) {
  const typingElementRef = useRef(null);

  useEffect(() => {
    const typingElement = typingElementRef.current;
    let sentenceIndex = 0;
    let timer;

    function typeNextLetter() {
      if (sentenceIndex < sentences.length) {
        const sentence = sentences[sentenceIndex];
        let letterIndex = 0;

        timer = setInterval(() => {
          if (letterIndex < sentence.length) {
            typingElement.textContent += sentence.charAt(letterIndex);
            letterIndex++;
          } else {
            clearInterval(timer);
            if (sentenceIndex < sentences.length - 1) {
              setTimeout(() => {
                typingElement.textContent = "";
                sentenceIndex++;
                typeNextLetter();
              }, 2000); // Change the delay as needed
            }
          }
        }, typingSpeed);
      }
    }

    typeNextLetter();

    return () => clearInterval(timer); // Cleanup function to clear the interval
  }, [sentences, typingSpeed]);

  return <span ref={typingElementRef}></span>;
}

export default TypingAnimation;
