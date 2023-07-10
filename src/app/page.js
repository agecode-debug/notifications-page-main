import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <div className="top">
        <div className="label">
          <h5>Notifications</h5>
          <label className="counter">3</label>
        </div>
        <button className="filter">Mark all as read</button>
      </div>
      <NotificationList />
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
    <div className="notification">
      <Image src={profil} width={50} height={50} />
      <div className="infos">
        <div className="message">
          <strong>{name}</strong>
          {message}
          {linked && <LinkedElement element={linked} />}
          {readed && <div className="not-readed"></div>}
        </div>
        <p className="sentTime">{sentTime} ago</p>
      </div>
      {media && <Image src={media} width={50} height={50} />}
      {privateMessage && <PrivateMessage text={privateMessage} />}
    </div>
  );
}

function NotificationList() {
  return (
    <div className="list">
      <Notification
        profil="/avatar-mark-webber.webp"
        name="Mark Webber"
        sentTime="1m"
        message="reacted to your recent post"
        readed="false"
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
        readed="false"
      />
      <Notification
        profil="/avatar-jacob-thompson.webp"
        name="Jacob Thompson"
        sentTime="1 day"
        message="has joined your group"
        readed="true"
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
        readed="true"
        privateMessage="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game."
      />
      <Notification
        profil="/avatar-kimberly-smith.webp"
        name="Kimberly Smith"
        sentTime="1 week"
        message="commented on your picture"
        readed="true"
        media="/image-chess.webp"
      />
      <Notification
        profil="/avatar-nathan-peterson.webp"
        name="Nathan Peterson"
        sentTime="2 weeks"
        message="reacted to your recent post"
        readed="true"
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
        readed=""
        media="/image-chess.webp"
        linked={{
          name: "Chess Club",
          type: "club",
        }}
      />
    </div>
  );
}

function PrivateMessage({ text }) {
  return <p className="privateMessage">{text}</p>;
}

function LinkedElement({ element }) {
  return <strong className={`linked-${element.type}`}>{element.name}</strong>;
}
