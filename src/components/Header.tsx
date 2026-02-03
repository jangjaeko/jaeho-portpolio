export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="Header bg-linear-to-r from-teal-300 to-cyan-500  p-24 w-full">
      <div className="l-header-section">Logo</div>
      <div className="r-header-section">
        <div
          className="header-menu-btn"
          onClick={() => scrollToSection("About")}
        >
          About
        </div>
        <div
          className="header-menu-btn"
          onClick={() => scrollToSection("Experience")}
        >
          Experience
        </div>
        <div
          className="header-menu-btn"
          onClick={() => scrollToSection("Project")}
        >
          Project
        </div>
        <div
          className="header-menu-btn"
          onClick={() => scrollToSection("Contact")}
        >
          Contact
        </div>
      </div>
    </header>
  );
}
