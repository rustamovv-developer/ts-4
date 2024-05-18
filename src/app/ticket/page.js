import React from "react";
import "./ticket.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import navImg from "@/assets/images/nav-img.png";

async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Tickets = async () => {
  const data = await getData();
  console.log(data);
  let users = data?.users?.map((el) => (
    <div className="main-fox">
      <div className="card-left">
        <Image
          width={30}
          height={30}
          src={el.image}
          alt="main2"
          className="left-img"
        />
        <h2 className="left-title">{el.address.address}</h2>
      </div>
      <h2 className="card-title">{el.birthDate}</h2>
      <h2 className="card-title green">${el.height}</h2>
      <h2 className="card-title red">${el.weight}</h2>
      <h2 className="card-title">{el.phone}</h2>
    </div>
  ));
  return (
    <>
      <aside>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <Link href="/" className="aside-logo">
          <Image
            width={30}
            height={30}
            src={logo}
            alt="logo"
            className="logo"
          />
          <h2 className="aside-title">Dashboard</h2>
        </Link>
        <ul className="aside-list">
          <li className="aside-item">
            <Link href="/" className="aside-link">
              <i className="fa-solid fa-light fa-chart-pie aside-i"></i>
              <h2 className="aside-list-title">Overview</h2>
            </Link>
          </li>
          <li className="aside-item">
            <Link href="#" className="aside-link">
              <i className="fa-solid fa-ticket aside-i ticket"></i>
              <h2 className="aside-list-title">Tickets</h2>
            </Link>
          </li>
          <li className="aside-item">
            <Link href="#" className="aside-link">
              <i className="fa-solid fa-lightbulb aside-i"></i>
              <h2 className="aside-list-title">Ideas</h2>
            </Link>
          </li>
          <li className="aside-item">
            <Link href="#" className="aside-link">
              <i className="fa-solid fa-users aside-i"></i>
              <h2 className="aside-list-title">Contacts</h2>
            </Link>
          </li>
          <li className="aside-item">
            <Link href="#" className="aside-link">
              <i className="fa-solid fa-user-tie aside-i"></i>
              <h2 className="aside-list-title">Agents</h2>
            </Link>
          </li>
          <li className="aside-item">
            <Link href="#" className="aside-link">
              <i className="fa-solid fa-book aside-i"></i>
              <h2 className="aside-list-title">Articles</h2>
            </Link>
          </li>
        </ul>
        <div className="aside-buttons">
          <button className="aside-button">
            <i className="fa-solid fa-circle-half-stroke aside-button-i"></i>
            <h2 className="aside-button-title switch">Change mode</h2>
          </button>
          <button className="aside-button">
            <i className="fa-solid fa-right-from-bracket aside-button-i"></i>
            <h2 className="aside-button-title">Logout</h2>
          </button>
        </div>
      </aside>
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav-info">
              <i className="fa-solid fa-bars hamburger"></i>
              <div className="nav-right">
                <h2 className="nav-title">Jones Ferdinand</h2>
                <Image src={navImg} alt="nav-img" className="nav-img" />
              </div>
            </div>
          </div>
        </nav>
        <div className="header-info">
          <div className="container">
            <div className="header-bottom">
              <h2 className="header-title">Tickets</h2>
              <div className="header-buttons">
                <button className="header-btn">
                  <i className="fa-solid fa-ellipsis ellipsis"></i>
                </button>
                <button className="header-btn btn2">Add</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <table>
            <h2 className="title">All tickets</h2>
            <thead>
              <tr>
                <th>Ticket details</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="" alt="" className="td-img" />
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
            <div classNameName="main-bottom">{users}</div>
          </table>
        </div>
      </main>
    </>
  );
};

export default Tickets;
