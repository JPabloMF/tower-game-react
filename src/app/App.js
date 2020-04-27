import React from 'react';
import MiddleAge from '../maps/middleAge';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './App.css';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <MiddleAge />
      </DndProvider>
    </div>
  );
}

export default App;
