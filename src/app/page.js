"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Page() {
  const [readedList, setReadedList] = useState([false, false, false, true, true, true, true])

  function handleClick() {
    setReadedList(Array(readedList.length).fill(true))
  }

  return (
    <main>
      <div className={styles.top}>
        <div className={styles.label}>
          <h2 className={styles.title}>Notifications</h2>
          <label className={styles.counter}>{readedList.filter(e => !e).length}</label>
        </div>
        <button onClick={handleClick} className={styles.filter}>Mark all as read</button>
      </div>
      <NotificationList readedList={readedList}/>
    </main>
  );
}

function Notification({
  profil,
  name,
  sentTime,
  message,
  readed,
  media,
  privateMessage,
  linked,
}) {
  return (
    <section
      className={
        readed ? styles.notification : styles.notificationNotReaded
      }
    >
      <Image alt="profil" className={styles.profil} src={profil} width={40} height={40} />
      <div className={styles.infos}>
        <p className={styles.message}>
          <span className={styles.name}>{name}</span>
          <span>{message}</span>
          {linked && <LinkedElement element={linked} />}
          {!readed && <i className={styles.iconNotReaded}></i>}
        </p>
        <p className={styles.sentTime}>{sentTime} ago</p>
        {privateMessage && <PrivateMessage text={privateMessage} />}
      </div>
      {media && (
        <Image alt="media" className={styles.media} src={media} width={50} height={50} />
      )}
    </section>
  );
}

function NotificationList({ readedList }) {
  return (
    <div className={styles.list}>
      <Notification
        profil="/avatar-mark-webber.webp"
        name="Mark Webber"
        sentTime="1m"
        message="reacted to your recent post"
        readed={readedList[0]}
        linked={{
          name: "My first tournament today!",
          type: "post",
        }}
      />
      <Notification
        profil="/avatar-angela-gray.webp"
        name="Angela Gray"
        sentTime="5m"
        message="followed you"
        readed={readedList[1]}
      />
      <Notification
        profil="/avatar-jacob-thompson.webp"
        name="Jacob Thompson"
        sentTime="1 day"
        message="has joined your group"
        readed={readedList[2]}
        linked={{
          name: "Chess Club",
          type: "group",
        }}
      />
      <Notification
        profil="/avatar-rizky-hasanuddin.webp"
        name="Rizky Hasanuddin"
        sentTime="5 days"
        message="sent you a private message"
        readed={readedList[3]}
        privateMessage="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game."
      />
      <Notification
        profil="/avatar-kimberly-smith.webp"
        name="Kimberly Smith"
        sentTime="1 week"
        message="commented on your picture"
        readed={readedList[4]}
        media="/image-chess.webp"
      />
      <Notification
        profil="/avatar-nathan-peterson.webp"
        name="Nathan Peterson"
        sentTime="2 weeks"
        message="reacted to your recent post"
        readed={readedList[5]}
        linked={{
          name: "5 end-game strategies to increase your win rate",
          type: "post",
        }}
      />
      <Notification
        profil="/avatar-anna-kim.webp"
        name="Anna Kim"
        sentTime="2 weeks"
        message="left the group"
        readed={readedList[6]}
        linked={{
          name: "Chess Club",
          type: "group",
        }}
      />
    </div>
  );
}

function PrivateMessage({ text }) {
  return <p className={styles.privateMessage}>{text}</p>;
}

function LinkedElement({ element }) {
  return <span className={styles[`linked-${element.type}`]}>{element.name}</span>;
}
