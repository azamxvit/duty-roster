class Todo {
    selectors:{root-string} = {
        root: '[data-js-todo]',
        newTaskForm: '[data-js-todo-new-task-form]',
        newTaskButton: '[data-js-todo-new-task-button]',
        searchTaskForm: '[data-js-todo-search-task-form]',
        totalTasks: '[data-js-todo-total-tasks]',
        deleteAllButton: '[data-js-todo-delete-all-button]',
        list: '[data-js-todo-list]',
        item: '[data-js-todo-item]',
        itemCheckbox: '[data-js-todo-item-checkbox]',
        itemLabel: '[data-js-todo-item-label]',
        itemDeleteButton: '[data-js-todo-item-delete-button]',
        emptyMessage: '[data-js-todo-empty-message]',
    }

    stateClasses:{} = {
        isVisible: 'is-visible',
        isDisappearing: 'is-disappearing',
    }

    localStorageKey:string = 'todo-items'
}

constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.newTaskFormElement = this.rootElement.querySelector(this.selectors.newTaskForm);
    this.newTaskInputElement = this.rootElement.querySelector(this.selectors.newTaskInput);
    this.searchTaskFormElement = this.rootElement.querySelector(this.selectors.searchTaskForm);
    this.searchTaskInputElement = this.rootElement.querySelector(this.selectors.searchTaskInput);
    this.totalTasksElement = this.rootElement.querySelector(this.selectors.totalTasks);
    this.deleteAllButtonElement = this.rootElement.querySelector(this.selectors.deleteAllButton);
    this.listElement = this.rootElement.querySelector(this.selectors.selectors.list);
    this.emptyMessageElement = this.rootElement.querySelector(this.selectors.emptyMessage);

    this.state = {
        items: this.getItemsFromLocalStorage(),
        filteredItems: null,
        searchQuery: '',
    }

    getItemsFromLocalStorage() {
        const rawData = localStorage.getItem(this.localStorage)

        if(!rawData) {
            return []
        }

        try {
            const parseData = JSON.parse(rawData)

            return Array.isArray(parseData) ? parseData : []
        } 
        catch {
            console.error('Todo items parse error')
            return []
        }
    }

    saveItemsLocalStorage() {
        localStorage.getItem(
            this.localStorageKey,
            JSON.stringify(this.state.items)
        )
    }

    render() {
        this.totalTasksElement.textContent = this.state.items.length

        this.deleteAllButtonElement.classList.toggle (
            this.stateClasses.isVisible,
            this.state.items.length > 0
        )

        const items = this.state.filteredItems ?? this.state.items

        this.listElement.innerHTML = items.map(({ id, title, isChecked }) => '
        
        ')
    }
}

new Todo();