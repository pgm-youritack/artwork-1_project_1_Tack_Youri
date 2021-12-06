(()=>{
    const date = new Date();
    const utctime = date.getTime() + (date.getTimezoneOffset()*60000);
    const timesett=1;
    const Belgiumtime = new Date(utctime+(3600000 *timesett));
    
    document.querySelector('.time').innerHTML= Belgiumtime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.querySelector('.time2').innerHTML= Belgiumtime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

})();