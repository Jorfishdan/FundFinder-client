import React from 'react'

export default function Setting({openSetting, isLoggedIn}) {

    if(!openSetting)
        return null
    
  return (
    <main className="setting__container">
     <h1 className="setting__title">Settings</h1>
     <p className="setting__reset">Reset Email</p>
     <p className="setting__reset">Reset Password</p>
    </main>
  )
}
