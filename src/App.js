import React, { useState } from "react";
import "./App.css";

const poem = [
  [
    "Those long day and night,\nA kid who learned to fight,\nStood strong with tear and ache,\nYou built a heart that wouldn't break."
  ],
  [
    "Even the world was heavy, cold, and gray,\nStill, you found your way,\nA future bright calls your name,\nFor you, my love, will rise to fame."
  ],
  [
    "There is so much yet to come,\nThe dreams you've held, \nThe battles you've won,\nA great life ahead, so full, so true,\nOf endless skies of blue."
  ],
  [
    "As you move towards greater heights,\nI'll still be there through your darkest nights,\nNo distance can part,\nThe love I've for you in my heart."
  ],
  [
    "In your every success, I'll cheer,\nAnd in every loss, I'll draw you near.\nEven in a long distance, I feel you close,\nYour every word, increases the love dose."
  ],
  [
    "Although your childhood was hard, now you'll see,\nThe best life is yet to be,\nAnd in your every journey,\nYou'll find,\nMe loving you with all my heart and mind."
  ]
];

const Flipbook = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < poem.length - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flipbook-container">
      <div className="flipbook">
        <div className="poem">
          {poem[page][0].split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="controls">
          <button onClick={prevPage} disabled={page === 0}>
            Previous
          </button>
          <button onClick={nextPage} disabled={page === poem.length - 1}>
            Next
          </button>
        </div>
        <div className="page-indicator">
          Page {page + 1} of {poem.length}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Flipbook />
    </div>
  );
};

export default App;
