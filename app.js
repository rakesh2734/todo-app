var myModule= angular.module("todoApp", []);
myModule.controller("TodoCtrl", TodoCtrl);

function TodoCtrl (){
    this.editMode =false;    
    this.todos =[
        "Learn AngularJs In-depth",
        "try out angular problems",
        "Visit different websites for angularjs tutorial"
    ];

    this.addNewTodo = function(){
        this.todos.push(this.editTheTodo);
        this.editTheTodo = "";   
    }

    this.triggerEditMOde = function(){
        this.editMode =!this.editMode;
    }

    this.deleteMode = function(){
        this.todos.splice(index);
    }

}