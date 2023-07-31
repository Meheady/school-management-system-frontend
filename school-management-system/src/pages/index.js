import Layout from "../layout/layout";


export default function Home() {
  return (
    <>
      <h2>Dashboard</h2>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}
