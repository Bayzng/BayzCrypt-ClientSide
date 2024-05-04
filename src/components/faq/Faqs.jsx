import React from 'react'
import './Faq.scss'
import FAQ from './Faq';

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is BayzCrypt decentralized crypto wallet works?',
      answer: "BayzCrypt is a decentralized wallet that enables users to effortlessly transfer and send their ERC-20 coins to various wallets worldwide. To enhance the user's experience, we are currently developing the platform to include GIFs, which will make using the platform more enjoyable and exciting."
    },
    {
      id: 2,
      question: 'How does BayzCrypt decentralized crypto wallet works?',
      answer: `BayzCrypt decentralized cryptocurrency wallet is a non-custodial wallet that gives you full control over your private keys. This means that you are the only one who can access your funds, and no third party is involved. Decentralized wallets are often software wallets that can be downloaded to your computer or mobile device.`
    },
    {
      id: 3,
      question: 'How can I join the decentralized crypto wallet?',
      answer: ``
    },
    {
      id: 4,
      question: 'Can I check my transaction on Etherscan?',
      answer: `Yes, transaction on BayzCrypt can be check and verify on the Etherscan`
    },
  ];

  return (
    <section className="faqs container top">
    
      <h1>FAQs</h1>

      <div className="faqsWrapper">

        {faqs.map(({ question, answer, id }) => (
          <FAQ key={id} question={question} answer={answer} />
        ))}

      </div>

    </section>
  )
}

export default Faqs