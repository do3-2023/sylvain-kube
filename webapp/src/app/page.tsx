import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="container">
        <h1>Welcome to the Website That Decides Your Next Drink</h1>
        <Link href={'/alcohols'} className="random-button">Go get a random alcohol..</Link>
      </div>
    </main>
  )
}
