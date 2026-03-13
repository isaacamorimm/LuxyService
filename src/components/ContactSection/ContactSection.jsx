import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import styles from './ContactSection.module.css';

const contactSchema = z.object({
    name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Insira um e-mail válido" }),
    phone: z.string().min(8, { message: "Telefone inválido" }),
    service: z.enum(["predial", "eletrica", "seguranca", "eta", "outro"], {
        errorMap: () => ({ message: "Selecione um tipo de serviço" }),
    }),
    message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

export const ContactSection = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.gridOverlayLight} />

            <div className={styles.container}>
                {/* Lado Esquerdo - Textos e Informações (Animado) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.badge}>
                        <div className={styles.badgeIcon} /> Comunicação Ativa
                    </div>
                    <h2 className={styles.title}>Inicie o seu <br /><span className={styles.highlight}>Projeto.</span></h2>
                    <p className={styles.description}>
                        A nossa equipa de engenharia está pronta para analisar a sua infraestrutura e desenhar a solução tecnológica mais eficiente para o seu negócio.
                    </p>

                    <div className={styles.infoGroup}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><Phone size={24} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className={styles.infoTitle}>Linha Direta</h4>
                                <p className={styles.infoText}>0800 704 2767</p>
                                <p className={styles.infoSubtext}>(11) 99999-9999</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><Mail size={24} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className={styles.infoTitle}>Correio Eletrónico</h4>
                                <p className={styles.infoText}>contato@luxyservice.com.br</p>
                                <p className={styles.infoSubtext}>comercial@luxyservice.com.br</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><MapPin size={24} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className={styles.infoTitle}>Sede Operacional</h4>
                                <p className={styles.infoText}>Av. Paulista, 1000 - Bela Vista</p>
                                <p className={styles.infoSubtext}>São Paulo - SP, 01310-100</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Lado Direito - Formulário (Animado) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.formCard}
                >
                    {isSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={styles.successOverlay}
                        >
                            <div className={styles.successIcon}><CheckCircle size={40} /></div>
                            <h3 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Transmissão Concluída</h3>
                            <p className={styles.description} style={{ marginBottom: 0 }}>Recebemos os seus dados. Um especialista entrará em contato em breve.</p>
                        </motion.div>
                    )}

                    <h3 className={styles.formTitle}>Formulário de Contato</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Nome Completo</label>
                                <input id="name" {...register("name")} className={styles.input} placeholder="Seu nome" />
                                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="phone" className={styles.label}>Telefone / Celular</label>
                                <input id="phone" {...register("phone")} className={styles.input} placeholder="(00) 00000-0000" />
                                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>E-mail Corporativo</label>
                            <input id="email" type="email" {...register("email")} className={styles.input} placeholder="nome@empresa.com.br" />
                            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="service" className={styles.label}>Sistema de Interesse</label>
                            <select id="service" {...register("service")} className={styles.input}>
                                <option value="">Selecione uma opção...</option>
                                <option value="predial">Manutenção Predial e Facilities</option>
                                <option value="eletrica">Instalação Elétrica e HVAC</option>
                                <option value="seguranca">Segurança e Controle de Acesso</option>
                                <option value="eta">Sistemas Prediais e ETA/ETE</option>
                                <option value="outro">Outro Assunto</option>
                            </select>
                            {errors.service && <p className={styles.error}>{errors.service.message}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>Escopo do Projeto</label>
                            <textarea id="message" rows={4} {...register("message")} className={styles.input} style={{ resize: 'none' }} placeholder="Descreva brevemente a sua necessidade..." />
                            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                        </div>

                        <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                            {isSubmitting ? (<><Loader2 className={styles.spin} size={20} /> Processando...</>) : (<>Enviar Solicitação <Send size={20} /></>)}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};