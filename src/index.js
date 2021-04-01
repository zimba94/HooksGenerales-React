import React from 'react';
import ReactDOM from 'react-dom';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { CallbackHook } from './components/06-memos/CallbackHook';
//import { MemoHook } from './components/06-memos/MemoHook';
// import { CounterApp } from './components/01-use-state/CounterApp';
// import { CounterCustomHook } from './components/01-use-state/CounterCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
// import { Padre } from './components/07-tarea-memo/Padre'
// import { ToDoApp } from './components/08-useReducer/ToDoApp';
import { MainApp } from './components/09-useContext/MainApp';
import './index.css';

ReactDOM.render(
  // <HooksApp />,
  <MainApp />,
  document.getElementById('root')
);

