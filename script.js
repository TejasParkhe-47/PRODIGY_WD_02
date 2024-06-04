/*const playbutton =document.getElementsByClassName("play")[0];
        const resetbutton = document.getElementsByClassName("reset")[0];
        const lapbutton = document.getElementsByClassName("lap")[0];
        const second= document.getElementsByClassName("sec")[0];
        const minute= document.getElementsByClassName("min")[0];
        const centisecond= document.getElementsByClassName("minsec")[0];
        const clearbutton= document.getElementsByClassName("lap-clear-button")[0];


        const bg= document.getElementsByClassName("outercircle")[0];

        const laps= document.getElementsByClassName("laps")[0];


        let isplay=false;
        let seccounter=0;
        let centicounter=0;
        let sec;
        let min;
        let centisec;
        let mincounter =0;
        let lapitem=0;
        let isreset=false;


        const togglebutton = () =>{
            lapbutton.classList.remove("hidden");
            resetbutton.classList.remove("hidden");
        }
        const play = () =>{
            if(!isplay && !isreset) {
                playbutton.innerHTML="Stop";
                bg.classList.add("animation-bg");



                min =setInterval(() => {
                
                minute.innerHTML=`&nbsp;${++mincounter} :`;
            }, 60*1000);


            sec =setInterval(() => {
                if(seccounter===60) centicounter=0;
                second.innerHTML=`&nbsp;${++seccounter} :`;
            }, 1000);


            centisec =setInterval(() => {
                if( centicounter===100) centicounter=0;
                centisecond.innerHTML=`&nbsp;${++centicounter}`;
            }, 10);
            isplay=true;
            isreset=true;
        }
                
            
            else {
                playbutton.innerHTML="Play";
                clearInterval(min);
                clearInterval(sec);
                clearInterval(centisec);
                bg.classList.remove("animation-bg");
                
                isplay=false;
                isreset=false;

            }
            togglebutton();
        }
        

        
        const reset = () =>{
            isreset=true;
            play();
            lapbutton.classList.add("hidden");
            resetbutton.classList.add("hidden");
            clearInterval(min);
            clearInterval(sec);
            clearInterval(centisec);
            centicounter=0;
            seccounter=0;
            mincounter=0;
            second.innerHTML='&nbsp;0 :';
            centisecond.innerHTML='&nbsp;0';
            minute.innerHTML='0 :';
            lapitem=0;
            
            
            
        }
        const lap =() =>{
            const li=document.createElement("li");
            const number=document.createElement("span");
            const timestamp = document.createElement("span");

            li.setAttribute("class","lap-item");
            number.setAttribute("class","number");
            timestamp.setAttribute("class","time-stamp");
            number.innerText= `#${++lapitem}.`;
            timestamp.innerHTML = `${mincounter} : ${seccounter} : ${centicounter}`;
            li.append(number,timestamp);
            laps.append(li);

            clearbutton.classList.remove("hidden");

        }

        const clearAll = () => {
            laps.innerHTML = '';
            laps.append(clearbutton);
            clearbutton.classList.add("hidden");
            lapitem=0;
        }
        playbutton.addEventListener("click",play);
        resetbutton.addEventListener("click",reset);
        lapbutton.addEventListener("click",lap);
        clearbutton.addEventListener("click",clearAll);*/
        const playbutton =document.getElementsByClassName("play")[0];
        const resetbutton = document.getElementsByClassName("reset")[0];
        const lapbutton = document.getElementsByClassName("lap")[0];
        const second= document.getElementsByClassName("sec")[0];
        const minute= document.getElementsByClassName("min")[0];
        const centisecond= document.getElementsByClassName("minsec")[0];
        const clearbutton= document.getElementsByClassName("lap-clear-button")[0];
        const watch=document.getElementsByClassName("watch")[0];

        const bg= document.getElementsByClassName("outercircle")[0];

        const laps= document.getElementsByClassName("laps")[0];

    watch.classList.remove("slide");
    watch.classList.remove("slide-right");
        let isplay=false;
        let seccounter=0;
        let centicounter=0;
        let sec;
        let min;
        let centisec;
        let mincounter =0;
        let lapitem=0;
        let isreset=false;


        const togglebutton = () =>{
            lapbutton.classList.remove("hidden");
            resetbutton.classList.remove("hidden");
        }
        const play = () =>{
            if(!isplay && !isreset) {
                playbutton.innerHTML="Stop";
                bg.classList.add("animation-bg");



                min =setInterval(() => {
                
                minute.innerHTML=`&nbsp;${++mincounter} :`;
            }, 60*1000);


            sec =setInterval(() => {
                if(seccounter===60) centicounter=0;
                second.innerHTML=`&nbsp;${++seccounter} :`;
            }, 1000);


            centisec =setInterval(() => {
                if( centicounter===100) centicounter=0;
                centisecond.innerHTML=`&nbsp;${++centicounter}`;
            }, 10);
            isplay=true;
            isreset=true;
        }
                
            
            else {
                playbutton.innerHTML="Play";
                clearInterval(min);
                clearInterval(sec);
                clearInterval(centisec);
                bg.classList.remove("animation-bg");
                
                isplay=false;
                isreset=false;

            }
            togglebutton();
        }
        

        
        const reset = () =>{
            isreset=true;
            play();
            lapbutton.classList.add("hidden");
            resetbutton.classList.add("hidden");
            clearInterval(min);
            clearInterval(sec);
            clearInterval(centisec);
            centicounter=0;
            seccounter=0;
            mincounter=0;
            second.innerHTML='&nbsp;0 :';
            centisecond.innerHTML='&nbsp;0';
            minute.innerHTML='0 :';
            lapitem=0;
            
            
            
        }
        const lap =() =>{
            watch.classList.add("slide");
            const li=document.createElement("li");
            const number=document.createElement("span");
            const timestamp = document.createElement("span");

            li.setAttribute("class","lap-item");
            number.setAttribute("class","number");
            timestamp.setAttribute("class","time-stamp");
            number.innerText= `#${++lapitem}.`;
            timestamp.innerHTML = `${mincounter} : ${seccounter} : ${centicounter}`;
            li.append(number,timestamp);
            laps.append(li);

            clearbutton.classList.remove("hidden");

        }

        const clearAll = () => {
            laps.innerHTML = '';
            laps.append(clearbutton);
            clearbutton.classList.add("hidden");
            watch.classList.add("slide-right")
            watch.classList.remove("slide");
            

            lapitem=0;
        }
        playbutton.addEventListener("click",play);
        resetbutton.addEventListener("click",reset);
        lapbutton.addEventListener("click",lap);
        clearbutton.addEventListener("click",clearAll);