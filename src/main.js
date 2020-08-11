let msg = `/*众生万过皆因果
本是无争无灾祸
浑浊之花挂青天
零落零落何处躲.

无言劝了千万般
无有一个回头看
流离之子在深海
俯首静候登彼岸.

             福禄寿-兰若度母*/
#tu{
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
    width: 300px;
    height: 300px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1)  0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#tu::before{
    position: relative;
    left: 25%;
    background-color: black;
    width: 150px;
    height: 150px;
    content: '';
    display: block;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);    
}
#tu::after{
    position: relative;
    left: 25%;
    background-color: white;
    width: 150px;
    height: 150px;
    content: '';
    display: block;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}`
let outStr = ''
let count = 0
let value = document.querySelector("#value")
let css = document.querySelector("#css")

function run() {
    setTimeout(() => {
        if (count < msg.length) {
            if (msg[count] === '\n') {
                outStr += '<br>'
            } else if(msg[count] === ' '){
                outStr += '&nbsp;'
            }else{
                outStr += msg[count]
            }
            value.innerHTML = outStr;
            css.innerHTML = msg.substring(0,count +1);
            //操作滚动条
            window.scrollTo(0, 9999);
            value.scrollTo(0, 9999);
            count += 1;
            run();
        }else {
            console.log("运行结束!")
        }
    }, 10);
}

run()