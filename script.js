// // //
// // // var redBtnElement=document.getElementById('redBtn');
// // // redBtnElement.onclick=function () {
// // //         var divOneElement=document.getElementById('divOne');
// // //         divOneElement.style.backgroundColor='red';
// // //
// // //     }
// // // var greenBtnElement=document.getElementById('greenBtn');
// // // greenBtnElement.onmouseover=function () {
// // //     var divOneElement=document.getElementById('divOne');
// // //     divOneElement.className='class-one';
// // //
// // // }
// // //
// // ('#btn').click(function () {
// //
// //     var firstNameValue = $('#firstName').val();
// //     var lastNameValue = $('#lastName').val();
// //     var fullName = firstNameValue+' '+lastNameValue;
// //     $('#$fullName').val(fullName);
// //
// // });
//
// $('#firstName').keyup(function () {
//     var firstNameValue=$('#firstName').val();
//     $('#res1').text(firstNameValue);
//
// });
// $('#lastName').keyup(function () {
//     var lastNameValue=$('#lastName').val();
//     $('#res2').text(lastNameValue);
//
// });
// $('#lastName').keyup(function () {
//      var firstNameValue=$('#firstName').val();
//      var lastNameValue=$('#lastName').val();
//     $('#res3').text(firstNameValue+''+lastNameValue);
//
// });
$('#img1').hover(function(){
var img1SrcValue=$(this).attr('src');
$('#mainImage').attr('src',img1SrcValue);
});

$('#img2').hover(function(){
    var img2SrcValue=$(this).attr('src');
    $('#mainImage').attr('src',img2SrcValue);
});

$('#img3').hover(function(){
    var img3SrcValue=$(this).attr('src');
    $('#mainImage').attr('src',img3SrcValue);
});

$('#img4').hover(function(){
    var img4SrcValue=$(this).attr('src');
    $('#mainImage').attr('src',img4SrcValue);
});

