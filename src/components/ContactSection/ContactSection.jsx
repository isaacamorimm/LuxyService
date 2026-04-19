import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, User, AlertTriangle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactSection.module.css';
import api from '../../services/api';

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
    const [submitError, setSubmitError] = useState(false);

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onBlur"
    });

    const onSubmit = async (data) => {
        setSubmitError(false);
        try {
            await api.post('/contact', data);
            
            // Dispara o alerta verde flutuante
            toast.success('Formulário enviado com sucesso! Entraremos em contato.', {
                duration: 5000,
                position: 'bottom-right',
                style: {
                    background: '#10b981',
                    color: '#fff',
                },
            });
            
            reset();
        } catch (error) {
            console.error("Erro na comunicação com a API:", error.response?.data || error.message);
            setSubmitError(true);
            
            // Dispara o alerta vermelho flutuante
            toast.error('Erro ao enviar. Verifique se o servidor está rodando.', {
                duration: 5000,
                position: 'bottom-right',
            });
        }
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
                                <p className={styles.infoText}>(11) 9 9280-1900</p>
                                <p className={styles.infoSubtext}>Atendimento</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><Mail size={24} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className={styles.infoTitle}>Correio Eletrónico</h4>
                                <p className={styles.infoText}>comercial@luxysolar.com.br</p>
                                <p className={styles.infoSubtext}>contato@luxysolar.com.br</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><MapPin size={24} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className={styles.infoTitle}>Sede Operacional</h4>
                                <p className={styles.infoText}>Rua Da Rancheira 170, Jardim Santo Antonio</p>
                                <p className={styles.infoSubtext}>São Paulo - SP, 08032-220</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><User size={24} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className={styles.infoTitle}>Diretoria</h4>
                                <p className={styles.infoText}>Bruno Gaspar Pessotti</p>
                                <p className={styles.infoSubtext}>Diretor Técnico • bruno@luxysolar.com.br</p>
                                <br/>
                                <p className={styles.infoText}>Luís Carlos L. Mesquita Jr.</p>
                                <p className={styles.infoSubtext}>Diretor Comercial • luis@luxysolar.com.br</p>
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
                    <h3 className={styles.formTitle}>Formulário de Contato</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
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

                        {submitError && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }} 
                                animate={{ opacity: 1, y: 0 }}
                                className={styles.error} 
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee2e2', borderRadius: '0.375rem', color: '#b91c1c' }}
                            >
                                <AlertTriangle size={20} />
                                <span style={{ fontSize: '0.875rem' }}>Erro ao enviar. Verifique se a API está rodando.</span>
                            </motion.div>
                        )}

                        <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                            {isSubmitting ? (<><Loader2 className={styles.spin} size={20} /> Processando...</>) : (<>Enviar Solicitação <Send size={20} /></>)}
                        </button>
                    </form>
                </motion.div>
            </div>
            
            {/* O componente Toaster escuta os disparos do toast.success e renderiza na tela */}
            <Toaster />
        </section>
    );
};