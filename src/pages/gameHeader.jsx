import { Outlet } from "react-router-dom"

const GameHeader = () => {
  return (
    <>
      <h1>Game header</h1>
      <Outlet />
    </>

  )
}

export default GameHeader;