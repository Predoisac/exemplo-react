import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import Images from './components/Images'
import Form from './components/Forms'

function App() {
  return (
    <>
      <Header/>
      <main>
        <List titulo={'Banana'}/>
        <Images/>
        <Form/>
      </main>
      <Footer/>
    </>
  )
}

export default App
