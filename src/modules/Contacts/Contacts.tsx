import { RefObject, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'
import './contacts.scss'
import plane from '../../assets/plane.svg'

interface IContacts {
    contacts: RefObject<HTMLDivElement>
}

export const Contacts: React.FC<IContacts> = ({
    contacts,
}) => {

    const planeImage = useRef<HTMLImageElement>(null)
    window.addEventListener('mousemove', (e) => {
        if (planeImage.current) {
            planeImage.current.style.left = `calc(50% - ${(e as MouseEvent).clientX / 15}px)`
            planeImage.current.style.top = `calc(50% - ${(e as MouseEvent).clientY / 12.5}px)`
        }
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')

    return (
        <section className='container contacts-section' ref={contacts}>
            <div className='contacts-grid'>
                <div className='contacts-image-wrapper'>
                    <img className='contacts-image' ref={planeImage} src={plane} alt="plane" />
                </div>
                <div className='contacts-form-wrapper'>
                    <form
                        className='contacts-form'
                        action={`mailto:aleksandrmosiakin@gmail.com?subject=New project from ${name}&body=${details}`}
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
                        <Button content='Send' style={{ width: '100%', marginTop: 'auto' }} action={() => {}} />
                    </form>
                </div>
            </div>
        </section>
    )
}
