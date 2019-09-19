# jigsaw
jQuery based jigsaw game

## Creating a new jigsaw
This version includes a simple helper script that can chop an image into pieces. The script requires ImageMagick to be correctly installed and working. The images should have a width of 300 pixels and a height of 298 pixels.

Typically the script will be run by using the following command:

    sh stamp-jigsaw
    
This will copy the jigsaw pieces into the public_html/images directory. Open index.html in a browser to run the jigsaw. Better still, use a lightweigth webserver to run the application locally.
