import { filterItems, PriceRange, PropertySize, Bedrooms, Bathrooms, Garage } from '@/app/data'
import { Dropdown } from 'antd'
import { useState } from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import { BsSliders2Vertical } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import { PiSelectionBold } from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TiHomeOutline } from 'react-icons/ti'
import styles from '../../style.module.scss'

export default function HomeSearch(props:any) {
    const [filDtl, setFilDel] = useState(false)
    

    const handleShow = () => {
        setFilDel(!filDtl)
    }
    return (
        <div className={`container ${styles.searchcontainer} ${props.type ==='home5' && styles.home5} ${props?.type === 'home2' && styles.home2Search}`}>
            <div className={`border-bottom-0 ${styles.filterContainer}`} style={{background: props?.type === 'home5' || props?.type === 'home2' ? 'white': '',marginBottom:props?.type === 'home5' ? '50px': '',border: props?.type === 'home2' ? '1px solid #E8F1FF' :''}}>
                <p>Buy</p>
                <p>Sell</p>
                <p>Rent</p>
                <p>Co-living</p>
            </div>
            <div>
            </div>
            <div className={styles.filterIcon}>
                <div className={styles.searchFilter}>
                    <button className='p-2' onClick={handleShow} style={{background: props?.type === 'home5' || props?.type === 'home2' ? 'white': ''}}><BsSliders2Vertical /></button>
                </div>
                <div className={styles.allFilter} style={{background: props?.type === 'home5'|| props?.type === 'home2' ? 'white': ''}}>
                    <div className={styles.filterItem}>
                        {filterItems.map((item) => (
                            <div className={styles.filterschild}>
                                <div className={`${styles.locationPrnt}`}>
                                    <div className={styles.location}>
                                        <div>
                                            <BiLocationPlus />
                                        </div>
                                        <div className={styles.chsLoctn}>
                                            <h3>{item.title}</h3>
                                            <input style={{background: props?.type === 'home5' || props?.type === 'home2' ? 'white':''}} type="text" placeholder='choose location' />
                                        </div>
                                    </div>
                                    <div className={styles.location}>
                                        <div>
                                            <TiHomeOutline />
                                        </div>
                                        <div className={styles.chsLoctn}>
                                            <h3>{item.property}</h3>
                                            {/* <Dropdown overlay={DropdownMenu} placement="bottom" trigger={['click']} className={styles.dropdown}> */}
                                            <div className={styles.appartments}>
                                                <p>{item.propertySelect}</p>
                                                <div>
                                                    <RiArrowDropDownLine />
                                                </div>
                                            </div>
                                            {/* </Dropdown> */}
                                        </div>
                                    </div>
                                </div><div className={`${styles.locationPrnt}`}>
                                    <div className={styles.location}>
                                        <div>
                                            <AiOutlineDollarCircle />
                                        </div>
                                        <div className={styles.chsLoctn}>
                                            <h3>{item.range}</h3>
                                            <Dropdown overlay={PriceRange} placement="bottom" trigger={['click']} className={styles.dropdown}>
                                                <div className={styles.appartments}>
                                                    <p>{item.rangeRs}</p>
                                                    <div>
                                                        <RiArrowDropDownLine />
                                                    </div>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className={`border-0 ${styles.location} ${styles.propertySize}`}>
                                        <div className='mt-1'>
                                            <PiSelectionBold />
                                        </div>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <div>
                                                <h3>{item.searchTitle}</h3>
                                                <Dropdown overlay={PropertySize} placement="bottom" trigger={['click']} className={styles.dropdown}>
                                                    <div className={styles.appartments}>
                                                        <p>{item.searchContent}</p>
                                                        <div>
                                                            <RiArrowDropDownLine />
                                                        </div>
                                                    </div>
                                                </Dropdown></div>
                                            {!filDtl &&
                                                <div className={styles.search}>
                                                    <GoSearch />
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                    {filDtl && (
                        <div className={` ${styles.filterItem}`}>
                            <div className={styles.filterschild}>
                                <div className={`${styles.locationPrnt}`}>
                                    <div className={styles.location}>
                                        <div>
                                            <BiLocationPlus />
                                        </div>
                                        <div className={styles.chsLoctn}>
                                            <h3>Bedroom</h3>
                                            <Dropdown overlay={Bedrooms} placement="bottom" trigger={['click']} className={styles.dropdown}>
                                                <div className={styles.appartments}>
                                                    <p>Bedroom</p>
                                                    <div>
                                                        <RiArrowDropDownLine />
                                                    </div>
                                                </div>
                                            </Dropdown>                                                </div>
                                    </div>
                                    <div className={styles.location}>
                                        <div>
                                            <TiHomeOutline />
                                        </div>
                                        <div className={styles.chsLoctn}>
                                            <h3>Bathrooms</h3>
                                            <Dropdown overlay={Bathrooms} placement="bottom" trigger={['click']} className={styles.dropdown}>
                                                <div className={styles.appartments}>
                                                    <p>Duplex House</p>
                                                    <div>
                                                        <RiArrowDropDownLine />
                                                    </div>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.locationPrnt}`}>
                                    <div className={`border-0 ${styles.location}`}>
                                        <div>
                                            <AiOutlineDollarCircle />
                                        </div>
                                        <div className={styles.chsLoctn}>
                                            <h3>Garage</h3>
                                            <Dropdown overlay={Garage} placement="bottom" trigger={['click']} className={styles.dropdown}>
                                                <div className={styles.appartments}>
                                                    <p>2 Garage</p>
                                                    <div>
                                                        <RiArrowDropDownLine />
                                                    </div>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className={`border-0 ${styles.location}`}>
                                        <div className={styles.button}>
                                            <button>Search Properties</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}