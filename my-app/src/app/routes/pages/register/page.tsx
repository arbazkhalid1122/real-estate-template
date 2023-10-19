import { Button, Checkbox, Input } from 'antd'
import styles from './style.module.scss'
import LogoSection from '@/app/common components/partner'
import Link from 'next/link'

function Login() {

    return (
        <div>
            <div>
                <div className={styles.register}>
                    <p>Register</p>
                    <h1>Register now!</h1>
                    <p>Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like</p>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.container1}>
                    <h1>Create Account.</h1>
                    <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get.</p>
                    <Input size='large' placeholder='Username' />
                    <Input size='large' placeholder='Email' type='email' />
                    <Input size='large' placeholder='Password' type='password' />
                    <Input size='large' placeholder='Password' type='password' />
                    <div className={styles.remember}>
                        <Checkbox>I agree with the <span className={styles.span}>Terms & Conditions</span></Checkbox>
                    </div>
                    <div className={styles.buttons}>
                        <button>Register</button>
                        <span>Already have an Account? <Link href="/routes/login">Login</Link></span>
                    </div>
                </div>
                <div className={styles.container2}>
                    <img src="/login/image2.webp" alt="" />
                </div>
                <LogoSection />
            </div>
        </div>
    )
}

export default Login