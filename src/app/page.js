import Image from "next/image";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import ProfileSidebar from "./components/ProfileSidebar";
export default function Home() {
  return (
    <main className="main">
     <LeftSidebar />
      <section className="content">
        <Navbar />
      </section>
      <aside className="right-sidebar">
       <ProfileSidebar />
      </aside>
    </main>
  );
}
