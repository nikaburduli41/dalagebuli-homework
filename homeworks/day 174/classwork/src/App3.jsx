import React, { useState, useEffect } from 'react';

export function Dashboard({ mode }) {
  const [data, setData] = useState([]);
  useEffect(() =>{
    if (mode === 'admin') {
        fetch('/api/admin-stats')
            .then(res => res.json())
            .then(data => setData(data));
    }
  },[])


  return (
    <div>
      <h1>Dashboard ({mode})</h1>
      {mode === 'admin' && <p>Stats: {data.length}</p>}
    </div>
  );
}