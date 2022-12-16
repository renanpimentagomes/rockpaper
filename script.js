
addEventListener('click',showselection)


function showselection() {                                       
    const firebtn = document.querySelector('.fire-button')
    const waterbtn = document.querySelector('.water-button')
    const grassbtn = document.querySelector('.grass-button')
    // Capture what button was clicked

    if (firebtn.addEventListener('click',clickhandler)){
        choice = firebtn.value
        document.getElementById('player-choice-img').src ='images/fire.png';
        counter++
        
    }else if(waterbtn.addEventListener('click',clickhandler)) {
        choice = waterbtn.value
        counter++

    }
    else if(grassbtn.addEventListener('click',clickhandler)) {
        choice = grassbtn.value
        counter++
    }
    
}


function clickhandler(event) {
    choice = this.value
    console.log(choice)
    let value1 = Math.floor(Math.random()*((2-0 +1)));
    var options = ['fire','water','grass']
    let computerchoice = options[value1]
    console.log(computerchoice)
    
    
    
    

        if (choice == 'fire') {                                  //Results if fire chosen
            document.getElementById('player-choice-img').src ='images/fire.png';
            
            
            

            
            
                } if (computerchoice == 'water') {
                    document.getElementById('computer-choice-img').src ='images/water.png'; //modifiers for lose
                    document.getElementById('result').innerHTML='You lost this round!'
                    document.getElementById('result').style.color = 'rgb(175, 20, 20)'
                } else if (computerchoice == 'fire') {
                    document.getElementById('computer-choice-img').src ='images/fire.png';//modifiers for draw
                    document.getElementById('result').innerHTML='That is a draw!'
                    document.getElementById('result').style.color = 'rgb(48, 20, 175)'
                } else if ( computerchoice == 'grass') {
                    document.getElementById('computer-choice-img').src ='images/grass.png';//modifiers for wuin
                    document.getElementById('result').innerHTML='You won this round!'
                    document.getElementById('result').style.color = 'rgb(25, 156, 13)'
                }
                
        if (choice == 'water') {                                  //Results if water chosen
            document.getElementById('player-choice-img').src ='images/water.png';
            
                } if (computerchoice == 'grass') {
                    document.getElementById('computer-choice-img').src ='images/grass.png'; //modifiers for lose
                    document.getElementById('result').innerHTML='You lost this round!'
                    document.getElementById('result').style.color = 'rgb(175, 20, 20)'
                    
                } else if (computerchoice == 'water') {
                    document.getElementById('computer-choice-img').src ='images/water.png';//modifiers for draw
                    document.getElementById('result').innerHTML='That is a draw!'
                    document.getElementById('result').style.color = 'rgb(48, 20, 175)'
                } else if ( computerchoice == 'fire') {
                    document.getElementById('computer-choice-img').src ='images/fire.png';//modifiers for wuin
                    document.getElementById('result').innerHTML='You won this round!'
                    document.getElementById('result').style.color = 'rgb(25, 156, 13)'
                }


        if (choice == 'grass') {                                  //Results if water chosen
            document.getElementById('player-choice-img').src ='images/grass.png';
            
                } if (computerchoice == 'fire') {
                    document.getElementById('computer-choice-img').src ='images/fire.png'; //modifiers for lose
                    document.getElementById('result').innerHTML='You lost this round!'
                    document.getElementById('result').style.color = 'rgb(175, 20, 20)'
                } else if (computerchoice == 'grass') {
                    document.getElementById('computer-choice-img').src ='images/grass.png';//modifiers for draw
                    document.getElementById('result').innerHTML='That is a draw!'
                    document.getElementById('result').style.color = 'rgb(48, 20, 175)'
                } else if ( computerchoice == 'water') {
                    document.getElementById('computer-choice-img').src ='images/water.png';//modifiers for wuin
                    document.getElementById('result').innerHTML='You won this round!'
                    document.getElementById('result').style.color = 'rgb(25, 156, 13)'
                }        


    
   
    }


        
    

   /* if (computerchoice == choice) {
        console.log('empate')



    }else if (((computerchoice == 'water') && (choice == 'fire')) ||
              ((computerchoice == 'grass') && (choice == 'water')) ||
              ((computerchoice == 'fire') && (choice == 'grass'))
    
    ){
        console.log('you lost')
        



        
    }else if (((computerchoice == 'water') && (choice == 'grass')) ||
              ((computerchoice == 'fire') && (choice == 'water')) ||
              ((computerchoice == 'grass') && (choice == 'fire'))
    
    
    
    ){
        console.log('you won')
    }*/
                           

// muda foto da escolha -> document.getElementById('player-choice-img').src ='images/fire.png';