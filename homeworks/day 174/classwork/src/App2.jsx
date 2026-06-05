import React, { useState } from 'react';

export function FormFields({ fields }) {
  const [fields,setFields] = useState([])
  for (let i = 0; i < fields.length; i++) {
    useState(''); 
  }

  return (<form>
    <button onClick={alert('hellooooooooooooooo')}>click me</button>
  </form>);
}