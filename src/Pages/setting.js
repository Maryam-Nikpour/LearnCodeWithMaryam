import MyNavbar from "../components/navbar/Navbar";
function Setting() {
  const isLogin = (username) => {
    if (username == "admin") return true;
    return false;
  };
  return (
    <div>
      <MyNavbar />
      <h1 style={{ textAlign: "center" }}>setting Page</h1>
    </div>
  );
}

export default Setting;
