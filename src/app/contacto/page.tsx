import React from 'react';

export default function ContactoPage() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Castillo Caña;José Enrique;;;
FN:José Enrique Castillo Caña
ORG:VEA+ Visión y Estrategia Administrativa
TITLE:Director General
EMAIL:contacto@veaplus.com.mx
END:VCARD`;

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: '#1e293b',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '20px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        border: '1px solid #334155'
      }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold',
          margin: '0 auto 15px',
          color: '#fff'
        }}>
          JC
        </div>
        
        <h1 style={{ fontSize: '20px', marginBottom: '4px', color: '#ffffff' }}>
          José Enrique Castillo Caña
        </h1>
        <p style={{ color: '#38bdf8', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
          Director General
        </p>
        <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '25px' }}>
          VEA+ | Visión y Estrategia Administrativa
        </p>

        <a 
          href="https://wa.me/529990000000" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            padding: '14px',
            marginBottom: '12px',
            borderRadius: '12px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '15px',
            background: '#22c55e',
            color: '#ffffff',
            boxSizing: 'border-box'
          }}
        >
          💬 Enviar WhatsApp
        </a>

        <a 
          href="mailto:contacto@veaplus.com.mx"
          style={{
            display: 'block',
            width: '100%',
            padding: '14px',
            marginBottom: '12px',
            borderRadius: '12px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '15px',
            background: '#3b82f6',
            color: '#ffffff',
            boxSizing: 'border-box'
          }}
        >
          ✉️ Correo Electrónico
        </a>

        <a 
          href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcardData)}`}
          download="Jose_Enrique_Castillo_VEAPLUS.vcf"
          style={{
            display: 'block',
            width: '100%',
            padding: '14px',
            marginBottom: '12px',
            borderRadius: '12px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '15px',
            background: '#334155',
            color: '#f8fafc',
            border: '1px solid #475569',
            boxSizing: 'border-box'
          }}
        >
          📇 Guardar en tus contactos
        </a>
      </div>
    </div>
  );
}