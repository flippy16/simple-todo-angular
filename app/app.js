(function (){
    'use strict';

    angular.module('todoApp', [])
    .component('todo', {
        controller: function(){
            const vm = this;

            vm.$onInit = function(){
                vm.arrTodo = [{
                    title: 'Learning Angular',
                    priority: 1
                }];
            }

            vm.addTodo = function(){
                if(vm.newTodo && vm.newTodo.title && vm.newTodo.priority){
                    vm.arrTodo.push({
                        title: vm.newTodo.title,
                        priority: vm.newTodo.priority
                    });
                    vm.newTodo = {
                        title: '',
                        priority: ''
                    }
                }
            }

            vm.markDone = function(todo){
                if(!todo.done) todo.done = true;
                else todo.done = false;
            }

            vm.removeTodo = function(index){
                const idx = vm.arrTodo.indexOf(todo);
                vm.arrTodo.splice(idx, 1);
            }
        },
        templateUrl: 'app/templates/todo.html'
    });
})();