import { Button, Checkbox, Input } from 'antd'
import styles from './style.module.scss'
import LogoSection from '@/app/common components/partner'
import Link from 'next/link'
import Pageheader from '@/app/common components/pageHeader'

function Login() {

    const data = {
        title: 'Login',
        mainTitle: 'Login now',
      }
    return (
        <div>
            <Pageheader data = {data} />
            <div className={styles.main}>
                <div className={styles.container1}>
                    <h1>Login to Bary.</h1>
                    <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get.</p>
                    <Input size='large' placeholder='Username' />
                    <Input size='large' placeholder='Password' />
                    <div className={styles.remember}>
                        <Checkbox>Remember me</Checkbox>
                        <a href="">Forgot Password</a>
                    </div>
                    <div className={styles.buttons}>
                        <button>Login</button>
                        <button><Link href='/routes/register'>Regiter</Link></button>
                    </div>
                </div>
                <div className={styles.container2}>
                    <img src="/login/image.webp" alt="" />
                </div>
                <LogoSection />
            </div>
        </div>
    )
}

export default Login