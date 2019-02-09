import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./todos.css']
})

  export class AppComponent {

    title = 'Make a new recipe';
    newTodo: string;
    steps: string[];
    ingredients: string[];
    equipments: string[];
    comments: string[];
    type: string;
    todoObj: any;
    typeMap : any;

    constructor(
        //private apiService: ApiService
      ) {
      this.newTodo = '';
      this.steps = [];
      this.ingredients = [];
      this.equipments = [];
      this.comments = [];
      this.typeMap = 
      {
        "step": this.steps,
        "ingredient" : this.ingredients,
        "equipment" : this.equipments,
        "comment" : this.comments
      }
      console.log()
    }

    addTodo(event) {
      this.todoObj = {
        value: this.newTodo,
        type: this.type
      }
      if(this.type === 'step'){
      this.steps.push(this.todoObj);
      } if(this.type === 'ingredient'){
      this.ingredients.push(this.todoObj);
      } if(this.type === 'comment'){
      this.comments.push(this.todoObj);
      } if(this.type === 'equipment'){
      this.equipments.push(this.todoObj);
      }
      console.log(this.todoObj.value);
      this.newTodo = '';
      //this.apiService.get('/api/version').toPromise().then(resp => {console.log(resp)})
      event.preventDefault();
    }



    

    
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  
  deleteElement(type,index) {
     this.typeMap[type].splice(index, 1);
    }

  }