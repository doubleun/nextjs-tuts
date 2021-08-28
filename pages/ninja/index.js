import NinjaCSS from "../../styles/Ninja.module.css"
import Link from 'next/link'

export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      ninjas: data,
    }
  }

}

const Ninja = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link key={ninja.id} href={'/ninja/'+ninja.id}>
          <a className={NinjaCSS.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninja
