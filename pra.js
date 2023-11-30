const textP =document.getElementById("textP")

textP.innerText = "超酷的拉";
//storage

//JSON.Stringify
//JSON.parse

let dog = {
    name:"可口可樂",
    age: "10",
    type: "哈士奇"
};

// let dog =11;

localStorage.setItem("",JSON.stringify(dog))      //將"dog"變成金鑰存入網站 內容為dog的數值 並將其轉成string
console.log(JSON.stringify(dog));
console.log(typeof JSON.stringify(dog));

let obj = localStorage.getItem("dog")
console.log(obj);                                    //會印出string的型態
console.log(JSON.parse(obj));                        //將該金鑰轉成原本的型態