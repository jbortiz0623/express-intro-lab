console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here
  //const handleSuccess = json =>  console.log(json);
  ///*
  const handleSuccess= json => { 
    $('h1').html(`<span class='cross-out'>Under Construction</span>`);
    for (var i=0;i<json.length;i++) {
      $('body').append(`<p>${json[i].title} by ${json[i].artist}</p>`);
    }
  };
  //*/

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });
});

$(document).ready(() => {
    const handleSuccess
})