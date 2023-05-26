import './App.css';
import { useState } from 'react';

const quotes = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Donec justo elit, porta a elit et, iaculis scelerisque augue.",
  "Morbi ac mi sagittis, sodales nunc nec, consequat lorem.",
  "Aenean tincidunt mattis lacinia.",
  "Praesent eget dui dignissim, facilisis est sed, efficitur odio."
]

function QuoteBox({quote}) {
  return (
    <div className="quote-box">
      <p>{quote}</p>
    </div>
  );
}

function QuoteButtons({onPrevButtonClick, onNextButtonClick})
{
  return(
    <>
      <div className="button-box">
        <button className="quote-button" onClick={onPrevButtonClick}>Previous Quote</button>
        <button className="quote-button" onClick={onNextButtonClick}>Next Quote</button>
      </div>
    </>
  );
}

export default function App() {
  const [currentQuoteIndex, setQuoteIndex] = useState(0);
  function nextQuote() {
    setQuoteIndex((currentQuoteIndex + 1)%(quotes.length));
  }
  function prevQuote() {
    if(currentQuoteIndex !== 0) {
      setQuoteIndex((currentQuoteIndex - 1)%(quotes.length));
    }
    else {
      setQuoteIndex(quotes.length - 1);
    }
    
  }
  return (
    <>
      <QuoteBox quote={quotes[currentQuoteIndex]} />
      <QuoteButtons onPrevButtonClick={prevQuote} onNextButtonClick={nextQuote}/>
    </>
  );
}

// export default function App() {
//   return(
//     <>
//       <div className="quote-box">
//         <p>{}</p>
//       </div>
//       <div className="button-box">
//         <button className="quote-button">New quote</button>
//       </div>
//     </>
//   );
// }