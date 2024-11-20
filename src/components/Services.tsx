import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ChartIcon, MapIcon, PlaneIcon } from './Icons'
import cubeLeg from '../assets/cube-leg.png'

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

const serviceList: ServiceProps[] = [
  {
    title: 'Tune In to Your Flow',
    description:
      'Discover a variety of radio stations and ambient sounds to set the perfect mood for work, relaxation, or focus. Tailor your soundscape and let the rhythm guide your day',
    icon: <ChartIcon />,
  },
  {
    title: 'Master Your Habits',
    description:
      'Track your daily habits and build lasting routines. With easy-to-use tools and clear progress insights, stay motivated and achieve your goals effortlessly',
    icon: <PlaneIcon />,
  },
  {
    title: 'Simplify Task Management',
    description:
      'Organize your tasks seamlessly and keep everything on track. Whether it’s work or personal, manage it all in one place and reclaim control of your time',
    icon: <MapIcon />,
  },
]

export const Services = () => {
  return (
    <section className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              Productivity and Relaxation{' '}
            </span>
            Hub
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            Streamline your tasks, track habits, and unwind with sounds tailored
            to you
          </p>

          <div className='flex flex-col gap-8'>
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
                  <div className='mt-1 bg-primary/20 p-1 rounded-2xl'>
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className='text-md mt-2'>
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className='w-[300px] md:w-[500px] lg:w-[600px] object-contain'
          alt='About services'
        />
      </div>
    </section>
  )
}
