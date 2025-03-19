import { Link } from 'wouter'

const Policy = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Link to='/'>
        <h2 className='mb-8 text-primary text-xl'>Home</h2>
      </Link>

      <header className='mb-8'>
        <h1 className='text-3xl font-bold'>Privacy Policy</h1>
        <p>Effective Date: March, 2025</p>
      </header>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>Introduction</h2>
        <p className='mt-4'>
          Welcome to BapBi and WordDrop! This Privacy Policy explains how we collect, use, 
          and protect your information when you use our Chrome extensions. By using either extension, 
          you agree to the terms outlined below.
        </p>
        <p className='mt-2'>
          For more information, visit our website:{' '}
          <a href='https://bapbi.app' className='text-primary'>https://bapbi.app</a> or contact us at{' '}
          <a href='mailto:hi@bapbi.app' className='text-primary'>hi@bapbi.app</a>.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>Our Extensions</h2>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            <strong>BapBi:</strong> An extension designed to boost your productivity and bring relaxation to your day!
          </li>
          <li>
            <strong>WordDrop:</strong> A vocabulary-building extension that introduces new words through real-time news context.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>1. Information We Collect</h2>
        <h3 className='text-xl font-semibold mt-4'>Common to Both Extensions:</h3>
        <ul className='mt-2 list-disc list-inside'>
          <li>
            <strong>Local Data:</strong> Information stored locally on your
            device, such as settings and preferences.
          </li>
        </ul>
        
        <h3 className='text-xl font-semibold mt-4'>BapBi Specific:</h3>
        <ul className='mt-2 list-disc list-inside'>
          <li>
            <strong>Local Data:</strong> Tasks and workflow information stored on your device.
          </li>
          <li>
            <strong>Server-Sent Data:</strong> Non-sensitive information may be
            sent to our servers to provide functionality and improve
            performance. This data is minimal and does not include personal or
            sensitive information.
          </li>
        </ul>

        <h3 className='text-xl font-semibold mt-4'>WordDrop Specific:</h3>
        <ul className='mt-2 list-disc list-inside'>
          <li>
            <strong>Local Data:</strong> Bookmarked vocabulary words and notification frequency preferences.
          </li>
          <li>
            <strong>Server-Sent Data:</strong> News content to extract vocabulary words and examples. 
            This process does not collect or store personal information.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>2. How We Use Your Information</h2>
        <p className='mt-4'>
          The information we collect is used solely for the following purposes:
        </p>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            Enhancing the functionality and user experience of our extensions.
          </li>
          <li>
            Providing personalized vocabulary learning (WordDrop).
          </li>
          <li>
            Delivering notifications based on user preferences (WordDrop).
          </li>
          <li>
            Resolving bugs or issues reported by users.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>3. Data Sharing</h2>
        <p className='mt-4'>
          We do <strong>not</strong> share, sell, or rent your information to
          any third parties. All data sent to our servers is used only by us and
          strictly for the purposes mentioned above.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>4. Data Security</h2>
        <p className='mt-4'>We prioritize the security of your data:</p>
        <ul className='mt-4 list-disc list-inside'>
          <li>Local data is stored securely on your device.</li>
          <li>
            Server data is transmitted over encrypted connections and stored
            with industry-standard security measures.
          </li>
        </ul>
        <p className='mt-4'>
          However, no system is completely secure. While we strive to protect
          your information, we cannot guarantee absolute security.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>5. Your Rights</h2>
        <ul className='mt-4 list-disc list-inside'>
          <li>
            <strong>Manage Local Data:</strong> You can modify or delete
            information stored locally through each extension's settings.
          </li>
          <li>
            <strong>Request Assistance:</strong> Contact us at{' '}
            <a className='text-primary' href='mailto:hi@bapbi.app'>hi@bapbi.app</a> for questions or
            concerns about your data.
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>6. Changes to This Policy</h2>
        <p className='mt-4'>
          We may update this Privacy Policy periodically. Any changes will be
          posted here, and the "Effective Date" will be updated accordingly.
          Please review this page regularly to stay informed about how your data
          is handled.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold'>7. Contact Us</h2>
        <p className='mt-4'>
          If you have any questions, concerns, or feedback about this Privacy
          Policy or either extension, please reach out to us at:
        </p>
        <ul className='mt-4 list-none'>
          <li>
            <strong>Email:</strong>{' '}
            <a href='mailto:hi@bapbi.app' className='text-primary'>
              hi@bapbi.app
            </a>
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a href='https://bapbi.app' className='text-primary'>
              https://bapbi.app
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Policy