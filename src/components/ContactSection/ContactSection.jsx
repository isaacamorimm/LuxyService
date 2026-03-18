import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';
import api from '../../services/api'; // Importação da sua instância do Axios
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
    const [submitError, setSubmitError] = useState(false); // Estado para falhas na API

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onBlur" // Valida os campos assim que o usuário tira o foco deles
    });

    const onSubmit = async (data) => {
        setSubmitError(false); // Reseta o erro a cada nova tentativa
        
        try {
            // Chamada real para o seu backend Node.js
            await api.post('/contato', data);
            
            setIsSuccess(true);
            reset();
            
            // Oculta a mensagem de sucesso após 5 segundos
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Erro na comunicação com a API:", error);
            setSubmitError(true);
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.gridOverlayLight} />

            <div className={styles.container}>
                {/* Lado Esquerdo - Textos e Informações */}
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

                {/* Lado Direito - Formulário */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.formCard}
                >
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={styles.successOverlay}
                            >
                                <div className={styles.successIcon}><CheckCircle size={40} /></div>
                                <h3 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Transmissão Concluída</h3>
                                <p className={styles.description} style={{ marginBottom: 0 }}>Recebemos os seus dados. Um especialista entrará em contato em breve.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h3 className={styles.formTitle}>Formulário de Contato</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Nome Completo</label>
                                <input 
                                    id="name" 
                                    {...register("name")} 
                                    className={styles.input} 
                                    placeholder="Seu nome" 
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && <p className={styles.error} role="alert">{errors.name.message}</p>}
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="phone" className={styles.label}>Telefone / Celular</label>
                                <input 
                                    id="phone" 
                                    {...register("phone")} 
                                    className={styles.input} 
                                    placeholder="(00) 00000-0000" 
                                    aria-invalid={errors.phone ? "true" : "false"}
                                />
                                {errors.phone && <p className={styles.error} role="alert">{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>E-mail Corporativo</label>
                            <input 
                                id="email" 
                                type="email" 
                                {...register("email")} 
                                className={styles.input} 
                                placeholder="nome@empresa.com.br" 
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && <p className={styles.error} role="alert">{errors.email.message}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="service" className={styles.label}>Sistema de Interesse</label>
                            <select 
                                id="service" 
                                {...register("service")} 
                                className={styles.input}
                                aria-invalid={errors.service ? "true" : "false"}
                            >
                                <option value="">Selecione uma opção...</option>
                                <option value="predial">Manutenção Predial e Facilities</option>
                                <option value="eletrica">Instalação Elétrica e HVAC</option>
                                <option value="seguranca">Segurança e Controle de Acesso</option>
                                <option value="eta">Sistemas Prediais e ETA/ETE</option>
                                <option value="outro">Outro Assunto</option>
                            </select>
                            {errors.service && <p className={styles.error} role="alert">{errors.service.message}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>Escopo do Projeto</label>
                            <textarea 
                                id="message" 
                                rows={4} 
                                {...register("message")} 
                                className={styles.input} 
                                style={{ resize: 'none' }} 
                                placeholder="Descreva brevemente a sua necessidade..." 
                                aria-invalid={errors.message ? "true" : "false"}
                            />
                            {errors.message && <p className={styles.error} role="alert">{errors.message.message}</p>}
                        </div>

                        {submitError && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }} 
                                animate={{ opacity: 1, y: 0 }}
                                className={styles.error} 
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee2e2', borderRadius: '0.375rem', color: '#b91c1c' }}
                            >
                                <AlertTriangle size={20} />
                                <span style={{ fontSize: '0.875rem' }}>Ocorreu um erro ao enviar sua mensagem. Tente novamente.</span>
                            </motion.div>
                        )}

                        <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                            {isSubmitting ? (
                                <><Loader2 className={styles.spin} size={20} /> Processando...</>
                            ) : (
                                <><Send size={20} /> Enviar Solicitação</>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};