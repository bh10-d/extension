// let check = document.querySelectorAll("tr");
// let ky = '';
// let arr = [];
// for(let i = 1; i < check.length; i++) {
//   if(check[i].classList.value == ''){
//     ky = check[i].innerText;
//     check[i].style.cssText = 'text-align:center; background: #d3f1d3; color: #000; font-weight:bold';
//     check[i].innerHTML = `<td class="column-title"></td>
//     <td class="column-title">${ky}</td>
//     <td class="column-title">Số TC </td>
//     <td class="column-title">Lần học </td>
//     <td class="column-title">Điểm CC / GVHD</td>
//     <td class="column-title">Điểm Bài tập </td>
//     <td class="column-title">Điểm Giữa kỳ </td>
//     <td class="column-title">Điểm Cuối kỳ / Đồ Án</td>
//     <td class="column-title">Điểm T10 </td>
//     <td class="column-title">Điểm Chữ </td>
//     <td class="column-title"></td>
//     <td class="column-title"></td>
//     <td class="column-title"></td>`;
//     arr.push(check[i]);
//   }
// }

let check = document.querySelectorAll("tr");
let ky = '';
let arr = [];

function on() {
    for (let i = 1; i < check.length; i++) {
        if (check[i].classList.value == '') {
            ky = check[i].innerText;
            check[i].style.cssText = 'text-align:center; background: #d3f1d3; color: #000; font-weight:bold';
            check[i].innerHTML = `<td class="column-title"></td>
      <td class="column-title">${ky}</td>
      <td class="column-title">Số TC </td>
      <td class="column-title">Lần học </td>
      <td class="column-title">Điểm CC / GVHD</td>
      <td class="column-title">Điểm Bài tập </td>
      <td class="column-title">Điểm Giữa kỳ </td>
      <td class="column-title">Điểm Cuối kỳ / Đồ Án</td>
      <td class="column-title">Điểm T10 </td>
      <td class="column-title">Điểm Chữ </td>
      <td class="column-title"></td>
      <td class="column-title"></td>
      <td class="column-title"></td>`;
            arr.push(check[i]);
        }
    }
}

function off() {
    for (let i = 1; i < check.length; i++) {
        if (check[i].classList.value == '') {
            ky = check[i].innerText;
            check[i].style.cssText = 'text-align:center; background: #d3f1d3; color: #000; font-weight:bold';
            check[i].innerHTML = ``;
            arr.push(check[i]);
        }
    }
}

on();


// chuc nang dang phat trien
// let button = document.getElementById('button');
// function toggle(){
//   console.log(button.className);
//   if(button.className == 'on'){
//     off();
//     button.classList.remove('on')
//     button.classList.add('off')
//   }else if(button.className == 'off'){
//     on();
//     button.classList.remove('off')
//     button.classList.add('on')
//   }
// }


// them button chon



let test = document.getElementsByClassName("col-md-1 col-sm-1 col-xs-12")
console.log(test[0].children[1].innerText);

// function addButton(){


let text = '';
for (let i = 0; i < 5; i++) {
    text = test[i].innerText;
    test[i].children[1].innerHTML = text + `<div style="border: 1px solid #dc3545; text-align: center;"><p style="color: #dc3545; cursor: pointer; padding-top: 7px" class="h_cus" data-hcus=${i}>Chọn</p></div>`
}
// }
// addButton();

let h_cus_button = document.getElementsByClassName('h_cus');
for (let i = 0; i < 5; i++) {
    h_cus_button[i].addEventListener("click", () => {
        // console.log(h_cus_button[i].dataset.hcus)
        // console.log("click")
        select(h_cus_button[i].dataset.hcus)
    });
}


// console.log(h_cus_button);

// function tick() {
//   let tick = document.querySelectorAll("input[value='4']");
//   for(let i = 0; i < tick.length; i++) {
//     document.getElementById(`${tick[i].id}`).checked = true;
//     let parent = document.getElementById(`${tick[i].id}`).parentElement;
//     parent.classList.add('checked');
//   }
//   console.log(tick)
// }

let pretick = null;

function select(index) {
    let tick = document.querySelectorAll(`input[value='${parseInt(index)+1}']`);
    if (pretick == null) {
        for (let i = 0; i < tick.length; i++) {
            document.getElementById(`${tick[i].id}`).checked = true;
            let parent = document.getElementById(`${tick[i].id}`).parentElement;
            parent.classList.add('checked');
            // console.log(parent);
            // console.log("hieu");
        }
    } else {
        // console.log(pretick);
        for (let i = 0; i < pretick.length; i++) {
            document.getElementById(`${pretick[i].id}`).checked = true;
            let parent = document.getElementById(`${pretick[i].id}`).parentElement;
            parent.classList.remove('checked');
            // console.log(parent);
            // console.log("hieu");
        }
        for (let i = 0; i < tick.length; i++) {
            document.getElementById(`${tick[i].id}`).checked = true;
            let parent = document.getElementById(`${tick[i].id}`).parentElement;
            parent.classList.add('checked');
            // console.log(parent);
            // console.log("hieu");
        }
    }
    pretick = tick;
}