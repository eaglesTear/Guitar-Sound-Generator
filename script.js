// RUN CODE AFTER CONTENT LOADED
window.addEventListener("load", () => {

    // STORE ALL AUDIO WITH CLASS 'SOUNDS' AS NODELIST
    const STRINGS = document.querySelectorAll(".sound");
    // STORE ALL DIVS INSIDE 'CHORDS'
    const CHORDS = document.querySelectorAll(".chords div");
    // STORE ANIMATION SECTION
    const ANIMATED_VISUAL = document.querySelector(".animated-visual");
    // DEFINE ARRAY OF COLOURS FOR ANIMATED ELEMENT THAT WILL MATCH CHORD COLOURS
    const BG_COLOURS = [
        "#76C5FF",
        "#C58A95",
        "#52B640",
        "#9D65D0",
        "#DC2A4E",
    ];
    
    // DEFINE ARRAY OF CHORD NAMES TO BE DISPLAYED INSIDE ANIMATED ELEMENT 
    const CHORD_NAMES = [
        "Em",
        "Am",
        "G",
        "F",
        "C",
    ];

    // ITERATE THROUGH EACH CHORD & ADD FUNCTION WITH INDEX ACCESS
    CHORDS.forEach((chord, index) => {
        chord.addEventListener("click", function () {
            // HANDLE SOUND
            STRINGS[index].currentTime = 0;
            STRINGS[index].play();
            // CALL BALL ANIMATION FUNCTION WHEN CHORD IS CLICKED
            ANIMATION(index);
        });
    });

    // ARROW FUNCTION TO HANDLE ANIMATION WHEN CHORD IS CLICKED
    const ANIMATION = (index) => {
        // ADD NEW BALL DIV
        const BALL = document.createElement("div");
        // ASSIGN BALL TO RUN IN ANIMATED DIV SECTION
        ANIMATED_VISUAL.appendChild(BALL);
        // ADD h2 ELEMENT TO BALL
        const TEXT = document.createElement("h2");
        // ASSIGN TEXT TO RUN INSIDE BALL ELEMENT
        BALL.appendChild(TEXT);
        // INSERT CHORD NAMES FROM ARRAY, CORRESPONDING TO CHORD CLICKED
        TEXT.innerHTML = CHORD_NAMES[index];
        // EACH CHORD CLICKED PRODUCES A BALL THAT MATCHES BG COLOUR OF THE CHORD
        BALL.style.backgroundColor = BG_COLOURS[index];
        // CSS ANIMATION PROPERTIES
        BALL.style.animation = "motion 5s ease";
        // WHEN BALL HAS FINISHED ANIMATION, IT IS REMOVED FROM PROGRAM
        BALL.addEventListener("animationend", function () {
            ANIMATED_VISUAL.removeChild(this);
        });
    };
});