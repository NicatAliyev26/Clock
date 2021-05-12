function  saatsaz() {
    
    const  derece = 6;
    const  zaman = new Date();
    
    
    var saniye = zaman.getSeconds() * derece;
    var dakika = zaman.getMinutes() * derece;
    var saat = zaman.getHours() * 30;
    
    
    document.querySelector(".sec").style.transform = 'rotate('+saniye+'deg)';
    document.querySelector(".min").style.transform = 'rotate('+dakika+'deg)';
    document.querySelector(".hour").style.transform = 'rotate('+saat+'deg)';
    
    console.log(saat + ":" + dakika + ":" + saniye);
    
    }
    
    saatsaz();
    setInterval(saatsaz,1000);