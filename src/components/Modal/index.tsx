// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
interface ModalProps {
  showModal: boolean
  streak: number
  onClick?: () => void
}

export const Modal = ({ showModal, streak, onClick }: ModalProps) => {
  // const [inputLength, setInputLength] = useState<number>(0)
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-main text-text">
                {/*header*/}
                <div className="flex items-center justify-center flex-col p-5">
                  <h3 className="text-3xl font-semibold">Game over</h3>
                  <h3 className="text-2xl mt-3">
                    Streak: <span className="text-secondary">{streak}</span>
                  </h3>
                </div>

                {/*body*/}
                <div className="px-6 mb-6">
                  {/* <p className="my-4">Want to register your score?</p> */}
                  {/* <form>
                    <label className="block" htmlFor="name">
                      Name for the scoreboard
                    </label>
                    <input
                      className="w-full h-8 rounded-md text-logoColor"
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                    <Button text="Submit" />
                  </form> */}
                  <div className="flex justify-center gap-8 mt-6">
                    <Link to="/">
                      <Button text="Front page" />
                    </Link>
                    <Button text="Play again" onClick={onClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-logoColor opacity-50"></div>
        </>
      )}
    </>
  )
}
