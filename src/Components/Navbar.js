import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enabel DarkMode</label>
      </div>
    </div>
  </nav>
  )
}
