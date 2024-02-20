import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { inboxActions } from '../Store/Redux'
import Header from './Header'
import NavBar from './NavBar'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { blue } from '@mui/material/colors'
import ViewMail from './ViewMail'

const Inbox = () => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const userEmail = localStorage.getItem('endpoint')
  const [openMail, setOpenMail] = useState(false)
  const [currentSelectedMail, setCurrentSelectedMail] = useState({})
  const inboxItems = useSelector((state) => state.inbox.inbox)
  console.log(userEmail)

  const viewMail = (key, value) => {
    setOpenMail(true)
    try {
      axios.put(
        `https://mailbox-69d60-default-rtdb.firebaseio.com/${userEmail}/recievedMails/${key}.json`,
        {
          ...value,
          unread: false
        }
      )
      dispatch(inboxActions.updateInbox(key))
      dispatch(inboxActions.updateCounter())
    } catch (err) {
      console.log(err)
    }
    setCurrentSelectedMail(value)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      axios
        .get(
          `https://mailbox-69d60-default-rtdb.firebaseio.com/${userEmail}/recievedMails.json`
        )
        .then((response) => {
          if (response.data != null) {
            dispatch(inboxActions.addToInbox(Object.entries(response.data)))
            dispatch(inboxActions.updateCounter())
          }
        })
    }, 2000)
    return () => clearInterval(timer)
  }, [dispatch, userEmail])

  const inboxList = inboxItems.map((inboxMails) => {
    return (
      <div className='my-2 w-[90%]'>
        <ul
          className='bg-slate-200 flex justify-between p-2 h-16 items-center cursor-pointer'
          onClick={() => viewMail(inboxMails[0], inboxMails[1])}
        >
          <li className='items-center w-32 flex' key={Math.random()}>
            {inboxMails[1].unread === true ? (
              <FiberManualRecordIcon
                sx={{ color: blue[700], fontSize: 30 }}
                className='px-2'
              />
            ) : (
              ''
            )}{' '}
            {inboxMails[1].from}
          </li>
          <li className='w-32'>{inboxMails[1].emailSub}</li>
          <li className='w-72'>{inboxMails[1].emailContent}</li>
          <li className='w-48'>{inboxMails[1].date}</li>
        </ul>
      </div>
    )
  })

  return (
    <div>
      <div className='relative'>
        <Header />
        <NavBar />
        <div className='absolute top-32 left-64  text-lg w-full'>
          {!openMail ? (
            inboxList
          ) : (
            <ViewMail
              mailDetails={currentSelectedMail}
              setOpenMail={setOpenMail}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Inbox
