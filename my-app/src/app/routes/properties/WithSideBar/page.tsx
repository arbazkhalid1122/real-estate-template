'use client'
import FeatureProperty from "@/app/common components/featureproperty";
import PropertiesSideBar from "@/app/common components/properties/propertiesSideBar";
import styles from './style.module.scss'

export default function LeftSideBar({searchParams}:any) {
    
    return(
        <div className={`container ${styles.SideBarMain} ${searchParams.item && styles.rightSideBar}`}>
          <PropertiesSideBar/>
          <FeatureProperty type='propertypage' container={'no'} />
        </div>
    )
}