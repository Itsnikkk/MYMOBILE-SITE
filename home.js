    let arr=[
        {
            "id":1,
            "src": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70",
            "name": "REALME",
            "price": 22999,
            "Qty":1
        },
        {
            "id":2,
            "src": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
            "name": "IPHONE 14",
            "price": 68499,
            "Qty":1
        },
        {
            "id":3,
            "src": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/o/e/-original-imagstfsbhaaxbeb.jpeg?q=70",
            "name": "VIVO V29e",
            "price": 32299,
            "Qty":1
        },
        {
            "id":4,
            "src": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/x/j/-original-imagmkjfhzjhfhhe.jpeg?q=70",
            "name": "POCO X5PRO",
            "price": 18999,
            "Qty":1
        },
        {
            "id":5,
            "src": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70",
            "name": "PIXEL 6A",
            "price": 35999,
            "Qty":1
        },
        {
            "id":6,
            "src": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70",
            "name": "REDMI NOTE12PRO",
            "price": 24399,
            "Qty":1
        },
        {
            "id":7,
            "src": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70",
            "name": "MOTO EDGE 40",
            "price": 26899,
            "Qty":1
        },
        {
            "id":8,
            "src": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/r/n/-original-imagmgy5jk8ytxnw.jpeg?q=70",
            "name": "OPPO RENO 8T",
            "price": 23499,
            "Qty":1
        },
        {
            "id":9,
            "src": "https://rukminim2.flixcart.com/image/312/312/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70",
            "name": "NOTHING PHONE 1",
            "price": 28999,
            "Qty":1
        }
    ];
    // SHOW PRODUCT CART FUNCTIONALITY!
    function showpro(){
        let printdata4="";
        for(let i=0;i<arr.length;){
            printdata4=printdata4+`<div class="row justify-content-around mt-5">`;
            for(j=0;j<3;j++,i++){
                printdata4=printdata4+`<div class="mt-5">
                <img  src=${arr[i].src}>
                <h5>${arr[i].name}</h5>
                <h5>${arr[i].price}</h5>
                <button id="${arr[i].id}"onclick="adddata(event)">Add To Cart</button>
                </div>`
            }
            printdata4=printdata4+`</div>`;
        }
        document.getElementById("div1").innerHTML=printdata4;
    }
    // SORTING PRODUCT FUNCTIONALITY
    let printdata="";
    function show(){
        if(document.getElementById("select").value==="low-to-high"){
            arr.sort(function(a,b){ return a.price-b.price});
            for(let i=0;i<arr.length;){
                printdata=printdata+`<div class="row justify-content-around mt-5">`;
                for(j=0;j<3;j++,i++){
                    printdata=printdata+`<div class="mt-5">
            <img  src=${arr[i].src}>
            <h3>${arr[i].name}</h3>
            <h3>${arr[i].price}</h3>
             <button id="${arr[i].id} onclick="adddata(event)">Add To Cart</button>
            </div>`
                }
                printdata=printdata+`</div>`;
            }
        }
        else if(document.getElementById("select").value==="high-to-low"){
            arr.sort(function(a,b){ return b.price-a.price});
            for(let i=0;i<arr.length;){
                printdata=printdata+`<div class="row justify-content-around mt-5">`;
                for(j=0;j<3;j++,i++){
                    printdata=printdata+`<div class="mt-5">
            <img  src=${arr[i].src}>
            <h3>${arr[i].name}</h3>
            <h3>${arr[i].price}</h3>
             <button id="${arr[i].id} onclick="adddata(event)">Add To Cart</button>
            </div>`
                }
                printdata=printdata+`</div>`;
            }
        }
        else if(document.getElementById("select").value==="A-Z"){
            arr.sort((a, b) => {
             const nameA = a.name.toUpperCase(); // ignore upper and lowercase
             const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
             return -1;
            }
            if (nameA > nameB) {
             return 1;
            }
            return 0;});
            for(let i=0;i<arr.length;){
                printdata=printdata+`<div class="row justify-content-around mt-5">`;
                for(j=0;j<3;j++,i++){
                    printdata=printdata+`<div class="mt-5">
                    <img  src=${arr[i].src}>
                    <h3>${arr[i].name}</h3>
                    <h3>${arr[i].price}</h3>
                    <button id="${arr[i].id} onclick="adddata(event)">Add To Cart</button>
                    </div>`
                }
                printdata=printdata+`</div>`;
            }
        }
        else if(document.getElementById("select").value==="Z-A"){
            arr.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
             return 1;
            }
            return 0;});
            for(let i=0;i<arr.length;){
                printdata=printdata+`<div class="row justify-content-around mt-5">`;
                for(j=0;j<3;j++,i++){
                    printdata=printdata+`<div class="mt-5">
                    <img  src=${arr[i].src}>
                    <h3>${arr[i].name}</h3>
                    <h3>${arr[i].price}</h3>
                    <button id="${arr[i].id} onclick="adddata(event)">Add To Cart</button>
                    </div>`
                }
                printdata=printdata+`</div>`;
            }
        }
        else if(document.getElementById("select").value==="filter"){
            for(let i=0;i<arr.length;){
                printdata=printdata+`<div class="row justify-content-around mt-5">`;
                for(j=0;j<3;j++,i++){
                    printdata=printdata+`<div class="mt-5">
                    <img  src=${arr[i].src}>
                    <h3>${arr[i].name}</h3>
                    <h3>${arr[i].price}</h3>
                    <button id="${arr[i].id}"onclick="adddata(event)">Add To Cart</button>
                    </div>`
                }
                printdata=printdata+`</div>`;
            }
            
        }
        document.getElementById("div1").innerHTML=printdata;
        printdata="";   
    }

    function add1(){
        let l=document.getElementById("text").value;
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i].name.toUpperCase()===l.toUpperCase()){
                printdata=printdata+`<div class="mt-5">
            <img  src=${arr[i].src}>
            <h3>${arr[i].name}</h3>
            <h3>${arr[i].price}</h3>
             <button id="${arr[i].id} onclick="adddata(event)">Add To Cart</button>
            </div>`
            count=1;
            }
        }
        if(count===1){
            document.getElementById("div1").innerHTML=printdata;
            printdata="";
        }
        else{
            document.getElementById("div1").innerHTML=`<h1 style="text-align:center; margin-top:200px;">no data found</h1>`;
            printdata="";
            
        }
        console.log(l);
    }
    // NEW ARRIVAL FUNCTIONALTIY!
    let na=document.getElementById("newarrival");
    let printdata3="";
    for(let i=0;i<1;){
        for(j=0;j<3;j++,i++){
            printdata3=printdata3+`<div class="mt-5">
            <img  src=${arr[i].src}>
            <h3>${arr[i].name}</h3>
            <h3>${arr[i].price}</h3>
            <button id="${arr[i].id}"onclick="adddata(event)">Add To Cart</button>
            </div>`
        }
    }
    na.innerHTML=printdata3;
    // ADD TO CART FUNCTIONALITY!
    function cart(){
        window.location.href="cart.html";       
    }
    function adddata(e){
        let e1=e.target.id;
            for(let i=0;i<arr.length;i++){
                if(arr[i].id==e1){
                    let cartjson=JSON.stringify(arr[i]);
                    sessionStorage.setItem(`${i+1}`,cartjson);
                }
            }
    }
    function add(e){
        let e1=e.target.parentElement.children[1].id;
            let json= JSON.parse(sessionStorage.getItem(e1));
            json.Qty=++json.Qty;
            let cartjson=JSON.stringify(json);
            sessionStorage.setItem(e1,cartjson);
            document.getElementById(e1).innerHTML=json.Qty;
        showdata();
    }
    function sub(e){
        let e1=e.target.parentElement.children[1].id;
        let o=document.getElementById(e1).innerHTML
        if(Number(o)>1){
            let json= JSON.parse(sessionStorage.getItem(e1));
            json.Qty=--json.Qty;
            let cartjson=JSON.stringify(json);
            sessionStorage.setItem(e1,cartjson);
            document.getElementById(e1).innerHTML=json.Qty;
        }
        else{
            sessionStorage.removeItem(e1);
        } 
        showdata();
    }
    function showdata(){
        let tb=document.getElementById("tb1");
        let printdata5="";
        let itemcount=0;
        let totalamount=0;
        for(let i=1;i<sessionStorage.length;i++){
         let json= JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
         if(sessionStorage.key(i)==json.id){
             printdata5=printdata5+`<tr>
                <td>${json.id}</td>
                <td><img src="${json.src}"></td>
                <td>${json.name}</td>
                <td>${json.price}</td>
                <td><button onclick="sub(event)">-</button><label id="${json.id}">${json.Qty}</label><button onclick="add(event)">+</button></td>
                <td>${json.price*json.Qty}</td>
            </tr>`
              itemcount=itemcount+json.Qty;
            totalamount=totalamount+(json.price*json.Qty);
            }
         } 
        tb.innerHTML=printdata5;
        document.getElementById('itemcount').innerHTML=itemcount;
        document.getElementById('totalamount').innerHTML=totalamount;
    }
    let count0=1;
    function submit1(e){ 
        e.preventDefault();
        let n=document.getElementById("name1").value;
        let p=document.getElementById("pass").value;
        let cp=document.getElementById("cpass").value;
        let gender=document.querySelector('input[name="gender"]:checked').value;
        let mob=document.getElementById("num").value;
        if(!(n.length<15)){
            alert("enter valid username length");
        }
        else if(!(p.length>4))
        {
            alert("enter valid password length");
        }
        else if(p!==cp){
            alert("enter confirm valid password");
        }
        else if(mob.length!==10){
            alert("enter valid mobile length");
        }
        else if( mob.charAt(0)!=='9'){
            alert("start from 9")
        }
        else if(gender===""){
            alert("enter valid gender");
        }
        else{
            let obj={
                name:n,
                password:p,
                cpassword:cp,
                gender1:gender,
                mobile:mob
            }
            console.log(count);
            localStorage.setItem(`${count0}`,JSON.stringify(obj));
            count++;
            alert("valid!")
        }
    }
    function validation(e){
        e.preventDefault();
        let hii=0;
    let us1=document.getElementById("us").value;
    let pwd1=document.getElementById("pass1").value;
    let l1=localStorage.length;
    for(let i=0;i<l1;i++){
        let kl=JSON.parse(localStorage[i+1])
        console.log(kl);
        let us=kl.name;
        let pwd=kl.password;
        if(us!=us1 && pwd!=pwd1){
       hii=1;    
        }
        else{
            hii=0; 
            break;
        }
        }
        if(hii==0){
            alert("welcome "+us1);
            document.getElementById("profile").innerText=us1;
        }
        else{
            alert("Enter a valid details!")
        }
    }
    function signup(){
        let i=document.getElementById('myform')
        i.style.display='';
        let j=document.getElementById('form1')
        j.style.display='none';
    }
    function login(){
        let i=document.getElementById('form1')
        i.style.display='';
        let j=document.getElementById('myform')
        j.style.display='none';
    }

