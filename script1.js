const code = document.getElementById("code");
const langId = document.getElementById("language");
const output = document.getElementById("output");


function compileCode() {
  const data = {
      code: code.value,
      langId: langId.value
  }
  console.log(data);



  // output.innerText = "Compiling...";


//   fetch("https://course.codequotient.com/api/executeCode", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (res) {
//       if (!res.codeId) {
//         throw new Error("No codeId received from API.");
//       }

//       var codeId = res.codeId;

//       var interval = setInterval(function () {
        // fetch("https://course.codequotient.com/api/codeResult/" + codeId)
        //   .then(function (resultRes) {
        //     return resultRes.json();
        //   })
        //   .then(function (result) {
        //     console.log("Result from API:", result); //  Inspect in console

        //     if (result && result.data && (result.data.output !== undefined || result.data.errors !== undefined)) {
        //       clearInterval(interval);

        //       if (result.data.errors && result.data.errors.trim() !== "") {
        //         output.textContent = "Error:\n" + result.data.errors;
        //       } else {
        //         output.textContent = "Output:\n" + result.data.output;
        //       }
        //     }
        //   })
        //   .catch(function (error) {
        //     clearInterval(interval);
        //     output.textContent = "Error while fetching result: " + error.message;
        //     console.error(error);
        //   });
//       }, 2000); // polling every 2 seconds
//     })
//     .catch(function (err) {
//       output.textContent = "Error: " + err.message;
//       console.error(err);
//     });
 }
