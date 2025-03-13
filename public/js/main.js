document.addEventListener('DOMContentLoaded', function(){
  const burger = document.querySelector('.burger')
        mobileMenu = document.querySelector('.mobile-menu')
        mobileMenuClose = document.querySelector('.mobile-menu__close')

  if (burger) {
    burger.addEventListener("click", function(){
      mobileMenu.classList.add('isActive');
    })
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", function(){
      mobileMenu.classList.remove('isActive');
    })
  }

  $('.content').richText({
    bold:true,
    italic:true,
    underline:true,

    leftAlign:false,
    centerAlign: false,
    rightAlign:false,
    justify: false,

    ol:false,
    ul:false,

    heading:true,

    fonts:false,

    fontColor:false,
    backgroundColor:false,
    fontSize:false,

    imageUpload:true,
    fileUpload:false,

    videoEmbed:false,

    urls:true,

    table:false,

    code:false,
    removeStyles:false,
// https://github.com/webfashionist/RichText



  });




$('#uploadButton').click(function() {
  const fileInput = $('#fileInput')[0];

  if (!fileInput.files[0]) {
    return alert('Файл не выбран!');
  }

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  formData.append('_csrf', $('[name="_csrf"]').val());

  $.ajax({
    type: 'POST',
    url: '/upload',
    data: formData,
    contentType: false,
    processData: false,
    success: function(data) {
      console.log(data);
    }
  });
});


});



