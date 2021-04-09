import React from 'react'

const Layout = ({children}) => {
  return (
    <>
      <aside>
        Este es el aside
      </aside>
      <header>
        Este es el header
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
