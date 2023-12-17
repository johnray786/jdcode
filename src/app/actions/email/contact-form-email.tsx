import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import {Tailwind} from '@react-email/tailwind';


type ContactFormEmailProps = {
    message:string;
    senderEmail:string;
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return <Html>
    <Head/>
    <Preview>New Message From Your Portfolio Site</Preview>
    <Tailwind>
        <Body className='bg-gradient-radial bg-gray-200'>
            <Container>
                <section className='bg-gray-100 border border-pink-800 my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-tight'>You received the following message from the contact form</Heading>
                    <Text>{message}</Text>
                    <Text>The sender's email is: {senderEmail}</Text>
                </section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}
