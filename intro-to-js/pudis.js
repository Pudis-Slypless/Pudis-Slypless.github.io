function askMyName() {
    const name = prompt("Your name","Name")
 
    if (name != null) {
       document.getElementById("myname").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
   const h1message = document.getElementById("myname").innerHTML;

   alert(h1message + ' ขับเร็วแทบตาย สุดท้ายเธอก็ไปอยู่ดี')
 }

 function randomcus() {
   prompt("คุณได้รับสิทธิ์ลุ้นรางวัลทองคำจำนวน 2 บาท ทั้งหมด 100 รางวัล มูลค่ารวม 1 ล้านบาท เพียงกรอกเลขบัตรประชาชน","x-xxxx-xxxxx-xxx-x"); 
 }


//  age button


function askage() {
  const age = prompt("Your birth year","since\. 19xx")
  const year = (2022 - age)
  
  alert(`ยินดีด้วย คุณจ่ายภาษีให้ประเทศนี้มา ${year}  ปี`)
}

function loadProfile() {
  const peoplename = "Natthanun"
  const province = "Ratchaburi"

  document.getElementById('my-name').innerHTML = peoplename;
  document.getElementById('my-province').innerHTML = province;
}