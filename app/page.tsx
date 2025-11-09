'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redireciona para a versao completa do Firebase Studio
    window.location.href = 'https://studio--studio-3298053273-c20b1.us-central1.hosted.app';
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px'
      }}>
        <h1 style={{ color: '#1f2937', marginBottom: '16px' }}>
          Rash Resolve
        </h1>
        <h2 style={{ color: '#6b7280', fontSize: '18px', marginBottom: '24px', fontWeight: 'normal' }}>
          Assistente de Diagnóstico Pediátrico
        </h2>
        
        <p style={{ color: '#4b5563', marginBottom: '24px', lineHeight: '1.6' }}>
          Carregando a aplicação...
        </p>
        
        <div style={{
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid #e5e7eb',
          borderTop: '4px solid #3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '24px'
        }}></div>
        
        <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '24px' }}>
          Se a página não carregar automaticamente em alguns segundos,{' '}
          <a 
            href="https://studio--studio-3298053273-c20b1.us-central1.hosted.app"
            style={{
              color: '#3b82f6',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            clique aqui
          </a>
        </p>
      </div>
      
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
