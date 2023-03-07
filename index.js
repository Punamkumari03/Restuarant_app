var ul=document.getElementById('item')
ul.addEventListener('click',removeItem)

function addData(event){
    event.preventDefault()
    var amount=document.getElementById('amount').value 
    var description=document.getElementById('description').value 
    var category=document.getElementById('category').value 

    var li=document.createElement('li');
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
   
    deleteBtn.className = 'li_btn';
   
    deleteBtn.appendChild(document.createTextNode('Delete'))
 
    li.appendChild(document.createTextNode(amount+' '+description+' '+category))
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    
    let myObj ={
        amount:amount,
        description:description ,
        category:category  
    }
axios.post("https://crudcrud.com/api/514a509335d94e47b4725ba17d5817a4/restaurant",myObj)
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
axios.get("https://crudcrud.com/api/514a509335d94e47b4725ba17d5817a4/restaurant")
.then((response)=>{
    console.log(response)
    for(var i=0; i<response.data.length;i++){
        showUserDetail(response.data[i])
    }
})
.catch((err)=>{
    console.log(err)
})
function showUserDetail(user){

    var li=document.createElement('li');
    var deleteBtn = document.createElement('button');
   
   
    deleteBtn.className = 'li_btn';
   
    deleteBtn.appendChild(document.createTextNode('Delete'))
 
    li.appendChild(document.createTextNode(user.amount+'--'+user.description+'--'+user.category+'--'+user._id+'--'))
   
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}
showUserDetail()
}
function removeItem(event){
    if(event.target.classList.contains('li_btn')){
        var li = event.target.parentElement;
        var data=li.textContent
        data=data.split('--')
        var id =data[3]
        axios.delete(`https://crudcrud.com/api/514a509335d94e47b4725ba17d5817a4/restaurant/${id}`)
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                showUserDetail(response.data[i])
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        ul.removeChild(li)

    }

}

