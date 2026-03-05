import { MapPin, Phone, Mail, Instagram, Linkedin, ChevronRight } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Coluna 1: Marca e Sobre */}
                <div className="flex flex-col space-y-4">
                    {/* Confirma se a imagem luxylogo.png está na pasta public */}
                    <img src="/luxylogo.png" alt="Luxy Service Logo" className="h-12 w-auto object-contain self-start" />
                    <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                        Soluções integradas em energia, infraestrutura e segurança.
                        Garantimos a excelência operacional para o seu negócio com uma gestão de facilities de alta performance.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Coluna 2: Links Rápidos */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Navegação</h3>
                    <ul className="space-y-2 text-sm">
                        {['Início', 'Quem Somos', 'Serviços', 'Portfólio', 'Contacto'].map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="flex items-center hover:text-white transition-colors group">
                                    <ChevronRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Coluna 3: As Nossas Soluções */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">As Nossas Soluções</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            'Manutenção Predial e Facilities',
                            'Instalação Elétrica e HVAC',
                            'Segurança e Controlo de Acesso',
                            'Sistemas Prediais e ETA/ETE'
                        ].map((service, index) => (
                            <li key={index} className="flex items-center text-slate-400 hover:text-white cursor-pointer transition-colors">
                                <ChevronRight className="w-4 h-4 mr-2 text-slate-600" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Coluna 4: Contactos */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Contactos</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" />
                            <span>
                                {/* Substituir pelo endereço real */}
                                [INSERIR ENDEREÇO DA LUXY SERVICE AQUI]
                            </span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                            {/* Substituir pelo telefone real */}
                            <span>[INSERIR TELEFONE AQUI]</span>
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                            <a href="mailto:contato@luxyservice.com.br" className="hover:text-white transition-colors">
                                contato@luxyservice.com.br
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Rodapé Inferior: Copyright e CNPJ */}
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {currentYear} Luxy Service. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0 font-mono">CNPJ: [INSERIR CNPJ AQUI]</p>
            </div>
        </footer>
    );
};