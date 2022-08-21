import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const activeItem = "home";
  const router = useRouter();

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }

  return (
    <>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
      </Menu>
    </>
  );
}
