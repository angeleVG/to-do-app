<h1>Todology</h1>
  <p><a href="https://angeleVG.github.io/to-do-app" target="_blank">Go to the app</a></p>
  <h2>Description</h2>
  <p>Todology is a simple React-based to-do app that allows users to manage tasks in a dynamic single-page environment. Users can add, check off, edit and delete tasks seamlessly.</p>
<h2>MVP</h2> 

<ul> 

  <li>React Single Page Application (SPA)</li> 

  <li>Home (Dashboard) with task list</li> 

  <li>Create task</li> 

  <li>Delete task</li> 

  <li>Check/uncheck task as complete</li> 

  <li>Edit task</li> 

  <li>View and edit task details</li> 

  <li>Navbar, Sidebar and Footer components</li> 

  <li>About page with team info</li> 

  <li>404 Not Found page</li> 

</ul> 

 

<h2>Backlog</h2> 

<ul> 

  <li>Create multiple task lists</li> 

  <li>Drag and drop to reorder tasks</li> 

  <li>Task due dates and reminders</li> 

  <li>Dark mode</li> 

  <li>Save tasks in local storage or database</li> 

  <li>Make responsive for mobile devices</li> 

</ul> 

 

<h2>Data structure</h2> 

<ul> 

  <li><code>tasks.json</code> - stores tasks as objects with <code>id</code>, <code>task</code>, <code>completed</code>, and <code>details</code> fields</li> 

  <li><strong>State:</strong> <code>useState</code> hooks manage the task list, task input, editing state and task details</li> 

  <li><strong>Functions:</strong> <code>addTask()</code>, <code>deleteTask()</code>, <code>toggleTaskCompletion()</code>, <code>editTask()</code>, <code>saveTaskDetails()</code></li> 

</ul> 

 

<h2>States & State Transitions</h2> 

<ul> 

  <li><strong>Dashboard:</strong> Main view where tasks are added/edited</li> 

  <li><strong>About:</strong> Static view with project and member info</li> 

  <li><strong>ItemDetails:</strong> View/edit task details with local storage integration</li> 

  <li><strong>NotFound:</strong> Error view for invalid routes</li> 

</ul> 

 

<h3>States:</h3> 

<ul> 

  <li><code>Idle</code>: Default state when the app loads or no interaction has occurred</li> 

  <li><code>Editing</code>: When a task is being created or edited</li> 

  <li><code>ViewingDetails</code>: When a user opens a task's details page</li> 

  <li><code>Loading</code>: When data is being fetched or saved</li> 

  <li><code>Error</code>: When something goes wrong (e.g. invalid route, failed request)</li> 

</ul> 

 

<h3>Transitions:</h3> 

<ul> 

  <li><code>Idle → Editing</code>: When the user clicks "Add Task" or selects a task to edit</li> 

  <li><code>Editing → Idle</code>: After saving or cancelling</li> 

  <li><code>Idle → ViewingDetails</code>: When clicking on a task to view details</li> 

  <li><code>Any → Loading</code>: During async actions</li> 

  <li><code>Any → Error</code>: On fetch/save failure or invalid route</li> 

</ul> 

 

<h2>Task</h2> 

<ul> 

  <li>Set up React app</li> 

  <li>Import task data from JSON</li> 

  <li>Create task list display</li> 

  <li>Add functionality: Add, Delete, Complete, Edit, View/Save details</li> 

  <li>Add styling and icons</li> 

  <li>Build static About page</li> 

  <li>Implement routing and 404 page</li> 

</ul> 

 

<h2>Links</h2> 

<ul> 

  <li>Slides: <a href="https://www.canva.com/design/DAGj-A8R-Cc/LHk_k96nFVkA5Jc44wRECA/view?utm_content=DAGj-A8R-Cc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h545efeeeb6">canva.com</a></li> 

  <li>GitHub repository: <a href="https://github.com/angeleVG/to-do-app">github.com/angeleVG/to-do-app</a></li> 

</ul> 
