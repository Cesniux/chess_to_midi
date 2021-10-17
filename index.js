var MidiWriter = require('midi-writer-js');

// Create Track
var track = new MidiWriter.Track();

// Assign an instrument to a track
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

track.addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', velocity:100}));

// Generate MIDI
var write = new MidiWriter.Writer([track]);

// Generate a base64 representation of the MIDI file
var base64String = write.base64();

// Strip off the header
var data = base64String.split("base64,").pop();

const fs = require('fs');
// Write the file
fs.writeFileSync("C:/Cesniux/Codes/MyNodeApps/chess_to_midi/MIDI exports/zelda.mid", data, {encoding: 'base64'});
