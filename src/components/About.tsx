import Title from './Title'
import BodyText from './BodyText'
import Button from './Button'

interface AboutProps {
    title: string
    subtitle?: string
    img: string
    text: string
    ctaText: string
    ctaHref: string
}

function About({ title, subtitle, img, text, ctaText, ctaHref }: AboutProps) {
    return (
        <>
            <div className="bg-sky-200 pt-24 dark:bg-sky-900">
                <div className="container grid lg:grid-cols-2 lg:gap-8">
                    <img src={img} alt="" className='-mt-32 w-full rounded-xl shadow-lg' id='about'/>
                    <div className="flex flex-col items-start">
                        <Title
                            text={title}
                            tag={'h2'}
                            className={
                                'text-xl text-sky-950 dark:text-sky-100 lg:col-start-2'
                            }
                        ></Title>
                        <Title
                            text={subtitle}
                            tag={'h3'}
                            className={
                                'text-4xl text-sky-950 dark:text-sky-100 lg:col-start-2'
                            }
                        ></Title>
                        <BodyText
                            className="mt-4 text-sky-900 dark:text-sky-200 lg:col-start-2 lg:text-left"
                            text={text}
                        ></BodyText>
                        <Button
                            text={ctaText}
                            variant={'primary'}
                            href={ctaHref}
                            className="mt-4 lg:col-start-2"
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
