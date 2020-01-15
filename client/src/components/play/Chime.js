import React from 'react';

class Chime extends React.Component {
  render() {
    return (
        <audio id="chimeSound">
          <source src="mp3/Magic Wand Noise-SoundBible.com-375928671.mp3" type="audio/mpeg" />
        </audio>
    )
  }
}

export default Chime;

