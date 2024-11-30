//your JS code here. If required.
let ip = document.getElementById("fname")

ip.addEventListner("blur",()=>{
	ip.value = ip.value.toUpperCase()
})