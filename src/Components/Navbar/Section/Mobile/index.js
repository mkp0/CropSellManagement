import { Sidebar, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import icon from "../../../../Assets/Images/png/icon1.png";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/iconic/menu";
const NavBarMobile = (props) => {
  const {
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible,
    children,
  } = props;

  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
        >
          {leftItems.map((item) => (
            <Menu.Item key={item.id}>
              <Link to={item.to}>
                {item.content}
                <Icon icon={item.icon} style={{ marginLeft: "0.3rem" }}></Icon>
              </Link>
            </Menu.Item>
          ))}
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top" inverted>
            <Menu.Item>
              <Image size="mini" src={icon} />
            </Menu.Item>
            <Menu.Item onClick={onToggle}>
              <Icon icon={menu} name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
              {rightItems.map((item) => (
                <Menu.Item key={item.id}>
                  <Link to={item.to}>
                    {item.content}
                    <Icon
                      icon={item.icon}
                      style={{ marginLeft: "0.3rem" }}
                    ></Icon>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Menu>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default NavBarMobile;
