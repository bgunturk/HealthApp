import React from 'react';
import useState from 'react';

function Main() {
  return (
    <div>
      <input />
      <section />
      <div className="column">
        <div className="row">1</div>
        <div className="row">2</div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 9fr)',
          gridGap: 20,
          padding: 400,
          margin: 20,
        }}
      >
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </div>
    </div>
  );
}
export default Main;
/**
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <div className="mainContainer">
      <div className="bodyPicture"></div>
      <div className="inputbox"></div>
    </div>
  );
 */
