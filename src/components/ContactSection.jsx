import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

// Zod Schema Validation
const contactSchema = z.object({
    name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Insira um e-mail válido" }),
    phone: z.string().min(8, { message: "Telefone inválido" }),
    service: z.enum(["cftv", "solar", "automacao", "redes", "outro"], {
        errorMap: () => ({ message: "Selecione um tipo de serviço" }),
    }),
    message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

const ContactSection = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">

                {/* Helper Content */}
                <div>
                    <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Fale Conosco</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Vamos tirar seu projeto do papel?</h2>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        Preencha o formulário e nossa equipe de engenharia entrará em contato para entender suas necessidades e apresentar a melhor solução.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</h4>
                                <p className="text-gray-600">0800 704 2767</p>
                                <p className="text-gray-500 text-sm">(11) 99999-9999</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                                <p className="text-gray-600 mb-1">contato@luxyservice.com.br</p>
                                <p className="text-gray-500 text-sm">comercial@luxyservice.com.br</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Visite-nos</h4>
                                <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                                <p className="text-gray-500 text-sm">São Paulo - SP, 01310-100</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative">

                    {isSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                            <p className="text-gray-600">Obrigado pelo contato. Retornaremos em breve.</p>
                        </motion.div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome Completo</label>
                                <input
                                    id="name"
                                    {...register("name")}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="Seu nome"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefone / Celular</label>
                                <input
                                    id="phone"
                                    {...register("phone")}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="(00) 00000-0000"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail Corporativo</label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                                placeholder="nome@empresa.com.br"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-gray-700">Interesse</label>
                            <select
                                id="service"
                                {...register("service")}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-600 bg-white"
                            >
                                <option value="">Selecione um serviço...</option>
                                <option value="cftv">Segurança Eletrônica (CFTV)</option>
                                <option value="solar">Energia Solar</option>
                                <option value="automacao">Automação</option>
                                <option value="redes">Infraestrutura de Redes</option>
                                <option value="outro">Outro Assunto</option>
                            </select>
                            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea
                                id="message"
                                rows={4}
                                {...register("message")}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                                placeholder="Descreva brevemente seu projeto..."
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar Mensagem
                                    <Send size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
