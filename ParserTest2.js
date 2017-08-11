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
    var reltypeY = 3;
    var positionX = 0;
    var positionY = 0;
    var postypeX = 0;
    var postypeY = 0;
    var picType = 0;



    /*
        TextView
    */
    if(file2[0] == "<TextView"){
        ctrl = 3;
        console.log("textview");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


        //Seperate declaration from value
        var textvar = file2[i].split('=');


        if(textvar[0] == "android:layout_width"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            width = 142;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
           // height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            height = 36;

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
           
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":"+ctrl+ ",\"visible\":" + visible + ",\"itemspec\":{ \"val\":{ \"en_US\":" + value + "}, \"hAlign\":" + hAlign + "," + font + size + "," + position;
        console.log(spec);
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
        if(textvar[0] == "tools:layout_editor_absoluteY")
        {
            positionY = textvar[1];
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1];
            
        }
    }
        
        value = "\"default_image.svg\"";
        var size = "\"size\":{" + width + height + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + "}," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":"+ctrl+ ",\"events\": [], \"systemtype\": \"image-1\"," + position + "},\"visible\":" + visible + "," + size + ",\"itemspec\":{ \"fill\":{ \"type\":" + picType + ",\"locked\":" + locked + ", \"selInitImage\":" + selInitImage + ",\"val\": " + value + ",\"ref\":" + ref + ",\"scale\":" + scale + ",\"opacity\":" + opacity + "},\"type\":" +typeShape
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
        var spec = "{ \"ctrl\":"+ctrl+ ",\"visible\":" + visible + ",\"itemspec\":{ \"states\": [ { \"name\": \"default\", \"normal\": { \"fill\": { \"type\":" + type + ",\"val\": \"-Component Primary-\" }, \"cornerradius\":{ \"val\": 0, \"type\": 0 }, \"type\": \"rectangle\", \"tapthrough\": true, \"label\":{ \"val\":{ \"en_US\":" + value + " }, \"offset\": { \"val\": 0, \"type\": 0 },\"hAlign\": \"center\", \"vAlign\": \"center\", \"color\": \"-Text Reversed-\",\"font\": { \"name\": \"System\", \"size\": { \"val\": 0.45,\"type\": 1} } } }, \"pressed\": { \"fill\": { \"type\": 0, \"val\": \"-Component Secondary-\" } }, \"disabled\": { \"fill\": { \"type\": 0, \"val\": \"-Component Accent-\" }, \"label\": { \"color\": \"-Text Secondary-\" } } } ], \"margins\": { \"x\": { \"val\": 10,\"type\": 0 }, \"y\": { \"val\": 0, \"type\": 0 } } }, \"opacity\": 1, \"events\": []," + size + "," + position        
            console.log(spec);
    }
    
    
    /*   
    Scroll View   
    */
    if(file2[0] == "<ScrollView"){
        ctrl = 18;
        console.log("ScrollView");
        //Parse through each line
        j++;
        var file3 = filemain[j].split('\n');
        j++;

       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "{ \"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":0}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + "} }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "\"ctrl\":"+ctrl+ ", \"events\":[], \"systemtype\": \"scrollcontainer-1\"," + position + ",\"visible\":" + visible + "," + size + ",\"itemspec\":{\"paging\": false, \"bounces\":true, \"showscroll\": false, \"scrollstyle\": 0, \"controls\" : []}, \"opacity\": 1,";
        console.log(spec); 
    }
    
    
    /* 
    ListView    
    */
    if(file2[0] == "<ListView"){
        ctrl = 27;
        console.log("ListView");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":" + ctrl + ",\"systemtype\": \"listcollection-1\",\"visible\":" + visible + ",\"itemspec\":{ \"datatype\": 1, \"paging\": false, \"bounces\": true, \"showscroll\": false, \"label\": { \"itemspec\":{ \"font\":{ \"name\": \"Normal\", \"size\":{ \"val\":30, \"type\":0 } }, \"color\":\"#ffffffff\",\"hAlign\":\"center\", \"vAlign\":\"center\", \"val\":{ \"en_US\": \"\" }}, \"val\":{\"en_US\":\"\"}, \"ctrl\": 3, \"position\":{ \"x\":{ \"type\" : 1, \"reltype\": 1, \"val\":0 }, \"y\": { \"type\": 1, \"reltype\": 1, \"val\": 0 } }, \"size\":{\"w\": { \"val\":1, \"type\":1, \"reltype\": 0}, \"h\": { \"val\":1, \"type\": 1, \"reltype\": 3} }, \"visible\":" + visible + ",\"opacity\":1, \"type\": \"standard\",\"id\": \"597f996d6750ba926a36de06_label\" }, \"scrollstyle\": 0, \"spacing\":{ \"size\": {\"val\": 6, \"type\":0 }, \"fill\": { \"type\": -1 } }, \"views\": [{ \"view\": { \"route\" : \"panels\", \"ident\": \"listitem1\", \"background\": { \"type\": -1}, \"controls\":[], \"size\": { \"w\": { \"type\" : 1, \"val\" :1}, \"h\": { \"type\" : 1, \"val\" :1 } }, \"position\" : { \"y\" : { \"type\" : 1, \"val\" : 0}, \"x\": { \"type\" : 1, \"val\" :0 } } }, \"template\" : true } ], \"visibleitems\": 3, \"links\": [] }, \"opacity\": 1, \"events\": [], " + size + "," + position + "},";
        console.log(spec);
    }
    
    
    /*   
    Grid Collection
    */
    if(file2[0] == "<GridView"){
        ctrl = 35;
        console.log("GridView");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":" + ctrl + ",\"systemtype\": \"gridcollection-1\",\"visible\":" + visible + ",\"itemspec\":{ \"datatype\": 1, \"paging\": false, \"bounces\": true, \"showscroll\": false, \"label\": { \"itemspec\":{ \"font\":{ \"name\": \"Normal\", \"size\":{ \"val\":30, \"type\":0 } }, \"color\":\"#ffffffff\",\"hAlign\":\"center\", \"vAlign\":\"center\", \"val\":{ \"en_US\": \"\" }}, \"val\":{\"en_US\":\"\"}, \"ctrl\": 3, \"position\":{ \"x\":{ \"type\" : 1, \"reltype\": 1, \"val\":0 }, \"y\": { \"type\": 1, \"reltype\": 1, \"val\": 0 } }, \"size\":{\"w\": { \"val\":1, \"type\":1, \"reltype\": 0}, \"h\": { \"val\":1, \"type\": 1, \"reltype\": 3} }, \"visible\":" + visible + ",\"opacity\":1, \"type\": \"standard\",\"id\": \"5980e9e8e72038eea896e598_label\" }, \"scrollstyle\": 0, \"spacing\":{ \"size\": {\"val\": 6, \"type\":0 }, \"fill\": { \"type\": -1 } }, \"views\": [{ \"view\": { \"route\" : \"panels\", \"ident\": \"griditem1\", \"background\": { \"type\": -1}, \"controls\":[], \"size\": { \"w\": { \"type\" : 1, \"val\" :1}, \"h\": { \"type\" : 1, \"val\" :1 } }, \"position\" : { \"y\" : { \"type\" : 1, \"val\" : 0}, \"x\": { \"type\" : 1, \"val\" :0 } } }, \"template\" : true } ], \"visibleitems\": 3, \"visiblecols\": 3, \"links\": [] }, \"opacity\": 1, \"events\": [], " + size + "," + position + "},";
        console.log(spec);
    }
    
    /*
    Toggle/CheckBox
    */
    
    if(file2[0] == "<CheckBox"){
        ctrl = 22;
        console.log("CheckBox");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{\"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{ \"initialState\": 0, \"type\": \"toggle\", \"states\": [ { \"name\":\"default\", \"normal\": { \"type\": \"rectangle\", \"fill\": { \"type\" : -1 }, \"label\": { \"font\" : { \"name\": \"System\", \"size\": { \"val\" : 0.6, \"type\":1 } }, \"color\": \"-Text Primary-\", \"vAlign\":\"center\", \"hAlign\": \"left\", \"offset\": { \"val\": 10, \"type\" : 0}, \"val\": { \"en_US\": \"label\"} }, \"icon\": { \"size\" : { \"w\": { \"val\": 1, \"type\": 3 }, \"h\":{ \"val\" : 0.8, \"type\" : 1} }, \"image\" : { \"ref\" : \"sys\", \"val\" : \"checkbox_checkbox_off.svg\", \"type\": 1, \"color\": \"-Component Primary-\" }, \"align\": \"left\" } }, \"pressed\": { \"icon\": { \"image\" : { \"ref\" : \"59516effd67791b60de74101\", \"val\" : \"halloween_outline-12-512.png\", \"type\": 1, \"color\" : \"-Component Primary-\"} } } } ] , \"margins\" : { \"x\": { \"val\": 0, \"type\":0 }, \"y\" : { \"val\": 0, \"type\": 0} } }, \"opacity\": 1, \"id\": \"5980f07ede3350977ae2e2a0\", \"name\" : \"toggle-1\", \"systemtype\" : \"toggle-1\", \"events\": []," + size + "," + position + "} }";
        console.log(spec);
    }
    
    /*
    Radio Button
    */
    if(file2[0] == "<RadioButton"){
        ctrl = 22;
        console.log("Radio Button");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{ \"initialState\": 0, \"type\": \"radio\", \"states\": [ { \"name\":\"default\", \"normal\": { \"cornerradius\":{ \"val\": 0 , \"type\": 0 }, \"type\": \"rectangle\", \"fill\": { \"type\" : -1 }, \"label\": { \"font\" : { \"name\": \"System\", \"size\": { \"val\" : 0.6, \"type\":1 } }, \"color\": \"-Text Primary-\", \"vAlign\":\"center\", \"hAlign\": \"left\", \"offset\": { \"val\": 10, \"type\" : 0}, \"val\": { \"en_US\": \"label\"} }, \"icon\": { \"size\" : { \"w\": { \"val\": 1, \"type\": 3 }, \"h\":{ \"val\" : 0.8, \"type\" : 1} }, \"image\" : { \"ref\" : \"sys\", \"val\" : \"checkbox_radio_off.svg\", \"type\": 1, \"color\": \"-Component Primary-\" }, \"align\": \"left\" } } }, { \"name\" : \"selected\", \"normal\": { \"icon\": { \"image\" : { \"ref\" : \"sys\", \"val\" : \"checkbox_radio_on.svg\", \"type\": 1, \"color\" : \"-Component Primary-\"} } } } ] , \"margins\" : { \"x\": { \"val\": 0, \"type\":0 }, \"y\" : { \"val\": 0, \"type\": 0} } }, \"opacity\": 1, \"events\": []," + size + "," + position + "},";
        console.log(spec);
    }
    
    /*
    TextInput
    */
    
    if(file2[0] == "<EditText"){
        ctrl = 23;
        console.log("Edit Text");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{ \"placeholder\": { \"color\": \"-Text Secondary-\", \"val\": { \"en_US\": \"placeholder text\"} }, \"numlines\": 1, \"returnkeytype\": 0, \"autocorrect\": false, \"autocaps\": 0, \"keyboardtype\": 0, \"password\": false, \"focuskeyboard\": true, \"clearsonedit\": false, \"background\": { \"fill\": { \"type\": 0 , \"val\": \"-Text Reversed-\"}, \"type\": \"rectangle\", \"border\" : { \"width\": { \"val\" : 2, \"type\": 0}, \"color\":\"-Text Secondary-\"}, \"visible\":true}, \"val\": { \"en_US\":" + value + "}, \"hAlign\": \"left\", \"font\": { \"name\": \"System\", \"size\": { \"val\": 0.5, \"type\":1 }}, \"color\": \"-Text Primary-\", \"margins\": { \"x\": { \"val\": 5, \"type\":0 }}}, \"opacity\": 1, \"type\" : \"standard\", \"id\": \"5982257e28f15d6e36b1ff78\", \"name\": \"userinput-1\", \"systemtype\": \"userinput-1\", \"events\": [], " + size + "," +position + "} }";
        console.log(spec);
    }
    
    /*
    Switch
    */
    if(file2[0] == "<Switch"){
        ctrl = 38;
        console.log("Switch");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"offcolor\": \"-Component Accent-\", \"oncolor\": \"-Text Primary-\", \"thumbcolor\" : \"-Component Secondary-\", \"selected\": false}, \"events\":[],  "+ size + "," + position + "}, \"opacity\" : 1, \"id\": \"59836724650090a03702a172\", \"name\": \"switch-1\", \"systemtype\": \"switch-1\" }";
        console.log(spec);

    }
    
    /*
    Seekbar
    */
        if(file2[0] == "<SeekBar"){
        ctrl = 36;
        console.log("SeekBar");
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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"animations\": { \"value\": { \"damping\": 0.9, \"duration\": 0.5} }, \"thumb\": { \"fill\": { \"opacity\" : 1, \"val\": \"-Component Primary0\", \"type\": 0 }, \"type\" : \"ellipse\", \"position\": { \"x\": { \"val\": -0.030000000000000002, \"type\" : 1 }, \"y\": { \"val\" : 0, \"type\" : 1 }}, \"size\": { \"w\": { \"val\" : 1, \"type\" : 3, \"reltype\" : 0}, \"h\":{ \"val\":1, \"type\":1, \"reltype\": 3}}, \"visible\": true }, \"bar\": { \"fill\" :{ \"opacity\": 1, \"val\": \"-Component Primary-\", \"type\": 0 }, \"type\" : \"rectangle\", \"position\": { \"x\": { \"val\" : 0, \"type\":1, \"reltype\": 0 }, \"y\": { \"val\": 0.25, \"type\":1, \"reltype\":3 }}, \"size\": { \"w\":{ \"val\" :1, \"type\": 1, \"reltype\" : 0 }, \"h\": { \"val\": 0.5, \"type\":1, \"reltype\":3 }}, \"visible\": true }, \"background\": { \"fill\": { \"opacity\": 1, \"val\" :\"-Component Accent-\", \"type\": 0},\"type\":\"rectangle\", \"position\": { \"x\": { \"val\":0, \"type\" : 1, \"reltype\" : 0 }, \"y\": { \"val\": 0.25, \"type\" : 1, \"reltype\" : 3 }}, \"size\": { \"w\":{ \"val\":1, \"type\": 1, \"reltype\":0}, \"h\":{ \"val\": 0.5, \"type\": 1, \"reltype\" : 3}}, \"visible\":true}, \"value\": 20, \"max\":100, \"min\":0, \"orientation\":1 }, \"events\": [], " + size + "," + position + "} ," + " \"opacity\":1, \"id\": \"598369db17d4422d48e739b7\", \"name\": \"slider-1\", \"systemtype\": \"slider-1\" }";
        console.log(spec);

    }
    /*
    Progress Bar
    */
    if(file2[0] == "<ProgressBar"){
        ctrl = 31;
        console.log("ProgressBar");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
            //width = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);;
            //width = "\"w\": { \"val\":142,\"type\":0,\"reltype\":0},";
            width= 90;
        }
        if(textvar[0] == "android:layout_height"){
            /* IMPLEMENT IF WRAP CONTENT*/
            //height = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);;
            //height = "\"h\": { \"val\":36,\"type\":0,\"reltype\":3}";
            height = 90;

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
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}" + "}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        if (ctrl == 31){
            var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"animations\": { \"value\": { \"damping\": 0.9, \"duration\": 0.5} }, \"thumb\": { \"fill\": { \"opacity\" : 1, \"val\": \"-Component Primary0\", \"type\": 0 }, \"type\" : \"ellipse\", \"position\": { \"x\": { \"val\": -0.030000000000000002, \"type\" : 1 }, \"y\": { \"val\" : 0, \"type\" : 1 }}, \"size\": { \"w\": { \"val\" : 1, \"type\" : 3, \"reltype\" : 0}, \"h\":{ \"val\":1, \"type\":1, \"reltype\": 3}}, \"visible\": false }, \"bar\": { \"fill\" :{ \"opacity\": 1, \"val\": \"-Component Primary-\", \"type\": 0 }, \"type\" : \"rectangle\", \"position\": { \"x\": { \"val\" : 0, \"type\":1, \"reltype\": 0 }, \"y\": { \"val\": 0, \"type\":1, \"reltype\":3 }}, \"size\": { \"w\":{ \"val\" :1, \"type\": 1, \"reltype\" : 0 }, \"h\": { \"val\": 0.5, \"type\":1, \"reltype\":3 }}, \"visible\": true }, \"background\": { \"fill\": { \"opacity\": 1, \"val\" :\"-Component Accent-\", \"type\": 0},\"type\":\"rectangle\", \"position\": { \"x\": { \"val\":0, \"type\" : 1, \"reltype\" : 0 }, \"y\": { \"val\": 0, \"type\" : 1, \"reltype\" : 3 }}, \"size\": { \"w\":{ \"val\":1, \"type\": 1, \"reltype\":0}, \"h\":{ \"val\": 0.5, \"type\": 1, \"reltype\" : 3}}, \"visible\":true}, \"value\": 20, \"max\":100, \"min\":0, \"orientation\":1 }, \"opacity\":1, \"id\": \"598370a8809b349f8a4f7a48\", \"name\": \"progress-1\", \"systemtype\": \"progress-1\", \"events\": [], " + size + "," + position + "} }" ;
            console.log(spec);
        }
        if (ctrl == 19){
            var spec = "{ \"ctrl\":" + ctrl + ",\"visible\":" + visible + ",\"itemspec\":{\"showStates\": false, \"background\": { \"fixedbackground\": true, \"size\": { \"w\":{\"type\":0, \"val\":90 }}, \"position\": { \"x\": {\"type\":0, \"val\":0}, \"y\":{\"type\":0, \"val\":0}}, \"border\": { \"width\":{ \"val\": 0.11, \"type\":1 }, \"color\": \"-Component Accent-\" }, \"type\":\"ellipse\", \"fill\": { \"type\":-1 } }, \"bar\": { \"size\":{\"height\":{ \"val\": 0.11, \"type\" :1 }, \"h\":{\"val\":0.11, \"type\":1}}, \"fill\": {\"opacity\":1, \"val\": \"-Component Primary-\", \"type\": 0} }, \"clockwise\": true, \"fillmode\": 0, \"rate\": 1, \"progress\": 65, \"anglerange\": 360, \"startangle\":0, \"max\":100, \"min\":0, \"type\":0, \"radius\":{ \"val\":1, \"type\":1}}, \"opacity\":1, \"id\": \"598370a8809b349f8a4f7a48\", \"name\": \"progress-1\", \"systemtype\": \"progress-1\", \"events\": [], " + size + "," + position + "} }" ;
            
            console.log(spec);
        }

    }
    
    /*
    WebView
    */
    
    if(file2[0] == "<WebView"){
        ctrl = 29;
        console.log("WebView");
        //Parse through each line
       for( i = 1; i < file2.length; i++){

        //Get rid of padding
        file2[i] = file2[i].replace(/\s/g, '');


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
           
        if(textvar[0] == "tools:layout_editor_absoluteY"){
            positionY = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
             
        if(textvar[0] == "tools:layout_editor_absoluteX"){
            positionX = textvar[1].match(/[a-zA-Z] +|[0-9]+/g);
            
        }
       }
        var size = "\"size\":{ \"w\": { \"val\":" + width +",\"type\":0,\"reltype\":0}," + "\"h\": { \"val\":" + height +",\"type\":0,\"reltype\":3}";
        console.log(size);
        var position = "\"position\": { \"x\":{ \"val\":" + positionX + ", \"type\":" + postypeX + ", \"reltype\":" + reltypeX + " }," + "\"y\":{ \"val\":" + positionY + ", \"type\":" + postypeY + ",\"reltype\":" +reltypeY + "}";
        console.log(position);
        var spec = "{ \"ctrl\":"+ctrl+ ",\"visible\":" + visible + ", \"opacity\": 1, \"itemspec\": { \"type\":0, \"val\" : \"http://www.phase2industries.com\", \"cache\": 0 }, \"id\": \"598de8d92bf0fdd004e158e0\", \"name\": \"webview-1\", \"systemtype\": \"webview-1\", \"events\": []," + size + "}," + position;
        console.log(spec);
    }
    
}
