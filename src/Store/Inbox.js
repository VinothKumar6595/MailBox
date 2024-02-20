import { createSlice } from '@reduxjs/toolkit'

const initialInboxState = {
  inbox: [],
  unreadCount: 0
}

const inboxSlice = createSlice({
  name: 'inbox',
  initialState: initialInboxState,
  reducers: {
    addToInbox: (state, action) => {
      console.log(state.inbox)
      state.inbox = action.payload
      console.log(state.inbox)
    },
    updateInbox: (state, action) => {
      console.log(state, action)
      const updatedMails = state.inbox.map((mail) => {
        console.log(mail)
        if (mail[0] === action.payload) {
          const updatedObj = { ...mail[1], unread: false }
          return [mail[0], updatedObj]
        }
        return [mail[0], { ...mail[1] }]
      })
      console.log(updatedMails)
      state.inbox = updatedMails
    },
    updateCounter: (state) => {
      console.log('called')
      let count = 0
      const updatedCount = state.inbox.reduce((curr, mail) => {
        if (mail[1].unread === true) {
          count = count + 1
        }

        return count
      }, 0)

      state.unreadCount = updatedCount
      console.log(updatedCount)
    }
  }
})

export default inboxSlice
