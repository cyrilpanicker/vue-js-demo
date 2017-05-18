
var components = {};

components['todo-item'] = {
    props:['todo'],
    template:`
        <li :class="{'complete':todo.complete}">
            <span @click="$emit('toggle')">{{todo.text}} --- </span>
            <a href="" @click.prevent="$emit('remove')">\u2717</a>
        </li>
    `
};

var app = new Vue({
    components : components,
    data:{
        counter:0,
        newTodoText:'',
        todos:[]
    },
    computed:{
        incompleteTodos:function(){
            return this.todos.filter(function(todo){
                return !todo.complete;
            });
        },
        completedTodos:function(){
            return this.todos.filter(function(todo){
                return todo.complete;
            });
        }
    },
    methods:{
        addTodo:function(){
            this.counter++;
            this.todos.push({id:this.counter,text:this.newTodoText,complete:false});
            this.newTodoText = '';
        },
        toggleTodo:function(todo){
            todo.complete = !todo.complete;
        },
        removeTodo:function(todo){
            var index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
        removeAllTodos:function(){
            this.todos = [];
        }
    },
    template:`
        <div class="todos">
            <input v-model="newTodoText" @keyup.enter="addTodo" placeholder="add todo" />
            <button @click="addTodo">+</button>
            <div v-show="todos.length">
                <div class="counts" v-show="todos.length">
                    <span>all - {{todos.length}},</span>
                    <span>incomplete - {{incompleteTodos.length}},</span>
                    <span>complete - {{completedTodos.length}}</span>
                </div>
                <div class="message">
                    click on todo to toggle
                </div>
            </div>
            <ul>
                <todo-item v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
                    @toggle="toggleTodo(todo)"
                    @remove="removeTodo(todo)"
                ></todo-item>
            </ul>
            <a href=""  v-show="todos.length"
                @click.prevent="removeAllTodos"
            >
                Delete All
            </a>
        </div>
    `
});

app.$mount('#app');