
function validadeNewTask(){
  let localStorageKey = 'myTasks'; // Chave desejada para armazenamento local

  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let inputValue = document.getElementById('input--new-tesk').value;
  let exists = values.find( x => x.name == inputValue)
  return !exists ? false : true;

}


function newTask() {
  let localStorageKey = 'myTasks'; // Chave desejada para armazenamento local
  let input = document.getElementById('input--new-tesk');
  let valores = input.value
  input.style.border = ''

 

  // Validação
  if (!input.value) {
    input.style.border = '1px solid red'
    alert('Digite um item');
  }
  else if(validadeNewTask()){
    alert('já existe um item com esse nome')
  }
  else if(valores.length > 20){
    alert('no maximo 20 caracteres')
  }
   else {
    let localStorageKey = 'myTasks'; // Chave desejada para armazenamento local

    // Incrementando o valor no localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues()
    
  }
  input.value = ''
}

function showValues() {
  let localStorageKey = 'myTasks'; // Chave desejada para armazenamento local

  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById('to--do-list')
  list.innerHTML = ''
  for (let i = 0; i < values.length; i++){
    list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick="removeItem('${values[i]['name']}')">X</button></li>`
  }
}
function removeItem(dados){
  let localStorageKey = 'myTasks'; // Chave desejada para armazenamento local

  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex(x => x.name == dados)
  values.splice(index,1)
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  showValues()

}
window.onload = function() {
  showValues();
};

  













