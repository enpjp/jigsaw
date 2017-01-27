/* 
 * Copyright (C) 2017 TechTrends
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* global add */

// This function has been separated from the html file for transporability
function jigsaw() {
    // overide images so they do not float
        $("img").css("float","none");
            // Set a counter for the number of pieces in place
        var jigsaw_pieces= [0,0,0,0,0,0,0,0,0,0] ;      
    // Now set some css for the container. We could do this with a stylesheet instead    
	$("#jigsaw_container").css("float","none").css("width","500px").css("border", "red solid 1px");
	$("#jigsaw_container").css( "height","500px");

    // Add a table top and set its postion
        $("#jigsaw_container").prepend("<div id='table_top'></div>");
        $("#table_top").css( "height","300px").css("width","298").css("border","grey solid 1px").css( "background" , "grey");
        
    $( "#table_top" ).position({
        my: "center",
        at: "center",
        of: "#jigsaw_container"
        });
    
    // Now add snap containers for each jigsaw piece
    // This seems clunky but it can be easily modified for any set of pieces by setting the width and height
        $("#table_top").append("<div id='jigsaw_snap_1'></div>");
        $("#jigsaw_snap_1").css("width","100").css( "height","125px").css("background","none").position({my: "left top", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_2'></div>");
        $("#jigsaw_snap_2").css("width","148").css( "height","100px").css("background","none").position({my: "left+76 top", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_3'></div>");
        $("#jigsaw_snap_3").css("width","99").css( "height","100px").css("background","none").position({my: "left+199 top", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_4'></div>");
        $("#jigsaw_snap_4").css("width","125px").css( "height","124px").css("background","none").position({my: "left top+100", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_5'></div>");
        $("#jigsaw_snap_5").css("width","124px").css( "height","123px").css("background","none").position({my: "left+100 top+76", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_6'></div>");
        $("#jigsaw_snap_6").css("width","99px").css( "height","148px").css("background","none").position({my: "left+200 top+76", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_7'></div>");
        $("#jigsaw_snap_7").css("width","125px").css( "height","99px").css("background","none").position({my: "left top+200", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_8'></div>");
        $("#jigsaw_snap_8").css("width","99px").css( "height","123px").css("background","none").position({my: "left+100 top+176", at: "left top", of: "#table_top"});
        $("#table_top").append("<div id='jigsaw_snap_9'></div>");
        $("#jigsaw_snap_9").css("width","123px").css( "height","99px").css("background","none").position({my: "left+176 top+200", at: "left top", of: "#table_top"});         
        
 // Set an id for each image in the jigsaw container and set the snap target.
 //Also set class "draggable" to help find the which pieces have been snapped 
 //to their targets
 var id_value = 0;
        $("#jigsaw_container img").draggable({containment: "#jigsaw_container" , snapTolerance: 30 , snapMode: "inner" }).each(function() {
                id_value = id_value + 1;
                $(this).attr("id","jigsaw_" + id_value).attr("class","jigsaw_piece snap");
                $(this).draggable({snap: "#jigsaw_snap_" + id_value});
               
        });

    // Need to intialise the postion of the jigsaw pieces
     $("#jigsaw_1").position({my: "left+350 top", at: "left top", of: "#jigsaw_container"});
     $("#jigsaw_2").position({my: "left top", at: "left top", of: "#jigsaw_container"});
     $("#jigsaw_3").position({my: "left+175 top+175", at: "left top", of: "#jigsaw_container"});     
     $("#jigsaw_4").position({my: "left+355 top+200", at: "left top", of: "#jigsaw_container"});
     $("#jigsaw_5").position({my: "left+30 top+200", at: "left top", of: "#jigsaw_container"}); 
     $("#jigsaw_6").position({my: "left top+353", at: "left top", of: "#jigsaw_container"});
     $("#jigsaw_7").position({my: "left+200 top", at: "left top", of: "#jigsaw_container"});
     $("#jigsaw_8").position({my: "left+200 top+355", at: "left top", of: "#jigsaw_container"});
     $("#jigsaw_9").position({my: "left+355 top+355", at: "left top", of: "#jigsaw_container"});
     
    /*Finally, we need to detect the snapped jigsaw pieces
    *When we have done this we will set the "completed" class elements to 
    *visible. By useing a class, rather than an id, when can arrange for a more
    *complex set of results to become enabled.
    *This code segment was inspired by the example kindly posted by Andrew Whitaker
    *on http://jsfiddle.net/andrewwhitaker/uYpnW/5/
    *The key for it to work is the snapElements array which is buired deeply in
    *the jQuery documentation.
    */
 
     $(".snap").draggable({
        
        stop: function(event, ui) { 
 
        /* Get the possible snap targets: */
        var snapped = $(this).data('ui-draggable').snapElements;
       
        /* Pull out only the snap targets that are "snapping": 
         * This only pulls out a single value, not an array
         * */
   
        var snappedTo = $.map(snapped, function(element) {
            return element.snapping ? element.item : null;
        });
     
        /* Display the results: */
        var result= '';

        $.each(snappedTo, function(idx, item) {

            result = $(item).attr("id") + ". ";
        });
        
    /* Find the piece that did the snapping and set its state
    * We need to use the result variable to do this.
    * Set the snapped from state to 1 if snapped otherwise 0
    */

    var snapped_from = $(this).attr("id");
    var snapped_from_state = 1;
         
    if (result === '') {
            snapped_from_state = 0;
        }
           
         /* This is clunky but easy to follow*/      
        if (snapped_from === "jigsaw_1"){ jigsaw_pieces[1] = snapped_from_state ;};
        if (snapped_from === "jigsaw_2"){ jigsaw_pieces[2] = snapped_from_state ;};
        if (snapped_from === "jigsaw_3"){ jigsaw_pieces[3] = snapped_from_state ;};
        if (snapped_from === "jigsaw_4"){ jigsaw_pieces[4] = snapped_from_state ;};
        if (snapped_from === "jigsaw_5"){ jigsaw_pieces[5] = snapped_from_state ;};
        if (snapped_from === "jigsaw_6"){ jigsaw_pieces[6] = snapped_from_state ;};
        if (snapped_from === "jigsaw_7"){ jigsaw_pieces[7] = snapped_from_state ;};
        if (snapped_from === "jigsaw_8"){ jigsaw_pieces[8] = snapped_from_state ;};
        if (snapped_from === "jigsaw_9"){ jigsaw_pieces[9] = snapped_from_state ;};
        
            var total = 0;
            $.each(jigsaw_pieces,function(index, value) {
            total += value ;
                if (total === 9) {
                    $("#complete").css("visibility","visible");
                } else {
                    $("#complete").css("visibility","hidden");
                };
            });
        
        
        $("#results").html("<p>Snapped from: "+ 
                snapped_from  + ". Snapped to: "  + (result === '' ? "Nothing!" : result) + 
                "this many pieces "+ total + "</p>");
        }
    });
 
 
 
 
};
    
        
    

