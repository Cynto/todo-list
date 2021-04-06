import Item from './ItemClass';
import Project from './projectClass';
import dateRenderer from './dateRender';
import { projectRenderer, addProject } from './projectRender';

import itemAdder from './ItemAdder';
import localStorageAdder from './localStorage';
import localStorageRetriever from './localStorageRetrieve';
import projectDeleter from './deleteProject';
import navBarToggler from './navBarMobile'

projectRenderer.renderPage();
