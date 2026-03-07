import React from 'react';

const faqData = [
    {
        question: "Quais serviços estão inclusos na Gestão Integrada?",
        answer: "Com uma equipe multidisciplinar, integramos diferentes serviços prediais: elétrica, refrigeração, limpeza, jardinagem, vigilância (controle de acesso), manutenção e operação de ETA/ETE."
    },
    {
        question: "Vocês atendem condomínios residenciais ou apenas empresas?",
        answer: "Atendemos tanto prédios, condomínios corporativos quanto industriais, oferecendo soluções escaláveis para serviços facilities e manutenção predial."
    },
    {
        question: "A Luxy Service realiza manutenção de Ar-Condicionado?",
        answer: "Sim! Trabalhamos com toda a rotina de manutenção e instalação de sistemas de Ar-Condicionado e HVAC para diferentes perfis de clientes."
    },
    {
        question: "Qual o diferencial da Luxy Service?",
        answer: "Reunimos múltiplas especialidades sob uma única gestão, garantindo organização, economia, qualidade e pontualidade, para resolver os problemas antes que se tornem dores de cabeça maiores."
    }
];

export const FaqSection = () => {
    return (
        <section className="w-full py-16 bg-white flex justify-center">
            <div className="max-w-4xl w-full px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
                    <p className="text-gray-600">Esclareça suas dúvidas sobre nossos serviços e operações.</p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <details
                            key={index}
                            className="group border border-gray-200 rounded-lg bg-gray-50 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between p-4 text-gray-900 font-medium">
                                <span>{item.question}</span>
                                <span className="transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="p-4 border-t border-gray-200 text-gray-600">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};