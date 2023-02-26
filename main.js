var w = window.innerWidth;
var h = window.innerHeight;

var midImg = null;
var F = null;

var quotes = [
    [
        "Can you even imagine",
        "Fallin' like I did for the love of my life"
    ],
    [
        "Are we fading lovers?",
        "We keep wasting colors",
        "Maybe we should let this go"
    ],
    [
        "What's it like to be alone on a Sunday",
    ],
    [
        "And I don't care about my sleeping routine",
        "I fucked it up as it is",
        "But we've got so much time to kill"
    ],
    [
        "I don't care how long it takes",
        "As long as I'm with you",
        "I've got a smile on my face"
    ],
    [
        "I don't wanna say gooodbye",
    ],
    [
        "Falling again, I need a pick-me-up"
    ],
    [
        "I understand with me isn't quite the best place to be"
    ],
    [
        "And baby if my love is bad",
        "If it's not what you'd hoped for",
        "You can ignore that",
        "No need to give it back"
    ],
    [
        "Stay up all night",
        "Tell myself I'm alright"
    ],
    [
        "Proud of me,",
        "of my short list of accomplishments"
    ],
    [
        "I am a Lost Boy from Neverland"
    ],
    [
        "Peter Pan, Tinker Bell, Wendy Darling",
        "Even Captain Hook, you are my perfect storybook"
    ],
    [
        "Are you lonely?"
    ]
]

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

var currentQIndex = randomInteger(0, quotes.length-1);
var currentImgIndex = randomInteger(0, 3-1);
var isMobile = false;

function preload() {
    midImg = loadImage("./assets/"+currentImgIndex+".jpg");
    F = loadFont('./assets/animeace2_reg.ttf');
    isMobile = mobileCheck();
}

function setup() {
    createCanvas(w, h);
    frameRate(5);
}

function draw() {
    if (currentImgIndex == 0) {
        background(250);
    } else if (currentImgIndex == 1) {
        background(210);
    } else if (currentImgIndex == 2) {
        background(255);
    } 

    let xPos = width/2;
    let yPos = height/2;

    imageMode(CENTER);
    image(midImg, xPos, yPos);

    strokeWeight(1);
    stroke(50, 50)
    beginShape(LINES);
    for (let lineAmount = 0; lineAmount < 5; ++lineAmount) {
        let x = random(0, width);
        let y = random(-300, height);
        vertex(x, y);
        vertex(x, y + random(300, 750));
    }
    endShape();

    textFont(F);
    if (isMobile) {
        textSize(9);
    } else {
        textSize(12);
    }
    fill(20, 180);
    noStroke();
    let quote = quotes[currentQIndex];
    for (let i = 0; i < quote.length; i++) {
        let sentence = quote[i];
        let x = width/2;
        if (isMobile) {
            x = width/8;
        }
        for (let ichar = 0; ichar < sentence.length; ichar++) {
            text(sentence.charAt(ichar), random(x - 1, x + 1), random(height/4.5 - 1, height/4.5 + 1) + 24*i);
            x += textWidth(sentence.charAt(ichar)) + 1;
        }
    }

    if (frameCount > 0 && frameCount % 50 == 0) {
        currentQIndex++;
        if (currentQIndex >= quotes.length) {
            currentQIndex = 0;
        }
    }

    stroke(50);
}