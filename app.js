
let backend="https://script.google.com/macros/s/AKfycbxo1xchDsVr6Zu1a1cUXYAFe1JJndkD9oDSjrVJv5j2GcBaXK911skt7HdCmeHPTNjPnA/exec";

async function generate(){
let r=await fetch(backend,{
method:"POST",
body:JSON.stringify({
action:"generate",
prompt:"Create Myanmar movie recap transcript."
})
});
let j=await r.json();
document.getElementById("result").value=j.text||j.error;
}

function upload(){
document.getElementById("status").innerHTML="Upload system ready. Backend upload module will connect here.";
}
