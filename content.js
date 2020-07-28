

const interval = setInterval(()=>{
  
    const header = document.querySelector("._1QUKR")
    if (header){
        console.log(header)
        clearInterval(interval)
    
        //  Velocidade do audio 1.5
    const button1 = document.createElement("button")
       button1.innerHTML = "1.5x"
       button1.classList.add("twoTimesButton")
 
       button1.addEventListener("click", ()=>{
        const audios = document.querySelectorAll("audio")
        console.log(audios);
        audios.forEach((audio)=>{
            console.log(audio);
            audio.playbackRate = 1.5;
        })
     });
     
     header.appendChild(button1)
     
    //  Velocidade do audio 2.0
 const button2 = document.createElement("button")
       button2.innerHTML = "2x"
       button2.classList.add("twoTimesButton")

       button2.addEventListener("click", ()=>{
        const audios = document.querySelectorAll("audio")
        console.log(audios);
        audios.forEach((audio)=>{
            console.log(audio);
            audio.playbackRate = 2;
        })
     });
        
     header.appendChild(button2)
   
    }
},1000)