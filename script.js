const divE1=document.getElementById('div1');

function fnUpdateData(){
    var data={}
    data.name="surya grace";
    data.gender="Female";
    data.email="grace302@gmail.com";
    data.status="active";
     var json=JSON.stringify(data);
       
    var xhr=new XMLHttpRequest();
    xhr.open('PUT','https://gorest.co.in/public/v2/users/4435',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization','Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36');
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == '200'){
            var result=xhr.responseText;
            var results=JSON.parse(result);
            console.log(results);
        }
    }
    xhr.onerror=function(){
        console.log(error)
    }
    xhr.send(json);
    // xhr.send("suryagrace&Female&grace302@gmail.com&active");
}