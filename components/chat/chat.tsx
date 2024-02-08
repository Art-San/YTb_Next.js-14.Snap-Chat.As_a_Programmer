import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarImage } from '../ui/avatar'
import { formatDate } from '@/lib/utils'
import {
  ImageMessageSvg,
  TextMessageSent,
  TextMessageSvgReceived
} from '../svgs/chatSvg'

type ChatProps = {
  chat: any
}
// на 02:44:00 объясняет
const Chat = ({ chat }: ChatProps) => {
  const userToChat = chat.participants[0]
  const lastMessage = chat.lastMessage
  const lastMessageType = lastMessage?.messageType
  const formattedDate = lastMessage
    ? formatDate(lastMessage?.createdAt!)
    : formatDate(new Date())
  const amISender = lastMessage && lastMessage.sender._id !== userToChat?._id
  const isMsgOpened = lastMessage?.opened

  let messageStatus: string
  let iconComponent: JSX.Element

  if (amISender) {
    messageStatus = isMsgOpened ? 'Opened' : 'Sent'
    iconComponent =
      lastMessageType === 'text' ? (
        <TextMessageSent
          className={
            isMsgOpened ? 'text-sigSnapChat ' : 'text-sigSnapChat fill-current'
          }
        />
      ) : (
        <ImageMessageSvg
          className={
            isMsgOpened ? 'text-sigSnapImg' : 'text-sigSnapImg fill-current'
          }
        />
      )
  } else {
    if (!lastMessage) {
      iconComponent = <TextMessageSvgReceived className="fill-current" />
      messageStatus = 'Say Hi!'
    } else {
      messageStatus = isMsgOpened ? 'Received' : 'Show Message'
      iconComponent =
        lastMessageType === 'text' ? (
          <TextMessageSvgReceived
            className={
              !isMsgOpened
                ? 'text-sigSnapChat fill-current'
                : 'text-sigSnapChat'
            }
          />
        ) : (
          <ImageMessageSvg
            className={
              !isMsgOpened ? 'text-sigSnapImg fill-current' : 'text-sigSnapImg'
            }
          />
        )
    }
  }

  return (
    <Link href={`/chat/${userToChat?._id}`}>
      <li className="flex items-center p-2  bg-sigSurface hover:bg-sigBackgroundFeedHover cursor-pointer border-b border-b-sigColorBgBorder">
        <Avatar className="w-14 h-14 bg-black">
          <AvatarImage
            src={
              userToChat?.avatar ||
              'https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png'
            }
          />
        </Avatar>

        <div className="ml-3">
          <p>{userToChat?.fullName}</p>
          <p className="text-gray-400 text-xs flex gap-1">
            {iconComponent}
            {messageStatus} - {formattedDate}
          </p>
        </div>
        <Image
          src={'/camera.svg'}
          height={0}
          width={0}
          style={{ width: '20px', height: 'auto' }}
          className="ml-auto hover:scale-95 "
          alt="Camera Icon"
        />
      </li>
    </Link>
  )
}
export default Chat

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 02:39:13
{
  /* <Link href={`/chat/${userToChat?._id}`}>
<li className='flex items-center p-2  bg-sigSurface hover:bg-sigBackgroundFeedHover cursor-pointer border-b border-b-sigColorBgBorder'>
  <Avatar className='w-14 h-14 bg-black'>
    <AvatarImage
      src={
        userToChat?.avatar ||
        "https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png"
      }
    />
  </Avatar>

  <div className='ml-3'>
    <p>{userToChat?.fullName}</p>
  </div>
  <Image
    src={"/camera.svg"}
    height={0}
    width={0}
    style={{ width: "20px", height: "auto" }}
    className='ml-auto hover:scale-95 '
    alt='Camera Icon'
  />
</li>
</Link> */
}

// gpt 4 написал
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { formatDate } from '@/lib/utils'
// import {
//   ImageMessageSvg,
//   TextMessageSent,
//   TextMessageSvgReceived
// } from '../svgs/chatSvg'

// // interface Participant {
// //   _id?: string;
// //   fullName: string;
// //   avatar?: string;
// // }

// // interface LastMessage {
// //   sender: Participant;
// //   messageType: string;
// //   opened: boolean;
// //   createdAt: Date;
// // }

// // interface Chat {
// //   participants: Participant[];
// //   lastMessage?: LastMessage;
// // }

// // interface ChatProps {
// //   chat: Chat;
// // }

// const Chat = ({ chat }: any) => {
//   const userToChat = chat.participants[0]
//   const lastMessage = chat.lastMessage
//   const lastMessageType = lastMessage?.messageType
//   const formattedDate = lastMessage
//     ? formatDate(lastMessage.createdAt)
//     : formatDate(new Date())
//   const amISender = lastMessage && lastMessage.sender._id !== userToChat._id
//   const isMsgOpened = lastMessage?.opened

//   const messageStatus = amISender
//     ? isMsgOpened
//       ? 'Opened'
//       : 'Sent'
//     : lastMessage
//     ? isMsgOpened
//       ? 'Received'
//       : 'Show Message'
//     : 'Say Hi!'

//   const iconComponent = amISender ? (
//     lastMessageType === 'text' ? (
//       <TextMessageSent className={isMsgOpened ? 'text-sigSnapChat' : ''} />
//     ) : (
//       <ImageMessageSvg className={isMsgOpened ? 'text-sigSnapImg' : ''} />
//     )
//   ) : lastMessage ? (
//     lastMessageType === 'text' ? (
//       <TextMessageSvgReceived
//         className={!isMsgOpened ? 'text-sigSnapChat' : ''}
//       />
//     ) : (
//       <ImageMessageSvg className={!isMsgOpened ? 'text-sigSnapImg' : ''} />
//     )
//   ) : (
//     <TextMessageSvgReceived className="fill-current" />
//   )

//   return (
//     <Link href={`/chat/${userToChat._id}`}>
//       <li className="flex items-center p-2 bg-sigSurface hover:bg-sigBackgroundFeedHover cursor-pointer border-b border-b-sigColorBgBorder">
//         <Avatar className="w-14 h-14 bg-black">
//           <AvatarImage
//             src={
//               userToChat.avatar ||
//               'https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png'
//             }
//             alt={`Avatar of ${userToChat.fullName}`}
//           />
//         </Avatar>
//         <div className="ml-3">
//           <p>{userToChat.fullName}</p>
//           <p className="text-gray-400 text-xs flex gap-1">
//             {iconComponent}
//             {messageStatus} - {formattedDate}
//           </p>
//         </div>
//         <Image
//           src="/camera.svg"
//           height={0}
//           width={0}
//           style={{ width: '20px', height: 'auto' }}
//           className="ml-auto hover:scale-95"
//           alt="Camera Icon"
//         />
//       </li>
//     </Link>
//   )
// }

// export default Chat