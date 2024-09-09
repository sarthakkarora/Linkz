import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="./profile-pic.jpg" className="h-24 rounded-full mx-auto mb-5 shadow-lg" />
        <h1 className="font-bold text-4xl">Sarthak Arora</h1>
        <br></br>
        <p className="text-2xl">A budding developer with a passion for web and software development.</p>
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
