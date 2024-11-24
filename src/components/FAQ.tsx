import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQProps {
  question: string
  answer: string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: 'What platforms is the app available on?',
    answer:
      'Currently, the app is available as a Chrome extension. Mobile and desktop apps will be released soon.',
    value: 'item-1',
  },
  {
    question: 'Can I use the app for free?',
    answer:
      'Yes, the app is free to use, and users can upgrade to the Pro plan for extended features. Free users can fully enjoy the app without needing to purchase the Pro plan.',
    value: 'item-2',
  },
  {
    question: 'How can I track my habits?',
    answer:
      'Use the habit tracker to set goals, log daily progress, and monitor streaks with detailed stats.',
    value: 'item-4',
  },
  {
    question: 'Can I customize the ambient sounds?',
    answer:
      'Absolutely! Mix and match ambient sounds to create your perfect relaxation or focus atmosphere.',
    value: 'item-5',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes, your data is securely stored and never shared without your consent.',
    value: 'item-6',
  },
  {
    question: 'How can I sync data between devices?',
    answer:
      'If you want to keep your tasks, habits, and preferences consistent across all your devices, you’ll need to log in to your account. This ensures everything stays up to date no matter where you access the app.',
    value: 'item-7',
  },
]

export const FAQ = () => {
  return (
    <section id='faq' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        Frequently Asked{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Questions
        </span>
      </h2>

      <Accordion type='single' collapsible className='w-full AccordionRoot'>
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className='text-left'>
              {question}
            </AccordionTrigger>

            <AccordionContent className='leading-6'>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className='font-medium mt-4'>
        Still have questions?{' '}
        <a
          rel='noreferrer noopener'
          href='mailto:hi@bapbi.app'
          className='text-primary transition-all border-primary hover:border-b-2'
        >
          Contact us
        </a>
      </h3>
    </section>
  )
}
