'use client'
import { Drawer, Dropdown, Menu } from 'antd'
import Link from 'next/link'
import { MdOutlineViewHeadline } from 'react-icons/md'
import { VscAdd } from 'react-icons/vsc'
import styles from './style.module.scss'
import { items, about, customMenu, pages, agency, blog, login, createMenu, menuItems } from './dropdown'
import { useEffect, useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'


interface SubMenuItem {
  key: string;
  text: string;
  href: string;
  label: string;
}


function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { SubMenu } = Menu;

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handle = () => {
    setDrawerVisible(true);
    setTimeout(() => {
      setDrawerVisible(false);
    }, 3000);
  };



  return (
    <main className={`${styles.navbar}`}>
    <nav className={`container ${styles.nav}`}>
      <div className={styles.imgstyle}>
        <img src="/logo/logo.svg" alt=''></img>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(items)} placement="bottom" className={styles.dropdown}>
            <Link href="/"> Home</Link>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(about)} placement="bottom" className={styles.dropdown}>
            <Link href="/routes/about/about1"><p>About</p></Link>
          </Dropdown>
        </li>
        <li className={`${styles.navItem} ${styles.antddropdown}`}>
          <Dropdown overlay={customMenu} trigger={['hover']} placement="bottomCenter">
            <p>Properties</p>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(pages)} placement="bottom" className={styles.dropdown}>
            <p>Pages</p>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(agency)} placement="bottom" className={styles.dropdown}>
            <Link href="/routes/agency">Agency</Link>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Dropdown overlay={createMenu(blog)} placement="bottom" className={styles.dropdown}>
            <p>Blog</p>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <Link href="/routes/contact">Contact</Link>
        </li>
        <li className={styles.navimg}>
          <Dropdown overlay={createMenu(login)} placement='bottom' className={styles.dropdown}>
            <img src="logo/avater.webp" alt=''></img>
          </Dropdown>
        </li>
        <li className={styles.navItem}>
          <button><Link href="/routes/addProperty">Add Property</Link></button>
        </li>
      </ul>
      <div className={styles.navmobile}>
        <ul className='d-flex align-items-center'>
          <li>
            <img src="logo/avater.webp" alt=''></img>
          </li>
          <li className={styles.navItem}>
            <button><Link href="/routes/addProperty">Add Property</Link></button>
          </li>
          <li>
            <MdOutlineViewHeadline onClick={showDrawer} />
          </li>
        </ul>
      </div>
      <Drawer
        className={styles.drawer}
        placement="left"
        closable={true}
        onClose={onCloseDrawer}
        visible={drawerVisible}>
        <div className={styles.navMenu}>
          <Menu mode="inline"  expandIcon={(({isOpen})=> isOpen ?<AiOutlineMinus/> : <VscAdd/>) }>
            {menuItems.map((menuItem) => (
              <SubMenu key={menuItem.key} title={menuItem.label}>
                {menuItem.children.map((subItem) => (
                  <Menu.Item>
                    <Link className='' href={subItem.href} onClick={handle}>{subItem.text}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
          <div className={styles.contact}>
            <Link href="/routes/contact">Contact</Link>
          </div>
        </div>
      </Drawer>
    </nav>
     </main>
  )
}

export default Navbar