window.uploadImageFile = function uploadFileAjax(file, callback) {

  var formData = new FormData();
  formData.append("smfile", file);
  $.ajax({
    url: 'https://sm.ms/api/upload',
    type: 'POST',
    data: formData,
    cache: false,
    processData: false,
    // Don't process the files
    contentType: false,
    // Set content type to false as jQuery will tell the server its a query string request
    enctype: 'multipart/form-data',
    success: function (response) {
      callback(response);
    },
    error: function (errorThrown) {
      // Handle errors here
      console.log('ERRORS: ' + errorThrown);
      // STOP LOADING SPINNER
    }
  });
}
