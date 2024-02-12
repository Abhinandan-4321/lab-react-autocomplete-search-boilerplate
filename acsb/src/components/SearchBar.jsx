import React, { useState } from 'react';

function SearchBar(props) {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value.toUpperCase());
  }

  const handleKeys = (e) => {
    if (e.key === "Escape") {
      setState("");
    }
  }

  let filtered = props.data.filter((el) => el.name.toUpperCase().includes(state));

  return (
    <div>
      <input type="text" value={state} onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeys(e)} />
      <div>
        {state && filtered.length > 0?(filtered.map((item) => {
          return (
            <p key={item.code}>{item.name}</p>
          )
        })):(<p>{state ? "nothing" : ""}</p>)}
      </div>
    </div>
  );
}

export default SearchBar;
