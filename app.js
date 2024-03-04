let btn=document.querySelector("#btn1");


btn.addEventListener("click", async()=>{
    let fact= await getFacts()
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;

});


let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("ERROR - ",e);
        return "NO DATA FOUND!!";
    }
    
}

