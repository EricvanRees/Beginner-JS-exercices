function myFunction() {

  let imgArr = [`<img src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160" alt="">`, 
    `<img src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "240", height: "160">`, 
    `<img src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "240", height: "160">`];

  let div = document.querySelector('div');
    div.innerHTML = imgArr[Math.floor(Math.random() * (imgArr.length))];

  document.body.appendChild(div);
}