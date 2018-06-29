var todos = [];
var list = document.querySelector('.list-group');
var inputText = document.querySelector('.form-control');

window.addEventListener('load', function () {
  todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: true },
  { id: 4, content: 'Node', completed: false }
  ];
  
  var newHtmlElements = todos.forEach(function(todo){
      var checked = todo.completed ? 'checked' : '';

      list.innerHTML += '<li class="list-group-item">' 
      + '<div class="hover-anchor">'
      + '<a class="hover-action text-muted">' 
      + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span></a>'
      + '<label class="i-checks" for="' + todo.id + '"><input type="checkbox" id="' + todo.id + '"' + checked + '><i></i><span>' 
      + todo.content + '</span></label></div></li>';
   
  }); 
 });

 //enter키 누를 시 inputText에 입력한 값 todos와 list에 추가하기
inputText.addEventListener('keyup',function(e){
  if(e.keyCode !== 13) return;
  var result = todos.map(function(todo){
    return todo.id;
  });
  var maxId = Math.max.apply(null, result) + 1;

  list.innerHTML += '<li class="list-group-item">' 
  + '<div class="hover-anchor">'
  + '<a class="hover-action text-muted">' 
  + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + maxId + '"></span></a>' 
  + '<label class="i-checks" for="' + maxId + '"><input type="checkbox" id="' + maxId + '"' +'' + '><i></i>' 
  + '<span>' + inputText.value + '</span></label></div></li>';
  todos.unshift({ id: maxId, content: inputText.value, completed: false });
  inputText.value = '';
  console.log(todos);
 });


list.addEventListener('click', function(e){
    todos = todos.filter(function(todo){
    return todo.id !== +e.target.id;
    });
    
    console.dir();

 });
