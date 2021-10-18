var MidiWriter = require('midi-writer-js');

// Create Track
var track = new MidiWriter.Track();

// Assign an instrument to a track
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

track.addEvent([
    new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
    new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
    new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
    new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
    new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
    new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
    new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
], function(event, index) {
return {sequential: true};
}
);

// Generate MIDI yeah
var write = new MidiWriter.Writer([track]);

// Generate a base64 representation of the MIDI file
var base64String = write.base64();

// Strip off the header
var data = base64String.split("base64,").pop();

const fs = require('fs');
// Write the file
fs.writeFileSync("C:/Cesniux/Codes/MyNodeApps/chess_to_midi/MIDI exports/zeldaTest2.mid", data, {encoding: 'base64'});
