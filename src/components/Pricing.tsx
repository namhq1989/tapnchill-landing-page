import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  id: string
  title: string
  popular: PopularPlanType
  price: number
  description: string
  buttonText: string
  benefitList: string[]
}

const pricingList: PricingProps[] = [
  {
    id: 'free',
    title: 'Free',
    popular: 0,
    price: 0,
    description:
      'Get started with essential features for productivity and relaxation',
    buttonText: 'Free to use',
    benefitList: [
      "Access to all radio stations",
      "Play 1 ambient sound at a time",
      "Track up to 5 habits",
      "Manage up to 5 goals",
      "Create up to 20 tasks per goal",
      "Access to all basic features",
    ]
  },
  {
    id: 'pro',
    title: 'Pro',
    popular: 1,
    price: 3,
    description:
      'Upgrade for more habits, goals, and tasks with the same great features',
    buttonText: 'Upgrade',
    benefitList: [
      "Access to all radio stations",
      "Play unlimited ambient sounds",
      "Track up to 20 habits",
      "Manage up to 20 goals",
      "Create up to 50 tasks per goal",
      "Full access to all premium features",
    ],
  },
  // {
  //   title: "Enterprise",
  //   popular: 0,
  //   price: 40,
  //   description:
  //     "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  //   buttonText: "Contact US",
  //   benefitList: [
  //     "10 Team member",
  //     "8 GB Storage",
  //     "Upto 10 pages",
  //     "Priority support",
  //     "lorem ipsum dolor",
  //   ],
  // },
]

export const Pricing = () => {
  return (
    <section id='pricing' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Simple Pricing
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          Unlimited{' '}
        </span>
        Access
      </h2>
      <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
        Pick a plan and enjoy productivity without limits
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : ''
            }
          >
            <CardHeader>
              <CardTitle className='flex item-center justify-between'>
                {pricing.title}
                {/*{pricing.popular === PopularPlanType.YES ? (*/}
                {/*  <Badge variant='secondary' className='text-sm text-primary'>*/}
                {/*    Most popular*/}
                {/*  </Badge>*/}
                {/*) : null}*/}
              </CardTitle>
              {
                pricing.id === 'free' ? (
                    <div>
                      <span className="text-3xl font-bold">${pricing.price}</span>
                      <span className="text-muted-foreground"> /month</span>
                    </div>
                ) : (
                  <div className='flex flex-row gap-4 items-end'>
                    <div>
                      <span className="text-3xl font-bold">${pricing.price}</span>
                      <span className="text-muted-foreground"> /month</span>
                    </div>

                    <span className='text-xl'> OR</span>

                    <div>
                      <span className="text-3xl font-bold">$30</span>
                      <span className="text-muted-foreground"> /year</span>
                      <span className="font-bold"> (-20%)</span>
                    </div>
                  </div>
                )
              }

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full" variant={pricing.id === 'free' ? 'outline' : 'default'}>{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
            <div className='space-y-4'>
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className='flex'>
                    <Check className='text-green-500' />{' '}
                    <h3 className='ml-2'>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
