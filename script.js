var MidiWriter = require('midi-writer-js');

// Create Track
var track = new MidiWriter.Track();

// Assign an instrument to a track
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

// track.addEvent([
//     new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//     new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
//     new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//     new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
//     new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
//     new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//     new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
// ], function(event, index) {
// return {sequential: true};
// }
// );

// // So these track below add up to each other sequentialy and we can split them
//first segment puts notes simultaneously as a chord

// track.addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'Bb2'], duration: '2', velocity:100, }),
// function(event, index) {
//     return {sequential: false};
//     }
// );
// //adds sequential notes
// track.addEvent(new MidiWriter.NoteEvent({pitch: ['G9', 'G8', 'B8', 'A9', 'B9'], duration: '2', velocity: 100, }),
//     function(event, index) {
//         return {sequential: true};
//         }
// );


// Test Array that is used in automated addingEvent "for ()". Which will be used as White Move's array.
var testArr2 = ['E5', 'E6', 'F4', 'C7', 'B6', 'F7', 'D4', 'C6', 'O-O', 'A7', 'A5', 'B6', 'B4', 'D6', 'D6', 'D6', 'C4', 'C4', 'C4', 'G5', 'D3', 'F4', 'F4', 'F7', 'F5', 'F5', 'F5', 'G7', 'G4', 'O-O-O', 'G7', 'G7', 'F8', 'F9', 'G7', 'E6', 'E5', 'G5', 'E4', 'E4', 'E4', 'F2', 'F2', 'E4', 'F3', 'G5', 'G3', 'B3', 'B3', 'B3', 'B3', 'D8', 'G4', 'E7', 'G5', 'F7', 'B6', 'G7', 'G7', 'E6', 'E5', 'C6', 'G5', 'C5', 'F4', 'D4', 'D4', 'A6', 'E4', 'B5', 'B5', 'B5', 'D5', 'D7', 'D4', 'C8', 'C5', 'B7', 'B5', 'C8', 'A5', 'D7', 'A6', 'C8', 'C6', 'D8', 'A7', 'C8', 'D6', 'B9', 'B7', 'C9', 'A8', 'D8', 'A9', 'D7', 'C7', 'E6', 'E7', 'D5'];

// Notes for 4 different castlings
var castlingWhiteKingS = ['F2', 'G2'];
var castlingWhiteQueenS = ['C2', 'D2'];
var castlingBlackKingS = ['G9', 'F9'];
var castlingBlackQueenS = ['C9', 'D9'];


// adding notes Event for automated input. It is used many times with testArr2.
function addingEvent (testArr2, i) { 
    track.addEvent(new MidiWriter.NoteEvent({pitch: [testArr2[i]] , duration: '2', velocity:100, }),
    function(event, index) {
    return {sequential: false};
    }
    );
};


//A function for adding chess White's King side Castling notes to main sequence, but these two notes are played together
function addingEventCastleWK () { 
    track.addEvent(new MidiWriter.NoteEvent({pitch: ['F2', 'G2'] , duration: '2', velocity:100, }),
    function(event, index) {
    return {sequential: false};
    }
    );
};


//A function for adding chess White's Queen side Castling notes to main sequence, but these two notes are played together
function addingEventCastleWQ () { 
    track.addEvent(new MidiWriter.NoteEvent({pitch: ['C2', 'D2'] , duration: '2', velocity:100, }),
    function(event, index) {
    return {sequential: false};
    }
    );
};


// Automatically adds EVERY move from White's moves array (Or now - testArr2), works fine!

for ( let i = 0; i < testArr2.length; i++ ) {

    // If an array element is "O-O" then - insert White's King side castling notes.
    if ( testArr2[i] === ('O-O') ) {
    addingEventCastleWK ();
    }

    
    // If an array element is "O-O-O" then - insert White's Queen side castling notes.
    else if ( testArr2[i] === ('O-O-O') ) {
        console.log(i);
        addingEventCastleWQ ();
    }
    //If anything else - then add notes sequentialy from White's moves array to main file.
    else {
        console.log(i);
        addingEvent (testArr2, i);
    };
};



// Generate MIDI yeah
var write = new MidiWriter.Writer([track]);

// Generate a base64 representation of the MIDI file
var base64String = write.base64();

// Strip off the header
var data = base64String.split("base64,").pop();

const fs = require('fs');
// Write the file, need to make that user can name the file in browser input
fs.writeFileSync("C:/Cesniux/Codes/MyNodeApps/chess_to_midi/MIDI_exports/zeldaNotesTest1.mid", data, {encoding: 'base64'});

