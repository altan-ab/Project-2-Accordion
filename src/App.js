import { useState } from 'react'

const App = () => {
  return (
    <div className="App">
      <h1 className="header-one">Project 2: SSS/Accordion</h1>
      <AccordionList />
    </div>
  )
}

const faqData = [
  {
    question: 'Ürün kaliteli mi?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor ligula in purus pharetra consequat nec eget tellus. Vestibulum aliquet justo a mauris malesuada interdum.',
  },
  {
    question: 'Fiyatı ne kadar?',
    answer: 'Fiyat bilgisi ürün detay sayfasında yer almaktadır.',
  },
  {
    question: 'Ne zaman ulaşır?',
    answer: 'Kargolama süresi genellikle 2-3 iş günüdür.',
  },
]

function AccordionList() {
  return (
    <div className="accordion-list">
      <h2 className="header-two">Sıkça Sorulan Sorular</h2>
      {faqData.map((item, index) => (
        <Accordion key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <button>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default App
