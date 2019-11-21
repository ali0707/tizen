var adresse = 'http://192.168.192.1:3025/';
var method = 'GET';


function getAllAccueil(){
	document.getElementById("username").innerHTML = localStorage.getItem("userName");

	   var url = adresse +'loginu/'+localStorage.getItem("userName");
	   var xhr; 
	    if (window.XMLHttpRequest) 
	        xhr = new XMLHttpRequest(); 
	    
	    else if (window.ActiveXObject) 
	        xhr = new ActiveXObject("Msxml2.XMLHTTP");
	    else 
	        throw new Error("Ajax is not supported by your browser");
	    // 1. Instantiate XHR - End
	    
	    // 2. Handle Response from Server - Start
	
	    xhr.onreadystatechange = function () {
	    	
	//  alert("d5al c bon");
	/*  if (navigator.onLine) {
		  console.log('online');
		} else {
		  console.log('offline');
		}
		*/
	          //  document.getElementById('div1').innerHTML = "Loading...";
	         if (xhr.readyState === 4) {
	            if (xhr.status == 200 && xhr.status < 300)
	            {
	                var json = JSON.parse(xhr.responseText);
	             //   alert(json.result[0].login);
	                var x =json.result[0].levelmath;
	                var one = document.getElementById("test1").innerHTML ="1"
	                	document.getElementById("math").innerHTML =json.result[0].levelmath;
	               // alert(document.getElementById("math").innerHTML);
	            	document.getElementById("fr").innerHTML =json.result[0].levelfr;
	            	document.getElementById("arab").innerHTML =json.result[0].levelarab;
	            	document.getElementById("ang").innerHTML =json.result[0].leveleng;
	            		if (json.result[0].levelmath == 1){
		            		document.getElementById("test1").innerHTML = "play";
		            		document.getElementById("testv1").onclick = function() {
		            		    window.open("./math.html",'_self');
		                        };	
		            		document.getElementById("test2").innerHTML = "blocked";
		            		document.getElementById("test3").innerHTML = "blocked";
		            		document.getElementById("test4").innerHTML = "blocked";
		            		document.getElementById("test5").innerHTML = "blocked";
		            		document.getElementById("testv2").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 1.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
	            			})
	            			   };	
	            			   document.getElementById("testv3").onclick = function() {
		            			    Swal.fire({    
				            			  imageUrl: './images/xx.jpg',
				            			  imageHeight: 50,
				            			  imagewight: 50,
				            			  imageAlt: 'A tall image'
				            			})
				            			   };	document.getElementById("testv4").onclick = function() {
					            			    Swal.fire({    
							            			  imageUrl: './images/xx.jpg',
							            			  imageHeight: 50,
							            			  imagewight: 50,
							            			  imageAlt: 'A tall image'
							            			})
							            			   };	document.getElementById("testv5").onclick = function() {
								            			    Swal.fire({    
										            			  imageUrl: './images/xx.jpg',
										            			  imageHeight: 50,
										            			  imagewight: 50,
										            			  imageAlt: 'A tall image'
										            			})
										            			   };

	            		}else if (json.result[0].levelmath == 2){
		            		document.getElementById("test1").innerHTML = "play";
							document.getElementById("test2").innerHTML = "play";
							document.getElementById("testv2").onclick = function() {
		            		    window.open("./math2.html",'_self');
		                        };	
							document.getElementById("myImg2").src = "images/unlock.png";

		            		document.getElementById("test3").innerHTML = "blocked";

		            		document.getElementById("test4").innerHTML = "blocked";
							document.getElementById("test5").innerHTML = "blocked";
							document.getElementById("testv3").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 2.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv4").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 1.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};
					document.getElementById("testv5").onclick = function() {
						Swal.fire({    
							title: 'blocked',
							  text: 'you have to play stage 2.',
					  imageUrl: './images/xx.jpg',
					  imageHeight: 50,
					  imagewight: 50,
					  imageAlt: 'A tall image'
					})
				};


	            		}else if (json.result[0].levelmath == 3){
		            		document.getElementById("test1").innerHTML = "play";
		            		document.getElementById("test2").innerHTML = "play";
		            		document.getElementById("test3").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("test4").innerHTML = "blocked";
		            		document.getElementById("test5").innerHTML = "blocked";
		            		document.getElementById("testv4").onclick = function() {
								Swal.fire({    
									title: 'blocked',
									  text: 'you have to play stage 3.',
							  imageUrl: './images/xx.jpg',
							  imageHeight: 50,
							  imagewight: 50,
							  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv5").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 3.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};


	            		}else if (json.result[0].levelmath == 4){
		            		document.getElementById("test1").innerHTML = "play";
		            		document.getElementById("test2").innerHTML = "play";
		            		document.getElementById("test3").innerHTML = "play";
		            		document.getElementById("test4").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("test5").innerHTML = "blocked";
		            		document.getElementById("test5").onclick = function() {
		            			    Swal.fire({    
		            			  imageUrl: './images/aplle.jpg',
		            			  imageHeight: 50,
		            			  imagewight: 50,
		            			  imageAlt: 'A tall image'
		            			})
		            			   };
		            		}
	            		else if (json.result[0].levelmath == 5){
		            		document.getElementById("test1").innerHTML = "play";
		            		document.getElementById("test2").innerHTML = "play";
		            		document.getElementById("test3").innerHTML = "play";
		            		document.getElementById("test4").innerHTML = "play";
		            		document.getElementById("test5").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg5").src = "images/unlock.png";
	            		}
	            		
	            		if (json.result[0].levelfr == 1){
		            		document.getElementById("test1fr").innerHTML = "play";
		            		document.getElementById("testv1fr").onclick = function() {
		            		    window.open("./fr.html",'_self');
		                        };	
		            		document.getElementById("test2fr").innerHTML = "blocked";
		            		document.getElementById("test3fr").innerHTML = "blocked";
		            		document.getElementById("test4fr").innerHTML = "blocked";
		            		document.getElementById("test5fr").innerHTML = "blocked";
		            		document.getElementById("testv2fr").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 1.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
	            			})
	            			   };	
	            			   document.getElementById("testv3fr").onclick = function() {
		            			    Swal.fire({    
				            			  imageUrl: './images/xx.jpg',
				            			  imageHeight: 50,
				            			  imagewight: 50,
				            			  imageAlt: 'A tall image'
				            			})
				            			   };	document.getElementById("testv4fr").onclick = function() {
					            			    Swal.fire({    
							            			  imageUrl: './images/xx.jpg',
							            			  imageHeight: 50,
							            			  imagewight: 50,
							            			  imageAlt: 'A tall image'
							            			})
							            			   };	document.getElementById("testv5fr").onclick = function() {
								            			    Swal.fire({    
										            			  imageUrl: './images/xx.jpg',
										            			  imageHeight: 50,
										            			  imagewight: 50,
										            			  imageAlt: 'A tall image'
										            			})
										            			   };

	            		}else if (json.result[0].levelfr == 2){
		            		document.getElementById("test1fr").innerHTML = "play";
							document.getElementById("test2fr").innerHTML = "play";
							document.getElementById("myImg2").src = "images/unlock.png";

		            		document.getElementById("test3").innerHTML = "blocked";

		            		document.getElementById("test4fr").innerHTML = "blocked";
							document.getElementById("test5fr").innerHTML = "blocked";
							document.getElementById("testv3fr").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 2.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv4fr").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 1.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};
					document.getElementById("testv5fr").onclick = function() {
						Swal.fire({    
							title: 'blocked',
							  text: 'you have to play stage 2.',
					  imageUrl: './images/xx.jpg',
					  imageHeight: 50,
					  imagewight: 50,
					  imageAlt: 'A tall image'
					})
				};


	            		}else if (json.result[0].levelfr == 3){
		            		document.getElementById("test1").innerHTML = "play";
		            		document.getElementById("test2").innerHTML = "play";
		            		document.getElementById("test3").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("test4fr").innerHTML = "blocked";
		            		document.getElementById("test5fr").innerHTML = "blocked";
		            		document.getElementById("testv4fr").onclick = function() {
								Swal.fire({    
									title: 'blocked',
									  text: 'you have to play stage 3.',
							  imageUrl: './images/xx.jpg',
							  imageHeight: 50,
							  imagewight: 50,
							  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv5fr").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 3.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};


	            		}else if (json.result[0].levelfr == 4){
		            		document.getElementById("test1fr").innerHTML = "play";
		            		document.getElementById("test2fr").innerHTML = "play";
		            		document.getElementById("test3fr").innerHTML = "play";
		            		document.getElementById("test4fr").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("test5fr").innerHTML = "blocked";
		            		document.getElementById("test5fr").onclick = function() {
		            			    Swal.fire({   
		            					title: 'blocked',
										  text: 'you have to play stage 3.',
		            			  imageUrl: './images/aplle.jpg',
		            			  imageHeight: 50,
		            			  imagewight: 50,
		            			  imageAlt: 'A tall image'
		            			})
		            			   };
		            		}
	            		else if (json.result[0].levelfr == 5){
		            		document.getElementById("test1fr").innerHTML = "play";
		            		document.getElementById("test2fr").innerHTML = "play";
		            		document.getElementById("test3fr").innerHTML = "play";
		            		document.getElementById("test4fr").innerHTML = "play";
		            		document.getElementById("test5fr").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg5").src = "images/unlock.png";
	            		}if (json.result[0].levelarab == 1){
		            		document.getElementById("test1ar").innerHTML = "blocked";
		            		document.getElementById("testv1ar").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'soon.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
	            			})
	            			   };
								document.getElementById("myImg1").src = "images/unlock.png";
			            		document.getElementById("test1ar").innerHTML = "blocked";
		            		document.getElementById("test2ar").innerHTML = "blocked";
		            		document.getElementById("test3ar").innerHTML = "blocked";
		            		document.getElementById("test4ar").innerHTML = "blocked";
		            		document.getElementById("test5ar").innerHTML = "blocked";
		            		document.getElementById("testv2ar").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 1.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
	            			})
	            			   };	
	            			   document.getElementById("testv3ar").onclick = function() {
		            			    Swal.fire({    
				            			  imageUrl: './images/xx.jpg',
				            			  imageHeight: 50,
				            			  imagewight: 50,
				            			  imageAlt: 'A tall image'
				            			})
				            			   };	document.getElementById("testv4ar").onclick = function() {
					            			    Swal.fire({    
							            			  imageUrl: './images/xx.jpg',
							            			  imageHeight: 50,
							            			  imagewight: 50,
							            			  imageAlt: 'A tall image'
							            			})
							            			   };	document.getElementById("testv5ar").onclick = function() {
								            			    Swal.fire({    
										            			  imageUrl: './images/xx.jpg',
										            			  imageHeight: 50,
										            			  imagewight: 50,
										            			  imageAlt: 'A tall image'
										            			})
										            			   };

	            		}else if (json.result[0].levelarab == 2){
		            		document.getElementById("test1ar").innerHTML = "play";
							document.getElementById("test2ar").innerHTML = "play";
							document.getElementById("myImg2").src = "images/unlock.png";

		            		document.getElementById("test3ar").innerHTML = "blocked";

		            		document.getElementById("test4ar").innerHTML = "blocked";
							document.getElementById("test5ar").innerHTML = "blocked";
							document.getElementById("testv3ar").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 2.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv4ar").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 1.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};
					document.getElementById("testv5ar").onclick = function() {
						Swal.fire({    
							title: 'blocked',
							  text: 'you have to play stage 2.',
					  imageUrl: './images/xx.jpg',
					  imageHeight: 50,
					  imagewight: 50,
					  imageAlt: 'A tall image'
					})
				};


	            		}else if (json.result[0].levelar == 3){
		            		document.getElementById("test1ar").innerHTML = "play";
		            		document.getElementById("test2ar").innerHTML = "play";
		            		document.getElementById("test3ar").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("test4ar").innerHTML = "blocked";
		            		document.getElementById("test5ar").innerHTML = "blocked";
		            		document.getElementById("testv4ar").onclick = function() {
								Swal.fire({    
									title: 'blocked',
									  text: 'you have to play stage 3.',
							  imageUrl: './images/xx.jpg',
							  imageHeight: 50,
							  imagewight: 50,
							  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv5").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 3.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};


	            		}else if (json.result[0].levelar == 4){
		            		document.getElementById("test1ar").innerHTML = "play";
		            		document.getElementById("test2ra").innerHTML = "play";
		            		document.getElementById("test3ra").innerHTML = "play";
		            		document.getElementById("test4ar").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("test5ar").innerHTML = "blocked";
		            		document.getElementById("test5ar").onclick = function() {
		            			    Swal.fire({   
		            					title: 'blocked',
										  text: 'you have to play stage 3.',
		            			  imageUrl: './images/aplle.jpg',
		            			  imageHeight: 50,
		            			  imagewight: 50,
		            			  imageAlt: 'A tall image'
		            			})
		            			   };
		            		}
	            		else if (json.result[0].levelar == 5){
		            		document.getElementById("test1ar").innerHTML = "play";
		            		document.getElementById("test2ar").innerHTML = "play";
		            		document.getElementById("test3ar").innerHTML = "play";
		            		document.getElementById("test4ar").innerHTML = "play";
		            		document.getElementById("test5ar").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg5").src = "images/unlock.png";
	            		}if (json.result[0].leveleng == 1){
		            		document.getElementById("test1an").innerHTML = "blocked";
		            		document.getElementById("testv1an").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'soon.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
	            			})
	            			   };
								document.getElementById("myImg1").src = "images/unlock.png";
			            		document.getElementById("test1an").innerHTML = "blocked";
		            		document.getElementById("test2an").innerHTML = "blocked";
		            		document.getElementById("test3an").innerHTML = "blocked";
		            		document.getElementById("test4an").innerHTML = "blocked";
		            		document.getElementById("test5an").innerHTML = "blocked";
		            		document.getElementById("testv2an").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 1.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
	            			})
	            			   };	
	            			   document.getElementById("testv3an").onclick = function() {
		            			    Swal.fire({    
				            			  imageUrl: './images/xx.jpg',
				            			  imageHeight: 50,
				            			  imagewight: 50,
				            			  imageAlt: 'A tall image'
				            			})
				            			   };	document.getElementById("testv4an").onclick = function() {
					            			    Swal.fire({    
							            			  imageUrl: './images/xx.jpg',
							            			  imageHeight: 50,
							            			  imagewight: 50,
							            			  imageAlt: 'A tall image'
							            			})
							            			   };	document.getElementById("testv5an").onclick = function() {
								            			    Swal.fire({    
										            			  imageUrl: './images/xx.jpg',
										            			  imageHeight: 50,
										            			  imagewight: 50,
										            			  imageAlt: 'A tall image'
										            			})
										            			   };

	            		}else if (json.result[0].leveleng == 2){
		            		document.getElementById("test1an").innerHTML = "play";
							document.getElementById("test2an").innerHTML = "play";
							document.getElementById("myImg2").src = "images/unlock.png";

		            		document.getElementById("test3an").innerHTML = "blocked";

		            		document.getElementById("test4an").innerHTML = "blocked";
							document.getElementById("test5an").innerHTML = "blocked";
							document.getElementById("testv3an").onclick = function() {
	            			    Swal.fire({    
	            			    	title: 'blocked',
	            			    	  text: 'you have to play stage 2.',
	            			  imageUrl: './images/xx.jpg',
	            			  imageHeight: 50,
	            			  imagewight: 50,
	            			  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv4an").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 1.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};
					document.getElementById("testv5an").onclick = function() {
						Swal.fire({    
							title: 'blocked',
							  text: 'you have to play stage 2.',
					  imageUrl: './images/xx.jpg',
					  imageHeight: 50,
					  imagewight: 50,
					  imageAlt: 'A tall image'
					})
				};


	            		}else if (json.result[0].leveleng == 3){
		            		document.getElementById("test1an").innerHTML = "play";
		            		document.getElementById("test2an").innerHTML = "play";
		            		document.getElementById("test3an").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("test4an").innerHTML = "blocked";
		            		document.getElementById("test5an").innerHTML = "blocked";
		            		document.getElementById("testv4an").onclick = function() {
								Swal.fire({    
									title: 'blocked',
									  text: 'you have to play stage 3.',
							  imageUrl: './images/xx.jpg',
							  imageHeight: 50,
							  imagewight: 50,
							  imageAlt: 'A tall image'
							})
						};
						document.getElementById("testv5an").onclick = function() {
							Swal.fire({    
								title: 'blocked',
								  text: 'you have to play stage 3.',
						  imageUrl: './images/xx.jpg',
						  imageHeight: 50,
						  imagewight: 50,
						  imageAlt: 'A tall image'
						})
					};


	            		}else if (json.result[0].leveleng == 4){
		            		document.getElementById("test1an").innerHTML = "play";
		            		document.getElementById("test2an").innerHTML = "play";
		            		document.getElementById("test3an").innerHTML = "play";
		            		document.getElementById("test4an").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("test5an").innerHTML = "blocked";
		            		document.getElementById("test5an").onclick = function() {
		            			    Swal.fire({   
		            					title: 'blocked',
										  text: 'you have to play stage 3.',
		            			  imageUrl: './images/aplle.jpg',
		            			  imageHeight: 50,
		            			  imagewight: 50,
		            			  imageAlt: 'A tall image'
		            			})
		            			   };
		            		}
	            		else if (json.result[0].leveleng == 5){
		            		document.getElementById("test1an").innerHTML = "play";
		            		document.getElementById("test2an").innerHTML = "play";
		            		document.getElementById("test3an").innerHTML = "play";
		            		document.getElementById("test4an").innerHTML = "play";
		            		document.getElementById("test5an").innerHTML = "play";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg4").src = "images/unlock.png";
		            		document.getElementById("myImg3").src = "images/unlock.png";
		            		document.getElementById("myImg2").src = "images/unlock.png";
		            		document.getElementById("myImg5").src = "images/unlock.png";
	            		}
	            }
	        }
	      
	    }

	    // 2. Handle Response from Server - End

	    // 3. Specify your action, location and Send to the server - Start   
	    xhr.open('GET', url);
	    xhr.send(null);
	 
	    // 3. Specify your action, location and Send to the server - End
	}


function setaccueil(accueilJson) {
    var out = "";
    var i;

    for(i = 0; i < accueilJson.length; i++) {
        accueil = new Object();
        accueil.id = accueilJson[i].id ;
      //  alert("ttttttttttttttt");
               var url1 = adresse + accueilJson[i].typeaccueil + '/'+accueilJson[i].idetranger;
               //alert(url1);
               var xhr1 = new XMLHttpRequest(); 
               xhr1.open( method , url1,false);
               xhr1.onload = function() {
                var status1 = xhr1.status;
                if (status1 === 200) {
                var ExerciceJson = JSON.parse(xhr1.responseText) ;
               // alert("aaaa" + xhr1.responseText);

                var exercice = ExerciceJson.success ;
                
                //var category = exercice[0].categorie ;
                //window.open("../generic.html",'_self');

                //window.location.replace = "../generic.html";
                out += '<hm> <a welcomme ><h2>'+ accueil.id + ' ' + accueil.login +'</a>';
                if ( i == accueilJson.length - 1){
                	
                	///block///
                    document.getElementById('hm').innerHTML = out;
                }
                 //successHandler && successHandler(xhr.response);
                } else {
              //  alert("aaaaaaaaaaabbbbbb" + xhr1.statusText);
                 errorHandler && errorHandler(xhr1.statusText);
                }
               };
               try {
               xhr1.send();
               } catch (error) {
            	    return false;
            	  }
        localStorage.setItem("home",JSON.stringify(accueil));
    }

}
