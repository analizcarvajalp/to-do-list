const input = document.getElementById('campo')
    const btnAgregar = document.getElementById('agregar')
    const text = document.getElementById('texto')
    const ul = document.getElementById('ul')
    const end = document.getElementById('end')
    const btnTodos = document.getElementById('Todos')
    const btnListos = document.getElementById('btnListos')
    const btnSinRealizar = document.getElementById('sinRealizar')
  let Listos = document.createElement('div')
  Listos.classList.add('listos')
  Listos.innerHTML = '<h2 class="item-title">Items Completados</h2>'

btnAgregar.addEventListener('click',function(e){
  let btnBorrar = document.createElement("button")
  let btnCheck = document.createElement("button")
  let btnUndo = document.createElement("button")
  let div = document.createElement("div")
  if(input.value == ''){
      alert('debes escribir algo')
    }
    else{
      
      let todoTexto = input.value
 
  let p = document.createElement('p')
  let li = document.createElement("li")
  li.appendChild(p)
  li.appendChild(div)
  div.appendChild(btnBorrar)
  div.append(btnCheck)
  ul.appendChild(li)
  btnCheck.classList.add("fas", "fa-check-square", "tachar")
  btnBorrar.classList.add("fas","fa-minus-square","borrar")
  btnUndo.classList.add("fas", "fa-undo", "tachar")
  li.classList.add('lista','faltante')
  p.innerHTML = todoTexto
  input.value = ''
  console.log(li)
 btnTodos.addEventListener('click', function(){
  if(Listos.children.length == 1){
          Listos.remove()
        }
       
  if(li.classList.contains('faltante')){
      ul.appendChild(li)
  }
  if(Listos.children.length > 1){
          ul.appendChild(Listos)
        }
  if(li.classList.contains('remove')){
    li.remove()
  }
  })

   btnListos.addEventListener('click', function(){
       if(!li.classList.contains('check')){
         li.remove()
         ul.appendChild(Listos)
       }
        if(Listos.children.length == 1){
          Listos.remove()
        }
        if(Listos.children.length > 1){
          ul.appendChild(Listos)
        }
        
     })



     btnSinRealizar.addEventListener('click', function(e){
  if(li.classList.contains('check')){
    Listos.remove()
  }
  if(li.classList.contains('faltante')){
      ul.appendChild(li)
  }
  if(li.classList.contains('remove')){
    li.remove()
  }
 

  
})



}


    btnBorrar.addEventListener('click',function(e){
      e.target.parentElement.parentElement.classList.add('remove')
      e.target.parentElement.parentElement.remove()
      if(Listos.children.length == 1){
          Listos.remove()
      }
    })

    btnCheck.addEventListener('click', function(e){

     let elemento = e.target.parentElement.parentElement
     elemento.classList.add('check')
     elemento.classList.remove('faltante')
     btnCheck.remove()
     div.appendChild(btnUndo)
     console.log()

     if(elemento.classList.contains('check')){
       
       end.appendChild(Listos)
       Listos.appendChild(elemento)
       
      
     }
  })

   btnUndo.addEventListener('click', function(e){
    let elemento = e.target.parentElement.parentElement
    elemento.classList.remove('check')
    elemento.classList.add('faltante')
    ul.appendChild(elemento)
    btnUndo.remove()
    div.append(btnCheck)
    if(Listos.children.length == 1){
          Listos.remove()
      }
   })

   
  
})



   