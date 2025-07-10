const code = document.getElementById("code");
const language = document.getElementById("language");
const output = document.getElementById("output");
const compileBtn  = document.querySelector("#compileBtn");

let codeId = null;

compileBtn.addEventListener("click", () =>{
    console.log(codeId);
    let data = {
        code: code.value,
        langId : language.value
    }
    console.log(data);

    fetch("https://course.codequotient.com/api/executeCode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then( (res) => {
        return res.json()
    }).then((obj) => {
        if(!obj.codeId){
            throw new  Error("No codeId received from API.");
        }
        codeId = obj.codeId;
        console.log("code id is: "+codeId);

        let timer = setInterval(()=> {
            fetch(`https://course.codequotient.com/api/codeResult/${codeId}`)
          .then(function (resultRes) {
            return resultRes.json();
          })
          .then(function (result) {
            console.log( result);
            const data = JSON.parse(result.data);
            console.log(data);

            if (data) {
              clearInterval(timer);
              if (data.errors) {
                output.innerText =  data.errors;
              } else {
                output.innerText =  data.output;
              }
            }
          })
          .catch(function (error) {
            clearInterval(timer);
            output.textContent = "Error while fetching result: " + error.message;
            console.error(error);
          });
        }, 2000)
    })
    
});