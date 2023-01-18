

count = 1
function boardGameStart(control){
    
    if(count<=9){
        if(count%2==0){
            document.getElementById(control.id).innerText = 'X'
        }
        else{
            document.getElementById(control.id).innerText = 'O'
        }
        winner()
        count++
    }
    else{
        alert("Match draw")
        resetAllFields()
    }
}

function resetAllFields(){
    for(i=0;i<=8;i++){
        document.getElementById(i).innerText = ''
    }
    count=1
}
function winner(){
    if(( document.getElementById("0").innerText!== '')&&( document.getElementById("0").innerText== document.getElementById("1").innerText)&&( document.getElementById("0").innerText== document.getElementById("2").innerText)){
        if(document.getElementById("0").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
        
    }
    else if(( document.getElementById("0").innerText!== '')&&( document.getElementById("0").innerText== document.getElementById("3").innerText)&&( document.getElementById("0").innerText== document.getElementById("6").innerText)){
        if(document.getElementById("3").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
        
    } 
    else if(( document.getElementById("0").innerText!== '')&&( document.getElementById("0").innerText== document.getElementById("4").innerText)&&( document.getElementById("0").innerText== document.getElementById("8").innerText)){
        if(document.getElementById("4").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
        
    }
    else if(( document.getElementById("1").innerText!== '')&&( document.getElementById("1").innerText== document.getElementById("4").innerText)&&( document.getElementById("1").innerText== document.getElementById("7").innerText)){
        if(document.getElementById("1").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
        
    } 
    else if(( document.getElementById("2").innerText!== '')&&( document.getElementById("2").innerText== document.getElementById("4").innerText)&&( document.getElementById("2").innerText== document.getElementById("6").innerText)){
        if(document.getElementById("2").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
        
    }
    else if(( document.getElementById("3").innerText!== '')&&( document.getElementById("3").innerText== document.getElementById("4").innerText)&&( document.getElementById("3").innerText== document.getElementById("5").innerText)){
        if(document.getElementById("3").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
    } 
    else if(( document.getElementById("6").innerText!== '')&&( document.getElementById("6").innerText== document.getElementById("7").innerText)&&( document.getElementById("6").innerText== document.getElementById("8").innerText)){
        if(document.getElementById("6").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
    }
    
    else if(( document.getElementById("2").innerText!== '')&&( document.getElementById("2").innerText== document.getElementById("5").innerText)&&( document.getElementById("2").innerText== document.getElementById("8").innerText)){
        if(document.getElementById("2").innerText == 'X'){
            result = "Player X wins!!!"
            console.log(result)
        }
        else{
            result = "Player O wins!!!"
            console.log(result)
        }
        document.getElementById("result").innerText = result
    }
    

}







        






































































































































































































































































































































































































































































































































































































































































































































































































































































































































































