import React, { useState, useEffect, Fragment, useContext } from "react";
import HyperLink from "../HyperLink/HyperLink";
import List from "../List/List";
import UnorderedList from "../UnorderedList/UnorderedList";
import Flex from "../Flex/Flex";
import Paragraph from "../Paragraph/Paragraph";
import Image from "../Image/Image";
import "./Header.css";
import AppContext from "../../contexts/AppContext";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  const windowSize = useContext(AppContext).window.windowSize;
  const handleNavbar = () => {
    const navItems = document.querySelector(".nav-authentication");
    if (navItems.style.transform == "") {
      navItems.style.transform = "scale(1, 1)";
    } else {
      navItems.style.transform = "";
    }
  };
  const handleTransform = () => {
    if (windowSize > 600) {
      let nav = document.querySelector(".nav-auth");
      if (nav != null) nav.style.transform = "";
      nav = document.querySelector(".nav-signed-user");
      if (nav != null) nav.style.transform = "";
    }
  };
  const handleSuggestions = () => {};
  useEffect(() => {
    handleTransform();
  });

  const BrandName = () => {
    return (
      <div className='brand-name'>
        <Flex
          flexObj={{
            id: "flex-1",
            align: "left",
            width: "100%",
            height: "auto",
            bgColor: "inherit",
          }}
        >
          <Paragraph
            paragraphObj={{
              id: "p-1",
              size: "extra-extra-big",
              weight: "bolder",
              content: "Shopping App",
            }}
          />
        </Flex>
      </div>
    );
  };
  return (
    <header>
      <nav className='nav-bar'>
        {windowSize <= 800 ? (
          false ? (
            <>
              <div className='nav-bar-top'>
                <BrandName />
                <div className='nav-dash-button'>
                  <ul className='nav-bar-ul' onClick={handleNavbar}>
                    <li className='nav-bar-li'></li>
                    <li className='nav-bar-li'></li>
                    <li className='nav-bar-li'></li>
                  </ul>
                </div>
                <div className='search-bar'>
                  <SearchBar />
                </div>
              </div>
              <div className='nav-authentication'>
                <UnorderedList
                  unorderedListObj={{
                    id: "ul-1",
                    gridColumns: "1",
                    width: "parent-width",
                    align: "left",
                    colGap: "5px",
                    rowGap: "5px",
                  }}
                >
                  <List
                    listObj={{
                      id: "li-1",
                      align: "left",
                      width: "parent-width",
                    }}
                  >
                    <HyperLink
                      linkObj={{
                        id: "a-1",
                        to: "/app",
                        link: "Signup",
                        width: "parent-width",
                        align: "left",
                      }}
                    />
                  </List>
                  <List
                    listObj={{
                      id: "li-2",
                      align: "left",
                      width: "parent-width",
                    }}
                  >
                    <HyperLink
                      linkObj={{
                        id: "a-2",
                        to: "/body",
                        link: "Signin",
                        width: "parent-width",
                        align: "left",
                      }}
                    />
                  </List>
                </UnorderedList>
              </div>
            </>
          ) : (
            <>
              <div className='nav-bar-top'>
                <BrandName />
                <div className='nav-dash-button'>
                  <ul className='nav-bar-ul' onClick={handleNavbar}>
                    <li className='nav-bar-li'></li>
                    <li className='nav-bar-li'></li>
                    <li className='nav-bar-li'></li>
                  </ul>
                </div>
                <div className='search-bar'>
                  <SearchBar />
                </div>
              </div>
              <div className='nav-authentication'>
                <UnorderedList
                  unorderedListObj={{
                    id: "ul-1",
                    gridColumns: "1",
                    width: "parent-width",
                    align: "left",
                    colGap: "5px",
                    rowGap: "5px",
                  }}
                >
                  <List
                    listObj={{
                      id: "li-1",
                      align: "left",
                      width: "parent-width",
                    }}
                  >
                    <div className='signed-user-heading-nav'>
                      <Paragraph
                        paragraphObj={{
                          id: "signed-user-greeting",
                          size: "extra-extra-big",
                          weight: "normal",
                          content: "Hello Nishu!",
                          font: "monospace",
                        }}
                      />
                    </div>
                  </List>
                  <List
                    listObj={{
                      id: "li-2",
                      align: "left",
                      width: "parent-width",
                    }}
                  >
                    <HyperLink
                      linkObj={{
                        id: "a-1",
                        to: "#",
                        link: "Account",
                        width: "parent-width",
                        align: "left",
                      }}
                    ></HyperLink>
                  </List>
                  <List
                    listObj={{
                      id: "li-3",
                      align: "left",
                      width: "parent-width",
                    }}
                  >
                    <HyperLink
                      linkObj={{
                        id: "a-2",
                        to: "#",
                        link: "Orders",
                        width: "parent-width",
                        align: "left",
                      }}
                    ></HyperLink>
                  </List>
                  <List
                    listObj={{
                      id: "li-4",
                      align: "left",
                      width: "parent-width",
                    }}
                  >
                    <HyperLink
                      linkObj={{
                        id: "a-3",
                        to: "#",
                        link: "Logout",
                        width: "parent-width",
                        align: "left",
                      }}
                    ></HyperLink>
                  </List>
                </UnorderedList>
              </div>
            </>
          )
        ) : false ? (
          <>
            <BrandName />
            <div className='search-bar'>
              <SearchBar />
            </div>
            <div className='nav-signed-user'>
              <UnorderedList
                unorderedListObj={{
                  id: "ul-1",
                  gridColumns: "1",
                  width: "fit-width",
                  align: "center",
                  colGap: "10px",
                  rowGap: "10px",
                }}
              >
                <List
                  listObj={{ id: "li-1", align: "center", width: "fit-width" }}
                >
                  <HyperLink
                    linkObj={{
                      id: "a-1",
                      to: "#",
                      link: "Hello Nishu!",
                      width: "fit-width",
                      align: "center",
                    }}
                  ></HyperLink>
                </List>
              </UnorderedList>
            </div>
          </>
        ) : (
          <>
            <BrandName />
            <div className='search-bar'>
              <SearchBar />
            </div>
            <div className='nav-auth'>
              <UnorderedList
                unorderedListObj={{
                  id: "ul-1",
                  gridColumns: "2",
                  width: "fit-width",
                  align: "center",
                  colGap: "10px",
                  rowGap: "10px",
                }}
              >
                <List
                  listObj={{ id: "li-1", align: "center", width: "fit-width" }}
                >
                  <HyperLink
                    linkObj={{
                      id: "a-1",
                      to: "/app",
                      link: "Signup",
                      width: "fit-width",
                      align: "center",
                    }}
                  />
                </List>
                <List
                  listObj={{ id: "li-2", align: "center", width: "fit-width" }}
                >
                  <HyperLink
                    linkObj={{
                      id: "a-2",
                      to: "/signin",
                      link: "Signin",
                      width: "fit-width",
                      align: "center",
                    }}
                  />
                </List>
              </UnorderedList>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
