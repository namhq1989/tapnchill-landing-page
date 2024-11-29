import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const features: FeatureProps[] = [
  {
    title: 'Stay Organized, Stay Ahead',
    description:
      'Manage your goals and tasks effortlessly, keeping everything on track and within reach',
    image: 'https://i.bapbi.app/ldp-ss-task.png',
  },
  {
    title: 'Build Better Routines',
    description:
      'Track your habits, maintain streaks, and achieve your personal growth goals with ease',
    image: 'https://i.bapbi.app/ldp-ss-habit.png',
  },
  {
    title: 'Enhance Your Experience',
    description:
      'From relaxing ambient sounds to personalized insights, explore tools designed to help you unwind and focus',
    image: 'https://i.bapbi.app/ldp-ss-stats.png',
  },
]

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

export const Features = () => {
  return (
    <section id='features' className='container py-24 sm:py-32 space-y-8'>
      <h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
        Many{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Great Features
        </span>
      </h2>

      {/*<div className="flex flex-wrap md:justify-center gap-4">*/}
      {/*  {featureList.map((feature: string) => (*/}
      {/*    <div key={feature}>*/}
      {/*      <Badge*/}
      {/*        variant="secondary"*/}
      {/*        className="text-sm"*/}
      {/*      >*/}
      {/*        {feature}*/}
      {/*      </Badge>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className='min-h-[120px]'>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt='About feature'
                className='sm:w-[200px] w-full lg:w-[300px] mx-auto border border-primary'
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
