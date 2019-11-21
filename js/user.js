var user  ;
var adresse = 'http://192.168.192.1:3025/';

function CheckValidCaptcha() {
	 
	   var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
	      var string2 = removeSpaces(document.getElementById('txtInput').value);
	  
		   var url = adresse +'registertizen/'+string2;
		   var method = 'GET';
		   
		   var xhr = new XMLHttpRequest(); 
		   xhr.open(method, url);
		   //callback
		   xhr.onload = function() {
		    var status = xhr.status;
		    if ((status == 200) && (string1 == string2)) {
				document.getElementById('success').innerHTML = "Form is validated Successfully";
		    var userJson = JSON.parse(xhr.responseText) ;
		    localStorage.setItem("userName", string2);
		    window.open("./home.html",'_self');
		    //window.location.replace = "../generic.html";
		    setuser(userJson.result);
		// successHandler && successHandler(xhr.response);
		    } else {
		    document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
		     errorHandler && errorHandler(status);
		    }
		   };
		   xhr.send();
		}
 function setuser(userJson) {
	    //var out = "";
		var i;
		

	    for(i = 0; i < userJson.length; i++) {
	    	alert(userJson[i].id);
	    //	user.login = userJson[i].login ;
	    	user = { id : userJson[i].id,login : userJson[i].login};
	    	localStorage.setItem("user",JSON.stringify(user));
	    	   //out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
	    }
	    //document.getElementById("id01").innerHTML = out;
	}
 function getUser() {
	 return this.user.login ;
} 
 
 
 
 function generateCaptcha()
 {
     var alpha = new Array('1','2','3','4','5','8','9');
     var i;
     for (i=0;i<5;i++){
       var a = alpha[Math.floor(Math.random() * alpha.length)];
       var b = alpha[Math.floor(Math.random() * alpha.length)];
       var c = alpha[Math.floor(Math.random() * alpha.length)];
       var d = alpha[Math.floor(Math.random() * alpha.length)];
      }
    var code = a + '' + b + '' + '' + c + '' + d;
    document.getElementById("mainCaptcha").value = code
  }		   
  function removeSpaces(string){
    return string.split(' ').join('');
  }