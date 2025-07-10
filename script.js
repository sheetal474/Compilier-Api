// function compileCode() {
//   var code = document.querySelector("#code").value;
//   var langId = document.querySelector("#language").value;
//   var output = document.querySelector("#output");

//   output.textContent = "Compiling...";
//   var data = {
//     code: code,
//     langId: langId

//   };


//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://course.codequotient.com/api/executeCode");
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var response = JSON.parse(xhr.responseText);

//       if (response.error) {
//         output.textContent = "Error: " + response.error;
//       } else {
//         var codeId = response.codeId;

//         var interval = setInterval(function () {
//           var resultXhr = new XMLHttpRequest();
//           resultXhr.open("GET", `https://course.codequotient.com/api/codeResult/${codeId}`);

//           resultXhr.onreadystatechange = function () {
//             if (resultXhr.readyState === 4 && resultXhr.status === 200) {
//               var result = JSON.parse(resultXhr.responseText);

//               if (result.data && result.data.output !== undefined) {
//                 clearInterval(interval);

//                 if (result.data.errors && result.data.errors.trim() !== "") {
//                   output.textContent = "Error:\n" + result.data.errors;
//                 } else {
//                   output.textContent = "Output:\n" + result.data.output;
//                 }
//               }
//             }
//           };

//           resultXhr.send();
//         }, 2000); // check every 2 seconds
//       }
//     }
//   };

//   xhr.send(JSON.stringify(data));
// }
