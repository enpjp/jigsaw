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

$(document).ready(function () { 
	$("img").css("float","none");
	$("#jigsaw_container").css("float","none").css("width","500px").css("border", "red solid 1px");
	$("#jigsaw_container").css( "height","500px");
        $("#table_top").css( "height","300px").css("width","303").css("border","grey solid 1px");
 // Set an id for each image in the jigsaw container
 var id_value = 0;
 $("#jigsaw_container img").draggable({containment: "#jigsaw_container", grid: [ 1, 1 ] }).each(function() {
 id_value = id_value + 1;
 $(this).attr("id","jigsaw_" + id_value);
 $(this).draggable({snap: "#jigsaw_snap_" + id_value});
});
// Add a table top
        $( "#table_top" ).position({
        my: "center",
        at: "center",
        of: "#jigsaw_container"
        });



// Now need to add nine divs in the correct position so the jigsaw pieces will snap to these divs.
// This seems clunky but will work universally for any problem of this type.
    $("#jigsaw_snap_1").css("width","100").css( "height","125px").css("background","none").position({my: "left top", at: "left top", of: "#table_top"});
    $("#jigsaw_snap_2").css("width","148").css( "height","100px").css("background","green").position({my: "left+76 top", at: "left top", of: "#table_top"});
    $("#jigsaw_snap_3").css("width","99").css( "height","100px").css("background","grey").position({my: "left+200 top", at: "left top", of: "#table_top"});
        
        //This closes the script
});