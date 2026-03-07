import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ title, description, features, badge }) => {
    return (
        <div className="product-card" style={{
            border: '1px solid #eee',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'transform 0.2s, box-shadow 0.2s',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ position: 'relative', padding: '2rem', backgroundColor: '#f9f9f9' }}>
                {badge && (
                    <span style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        backgroundColor: '#2F0069',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px'
                    }}>
                        {badge}
                    </span>
                )}
                <div style={{
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#eaeaea',
                    borderRadius: '8px',
                    color: '#888'
                }}>
                    Img Produto
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>
                    {title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem', flex: 1 }}>
                    {description}
                </p>

                {features && (
                    <ul style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
                        {features.map((feature, idx) => (
                            <li key={idx} style={{ marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '4px', height: '4px', backgroundColor: '#FC4C04', borderRadius: '50%' }}></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.875rem', padding: '0.5rem', borderColor: '#2F0069', color: '#2F0069' }}>
                        Detalhes
                    </button>
                    <button className="btn btn-primary" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>

            <style>{`
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
        </div>
    );
};

export default ProductCard;
