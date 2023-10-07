let list=document.querySelector(".container");
// let input=document.querySelector("#input");
let btn=document.querySelector(".btn");
btn.addEventListener('click',(ev)=>{
    ev.preventDefault();
    // console.log(input.value);
    
    myTask();
    input.value="";
})

async function myTask(){
    const inputValue = document.getElementById("input").value;
    console.log(inputValue);
    let url=`http://www.omdbapi.com/?s=${inputValue}&apikey=bdb7c0ef`;
    let data=await fetch (url);
    let response = await data.json();
    console.log(response.Search);
    if(response.Search==null){
        empty();
    }
    else{
        show(response.Search);
    }
}

function show(d){
    list.innerHTML="";
        // console.log(d[0]);
        d.forEach(element => {
        let div=document.createElement("section");
        div.classList.add("c");
        div.innerHTML=`<div>
                         <span">
                            <b>Title: </b>${element.Title}</span><br/>
                        <span>
                              <b>Year: </b>${element.Year}</span>
                        </div>
                        <div >
                        <img class="listImg" src="${element.Poster}">
                        </div>`;
        list.append(div);
        
       });
    // let div=document.createElement("div");
    // div.innerHTML=`<span>${d.Title}</span>`;
    // list.append(div);
    

}

const empty = ()=>{
    list.innerHTML="";
    let div=document.createElement("div");
    div.classList.add("em");
    div.innerHTML=`<h1>No movies found!!</h1><p>Try with another keyword</p>`;
    list.append(div);
}