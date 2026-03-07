import React from 'react';
import { Shield, Wifi, HardDrive, Smartphone } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem' }}>
        <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(252, 76, 4, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            color: '#FC4C04'
        }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{description}</p>
    </div>
);

const FeatureSection = () => {
    const features = [
        {
            icon: Shield,
            title: "Segurança Inteligente",
            description: "Detecção de humanos e veículos com tecnologia de Inteligência Artificial para alertas precisos."
        },
        {
            icon: Wifi,
            title: "Conexão Estável",
            description: "Câmeras IP com alta performance de rede e instalação simplificada via cabo de rede ou Wi-Fi."
        },
        {
            icon: HardDrive,
            title: "Armazenamento Flexível",
            description: "Grave suas imagens em cartão SD, gravadores NVR ou diretamente na nuvem com segurança."
        },
        {
            icon: Smartphone,
            title: "Acesso Remoto",
            description: "Visualize suas câmeras de qualquer lugar através do aplicativo exclusivo Luxy Service."
        }
    ];

    return (
        <section className="features-section" style={{ padding: '4rem 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="h2" style={{ marginBottom: '1rem', color: '#333' }}>Por que escolher CFTV IP Luxy?</h2>
                    <p className="text-lead">Tecnologia de ponta para quem não abre mão de segurança.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, idx) => (
                        <FeatureItem key={idx} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
