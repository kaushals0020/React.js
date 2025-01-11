import HomeComp from "./HomeComp";
import ProfileComp from "./ProfileComp";
import UserComp from "./UserComp";
import UserProvider from "./UserProvider";

export default function EmbedComp() {
  return (
    <>
      <UserProvider>
        <UserComp></UserComp>
        <ProfileComp></ProfileComp>
      </UserProvider>

      {/* Here, UserComp and ProfileComp are the children of UserProvider, and they
      will be passed to props.children. */}

      {/* <HomeComp></HomeComp> */}
    </>
  );
}
