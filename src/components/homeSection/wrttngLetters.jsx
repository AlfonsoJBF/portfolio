import React, { useState, useEffect } from 'react';

function WrittenLetters() {
  const texts = ["Desarrollador", "Diseñador", "Creativo", "FreeCoder"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Velocidad de escritura en milisegundos
  const deleteSpeed = 50; // Velocidad de borrado en milisegundos
  const delayBetweenTexts = 500; // Tiempo de espera entre textos en milisegundos

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      const textLength = displayedText.length;

      if (!isDeleting) {
        // Escribir el texto letra por letra
        if (textLength < currentText.length) {
          setDisplayedText(currentText.substring(0, textLength + 1));
        } else {
          // Usar el delay para dejar que se lea la palabra
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
          
        }
      } else {
        // Borrar el texto letra por letra
        if (textLength > 0) {
          setDisplayedText(currentText.substring(0, textLength - 1));
        } else {
          // Cambiar al siguiente texto después del borrado completo
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };

    const typingTimer = isDeleting ? deleteSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, typingTimer);

    return () => clearTimeout(timer);
  }, [displayedText, currentTextIndex, isDeleting]);


  return (
    <div className='writting_letters'>

    <h2>
      Soy: 
    </h2>
    <strong>{displayedText}</strong>
    </div>
  );
}

export default WrittenLetters;