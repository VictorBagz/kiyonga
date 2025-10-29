import React, { useState, useEffect } from 'react';
import { lawQuotes } from '../data/quotesData';

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % lawQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quotes-section">
      <div className="quote-slide fade-in">
        <p>"{lawQuotes[currentQuote].text}"</p>
        <p className="quote-author">- {lawQuotes[currentQuote].author}</p>
      </div>
    </div>
  );
};

export default QuoteCarousel;