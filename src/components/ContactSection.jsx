import { Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '../lib/utils';


const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setTimeout(() =>{

        },1500)
    }   

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30' >
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    If you have any questions or just want to say hi, feel free to reach out!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' /> {" "}
                                </div>
                                <div >
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:sreeharriharaun@gamil,com" className='text-muted-foreground hover:text-primary transition-colors'>sreeharriharaun@gmail.com</a>
                                </div>

                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' /> {" "}
                                </div>
                                <div >
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+4915510526628" className='text-muted-foreground hover:text-primary transition-colors'>+49 151 10526628</a>
                                </div>

                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' /> {" "}
                                </div>
                                <div >
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>Wiemer, Germany</a>
                                </div>

                            </div>

                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://www.linkedin.com/in/sree-harri-haraun-t-663096221/' target='_blank' rel='noopener noreferrer'>
                                    <Linkedin />
                                </a>
                                <a href='https://www.instagram.com/sreeharri_27/' target='_blank' rel='noopener noreferrer'>
                                    <Instagram />
                                </a>
                                <a
                                    href='https://wa.me/9110658610' // replace with your actual phone number
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FaWhatsapp size={24} color='#25D366' />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'> Your Name</label>
                                <input 
                                type="text"
                                id='name'
                                name='name'
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background text-center focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='Sree Harri ...'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'> Your Email</label>
                                <input 
                                type="email"
                                id='email'
                                name='email'
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background text-center focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='john@example.com'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'> Your Message</label>
                                <textarea
                                id='message'
                                name='message'
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background text-center focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                placeholder='Hello, I am interested in...'
                                />
                            </div>

                           <button type='submit' className={cn(' cosmic-button w-full flex items-center justify-center gap-2'
                            , 
                           )}>
                            Send Message
                           <Send size={16} />
                           </button>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection
