$(document).ready(function () {

    // When the close button is clicked, hide the modal, and delete the image.
    $("#close-lightbox").click(function () {
        $("#lightbox").css("display", "none");
        
        // The .next() method selects the next sibling instead of itself.
        $("#close-lightbox").next().remove();
    });

    // When an image is clicked then show the modal, detect what image was clicked on, build original image filename, and create a img element with that image, and place it into the imageBox.
    $(".gallery-images").click(function () {

        // Show the modal.
        $("#lightbox").css("display", "block");

        // Grab the filename of the img element that was clicked on.
        var thumbnailName = $(this).attr("src");
        
        // Convert the thumbnail filename to the filename of the original image.
        var originalName = getOriginal(thumbnailName);
        
        // Build the img element and place it in the imageBox.
        $("#imageBox").append("<img src='" + originalName + "' alt='A collection of dark green leaves.' />");
    });


});




// Converts the thumbnail filename to original filename.
// "images/leaves-tn.jpg" => "images/leaves.jpg"
function getOriginal(string) {

    // Split the string between the dashes and create an array.
    var stringArray = string.split("-");

    // Grab the first value of the array, and then attach .jpg to it, and store the results in finsihed string.
    var finishedString = stringArray[0] + ".jpg";

    // Return the finishedString value to where ever it was called.
    return finishedString;
}