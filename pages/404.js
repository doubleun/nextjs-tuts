import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <div className="not-found">
      <h1>404 not found</h1>
      <h2>That page does not exists</h2>
      <p>
        Go back to the 
        <Link href="/">
          <a>
            Homepage
          </a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
