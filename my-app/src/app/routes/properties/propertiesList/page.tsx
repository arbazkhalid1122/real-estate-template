'use client'
import PropertiesSideBar from '@/app/common components/properties/propertiesSideBar'
import styles from './style.module.scss'
import PropertyList from '@/app/common components/properties/PropertyList'

export default function PropertiesList({searchParams}:any) {

    return (
        <div className={`container ${styles.SideBarMain} ${searchParams?.item && styles.RightSide}`}>
            <PropertiesSideBar />
            <PropertyList />
        </div>
    )
}