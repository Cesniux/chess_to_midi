var MidiWriter = require('midi-writer-js');

var track = new MidiWriter.Track();

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

var write = new MidiWriter.Writer(track);
console.log(write.dataUri());

var voice = create_4_4_voice().addTickables(notes);

var vexWriter = new MidiWriter.VexFlow();
var track = vexWriter.trackFromVoice(voice);
var writer = new MidiWriter.Writer([track]);
console.log(writer.dataUri());