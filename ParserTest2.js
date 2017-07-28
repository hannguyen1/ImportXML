var fs = require('fs');
var file = fs.readFileSync("test.xml","utf8");

//Split file by its objects
var filemain = file.split(/(?=<)/);
//console.log(filemain);
//console.log(filemain.length);
//Split objects into its attributes

for(j=0; j < filemain.length; j++){
    console.log("looptest");
    var file2 = filemain[j].split('\n');
   // console.log(file2);

    //Global Base Variables
    var width = 0;
    var height = 0;
    var hAlign = "\"left\"";
    var value = " ";
    var font = "\"font\": { \"name\": \"System\", \"size\": { \"val\": 12, \"type\": 0 }} ,\"color\": \"-Text Primary-\" },";
    var ctrl = 0;
    var rotation = 0;
    var visible = "true";
    var reltypeX = 0;
    var reltypeY = 0;
    var positionX = 0;
    var positionY = 0;
    var postypeX = 0;
    var postypeY = 0;
    var picType = 0;



    //If Object is a text view
    if(file2[0] == "<TextView"){
        ctrl = 3;
        console.log("textview");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


        //Seperate declaration from value
        var textvar = file2[i].split('=');
       // console.log(textvar);
        //console.log(textvar[0]);
        //console.log(textvar[1]);

        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //width = textvar[1];
            width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            console.log(width);
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1];
            height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(reltypeY == 3){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(reltypeX == 2){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){
            if(reltypeX == 0){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(reltypeY == 4){
                reltypeY = 1;
            }
            else{
                console.log(reltypeY);
                reltypeY = 3;
            }
        }
       }
        var size = "\"size\":{" + width + height + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + "}," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "\"ctrl\":"+ctrl+ ",\"visible\":" + visible + ",\"itemspec\":{ \"val\":{ \"en_US\":" + value + "}, \"hAlign\":" + hAlign + "," + font + size + "," + position;
        console.log(spec);
        /*var json = " \"w\":  {\"val\": 142, \"type\": 0,\"reltype\": 0}";
            json = json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

        console.log(json);*/
    }

/*
    
    IMAGE

*/
    
    
    if(file2[0] == "<ImageView"){
        console.log("imageview");
        ctrl = 24;
        picType = 1;
        var locked = true;
        var selInitImage = true;
        ref = "\"sys\"";
        var scale = 1;
        var opacity = 1;
        var typeShape = "\"rectangle\"";
        reltypeY = 0;
        reltypeX = 0;
         for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


        //Seperate declaration from value
        var textvar = file2[i].split('=');
       // console.log(textvar);
        //console.log(textvar[0]);
        //console.log(textvar[1]);

        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //width = textvar[1];
            width = "\"w\": { \"val\":120,\"type\":0,\"reltype\":0},";
            console.log(width);
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1];
            height = "\"h\": { \"val\":120,\"type\":0,\"reltype\":3}";

            }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(reltypeY == 3){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(reltypeX == 2){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){
            if(reltypeX == 0){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(reltypeY == 4){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
            }
        }
         }
        
        value = "\"default_image.svg\"";
        var size = "\"size\":{" + width + height + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + "}," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "\"ctrl\":"+ctrl+ ",\"events\": [], \"systemtype\": \"image-1\"," + position + "},\"visible\":" + visible + "," + size + ",\"itemspec\":{ \"fill\":{ \"type\":" + picType + ",\"locked\":" + locked + ", \"selInitImage\":" + selInitImage + ",\"val\": " + value + ",\"ref\":" + ref + ",\"scale\":" + scale + ",\"opacity\":" + opacity + "},\"type\":" +typeShape
        console.log(spec);
        }
    /*
    
        Button
        
    */
    
        if(file2[0] == "<Button"){
        ctrl = 22;
        var type = 0;
        console.log("Button");
        reltypeY = 0;
        reltypeX = 0;
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


        //Seperate declaration from value
        var textvar = file2[i].split('=');
       // console.log(textvar);
        //console.log(textvar[0]);
        //console.log(textvar[1]);

        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //width = textvar[1];
            width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            console.log(width);
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1];
            height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(reltypeY == 3){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(reltypeX == 2){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){
            if(reltypeX == 0){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(reltypeY == 4){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
            }
        }
       }
        var size = "\"size\":{" + width + height + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + "}," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "\"ctrl\":"+ctrl+ ",\"visible\":" + visible + ",\"itemspec\":{ \"states\": [ { \"name\": \"default\", \"normal\": { \"fill\": { \"type\":" + type + ",\"val\": \"-Component Primary-\" }, \"cornerradius\":{ \"val\": 0, \"type\": 0 }, \"type\": \"rectangle\", \"tapthrough\": true, \"label\":{ \"val\":{ \"en_US\":" + value + " }, \"offset\": { \"val\": 0, \"type\": 0 },\"hAlign\": \"center\", \"vAlign\": \"center\", \"color\": \"-Text Reversed-\",\"font\": { \"name\": \"System\", \"size\": { \"val\": 0.45,\"type\": 1} } } }, \"pressed\": { \"fill\": { \"type\": 0, \"val\": \"-Component Secondary-\" } }, \"disabled\": { \"fill\": { \"type\": 0, \"val\": \"-Component Accent-\" }, \"label\": { \"color\": \"-Text Secondary-\" } } } ], \"margins\": { \"x\": { \"val\": 10,\"type\": 0 }, \"y\": { \"val\": 0, \"type\": 0 } } }, \"opacity\": 1, \"events\": []," + size + "," + position        
            console.log(spec);
        /*var json = " \"w\":  {\"val\": 142, \"type\": 0,\"reltype\": 0}";
            json = json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

        console.log(json);*/
    }
    
}
