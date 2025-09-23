import sublinks from "../data";
const NavLinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((items) => {
        const { pageId, page } = items;
        return (
          <button key={pageId} className="nav-link">
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
