import React from httpsesm.shreact;
import ReactDOM from httpsesm.shreact-dom;
import { StrictMode } from httpsesm.shreact;
import { createRoot } from httpsesm.shreact-domclient;
import { useState } from httpsesm.shreact;

function Square() {
  const [value, setValue] = useState (null);
  function Clicado() {
      setValue('X');
   }
  
  return button className = square onClick = {Clicado}{value}button
}

function Board() {
  return (
  
    div className = board-row
      Square 
      Square 
      Square  
    div
    div className = board-row
      Square 
      Square 
      Square  
    div
    div className = board-row
      Square 
      Square 
      Square  
    div
  );
}

const root = createRoot(document.getElementById(root));
root.render(
  StrictMode
    Board 
  StrictMode
);