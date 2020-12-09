$(document).ready(function(){
    // use jQuery to hook up the button
    $('table').hide();
    $('#btn').click(function(){
      console.log('Button Clicked');
      makeRequest();
      $('table').toggle();
    });
    
    console.log("hi");
  });
  
  function makeRequest() {
    console.log('makeRequest is called');
      let httpRequest = new XMLHttpRequest();
  
      if(!httpRequest) {
          alert("Problem makeRequest");
          return false;
      }
  
      // this executes after whats below
      httpRequest.onreadystatechange = function() {
          if(httpRequest.readyState === XMLHttpRequest.DONE) {
              if(httpRequest.status === 200) {
                  // document.write(httpRequest.responseText);
          console.log('Results -> ', httpRequest.responseText);
          
          let myArray = JSON.parse(httpRequest.responseText).VeraEducation;
          if(Array.isArray(myArray)) {
            myArray.forEach((element) => {
              console.log(element);
              var tr;
  
      tr = $('<tr/>');
      tr.append("<td>" + element.degree.school + "</td>");
      tr.append("<td>" + element.degree.major + "</td>");
      tr.append("<td>" + element.degree.type+ "</td>");
      tr.append("<td>" + element.degree.graduation + "</td>");
      
      $('table').first().append(tr);
    
            });
          } else {
            console.log('Is not an array', myArray);
          }
              } else {
                  alert("There was a problem with the request");
              }
          } else {
        console.log("Progress = ", httpRequest.readyState);
      }
      };	
  
      // this will happen before onreadystatechange
      httpRequest.open('GET', 'myJson.json');
      httpRequest.send();
  }

// vue js
  console.log("hi");
let app = new Vue({
    el: "#app",
    data: function() {
      return {
  
        homeLink: false,
      }
    },
  
  })
