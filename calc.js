const topA = document.querySelector('.top')
const bottomA = document.querySelector('.bottom')
const all = Array.from(document.getElementsByClassName('wrapper'))


all.map(()=>{
    addEventListener('click', (e)=>{
        switch(e.target.innerText){
        case "AC" :
            topA.innerText = ""
            bottomA.innerText=""
        break
        case 'Del' : 
            topA.innerText = ""
            bottomA.innerText = bottomA.innerText.slice(0, -1)
        break
        case 'Ans' :
            bottomA.innerText = topA.innerText
            topA.innerText =""
        break
        case '/' :
            bottomA.innerText += e.target.innerText
            bottomA.innerText = topA.innerText + bottomA.innerText

        break
        case '7' :
            bottomA.innerText += e.target.innerText
        break
        case '8' :
            bottomA.innerText += e.target.innerText
        break
        case '9' :
            bottomA.innerText += e.target.innerText
        break
        case '*' :
            bottomA.innerText += e.target.innerText
            bottomA.innerText = topA.innerText + bottomA.innerText
            topA.innerText =""

        break
        case '4' :
            bottomA.innerText += e.target.innerText
        break
        case '5' :
            bottomA.innerText += e.target.innerText
        break
        case '6' :
            bottomA.innerText += e.target.innerText
        break
        case '-' :
            bottomA.innerText += e.target.innerText
            bottomA.innerText = topA.innerText + bottomA.innerText
            topA.innerText =""

        break
        case '1' :
            bottomA.innerText += e.target.innerText
        break
        case '2' :
            bottomA.innerText += e.target.innerText
        break
        case '3' :
            bottomA.innerText += e.target.innerText
        break
        case '+' :
            bottomA.innerText += e.target.innerText
            bottomA.innerText = topA.innerText + bottomA.innerText
            topA.innerText =""
            

        break
        case '0' :
            bottomA.innerText += e.target.innerText
        break
        case '.' :
            bottomA.innerText += e.target.innerText
        break
        case '=' :
            topA.innerText = eval(bottomA.innerText)
            bottomA.innerText = ""
            topA.innerText = topA.innerText.toLocalString()
            
        break
        




        }
    })
})

