var inputText = document.querySelector('input');
var list = document.querySelector('.list-group');
var allChecked = document.querySelector('.i-checks');
function newRenderHtml(){
  todos.forEach(function(todo){
  var checked = todo.completed ? 'checked' : '';
  list.innerHTML += '<li class="list-group-item">'
  + '<div class="hover-anchor">'
  + '<a class="hover-action text-muted">'
  + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' 
  + todo.id + '"></span></a><label class="i-checks" for="' + todo.id + '">'
  + '<input type="checkbox" id="' + todo.id + '"' + checked + '><i></i>'
  + '<span>' + todo.content + '</span>'
  + '</label></div></li>' ;
}); 
};



// 키보드로 값 입력하기
inputText.addEventListener('keyup' , function (e) {
  if (inputText.value === '' || e.keyCode !== 13) return;
  var result = todos.map(function(todo){
    return todo.id
  });
  var maxId = todos.length === 0 ? 1 : Math.max.apply(null, result) + 1;

  // todos에 입력 값 추가하기
  todos.unshift({ id: maxId, content: inputText.value, completed: false });
  list.innerHTML = '<li class="list-group-item">'
      + '<div class="hover-anchor">'
      + '<a class="hover-action text-muted">'
      + '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' 
      + maxId + '"></span></a><label class="i-checks" for="' + maxId + '">'
      + '<input type="checkbox" id="' + maxId + '"' + false + '><i></i>'
      + '<span>' + inputText.value + '</span>'
      + '<label></div></li>' + list.innerHTML;

  inputText.value = '';
  console.log(todos);
});

// 삭제 버튼 클릭 시 해당 항목 삭제
list.addEventListener('click', function(e){
  if (e.target.nodeName !== 'SPAN' || e.target.outerText !== '') return;
  
  todos = todos.filter(function(todo){
    return todo.id !== +e.target.dataset.id;
  });
  this.removeChild(e.target.parentNode.parentNode.parentNode);
  console.log(todos);
});
 
// 체크 박스 
list.addEventListener('change', function(e){
  todos.forEach(function(todo){
    if(todo.id === +e.target.id) todo.completed = e.target.checked;
    
  });
});

// 체크 박스 전체 체크
allChecked.addEventListener('change', function(e){
  //if(e.target.id !== 'chk-allComplete') return;
  todos.forEach(function(todo){
  e.target.checked ? todo.completed = true : todo.completed = false;
  });
  newRenderHtml();
  console.dir(e);
});

// data load하기
window.addEventListener('load', function () {
  todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'JS', completed: true },
      { id: 4, content: 'Angular', completed: false }
  ];
  newRenderHtml();
 });