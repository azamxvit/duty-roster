<template>
  <div class="todo" data-js-todo>
    <h1 class="todo__title"> To Do List</ h1>
    
    <form class="todo__form" data-js-todo-new-task-form >
      <div class="todo__field field">
        <label class="todo__label" for="new-task">New task title</ label>
        <input class="field__input" id="new-task" plaseholder=" " autocomplete="off" data-js-todo-new-task-input />
      </div>
      <button class="button" type="submit">Add</ button>
    </ form>

    <form class="todo__form" data-js-todo-search-task-form >
      <div class="todo__field field">
        <label class="todo__label" for="search-task">Search task</ label>
        <input class="field__input" id="search-task" plaseholder=" " autocomplete="off" type="search" data-js-todo-search-task-input/>
      </div>
    </ form>

    <div class="todo__info">
      <div class="todo_total-tasks">
        Total Tasks: <spam data-js-todo-total-tasks >0</ spam>
      </ div>

      <button class="toso__delete-all-button"
      data-js-todo-delete-all-button >
      Delete All
      </ button>
    </ div>

    <ul class="todo__list" data-js-todo-list>
      <li class="todo__item" todo-="item" data-js-todo-item >
      <input class="todo__item-checkbox"
      id="todo-1"
      type="checkbox"
      data-js-todo-item-checkbox />

      <label class="todo-item__label"
      for="todo-1"
      data-js-todo-item-label>
      Task 1 </ label>

      <button class="todo-item__delete-button"
      type="button"
      aria-label="Delete"
      title="Delete" 
      data-js-todo-item-delete-button >
      
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      </ button>
      </ li>

      <li class="todo__item" todo-="item" data-js-todo-item >
      <input class="todo__item-checkbox"
      id="todo-1"
      type="checkbox"
      data-js-todo-item-checkbox />

      <label class="todo-item__label"
      for="todo-1"
      data-js-todo-item-label>
      Task 1
      </ label>

      <button class="todo-item__delete-button"
      type="button"
      aria-label="Delete"
      title="Delete"
      data-js-todo-item-delete-button>
      
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      </ button>
      </ li>

      <div class="todo__empty-message" data-js-todo-item-empty-message></ div>

    </ ul>

    </ div>
</ template>