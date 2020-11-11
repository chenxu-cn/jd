function setCookie(key,val,n){
    let now=new Date();
    now.setDate(now.getDate()+n);
    let str=`${key}=${val};path=/;expires=${now}`;
    document.cookie=str;
}
function getCookie(key){
    var arr=document.cookie.split('; ')
    for(let i=0;i<arr.length;i++){
        let newArr=arr[i].split('=');
        if(newArr[0]==key){
          return newArr[1];
        }
    }
}

function removeCookie(key){
    setCookie(key,1,-1);
}
