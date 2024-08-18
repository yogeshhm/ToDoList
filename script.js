$(document).ready(function (){
 
let aryBox = $('<div class="ary-box"></div>');
let checkbox = $('<input type="checkbox" name="" class="chkbox">');
let listSpan = $('<span class="list"></span>');
let deleteSpan = $('<span class="material-symbols-outlined delete">delete</span>');
aryBox.append(checkbox, listSpan, deleteSpan);


let aryContainer = [];
let addItem = $('#plus-add');
let itemValue = $('#item-value');
addItem.click(function(){
    let val = $('#item-value').val();
    console.log(val);
    if(val != ""){
        aryContainer.unshift(val);
        console.log(aryContainer);
        itemValue.val('');
        $('.container').append(aryBox);
        
    }

});

























});