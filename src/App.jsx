import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import './global.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            // author="Jonatas Bueno"
            // content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw #rocketsea"
          />
          <Post
            // author="Jonatas Bueno"
            // content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw #rocketsea"
          />
        </main>
      </div>
    </>
  )
}

export default App
