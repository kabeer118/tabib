function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const form=document.querySelector('form');
const name=document.querySelector('input[name="name"]');

var message=null ;

const validateinput = ()=>{
	if (validateEmail(name)) {
		message ="invalid email";
	}
	else{
		window.location.href = "2nd.html";
	}

	
}
form.addEventListener('submit',(e)=>{
	
	e.preventDefault();
	validateinput();
	if(message!=null)
	{
		error.innerText =message;
	}
	
})