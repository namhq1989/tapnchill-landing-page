import { Link } from 'wouter'

const Tnc = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Link to='/'>
        <h2 className='mb-8 text-primary text-xl'>Home</h2>
      </Link>

      <header className='mb-8'>
        <h1 className='text-3xl font-bold'>Terms & Conditions</h1>
        <p>Effective Date: November, 2024</p>
      </header>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>1. Features and Services</h2>
        <p className='mt-4'>BapBi operates on a freemium model:</p>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            Users can access the <strong>Free Plan</strong>, which provides
            essential features at no cost.
          </li>
          <li>
            To access enhanced features and remove limitations, users may choose
            to subscribe to the <strong>Pro Plan</strong>.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>2. User Responsibilities</h2>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            You are responsible for ensuring your device meets the minimum
            requirements for running the Extension.
          </li>
          <li>
            You are responsible for keeping the Extension up to date to ensure
            optimal functionality.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>
          3. Liability and Warranty Disclaimer
        </h2>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            The Extension is provided <strong>"as is"</strong> and without any
            warranties, express or implied.
          </li>
          <li>
            We do not guarantee uninterrupted or error-free functionality, nor
            do we warrant that the Extension will meet all user requirements.
          </li>
          <li>
            To the maximum extent permitted by law, we are not liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of the Extension.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>4. Third-Party Services</h2>
        <p className='mt-4'>
          The Extension may integrate with or rely on third-party services or
          APIs:
        </p>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            By using the Extension, you agree to comply with the terms and
            conditions of these third-party services.
          </li>
          <li>
            We are not responsible for the performance, availability, or content
            provided by any third-party services.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>5. Refund Policy</h2>
        <p className='mt-4'>
          We want you to be satisfied with your purchase. If you are not
          satisfied, refunds are subject to the following conditions:
        </p>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            Refunds are only available for the Pro Plan and must be requested
            within 14 days of purchase.
          </li>
          <li>
            To request a refund, please contact us at{' '}
            <a href='mailto:hi@bapbi.app' className='text-primary'>
              hi@bapbi.app
            </a>{' '}
            with your purchase details.
          </li>
          <li>Refunds may take 5-10 business days to process.</li>
          <li>
            No refunds will be issued for improper use of the Extension or
            violation of the Terms & Conditions.
          </li>
        </ul>
        <p className='mt-4'>
          Payments are securely processed through Paddle, and any disputes or
          inquiries related to payments should be directed to them.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>6. Changes to These Terms</h2>
        <p className='mt-4'>
          We reserve the right to update or modify these Terms at any time. Any
          changes will be posted here, and the "Effective Date" will be updated
          accordingly. Continued use of the Extension after changes are posted
          constitutes your acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold'>6. Contact Us</h2>
        <p className='mt-4'>
          If you have any questions, concerns, or feedback about these Terms or
          the Extension, please reach out to us at:
        </p>
        <ul className='mt-4 list-none'>
          <li>
            <strong>Email:</strong>{' '}
            <a href='mailto:hi@bapbi.app' className='text-primary'>
              hi@bapbi.app
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Tnc
