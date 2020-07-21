function highlight() {
    $("*").css("border", "0px solid white");
    $($("#selectinput").val()).css("border", "10px solid red");
}

// h3 img table button p ul div iframe

$(document).ready(function(){
    $("#i1").keyup(function() {
        $("h3").attr("id", $("#i1").val());
        highlight();
    });
    $("#c1").keyup(function() {
        $("h3").attr("class", $("#c1").val());
        highlight();
    });
    $("#i2").keyup(function() {
        $("img").attr("id", $("#i2").val());
        highlight();
    });
    $("#c2").keyup(function() {
        $("img").attr("class", $("#c2").val());
        highlight();
    });
    $("#i3").keyup(function() {
        $("table").attr("id", $("#i3").val());
        highlight();
    });
    $("#c3").keyup(function() {
        $("table").attr("class", $("#c3").val());
        highlight();
    });
    $("#i4").keyup(function() {
        $("button").attr("id", $("#i4").val());
        highlight();
    });
    $("#c4").keyup(function() {
        $("button").attr("class", $("#c4").val());
        highlight();
    });
    $("#i5").keyup(function() {
        $("p").attr("id", $("#i5").val());
        highlight();
    });
    $("#c5").keyup(function() {
        $("p").attr("class", $("#c5").val());
        highlight();
    });
    $("#i6").keyup(function() {
        $("ul").attr("id", $("#i6").val());
        highlight();
    });
    $("#c6").keyup(function() {
        $("ul").attr("class", $("#c6").val());
        highlight();
    });
    $("#i7").keyup(function() {
        $("div").attr("id", $("#i7").val());
        highlight();
    });
    $("#c7").keyup(function() {
        $("div").attr("class", $("#c7").val());
        highlight();
    });
    $("#i8").keyup(function() {
        $("iframe").attr("id", $("#i8").val());
        highlight();
    });
    $("#c8").keyup(function() {
        $("iframe").attr("class", $("#c8").val());
        highlight();
    });
    $("#selectinput").keyup(function() {
        highlight();
    });
    $("#selectinput").focus(function() {
        if ($("#selectinput").val() == "Enter selector here...")
            $("#selectinput").val("");
    })
    $("#selectinput").blur(function() {
        if ($("#selectinput").val() == "")
            $("#selectinput").val("Enter selector here...");
    })
});











/*var links = [["http://www.khanacademy.org", "Time to learn"], ["http://www.google.com", "What should we look up?"], ["http://www.stackoverfow.com", "Get your coding question answered"], ["http://www.youtube.com", "Lots of nice videos"], ["https://theuselessweb.com/", "Completely RANDOM website!!!"]];
var imgs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0twwlSomBt2i33P78KY5SSj5-0C3X9hWAkA&usqp=CAU",
    "https://www.vvsupremo.com/wp-content/uploads/2018/05/Pepperoni-Pizza-1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/CargoNet_Di_12_Euro_4000_L%C3%B8nsdal_-_Bolna.jpg/1200px-CargoNet_Di_12_Euro_4000_L%C3%B8nsdal_-_Bolna.jpg",
    "https://images.squarespace-cdn.com/content/v1/577ceaca6a4963d30fbb33a6/1593985704420-9YQWMHTVKL6TEQLMNNG9/ke17ZwdGBToddI8pDm48kFnRpST_6Yy4s9Q9zButBsB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UewSglmzcOV9kyzNvkbBSf1YNHYPWTOyhtF3Z3gtQzQxckN8YfsLXRIlXOtOxTMY9Q/BC4C6EC3-79D4-4C38-8B5F-4ADBD7195EE3.jpg",
    "https://www.onsolve.com/wp-content/uploads/2019/06/OnSolve_Blog_1000x668_tornado.jpg",
    "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
    "https://m.media-amazon.com/images/I/71GADww3MwL._SR500,500_.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c7db709-0bfd-480d-974d-7a467f404e7a/d1tt7pz-dff8162a-abad-41f9-bd9a-800221a4368e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWM3ZGI3MDktMGJmZC00ODBkLTk3NGQtN2E0NjdmNDA0ZTdhXC9kMXR0N3B6LWRmZjgxNjJhLWFiYWQtNDFmOS1iZDlhLTgwMDIyMWE0MzY4ZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.hGXEjh1F_ybZRQKORAu-OxRCml6ZWMWCsPYA-QHl7pc",
    "https://epmgaa.media.clients.ellingtoncms.com/img/croppedphotos/2015/09/16/EATHTALK_PIC.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/113D1/production/_110090607_gettyimages-512766800.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/53/27/trophy-cup-icon-vector-13465327.jpg",
    "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_variant_medium_grant_cream_1200x.jpg?v=1593031568",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/4ECA/production/_98607102_015.jpg",
    "https://vignette.wikia.nocookie.net/evil/images/7/79/The_El_Dorado_Sarcophagus.jpg/revision/latest/scale-to-width-down/340?cb=20170226063128",
    "https://www.pngitem.com/pimgs/m/37-374885_clipart-cross-swords-sword-clipart-png-transparent-png.png",
    "https://cdn.arstechnica.net/wp-content/uploads/2020/06/fennTOP-760x380.jpg",
    "https://media3.s-nbcnews.com/i/newscms/2019_06/2746941/190208-stock-money-fanned-out-ew-317p_fa445b2f6f3e86a3ffa18707e6a8adcb.jpg",
    "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
    "https://www.telegraph.co.uk/content/dam/Travel/2018/January/white-plane-sky.jpg?imwidth=450",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kust_till_kust_banan.JPG/220px-Kust_till_kust_banan.JPG",
    "https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg",
    "https://media.wired.com/photos/5a593a7ff11e325008172bc2/125:94/w_2393,h_1800,c_limit/pulsar-831502910.jpg",
    "https://www.thoughtco.com/thmb/9-iCj7lj21Dd8zFGWnbiVzhi5n8=/1333x1000/smart/filters:no_upscale()/clouds-5b6b4e50c9e77c0050491212.jpg"
];
var videos = [
    "https://www.youtube.com/embed/J0ZeVTHWC1U",
    "https://www.youtube.com/embed/iM_KMYulI_s",
    "https://www.youtube.com/embed/eLkgILAkqVI",
    "https://www.youtube.com/embed/zit9l5jtbws",
    "https://www.youtube.com/embed/TagWVea_Nxk",
    "https://www.youtube.com/embed/rhMWygVjot4",
    "https://www.youtube.com/embed/EpLbrP2MM-s",
    "https://www.youtube.com/embed/4qvmumHnkVA",
    "https://www.youtube.com/embed/pCjY3ZQY8WY",
    "https://www.youtube.com/embed/Vc9da31phP4",
];

var paragraph = "The smartphone owner, named Alex, sits in a history class while his teacher rambles on about hieroglyphics. The teacher asks the class what hieroglyphics remind them of, winking so hard his eyeball almost pops out of the side of his head. They remain silent, pubescent, transfixed by their phones. The audience strains to keep the answer to themselves. The audience pleads with the class to answer the question, but they are so dumb, they have no idea what he could mean. Meanwhile, Alex asks his snotty friend what he should text to his crush Addie, in response to something she said earlier that day. What she texted was never revealed, but Alex decides to send a single emoji in response. Words arent cool, his friend says, in a perfect bit of dialogue that effortlessly captures how teens really feel. Words arent cool echoes into the back of the theater and reverberates off the skulls of adults, now terrified, unsure their mindless spawn can even speak a verbal language. Hi-5 takes Gene to the Loser Lounge, a place in Alexs messaging app where all the rarely used emoji, like the Fishcake, Grandma, and Broom all hang out and think about their pointless, idiotic emoji lives. Here, the writers had a chance to be thoughtful or maybe even sweet. Whats it like to be an outcast emoji? Are you always waiting for some niche meme to bring you to the apps surface? Instead, they toss in a Bye, Felicia joke, confirming they dont know who this movie is for, or what year it is."

var phrases = paragraph.split(".");
var words = paragraph.split(" ");

var idList = [];

var classList = [];

var i = 0;

function generateLink() {
    return Math.floor(Math.random() * links.length);
}

function generateImg() {
    return imgs[Math.floor(Math.random() * imgs.length)];
}

function generateVideo() {
    return videos[Math.floor(Math.random() * videos.length)];
}

function idListEXpush(str, address) {
    if (!idList.includes(str)) {
        alert(str.charCodeAt(0) + 1);
        if ((str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) || (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)) {
            alert("passed second check");
            var count = 1;
            while (count < str.length) {
                if (!(((str.charCodeAt(count) >= 65 && str.charCodeAt(count) <= 90) || (str.charCodeAt(count) >= 97 && str.charCodeAt(count) <= 122)) || (str.charCodeAt(count) >= 48 && str.charCodeAt(count) <= 57)))
                    return false;
                count = count + 1;
            }
            alert("passed third check");
        }
        else {
            return false;
        }
        alert(str);
        idList[address] = str;
        return true;
    }
    else {
        return false;
    }
}

function classPush(str) {
    if ((str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) || (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)) {
        var count = 1;
        while (count < str.length) {
            if (!(((str.charCodeAt(count) >= 65 && str.charCodeAt(count) <= 90) || (str.charCodeAt(count) >= 97 && str.charCodeAt(count) <= 122)) || (str.charCodeAt(count) >= 48 && str.charCodeAt(count) <= 57)))
                return false;
            count = count + 1;
        }
    }
    return true;
}

function setElement(address) {
    var oldId = idList[address];
    var oldClass = classList[address];
    alert($("#i" + oldId).val());
    if ($("#i" + oldId).val() != "") {
        if (idListEXpush($("#i" + idList[address]).val(), address) == true) {
            alert("yay");
            $(idList[address]).attr("id", $("#i" + oldId).val());
            $("#i" + oldId).attr("id", idList[address]);
        }
        else {
            alert("Illegal id");
        }
    }
    else {
        alert("heres the problem");
    }
}

$("body").append("<h1>Hello world!</h1><br>");

function addMoreElements() {
    $("body").append("<br><br>");
    var max = Math.floor(Math.random() * 4 + 4) + i;
    while (i < max) {
        var x = Math.floor(Math.random() * 10);
        var link = generateLink();
        $("body").append("ID:<input type=\"textbox\" id=\"ixxx" + i + "\"></input>");
        $("body").append("Class:<input type=\"textbox\" id=\"cxxx" + i + "\"></input>");
        $("body").append("<button id=\"bxxx" + i + "\">Submit</button");
        switch (x) {
            case 0: $("body").append("<br>TYPE: div<br><div id=\"xxx" + i + "\" style=\"background-color:lightblue\">" + phrases[Math.floor(Math.random() * phrases.length)] + "</div><br><br><br><br>"); break;
            case 1: $("body").append("<br>TYPE: progress<br>Progress bar: <progress id=\"xxx" + i + "\" value=\"" + 100 * Math.random() + "\" max=\"100\"></progress><br /><br><br><br><br>"); break;
            case 2: $("body").append("<br>TYPE: a<br><br><a id=\"xxx" + i + "\" href=\"" + links[link][0] + "\">" + links[link][1] + " @ " + links[link][0] + "</a><br><br><br><br>"); break;
            case 3: $("body").append("<br>TYPE: img<br><img id=\"xxx" + i + "\" src=\"" + generateImg() + "\" width=400 height=300 /><br><br><br><br>"); break;
            case 4: $("body").append("<br>TYPE: ul<br><ul id=\"xxx" + i + "\"><li>" + phrases[Math.floor(Math.random() * phrases.length)] + "</li><li>" + phrases[Math.floor(Math.random() * phrases.length)] + "</li><li>" + phrases[Math.floor(Math.random() * phrases.length)] + "</li></ul><br><br><br><br>"); break;
            case 5: $("body").append("<br>TYPE: iframe<br><iframe id=\"xxx" + i + "\" width=\"420\" height=\"345\" src=\"" + generateVideo() + "\"></iframe><br><br><br><br>"); break;
            case 6: $("body").append("<br>TYPE: table<br><table id=\"xxx" + i + "\"><tr><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th></tr><tr><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th></tr><tr><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th></tr></table><br><br><br><br>"); break;
            case 7: $("body").append("<br>TYPE: h3<br><h3 id=\"xxx" + i + "\">" + phrases[Math.floor(Math.random() * phrases.length)] + "<br><br><br><br>"); break;
            case 8: $("body").append("<br>TYPE: p<br><p id=\"xxx" + i + "\">" + phrases[Math.floor(Math.random() * phrases.length)] + " " + phrases[Math.floor(Math.random() * phrases.length)] + " " + phrases[Math.floor(Math.random() * phrases.length)] + "<br><br><br><br>"); break;
            case 9: $("body").append("<br>TYPE: button<br><button id=\"xxx" + i + "\" onclick=alert(\"Benjamin\")>Benjamin Button</button><br><br><br><br>"); break;
        }
        i = i + 1;
    }
    $(document).ready(function(){
        $("#xxx1").css("border","10px solid red");
    });
    $("body").append("<button style=\"font-size:28px;border-size:0px;display:block;margin:0px auto;\" onclick=addMoreElements()>Generate more elements!</button>");
}

function generatePage() {
    var max = Math.floor(Math.random() * 4 + 4);
    while (i < max) {
        var x = Math.floor(Math.random() * 10);
        var link = generateLink();
        $("body").append("ID:<input type=\"textbox\" id=\"ixxx" + i + "\"></input>");
        $("body").append("Class:<input type=\"textbox\" id=\"cxxx" + i + "\"></input>");
        $("body").append("<button id=\"bxxx" + i + "\" onclick=setElement(" + i + ")>Submit</button");
        switch (x) {
            case 0: $("body").append("<br>TYPE: div<br><div id=\"xxx" + i + "\" style=\"background-color:lightblue\">" + phrases[Math.floor(Math.random() * phrases.length)] + "</div><br><br><br><br>"); break;
            case 1: $("body").append("<br>TYPE: progress<br>Progress bar: <progress id=\"xxx" + i + "\" value=\"" + 100 * Math.random() + "\" max=\"100\"></progress><br /><br><br><br><br>"); break;
            case 2: $("body").append("<br>TYPE: a<br><br><a id=\"xxx" + i + "\" href=\"" + links[link][0] + "\">" + links[link][1] + " @ " + links[link][0] + "</a><br><br><br><br>"); break;
            case 3: $("body").append("<br>TYPE: img<br><img id=\"xxx" + i + "\" src=\"" + generateImg() + "\" width=400 height=300 /><br><br><br><br>"); break;
            case 4: $("body").append("<br>TYPE: ul<br><ul id=\"xxx" + i + "\"><li>" + phrases[Math.floor(Math.random() * phrases.length)] + "</li><li>" + phrases[Math.floor(Math.random() * phrases.length)] + "</li><li>" + phrases[Math.floor(Math.random() * phrases.length)] + "</li></ul><br><br><br><br>"); break;
            case 5: $("body").append("<br>TYPE: iframe<br><iframe id=\"xxx" + i + "\" width=\"420\" height=\"345\" src=\"" + generateVideo() + "\"></iframe><br><br><br><br>"); break;
            case 6: $("body").append("<br>TYPE: table<br><table id=\"xxx" + i + "\"><tr><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th></tr><tr><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th></tr><tr><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th><th>" + words[Math.floor(Math.random() * words.length)] + "</th></tr></table><br><br><br><br>"); break;
            case 7: $("body").append("<br>TYPE: h3<br><h3 id=\"xxx" + i + "\">" + phrases[Math.floor(Math.random() * phrases.length)] + "<br><br><br><br>"); break;
            case 8: $("body").append("<br>TYPE: p<br><p id=\"xxx" + i + "\">" + phrases[Math.floor(Math.random() * phrases.length)] + " " + phrases[Math.floor(Math.random() * phrases.length)] + " " + phrases[Math.floor(Math.random() * phrases.length)] + "<br><br><br><br>"); break;
            case 9: $("body").append("<br>TYPE: button<br><button id=\"xxx" + i + "\" onclick=alert(\"Benjamin\")>Benjamin Button</button><br><br><br><br>"); break;
        }
        idList.push("xxx" + i);
        classList.push("xxx");
        i = i + 1;
    }
    $("body").append("<button style=\"font-size:28px;border-size:0px;display:block;margin:0px auto;\" onclick=addMoreElements()>Generate more elements!</button>");
    $(document).ready(function(){
        $("#xxx1").css("border","10px solid red");
    });
}
generatePage();*/