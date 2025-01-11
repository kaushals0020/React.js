import {
  Bootstrap,
  Calendar,
  Calendar2,
  Download,
  EmojiAngry,
  EmojiAngryFill,
  EmojiAstonished,
  Facebook,
  Google,
  GooglePlay,
  Instagram,
  Key,
  Mailbox,
  Save,
  Snapchat,
  Telegram,
  Twitter,
  TwitterX,
  Upload,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

export default function BootIcon() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "40px",
        marginLeft: "40px",
      }}
    >
      <Facebook size={150} color="blue" />
      <Instagram size={150} color="pink" />
      <Youtube size={150} color="red" />
      <Calendar size={150} />
      <Calendar2 size={150} color="aqua" />
      <Mailbox size={150} color="pink" />
      <Twitter size={150} color="blue" />
      <TwitterX size={150} />
      <Snapchat size={150} color="yellow" />
      <Save size={150} color="Grey" />
      <Download size={150} color="green" />
      <Upload size={150} />
      <EmojiAngry size={150} color="yellow" />
      <EmojiAstonished size={150} color="yellow" />
      <EmojiAngryFill size={150} color="yellow" />
      <Google size={150} color="red"></Google>
      <GooglePlay size={150}></GooglePlay>
      <Telegram size={150} color="blue"></Telegram>
      <Key size={150} color="grey"></Key>
      <Bootstrap size={150} color="blue"></Bootstrap>
      <Whatsapp size={150} color="green"></Whatsapp>
    </div>
  );
}
