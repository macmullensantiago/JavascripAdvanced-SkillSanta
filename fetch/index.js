fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response)
  .then(json => console.log(json))


//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     cache: "no-cache",
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "username" : "testUser"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))


// function uploadFile() {
//     var formData = new FormData();

//     var file = document.getElementById('file');

//     formData.append("userId", file.files[0]);

//     fetch('https://example.com/profile/avatar', {
//         method: 'PUT',
//         body: formData
//     }).then(response => response.json())
//         .then(json => console.log(json))


    // console.log(formData);
// }