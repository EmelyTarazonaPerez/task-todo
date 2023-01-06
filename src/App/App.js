import React from 'react';
import { AppIU } from './AppIU';
import { TodoProvider } from '../context/TodoContext.js';

function App() {
  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  );
}

export default App;
