var fs = require('fs');
var file = fs.readFileSync("test.xml","utf8");
var filecolor = fs.readFileSync("colortest.xml","utf8");

var colorVar1 = "colorPrimaryDark";
console.log(color(colorVar1));
//console.log(filecolor);
//Split file by its objects
var filemain = file.split(/(?=<)/);


//Split objects into its attributes
    var base = "\"background\": { \"opacity\" : 1, \"val\": \"-Background-\", \"type\":0 }, \"position\": { \"y\":{ \"type\": 1, \"val\": 0 }, \"x\": { \"type\": 1, \"val\" :0 }}, \"size\": { \"w\": { \"type\":1, \"val\":1 }, \"h\": { \"type\":1, \"val\":1 }}, \"controls\": [ ";
    var ControlNum = 0;

for(j=0; j < filemain.length; j++){
    //console.log("looptest");
    var file2 = filemain[j].split('\n');

    var ButtonCount = 0;
    ButtonCount++;
    //Global Base Variables
    var width = 0;
    var height = 0;
    var hAlign = "\"left\"";
    var value = " ";
    var fontSize = 14;
    var textColor = "\"-Text Primary-\"";
    var Color = "\"color\": " + textColor;
    var textCaps = "false";
    var allCaps = "\"allcaps\":" + textCaps;
    var font = "\"font\": { \"name\": \"System\", \"size\": { \"val\": " + fontSize + ", \"type\": 0 }}";
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
    var posSignalx = 0;
    var posSignaly = 0;
    var randomID = uniqueId();
    var shadow = 0;
    var shadowColor = "#646464ff";
    var shadowDx = 0;
    var shadowDy = 0;
    var shadowRadius = 0;
    //TextView
    if(file2[0] == "<TextView"){
        ctrl = 3;
        var textcount = 0;
        textcount++;
        //Parse through each line
       for( i = 1; i < file2.length; i++){
        
        //Get rid of padding
        file2[i] = file2[i].trim();
        
        //Seperate declaration from value
        var textvar = file2[i].split('=');


        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            //width = 142;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
           // height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            //height = 36;

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign =  textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
           
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
        
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
       }
        
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":"+ctrl+ ",\"visible\":" + visible + ",\"itemspec\":{ \"val\":{ \"en_US\":" + value + "}, \"hAlign\":" + hAlign + "," + font + "," + Color + "," + allCaps;
        if (shadow == 1) {
            spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
        spec = spec + "},";
        var jsonFinal = spec + size + "," + position + "}, \"id\": \" " + randomID + "\", \"name\": \"text-" + textcount+ "\" , \"systemtype\":\"text-" + textcount + "\", \"opacity\":1, \"type\":\"standard\" }";
        if (ControlNum > 0 ){
            console.log("WORKING??");
            base = base + " , ";   
        }
        ControlNum++;

        base = base + jsonFinal ;
    }

    //ImageView
    
    if(file2[0] == "<ImageView"){
        console.log("imageview");
        ctrl = 24;
        picType = 1;
        var ImageCount = 0;
        ImageCount++;
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
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');

         if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            //width = 142;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
           // height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            //height = 36;

        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY")
        {
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
}
        
        value = "\"default_image.svg\"";
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":"+ctrl+ ",\"events\": [], \"systemtype\": \"image-" + ImageCount + " \"," + position + "},\"visible\":" + visible + "," + size + ",\"itemspec\":{ \"fill\":{ \"type\":" + picType + ",\"locked\":" + locked + ", \"selInitImage\":" + selInitImage + ",\"val\": " + value + ",\"ref\":" + ref + ",\"scale\":" + scale + ",\"opacity\":" + opacity + "},\"type\":" +typeShape;
        if (shadow == 1) {
            spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
        
        var finalJson = spec + ", \"opacity\":1, \"id\":\"" + randomID + "\", \"name\": \"image-" + ImageCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";
            console.log("WORKING??");

        }
        ControlNum++;
        base = base + finalJson ;
        
        }
    
    //Button
    
    if(file2[0] == "<Button"){
        ctrl = 22;
        var type = 0;
        console.log("Button");
        reltypeY = 0;
        reltypeX = 0;
        textColor = "\"-Text Reversed-\"";
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


         if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            //width = 142;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
           // height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            //height = 36;

        }

        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":"+ctrl+ ",\"visible\":" + visible + ",\"itemspec\":{ \"states\": [ { \"name\": \"default\", \"normal\": { \"fill\": { \"type\":" + type + ",\"val\": \"-Component Primary-\" }, \"cornerradius\":{ \"val\": 0, \"type\": 0 }, \"type\": \"rectangle\", \"tapthrough\": true, \"label\":{ \"val\":{ \"en_US\":" + value + " }, \"offset\": { \"val\": 0, \"type\": 0 },\"hAlign\": \"center\", \"vAlign\": \"center\"," + Color + "," + font +" } }, \"pressed\": { \"fill\": { \"type\": 0, \"val\": \"-Component Secondary-\" } }, \"disabled\": { \"fill\": { \"type\": 0, \"val\": \"-Component Accent-\" }, \"label\": { \"color\": \"-Text Secondary-\" } } } ], \"margins\": { \"x\": { \"val\": 10,\"type\": 0 }, \"y\": { \"val\": 0, \"type\": 0 } } "
        
        if (shadow == 1) {
            spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
        
        var finalJson = spec + "}, \"opacity\": 1, \"events\": []," + size + "," + position + "}," + "\"id\": \"" + randomID + "\", \"name\": \"button-" + ButtonCount + "\", \"systemtype\" : \"button-" + ButtonCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + finalJson ;
    }
    
    
    //ScrollView
    
    if(file2[0] == "<ScrollView"){
        ctrl = 18;
        var ScrollCount = 0;
        ScrollCount++;
        console.log("ScrollView");
        //Parse through each line
        j++;
        var file3 = filemain[j].split('\n');
        j++;

       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
           
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":0}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + "}," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{\"ctrl\":"+ctrl+ ", \"events\":[], \"systemtype\": \"scrollcontainer-1\"," + position + "},\"visible\":" + visible + "," + size + ",\"itemspec\":{\"paging\": false, \"bounces\":true, \"showscroll\": false, \"scrollstyle\": 0, \"controls\" : []}, \"opacity\": 1, \"id\": \"" + randomID + "\", \"name\": \"scrollcontainer-" + ScrollCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;
    }
    
    
    //ListView
    
    if(file2[0] == "<ListView"){
        ctrl = 27;
        var ListCount = 0;
        ListCount++;
        console.log("ListView");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');

           if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
           
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
           
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
           
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":" + ctrl + ",\"systemtype\": \"listcollection-"+ ListCount +"\",\"visible\":" + visible + ",\"itemspec\":{ \"datatype\": 1, \"paging\": false, \"bounces\": true, \"showscroll\": false, \"label\": { \"itemspec\":{ " + font + ", " + Color + ",\"hAlign\":" + hAlign + ", \"vAlign\":\"center\", \"val\":{ \"en_US\": \"\" }}, \"val\":{\"en_US\":\"\"}, \"ctrl\": 3, \"position\":{ \"x\":{ \"type\" : 1, \"reltype\": 1, \"val\":0 }, \"y\": { \"type\": 1, \"reltype\": 1, \"val\": 0 } }, \"size\":{\"w\": { \"val\":1, \"type\":1, \"reltype\": 0}, \"h\": { \"val\":1, \"type\": 1, \"reltype\": 3} }, \"visible\":" + visible + ",\"opacity\":1, \"type\": \"standard\",\"id\": \"" + randomID + "_label\" }, \"scrollstyle\": 0, \"spacing\":{ \"size\": {\"val\": 6, \"type\":0 }, \"fill\": { \"type\": -1 } }, \"views\": [{ \"view\": { \"route\" : \"panels\", \"ident\": \"listitem1\", \"background\": { \"type\": -1}, \"controls\":[], \"size\": { \"w\": { \"type\" : 1, \"val\" :1}, \"h\": { \"type\" : 1, \"val\" :1 } }, \"position\" : { \"y\" : { \"type\" : 1, \"val\" : 0}, \"x\": { \"type\" : 1, \"val\" :0 } } }, \"template\" : true } ], \"visibleitems\": 3, \"links\": [] }, \"opacity\": 1, \"events\": [], " + size + "," + position + "}," + "\"id\": \"" + randomID + "\", \"name\": \"listcollection-" + ListCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;
    }
    
    
    //GridView
    
    if(file2[0] == "<GridView"){
        ctrl = 35;
        console.log("GridView");
        var GridCount = 0;
        GridCount++;
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


           if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":" + ctrl + ",\"systemtype\": \"gridcollection-" +GridCount+ "\",\"visible\":" + visible + ",\"itemspec\":{ \"datatype\": 1, \"paging\": false, \"bounces\": true, \"showscroll\": false, \"label\": { \"itemspec\":{ " + font + "," + Color + ",\"hAlign\":" + hAlign + ", \"vAlign\":\"center\", \"val\":{ \"en_US\": \"\" }}, \"val\":{\"en_US\":\"\"}, \"ctrl\": 3, \"position\":{ \"x\":{ \"type\" : 1, \"reltype\": 1, \"val\":0 }, \"y\": { \"type\": 1, \"reltype\": 1, \"val\": 0 } }, \"size\":{\"w\": { \"val\":1, \"type\":1, \"reltype\": 0}, \"h\": { \"val\":1, \"type\": 1, \"reltype\": 3} }, \"visible\":" + visible + ",\"opacity\":1, \"type\": \"standard\",\"id\": \"5980e9e8e72038eea896e598_label\" }, \"scrollstyle\": 0, \"spacing\":{ \"size\": {\"val\": 6, \"type\":0 }, \"fill\": { \"type\": -1 } }, \"views\": [{ \"view\": { \"route\" : \"panels\", \"ident\": \"griditem1\", \"background\": { \"type\": -1}, \"controls\":[], \"size\": { \"w\": { \"type\" : 1, \"val\" :1}, \"h\": { \"type\" : 1, \"val\" :1 } }, \"position\" : { \"y\" : { \"type\" : 1, \"val\" : 0}, \"x\": { \"type\" : 1, \"val\" :0 } } }, \"template\" : true } ], \"visibleitems\": 3, \"visiblecols\": 3, \"links\": [] }, \"opacity\": 1, \"events\": [], " + size + "," + position + "}, \"id\": \"" + randomID + "\", \"name\": \"gridcollection-" + GridCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;
        base = base + spec ;
            }
    
    //CheckBox
    
    if(file2[0] == "<CheckBox"){
        ctrl = 22;
        console.log("CheckBox");
        var CheckCount = 0;
        CheckCount++;
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


           if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){it 
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
           
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{\"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{ \"initialState\": 0, \"type\": \"toggle\", \"states\": [ { \"name\":\"default\", \"normal\": { \"type\": \"rectangle\", \"fill\": { \"type\" : -1 }, \"label\": { " + font + "," + Color + ", \"vAlign\":\"center\", \"hAlign\": \"left\", \"offset\": { \"val\": 10, \"type\" : 0}, \"val\": { \"en_US\":" + value + "} }, \"icon\": { \"size\" : { \"w\": { \"val\": 1, \"type\": 3 }, \"h\":{ \"val\" : 0.8, \"type\" : 1} }, \"image\" : { \"ref\" : \"sys\", \"val\" : \"checkbox_checkbox_off.svg\", \"type\": 1, \"color\": \"-Component Primary-\" }, \"align\": \"left\" } }}, { \"name\": \"selected\", \"normal\": { \"icon\": { \"image\": { \"ref\":\"sys\", \"val\":\"checkbox_checkbox_on.svg\", \"type\": 1, \"color\": \"-Component Primary-\" } } } }  ] , \"margins\" : { \"x\": { \"val\": 0, \"type\":0 }, \"y\" : { \"val\": 0, \"type\": 0} } }, \"opacity\": 1, \"events\": []," + size + "," + position + " }, \"id\": \"" + randomID + "\", \"name\": \"toggle-" + CheckCount + "\", \"systemtype\" : \"toggle-" + CheckCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;
    }
    
    //RadioButton
    
    if(file2[0] == "<RadioButton"){
        ctrl = 22;
        var RadioCount = 0;
        RadioCount++;
        console.log("Radio Button");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


           if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            width = 147;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            height = 50;
        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }

        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{\"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{ \"initialState\": 0, \"type\": \"radio\", \"states\": [ { \"name\":\"default\", \"normal\": { \"type\": \"rectangle\", \"fill\": { \"type\" : -1 }, \"label\": { " + font + "," + Color + ", \"vAlign\":\"center\", \"hAlign\": \"left\", \"offset\": { \"val\": 10, \"type\" : 0}, \"val\": { \"en_US\":" + value + " } }, \"icon\": { \"size\" : { \"w\": { \"val\": 1, \"type\": 3 }, \"h\":{ \"val\" : 0.8, \"type\" : 1} }, \"image\" : { \"ref\" : \"sys\", \"val\" : \"checkbox_radio_off.svg\", \"type\": 1, \"color\": \"-Component Primary-\" }, \"align\": \"left\" } }}, { \"name\": \"selected\", \"normal\": { \"icon\": { \"image\": { \"ref\":\"sys\", \"val\":\"checkbox_radio_on.svg\", \"type\": 1, \"color\": \"-Component Primary-\" } } } }  ] , \"margins\" : { \"x\": { \"val\": 0, \"type\":0 }, \"y\" : { \"val\": 0, \"type\": 0} } }, \"opacity\": 1, \"events\": []," + size + "," + position + " }, \"id\": \"" + randomID + "\", \"name\": \"radio-" + RadioCount + "\", \"systemtype\" : \"radio-" + RadioCount + "\"}";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;
    }
    
    //TextInput
    
    if(file2[0] == "<EditText"){
        ctrl = 23;
        var EditCount = 0;
        EditCount++;
        console.log("Edit Text");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


           if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            width = 147;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            height = 50;
        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
           
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
           
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{ \"placeholder\": { \"color\": \"-Text Secondary-\", \"val\": { \"en_US\": \"placeholder text\"} }, \"numlines\": 1, \"returnkeytype\": 0, \"autocorrect\": false, \"autocaps\": 0, \"keyboardtype\": 0, \"password\": false, \"focuskeyboard\": true, \"clearsonedit\": false, \"background\": { \"fill\": { \"type\": 0 , \"val\": \"-Text Reversed-\"}, \"type\": \"rectangle\", \"border\" : { \"width\": { \"val\" : 2, \"type\": 0}, \"color\":\"-Text Secondary-\"}, \"visible\":true}, \"val\": { \"en_US\":" + value + "}, \"hAlign\": \"left\", \"font\": { \"name\": \"System\", \"size\": { \"val\": 0.5, \"type\":1 }}, \"color\": \"-Text Primary-\", \"margins\": { \"x\": { \"val\": 5, \"type\":0 }}";
        
        if (shadow == 1) {
            spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
        
        var finalJson = spec + "}, \"opacity\": 1, \"type\" : \"standard\", \"id\": \"" + randomID + "\", \"name\": \"userinput-" + EditCount + "\", \"systemtype\": \"userinput-" + EditCount + "\", \"events\": [], " + size + "," +position + "} }";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + finalJson ;
    }
    
    //Switch
    
    if(file2[0] == "<Switch"){
        ctrl = 38;
        var SwitchCount = 0;
        SwitchCount++;
        console.log("Switch");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"offcolor\": \"-Component Accent-\", \"oncolor\": \"-Text Primary-\", \"thumbcolor\" : \"-Component Secondary-\", \"selected\": false}, \"events\":[],  "+ size + "," + position + "}, \"opacity\" : 1, \"id\": \"" + randomID + "\", \"name\": \"switch-" + SwitchCount + "\", \"systemtype\": \"switch-" + SwitchCount + "\" }";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;
    }
    
    //SeekBar
    
    if(file2[0] == "<SeekBar"){
        ctrl = 36;
        var SeekCount = 0;
        SeekCount++;
        console.log("SeekBar");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');
       // console.log(textvar);
        //console.log(textvar[0]);
        //console.log(textvar[1]);

        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);;
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);;
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
           
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"animations\": { \"value\": { \"damping\": 0.9, \"duration\": 0.5} }, \"thumb\": { \"fill\": { \"opacity\" : 1, \"val\": \"-Component Primary-\", \"type\": 0 }, \"type\" : \"ellipse\", \"position\": { \"x\": { \"val\": -0.030000000000000002, \"type\" : 1 }, \"y\": { \"val\" : 0, \"type\" : 1 }}, \"size\": { \"w\": { \"val\" : 1, \"type\" : 3, \"reltype\" : 0}, \"h\":{ \"val\":1, \"type\":1, \"reltype\": 3}}, \"visible\": true }, \"bar\": { \"fill\" :{ \"opacity\": 1, \"val\": \"-Component Primary-\", \"type\": 0 }, \"type\" : \"rectangle\", \"position\": { \"x\": { \"val\" : 0, \"type\":1, \"reltype\": 0 }, \"y\": { \"val\": 0.25, \"type\":1, \"reltype\":3 }}, \"size\": { \"w\":{ \"val\" :1, \"type\": 1, \"reltype\" : 0 }, \"h\": { \"val\": 0.5, \"type\":1, \"reltype\":3 }}, \"visible\": true }, \"background\": { \"fill\": { \"opacity\": 1, \"val\" :\"-Component Accent-\", \"type\": 0},\"type\":\"rectangle\", \"position\": { \"x\": { \"val\":0, \"type\" : 1, \"reltype\" : 0 }, \"y\": { \"val\": 0.25, \"type\" : 1, \"reltype\" : 3 }}, \"size\": { \"w\":{ \"val\":1, \"type\": 1, \"reltype\":0}, \"h\":{ \"val\": 0.5, \"type\": 1, \"reltype\" : 3}}, \"visible\":true}, \"value\": 20, \"max\":100, \"min\":0, \"orientation\":1";
        
        if (shadow == 1) {
            spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
        
        var finalJson = spec + "}, \"events\": [], " + size + "," + position + "} ," + " \"opacity\":1, \"id\": \"" + randomID + "\", \"name\": \"slider-"+SeekCount + "\", \"systemtype\": \"slider-" + SeekCount + "\" }";
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + finalJson ;
    }
    
    //ProgressBar
    if(file2[0] == "<ProgressBar"){
        ctrl = 31;
        var ProgressCount = 0;
        ProgressCount++;
        console.log("ProgressBar");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');

        if(textvar[0] == "style"){
            
            if(textvar[1] == "\"?android:attr/progressBarStyle\""){
                ctrl = 19;
            }
            else{
                console.log("horizontal");
            }
        }
        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);;
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            //width= 90;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);;
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            //height = 90;

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
           
        if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
        if(textvar[0] == "android:shadowColor"){
            shadowColor = textvar[1];
            shadow = 1;   
        }
        
        if(textvar[0] == "android:shadowDx"){
            shadowDx = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:shadowDy"){
            shadowDy = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);

        }
           
        if(textvar[0] == "android:shadowRadius") {
            shadowRadius = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        if (ctrl == 31){
            var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"animations\": { \"value\": { \"damping\": 0.9, \"duration\": 0.5} }, \"thumb\": { \"fill\": { \"opacity\": 0, \"val\": \"-Component Primary-\", \"type\": 0 }, \"type\" : \"ellipse\", \"position\": { \"x\": { \"val\": -0.030000000000000002, \"type\" : 1 }, \"y\": { \"val\" : 0, \"type\" : 1 }}, \"size\": { \"w\": { \"val\" : 1, \"type\" : 3, \"reltype\" : 0}, \"h\":{ \"val\":1, \"type\":1, \"reltype\": 3}}, \"visible\": false }, \"bar\": { \"fill\" :{ \"opacity\": 1, \"val\": \"-Component Primary-\", \"type\": 0 }, \"type\" : \"rectangle\", \"position\": { \"x\": { \"val\" : 0, \"type\":1, \"reltype\": 0 }, \"y\": { \"val\": 0, \"type\":1, \"reltype\":3 }}, \"size\": { \"w\":{ \"val\" :1, \"type\": 1, \"reltype\" : 0 }, \"h\": { \"val\": 0.5, \"type\":1, \"reltype\":3 }}, \"visible\": true }, \"background\": { \"fill\": { \"opacity\": 1, \"val\" :\"-Component Accent-\", \"type\": 0},\"type\":\"rectangle\", \"position\": { \"x\": { \"val\":0, \"type\" : 1, \"reltype\" : 0 }, \"y\": { \"val\": 0, \"type\" : 1, \"reltype\" : 3 }}, \"size\": { \"w\":{ \"val\":1, \"type\": 1, \"reltype\":0}, \"h\":{ \"val\": 0.5, \"type\": 1, \"reltype\" : 3}}, \"visible\":true}, \"value\": 20, \"max\":100, \"min\":0, \"orientation\":1 "
            
            if (shadow == 1) {
                spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
            
            var finalJson = spec + "}, \"opacity\":1, \"id\": \"" + randomID + "\", \"name\": \"progress-" + ProgressCount + "\", \"systemtype\": \"progress-" + ProgressCount + "\", \"events\": [], " + size + "," + position + "} }" ;
        }
        if (ctrl == 19){
            var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"showStates\": false, \"background\": { \"fixedbackground\": true," + size + "," + position + "}, \"border\": { \"width\":{ \"val\": 0.11, \"type\":1 }, \"color\": \"-Component Accent-\" }, \"type\":\"ellipse\", \"fill\": { \"type\":-1 } "
            
           if (shadow == 1) {
            spec = spec + ", \"shadow\": {\"color\": " + shadowColor + ",\"radius\":{ \"val\": " + shadowRadius + ",\"type\":0}, \"offset\": { \"x\": { \"val\":" + shadowDx + ",\"type\":0}, \"y\":{ \"val\":" + shadowDy + ",\"type\": 0 }}}";
        }
            
            var finalJson = spec +"}, \"bar\": { \"size\":{\"height\":{ \"val\": 0.11, \"type\" :1 }, \"h\":{\"val\":0.11, \"type\":1}}, \"fill\": {\"opacity\":1, \"val\": \"-Component Primary-\", \"type\": 0} }, \"clockwise\": true, \"fillmode\": 0, \"rate\": 1, \"progress\": 65, \"anglerange\": 360, \"startangle\":0, \"max\":100, \"min\":0, \"type\":0, \"radius\":{ \"val\":1, \"type\":1}}, \"opacity\":1, \"id\": \"" + randomID + "\", \"name\": \"progress-" + ProgressCount + "\", \"systemtype\": \"progress-" + ProgressCount + "\", " + size + "," + position + "} }" ;
            
        }
        
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;

    }
    
    //WebView
    
    if(file2[0] == "<WebView"){
        ctrl = 29;
        var WebCount = 0;
        WebCount++;
        console.log("WebView");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].trim();


        //Seperate declaration from value
        var textvar = file2[i].split('=');


        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";

        }
        if(textvar[0] == "android:text"){

            value = textvar[1];
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];   
           }
            if(textvar[0] == "android:textSize"){
            
            fontSize = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
        }
        
        if(textvar[0] == "android:textColor"){
            
            textColor = textvar[1];
        }
        
        if(textvar[0] == "android:textAllCaps"){
            
            textCaps = textvar[1];
            
        }
        if(textvar[0] == "android:rotation"){

            rotation = textvar[1];
           }
        if(textvar[0] == "android:gravity"){
            
            hAlign = textvar[1];
        }
        if(textvar[0] == "app:layout_constraintBottom_toBottomOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 4;
                posSignaly = 1;
            }

        }
        if(textvar[0] == "app:layout_constraintLeft_toLeftOf"){
            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 0;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintRight_toRightOf"){

            if(posSignalx == 1){
                reltypeX = 1;
            }
            else{
                reltypeX = 2;
                posSignalx = 1;
            }
        }
        if(textvar[0] == "app:layout_constraintTop_toTopOf"){
            if(posSignaly == 1){
                reltypeY = 1;
            }
            else{
                reltypeY = 3;
                posSignaly = 1;
            }
        }
           
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}";
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        var spec = "{ \"ctrl\":"+ctrl+ ",\"visible\":" + visible + ", \"opacity\": 1, \"itemspec\": { \"type\":0, \"val\" : \"http://www.phase2industries.com\", \"cache\": 0 }, \"id\": \"" + randomID + "\", \"name\": \"webview-" + WebCount + "\", \"systemtype\": \"webview-"+ WebCount + "\", \"events\": []," + size + "}," + position + "}}";
        
        if (ControlNum > 0 ){
            base = base + " , ";   
        }
        ControlNum++;

        base = base + spec ;
        
        console.log(spec);
    }

}

    base = base + "], \"events\": [], \"systemtype\": \"home\", \"device\": 0, \"platform\": 1, \"orientation\": 3, \"_mergeBase\": {\"ident\": \"598e0e1747d1296735a0a518\", \"name\": { \"en_US\":\"Home\"}, \"_id\":\"598e0e17723970f82be2df75\", \"route\": \"screens\", \"attributes\": null," + base + "], \"events\": [], \"systemtype\": \"home\", \"device\": 0, \"platform\": 1, \"orientation\": 3}, \"attributes\": {} }";
   //console.log(base);
    
    //console.log(base);
function uniqueId() {
    const timestamp = (Date.now() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g,() => {
        return(Math.random()*16|0).toString(16);
    })
    
}

function color(colorVar){
    
    //var filecolor2 = filecolor.split(/(?=<)/);
    var filecolor2 = filecolor.split('\n');
    console.log(filecolor2);
    for(j=2; j < filecolor2.length; j++){
        filecolor3 = filecolor2[j].split('<');
        filecolor3 = filecolor3[1].split('>');
        var colorIdent = filecolor2[1];
        filecolor3 = filecolor3[0].split('=');
        var colorName = filecolor3[1].replace(/"/g, "");
            if (colorName == colorVar){
                break;
            }
    }
    /*console.log(colorIdent);
    console.log(colorName);
    console.log(colorVar);*/
    
        return colorIdent;
    
}
