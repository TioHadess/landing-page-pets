"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Icon} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { title } from 'process'

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza da orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "R$50",
        icon: <Scissors/>,
        linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações."
    },
    {
        title: "Consulta veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatorias.",
        duration: "1h",
        price: "R$45",
        icon: <Syringe/>,
        linkText: "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações."
    },
    {
        title: "Táxi Pet",
        description: "Serviços de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não tem tempo ou transporte adequado para locomover os animais",
        duration: "2h",
        price: "R$80",
        icon: <CarTaxiFront/>,
        linkText: "Olá, vi no site sobre Táxi pet e gostaria de mais informações."
    },
    {
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros e confortáveis.",
        duration: "1D",
        price: "R$100",
        icon: <Hotel/>,
        linkText: "Olá, vi no site sobre Hotel para pets e gostaria de mais informações."
    }
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
            loop: false,
            align: "start",
            slidesToScroll: 1,
            breakpoints:{
                "(min-width: 768px)": { slidesToScroll: 3}
            }
    })

    return(
        <section className="bg-white py-16">

            <div className=" container mx-auto px-4">
                
                <div className=" mb-12">
                    <h2 className="text-4xl font-bold">Nossos serviços</h2>
                </div>

                <div className="relative">

                    <div className=' overflow-hidden' ref={emblaRef}>

                        <div className='flex'>
                            {services.map((item, index) =>(
                                <div key={index} className='flex-[0_0)100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className=''>

                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}