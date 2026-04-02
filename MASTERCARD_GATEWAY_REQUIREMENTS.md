# Requisitos para Integración de Mastercard Gateway (MPGS)

Para proceder con la integración técnica de los pagos con tarjeta mediante Mastercard Payment Gateway Services (MPGS), necesitaremos los siguientes datos y configuraciones:

## 1. Credenciales del Merchant
Estas se obtienen desde el portal de administración de Mastercard Gateway de tu banco adquirente:
- **Merchant ID**: Identificador único de tu comercio.
- **API Password**: Contraseña para autenticar las llamadas a la API (o Authentication Token).
- **Región del Gateway**: URL base de la API (ej. `https://root-uat.gateway.mastercard.com/api/rest/version/72/...`).

## 2. Configuración del Entorno
- **Entorno de Pruebas (UAT/Sandbox)**: Para realizar pruebas de transacciones sin dinero real.
- **Entorno de Producción**: Una vez aprobada la certificación por el banco.

## 3. Método de Integración Preferido
Recomiendo **Hosted Checkout** por las siguientes razones:
- **Seguridad (PCI DSS)**: Los datos de la tarjeta nunca tocan nuestros servidores, lo que reduce drásticamente los requisitos de cumplimiento.
- **Simplicidad**: Mastercard proporciona un script (`checkout.js`) que maneja la captura de datos de forma segura en un iframe o modal.

## 4. Webhooks / Callbacks
URLs donde el gateway enviará la confirmación del pago:
- `SUCCESS_URL`: A dónde redirigir al usuario tras un pago exitoso.
- `CANCEL_URL`: A dónde redirigir si el usuario cancela.
- `WEBHOOK_URL` (Opcional pero recomendado): Para recibir notificaciones servidor-a-servidor y asegurar que el pago se registró aunque el usuario cierre el navegador.

## 5. Requisitos de Seguridad Obligatorios
Para cumplir con los estándares de Mastercard y PCI:
- **HTTPS**: El sitio debe tener un certificado SSL válido (ya lo tienes en producción).
- **TLS 1.2+**: Asegurar que el servidor soporte protocolos de cifrado modernos.
- **Logo de Mastercard**: Debe ser visible en la zona de pagos.

---
*Una vez tengas el Merchant ID y el API Password, los configuraremos como variables de entorno seguras (.env) para no exponerlos en el código.*
