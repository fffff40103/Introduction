// Commandly used html tags
let section = document.querySelector("section.list");
let add = document.querySelector("form button");
let table = document.querySelector("section table");

//Setting add button
add.addEventListener("click", (e) => {
  e.preventDefault();
  //get values of your input
  let form = e.target.parentElement;
  let category = form.children[0].value;
  let shop = form.children[1].value;
  let consumptionN = form.children[2].value;
  let year = form.children[3].value;
  let month = form.children[4].value;
  let day = form.children[5].value;

  let price = form.children[6].value;

  //Determine if the value is empty and specify specific message if is null
  if (category == "") {
    alert("Category can't not be blank");
    return;
  }

  if (shop == "") {
    alert("Shop can't not be blank");
    return;
  }

  if (consumptionN == "") {
    alert("Consumption can't not be blank");
    return;
  }

  if (year == "") {
    alert("Year can't not be blank");
    return;
  }

  if (month == "") {
    alert("Month can't not be blank");
    return;
  } else if (month > 12 || month < 1) {
    alert("Plase enter value between 1 -12");
    return;
  }

  if (day == "") {
    alert("Day can't not be blank");
    return;
  } else if (day < 1 || day > 31) {
    alert("Please enter number between 1-31");
    return;
  }

  // add things into table usig dom to add value
  let tr = document.createElement("tr");
  tr.classList.add("tr1");

  //td1
  let td1 = document.createElement("td");
  td1.classList.add("td1");
  td1.innerText = category;

  tr.appendChild(td1);

  //td2
  let td2 = document.createElement("td");
  td2.classList.add("td2");
  td2.innerText = shop;
  tr.appendChild(td2);

  //td3
  let td3 = document.createElement("td");
  td3.classList.add("td3");
  td3.innerText = consumptionN;
  tr.appendChild(td3);

  //td4
  let td4 = document.createElement("td");
  td4.classList.add("td4");
  td4.innerText = year + "-" + month + "-" + day;
  tr.appendChild(td4);

  //td5
  let td5 = document.createElement("td");
  td5.classList.add("td5");
  td5.innerText = price;
  tr.appendChild(td5);

  //td6
  let td6 = document.createElement("td");
  td6.classList.add("td6");
  //compelete button
  let compelete = document.createElement("button");
  compelete.innerHTML = '<i class="fa fa-check"></i>';
  compelete.classList.add("compelete");
  //trash button
  let trash = document.createElement("button");
  trash.innerHTML = '<i class="fa fa-trash"></i>';
  trash.classList.add("trash");
  //add button to td
  td6.appendChild(compelete);
  td6.appendChild(trash);
  //trash

  tr.appendChild(td6);
  //add new table children into section.list
  table.appendChild(tr);
  section.appendChild(table);

  //eliminate the data after enter
  form.children[0].value = "";
  form.children[1].value = "";
  form.children[2].value = "";
  form.children[3].value = "";
  form.children[4].value = "";
  form.children[5].value = "";
  //Put input in object and store in localstorge which will be stored for good unless
  //you manually deleted it
  let myObject = {
    category: category,
    shop: shop,
    consumptionN: consumptionN,
    year: year,
    month: month,
    day: day,
    price: price,
  };

  let mylist = localStorage.getItem("list");
  if (mylist == null) {
    localStorage.setItem("list", JSON.stringify([myObject]));
  } else {
    let mylistArray = JSON.parse(mylist);
    mylistArray.push(myObject);
    localStorage.setItem("list", JSON.stringify(mylistArray));
  }

  //compelete event listener
  compelete.addEventListener("click", (e) => {
    let compeleteLabel = e.target.parentElement.parentElement;
    compeleteLabel.classList.toggle("done");
  });

  //trash button event listener
  trash.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement.parentElement;
    let text = todoItem.children[2].innerText;

    let mylist = JSON.parse(localStorage.getItem("list"));
    mylist.forEach((item, index) => {
      if (item.consumptionN == text) {
        mylist.splice(index, 1);
        localStorage.setItem("list", JSON.stringify(mylist));
      }
    });
    //total cost of list
    let totalPrice = document.querySelector("div.middle h1");
    let List = localStorage.getItem("list");
    let ListArray = JSON.parse(List);
    let total = 0;
    ListArray.forEach((item) => {
      total += Number(item.price);
    });
    totalPrice.innerText = "NTD" + " " + "$" + total;
    todoItem.remove();
  });
  //total cost of list
  let totalPrice = document.querySelector("div.middle h1.totalCost");
  let total = 0;
  let List = localStorage.getItem("list");
  let ListArray = JSON.parse(List);
  ListArray.forEach((item) => {
    total += Number(item.price);
  });
  totalPrice.innerText = "NTD" + " " + "$" + total;
});
loadData();
//Loading data function is function used to reload data every time soring or reloading page 
function loadData() {
  let mylist = localStorage.getItem("list");
  if (mylist !== null) {
    let mylistArray = JSON.parse(mylist);
    mylistArray.forEach((item) => {
      let tr1 = document.createElement("tr");
      tr1.classList.add("tr1");
      let td1 = document.createElement("td");
      td1.classList.add("td1");
      td1.innerText = item.category;
      tr1.appendChild(td1);
      //td2
      td2 = document.createElement("td");
      td2.classList.add("td2");
      td2.innerText = item.shop;

      tr1.appendChild(td2);
      //td3
      td3 = document.createElement("td");
      td3.classList.add("td3");
      td3.innerText = item.consumptionN;
      tr1.appendChild(td3);
      //td4
      td4 = document.createElement("td");
      td4.classList.add("td4");
      td4.innerText = item.year + "-" + item.month + "-" + item.day;
      tr1.appendChild(td4);
      //td5
      td5 = document.createElement("td");
      td5.classList.add("td5");
      td5.innerText = item.price;
      tr1.appendChild(td5);

      //td6
      let td6 = document.createElement("td");
      td6.classList.add("td6");
      //compelete button
      let compelete = document.createElement("button");
      compelete.innerHTML = '<i class="fa fa-check"></i>';
      compelete.classList.add("compelete");
      //trash button
      let trash = document.createElement("button");
      trash.innerHTML = '<i class="fa fa-trash"></i>';
      trash.classList.add("trash");
      //Adding button to td
      td6.appendChild(compelete);
      td6.appendChild(trash);
      tr1.appendChild(td6);

      //compelete event listener
      compelete.addEventListener("click", (e) => {
        let compeleteLabel = e.target.parentElement.parentElement;
        compeleteLabel.classList.toggle("done");
      });
      
      //trash button event listener
      trash.addEventListener("click", (e) => {
        console.log(e)
        let todoItem = e.target.parentElement.parentElement;
        let text = todoItem.children[2].innerText;

        let mylist = JSON.parse(localStorage.getItem("list"));
        mylist.forEach((item, index) => {
          if (item.consumptionN == text) {
            mylist.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(mylist));
          }
        });
        //total cost of list
        let totalPrice = document.querySelector("div.middle h1.totalCost");
        let total = 0;
        let List = localStorage.getItem("list");
        let ListArray = JSON.parse(List);
        ListArray.forEach((item) => {
          total += Number(item.price);
        });
        totalPrice.innerText = "NTD" + " " + "$" + total;

        todoItem.remove();
      });

      table.appendChild(tr1);
      section.appendChild(table);

    //Set the totol costs
    let totalPrice = document.querySelector("div.middle h1.totalCost");
    let total = 0;
    let List = localStorage.getItem("list");
    let ListArray = JSON.parse(List);
    ListArray.forEach((item) => {
      total += Number(item.price);
    });
    totalPrice.innerText = "NTD" + " " + "$" + total;

    });
  }
}

//Using merge sort algorithm sorting  
function mergeTime(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (Number(arr1[i].year) > Number(arr2[j].year)) {
      result.push(arr2[j]);
      j++;
    } else if (Number(arr1[i].year) < Number(arr2[j].year)) {
      result.push(arr1[i]);
      i++;
    } else if (Number(arr1[i].year) == Number(arr2[j].year)) {
      if (Number(arr1[i].month) > Number(arr2[j].month)) {
        result.push(arr2[j]);
        j++;
      } else if (Number(arr1[i].month) < Number(arr2[j].month)) {
        result.push(arr1[i]);
        i++;
      } else if (Number(arr1[i].month) == Number(arr2[j].month)) {
        if (Number(arr1[i].day) < Number(arr2[j].day)) {
          result.push(arr1[i]);
          i++;
        } else if (Number(arr1[i].day) > Number(arr2[j].day)) {
          result.push(arr2[j]);
          j++;
        }
      }
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  console.log(result);
  return result;
}

//Merger sort algorithm to compare two different datas
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let right = arr.slice(0, middle);
    let left = arr.slice(middle, arr.length);
    return mergeTime(mergeSort(right), mergeSort(left));
  }
}

//Sorting button 
let sortButton = document.querySelector("div.sort button");
sortButton.addEventListener("click", () => {
  let sortArray = mergeSort(JSON.parse(localStorage.getItem("list")));
  localStorage.setItem("list", JSON.stringify(sortArray));

  let len = table.children.length;
  for (let i = 0; i < len - 1; i++) {
    table.children[1].remove();
  }
  
  //Every sorting data has to reload data
  loadData();
});
