import { RefObject, useRef } from 'react'
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
            planeImage.current.style.left = `${(e as MouseEvent).clientX / 10}px`
            planeImage.current.style.top = `${(e as MouseEvent).clientY / 10}px`
        }
    })

    return (
        <section className='container contacts-section' ref={contacts}>
            <div className='contacts-grid'>
                <div className='contacts-image-wrapper'>
                    <img className='contacts-image' ref={planeImage} src={plane} alt="plane" />
                </div>
                <div className='contacts-form-wrapper'>
                    <form className='contacts-form' action="" method="post">
                        <Input
                            style={{ width: '100%', marginBottom: '1.69dvw' }}
                            placeholder='Name'
                        />
                        <Input
                            style={{ width: '100%', marginBottom: '1.69dvw' }}
                            placeholder='Email'
                        />
                        <Textarea
                            style={{ width: '100%', marginBottom: '1.69dvw' }}
                            placeholder='Project details'
                        />
                        <Button content='Send' style={{ width: '100%', marginTop: 'auto' }} action={() => {}}/>
                    </form>
                </div>
            </div>
        </section>
    )
}
