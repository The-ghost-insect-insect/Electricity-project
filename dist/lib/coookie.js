function setCookie(key,value,expires){
    if(expires){
        let time = new Date();
        time.setTime(time.getTime()-1000*60*60*8+1000*expires);
        document.cookie = key + '=' + value + ';expires='+ time;
    }else{
        document.cookie = key + '=' + value;
    }
}
function getCookie(key){
    let str = '';
    let cookie = document.cookie.split("; ");
    //console.log(cookie);
    cookie.forEach(function(iteam){ 
        //console.log(iteam);
        let num = iteam.split('=');
        //console.log(num);
        if(num[0]===key){
            str = num[1];
            
        }
        console.log(num[0])
    });
    return str;
}