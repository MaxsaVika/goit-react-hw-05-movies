import NavBar from 'components/NavBar/NavBar'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>
      <NavBar/>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
