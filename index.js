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
    console.log(response);
    show(response.Search);
}

function show(d){
    list.innerHTML="";
        // console.log(d[0]);
        d.forEach(element => {
        let div=document.createElement("div");
        div.classList.add("c");
        div.innerHTML=`<span style="display:flex;flex-direction:column;justify-content:center;font-size:2rem;"><span style="margin-bottom:20px;"><b>Title: </b>${element.Title}</span><span><b>Year: </b>${element.Year}</span></span><span ><img src="${element.Poster}" width="200px" height="200px"></span>`;
        list.append(div);
        
       });
    // let div=document.createElement("div");
    // div.innerHTML=`<span>${d.Title}</span>`;
    // list.append(div);
    
}