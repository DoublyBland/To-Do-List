//import {headerFooter} from "./headerFooter.js";
import './style.css';
import { activateListeners} from './projectDOM';
import {activateListenersToDo} from './toDoDOM'
import {projects} from './projectHandler'
import { activateHome } from './home';
import {activateDateTabs} from './day.js';


activateListeners();
activateHome();
activateDateTabs();