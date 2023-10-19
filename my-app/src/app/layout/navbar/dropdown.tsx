import { Menu, MenuProps } from "antd";
import Link from "next/link";
import styles from './style.module.scss';





export const createMenu = (items:any) => (
  <Menu className={styles.menuitems}>
    <ul>
      {items?.map((item:any, index:any) => (
        <li key={index}>
          <Link href={item?.href}>{item?.text}</Link>
        </li>
      ))}
    </ul>
  </Menu>
);

export const items = [
  { href: "/routes/home/home1", text: "Home 1",label:'Home 01' },
  { href: "/routes/home/home2", text: "Home 2",label:'Home 02' },
  { href: "/", text: "Home 3",label:'Home 03' },
  { href: "/routes/home/home4", text: "Home 4",label:'Home 04' },
  { href: "/routes/home/home5", text: "Home 5",label:'Home 05' },
  { href: "/routes/home/home6", text: "Home 6",label:'Home 06' },
];

export const pages = [
  { href: "/routes/pages/services", text: "Services",label: "Services" },
  { href: "/routes/pages/singleService", text: "Single Service" ,label: "Single Service"},
  { href: "/routes/pages/login", text: "Login",label: "Login" },
  { href: "/routes/register/pages/register", text: "Register",label: "Register" },
];

export const agency = [
  { href: "/routes/agency", text: "Agency",label:'Agency'},
  { href: "/routes/agency/createAgency", text: "Create Agency",label:'Create Agency'},
  { href: "/routes/agency/agents", text: "Agent",label:'Agent'},
  { href: "/routes/agency/agencyDetail", text: "Agency Details",label:'Agency Details'},
  { href: "/routes/agency/agentDetail", text: "Agent Details",label:'Agent Details'},
];

export const blog = [
  { href: "/routes/blogs/blogGrid", text: "Blog Grid" },
  { href: "/routes/blogs/leftSideBar", text: "Blog Grid left Side Bar" },
  { 
    href: {
      pathname: '/routes/blogs/leftSideBar',
      query: { item: 'right' }
    },
    text: "Blog Grid Right Side Bar"
  },
  { href: "/routes/blogs/blogDetail", text: "Blog Details" },
];


export const about = [
  { href: "/routes/about/about1", text: "About 1", label: "About 1"},
  { href: "/routes/about/about2", text: "About 2", label: "About 2"},
];

export const login = [
  { href: "/routes/pages/login", text: "Login" },
  { href: "/routes/pages/register", text: "Register" },
];



export const customMenuItems = [
  [
    { key: "1", text: "Properties", href: '/routes/properties',label:'pk' },
    { key: "2", text: "Properties v1", href: '/routes/properties',label:'pk' },
    { key: "3", text: "Properties v2", href: '/routes/properties',label:'pk' },
    { key: "4", text: "Add Properties", href: "/routes/addProperty",label:'pk' },
  ],
  [
    { key: "6", text: "Properties1 with sidebar", href: "/routes/addProperty",label:'pk' },
    { key: "7", text: "Properties left side bar", href: "/routes/properties/WithSideBar",label:'pk' },
    { 
      href: {
        pathname: '/routes/properties/WithSideBar',
        query: { item: 'right' }
      },
      text: "Blog Grid Right Side Bar"
    },    
    { key: "8", text: "Properties list left side bar", href: "/routes/properties/propertiesList",label:'Properties list left side bar' },
    { 
      href: {
        pathname: '/routes/properties/propertiesList',
        query: { item: 'right' }
      },
      text: "Properties list Right side bar"
    }  ],
  [
    { key: "11", text: "Property Details", href: "/routes/addProperty",label:'pk' },
    { key: "12", text: "Add properties", href: "/routes/addProperty",label:'pk' },
    { key: "13", text: "Properties details", href: "/routes/properties/",label:'pk' },
  ],
];

export const customMenu = (
  <Menu className={styles.customMenu}>
    <div className={styles.lists}>
      {customMenuItems.map((menuGroup, index) => (
          <ul>
            {menuGroup.map((menuItem) => (
              <li>
                <Link href={menuItem?.href}>{menuItem?.text}</Link>
              </li>
            ))}
          </ul>
      ))}
    </div>
  </Menu>
);

const mergedCustomMenuItems = customMenuItems.flat()

export const menuItems = [
  {
    label: 'Home',
    key: 'home',
    children: items,
  },
  {
    label: 'About',
    key: 'about',
    children: about,
  },
  {
    label: 'Properties',
    key: 'properties',
    children: mergedCustomMenuItems,
  },
  {
    label: 'Pages',
    key: 'pages',
    children: pages,
  },
  {
    label: 'Agency',
    key: 'agency',
    children: agency,
  },
  {
    label: 'Blog',
    key: 'blog',
    children: blog,
  },
]