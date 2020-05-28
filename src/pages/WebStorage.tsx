import React, { useCallback, useEffect, useState } from "react";

const WebStorage = () => {
  const [value, setValue] = useState("");
  const [localStorageValue, setLocalStorageValue] = useState("");
  const [sessionStorageValue, setSessionStorageValue] = useState("");

  const onStorage = useCallback((e) => {
    console.log(e);
  }, []);

  useEffect(() => {
    setLocalStorageValue(localStorage.getItem("value") ?? "");
    setSessionStorageValue(sessionStorage.getItem("value") ?? "");

    window.addEventListener("storage", onStorage);
    window.onstorage = (e: StorageEvent) => {
      console.log(e);
    };
    // return () => window.removeEventListener("storage", onStorage);
  }, [onStorage]);

  const changeValue = useCallback((e) => setValue(e.target.value), []);

  const saveToLocalStorage = useCallback(() => {
    localStorage.setItem("value", value);
    setLocalStorageValue(localStorage.getItem("value") ?? "");
    console.log(`Save ${value} to LocalStorage`);
  }, [value]);

  const saveToSessionStorage = useCallback(() => {
    sessionStorage.setItem("value", value);
    setSessionStorageValue(sessionStorage.getItem("value") ?? "");
    console.log(`Save ${value} to SessionStorage`);
  }, [value]);

  return (
    <React.Fragment>
      <div className="input-area">
        <input value={value} onChange={changeValue} />
      </div>
      <div className="button-area">
        <button onClick={saveToLocalStorage}>Save to LocalStorage</button>
        <button onClick={saveToSessionStorage}>Save to SessionStorage</button>
      </div>
      <div className="display-area">
        <p>LocalStorage value is {localStorageValue}</p>
        <p>SessionStorage value is {sessionStorageValue}</p>
      </div>
    </React.Fragment>
  );
};

export default WebStorage;
