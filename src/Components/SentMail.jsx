import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { inboxActions, sentBoxActions } from '../Store/Redux'
import Header from './Header'
import NavBar from './NavBar'

const SentMail = () => {
  const dispatch = useDispatch()
  const userEmail = localStorage.getItem('endpoint')
  const sentBoxItems = useSelector((state) => state.sentBox.sentBox)
  console.log(userEmail)

  useEffect(() => {
    axios
      .get(
        `https://mailbox-69d60-default-rtdb.firebaseio.com/${userEmail}/sentMails.json`
      )
      .then((response) => {
        if (response.data != null) {
          console.log(Object.values(response.data))
          dispatch(sentBoxActions.addToSentBox(Object.entries(response.data)))
        }
      })
  }, [])

  console.log(sentBoxItems)
  const sentBoxList = sentBoxItems.map((sentBoxMails) => {
    // console.log(inboxMails[1].emailContent);
    return (
      <div>
        <ul className='flex m-2 p-3 bg-slate-200 w-[90%] justify-between h-16'>
          <li className='w-64'>{sentBoxMails[1].to}</li>
          <li className='w-64'>{sentBoxMails[1].emailSub}</li>
          <li className='w-64'>{sentBoxMails[1].emailContent}</li>
          <li className='w-64'>{sentBoxMails[1].date}</li>
        </ul>
      </div>
    )
  })

  console.log(sentBoxList)
  return (
    <div>
      <div className='relative'>
        <Header />
        <NavBar />
        <div className='absolute top-32 left-64  text-lg w-full'>
          {sentBoxList}
        </div>
      </div>
    </div>
  )
}

export default SentMail
