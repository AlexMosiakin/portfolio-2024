import { RefObject, useLayoutEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'
import './contacts.scss'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
gsap.registerPlugin(ScrollTrigger);

interface IContacts {
    contacts: RefObject<HTMLDivElement>
}

export const Contacts: React.FC<IContacts> = ({
    contacts,
}) => {

    const planeImage = useRef<HTMLImageElement>(null)
    const contactForm = useRef(null);

    window.addEventListener('mousemove', (e) => {
        if (planeImage.current) {
            planeImage.current.style.left = `calc(50% - ${(e as MouseEvent).clientX / 15}px)`
            planeImage.current.style.top = `calc(50% - ${(e as MouseEvent).clientY / 12.5}px)`
        }
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')
    const [isFormLoading, setIsFormLoading] = useState(false)

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setIsFormLoading(true)
        e.preventDefault()

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
            name,
            email,
            details
        }, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setName('')
                setEmail('')
                setDetails('')
            },
            (err) => {
                console.log('FAILED...', err);
            },
        ).finally(() => {
            setIsFormLoading(false)
        })
    }

    useLayoutEffect(() => {
        const form = contactForm.current;
        const plane = planeImage.current?.children[0];

        if (plane) {
            gsap.fromTo(
                plane,
                {
                    clipPath: 'inset(100%)',
                },
                {
                    clipPath: 'inset(0%)',
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: plane,
                        start: 'top 50%',
                    },
                }
            );
        }
        gsap.fromTo(
            form,
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                delay: 0.5,
                duration: 0.5,
                scrollTrigger: {
                    trigger: plane,
                    start: 'top 50%',
                },
            }
        );
    }, []);

    return (
        <section className='container contacts-section' ref={contacts}>
            <div className='contacts-grid'>
                <div className='contacts-image-wrapper' >
                    <div ref={planeImage}>
                        <svg className='contacts-image' viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41 325.5L143 244" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M45 452L147 370.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M187 407L289 325.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M156 223L58 177L470.5 59M156 223L187 345.5M156 223L470.5 59M187 345.5L245.5 285M187 345.5L199.5 261M245.5 285L336.5 326L470.5 59M245.5 285L199.5 261M470.5 59L199.5 261" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='contacts-form-wrapper' ref={contactForm}>
                    <form
                        className='contacts-form'
                        onSubmit={onFormSubmit}
                    >
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', marginBottom: '1.69lvw' }}
                            placeholder='Name'
                        />
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', marginBottom: '1.69lvw' }}
                            placeholder='Email'
                        />
                        <Textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            style={{ width: '100%', marginBottom: '1.69lvw' }}
                            placeholder='Project details'
                        />
                        <Button content='Send' style={{ width: '100%', marginTop: 'auto' }} disabled={isFormLoading} />
                    </form>
                </div>
            </div>
        </section>
    )
}
