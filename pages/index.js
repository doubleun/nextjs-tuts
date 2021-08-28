import Head from 'next/head'
import Link from "next/link"
import HomeCSS from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={HomeCSS.title}>Homepage</h1>
        <p className={HomeCSS.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perspiciatis nostrum repudiandae voluptate vitae maxime ipsum, aliquam assumenda eligendi! Velit nobis tempora expedita ducimus iure eligendi sed totam facilis temporibus.</p>  
        <p className={HomeCSS.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perspiciatis nostrum repudiandae voluptate vitae maxime ipsum, aliquam assumenda eligendi! Velit nobis tempora expedita ducimus iure eligendi sed totam facilis temporibus.</p>  
        <Link href="/ninja">
          <a className={HomeCSS.btn}>
            See Ninja Listing
          </a>
        </Link>
      </div>
    </>
  )
}
