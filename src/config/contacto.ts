/**
 * Datos de contacto de AIRTECH S.A.C.
 * Punto unico de edicion: telefonos, correos, direccion y webhook del asistente.
 */

export type AreaId = 'ventas' | 'servicio-tecnico';

export interface Area {
  id: AreaId;
  /** Nombre que se ve en el selector y en los aria-label */
  nombre: string;
  /** Telefono tal como se muestra al visitante */
  telefonoVisible: string;
  /** Telefono en formato internacional para el enlace tel: */
  telefonoInternacional: string;
  /** Numero de WhatsApp sin signos, como lo pide wa.me */
  whatsappNumero: string;
  /** Texto que se precarga en el chat de WhatsApp */
  whatsappMensaje: string;
  correo: string;
  asuntoCorreo: string;
}

export const AREAS: Record<AreaId, Area> = {
  ventas: {
    id: 'ventas',
    nombre: 'Ventas',
    telefonoVisible: '963 424 337',
    telefonoInternacional: '+51963424337',
    whatsappNumero: '51963424337',
    whatsappMensaje: 'Hola Airtech, quiero hacer una consulta de ventas.',
    correo: 'ventas@airtechsac.net',
    asuntoCorreo: 'Consulta de ventas desde la web',
  },
  'servicio-tecnico': {
    id: 'servicio-tecnico',
    nombre: 'Servicio técnico',
    telefonoVisible: '972 389 377',
    telefonoInternacional: '+51972389377',
    whatsappNumero: '51972389377',
    whatsappMensaje: 'Hola Airtech, necesito soporte de servicio técnico.',
    correo: 'serviciotecnico@airtechsac.net',
    asuntoCorreo: 'Solicitud de servicio técnico desde la web',
  },
};

export const AREA_POR_DEFECTO: AreaId = 'ventas';

export const DIRECCION = 'Jr. Tshudy, Mz. Ñ Lt. 08, Urb. Mangomarca, San Juan de Lurigancho, Lima, Perú';
export const DIRECCION_CORTA = 'San Juan de Lurigancho, Lima';
export const MAPA_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`;

/** Enlaces del area elegida. Todo texto va codificado con encodeURIComponent. */
export const enlaceTelefono = (area: Area) => `tel:${area.telefonoInternacional}`;
export const enlaceWhatsapp = (area: Area) =>
  `https://wa.me/${area.whatsappNumero}?text=${encodeURIComponent(area.whatsappMensaje)}`;
export const enlaceCorreo = (area: Area) =>
  `mailto:${area.correo}?subject=${encodeURIComponent(area.asuntoCorreo)}`;

/* ------------------------------ Redes sociales ------------------------------ */

export interface Red {
  id: 'facebook' | 'linkedin' | 'tiktok';
  nombre: string;
  url: string;
}

export const REDES: Red[] = [
  { id: 'facebook', nombre: 'Facebook', url: 'https://www.facebook.com/share/1ABjJmc9iM/' },
  { id: 'linkedin', nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/airtech-sac/about/' },
  { id: 'tiktok', nombre: 'TikTok', url: 'https://www.tiktok.com/@airtechsac' },
];

/* ------------------------- Asistente virtual (n8n) ------------------------- */

/** Webhook de n8n. Pega aqui la URL cuando la tengas: el resto ya esta listo. */
export const CHATBOT_WEBHOOK = 'https://primary-production-95470.up.railway.app/webhook/2a5995ef-fdeb-4a8e-bb44-6bda4a8c348d';

/** Tiempo maximo de espera de la respuesta del agente. */
export const CHATBOT_TIMEOUT_MS = 30000;

export const CHAT_BIENVENIDA =
  '¡Hola! 👋 Soy el asistente de Airtech. ¿En qué te ayudo hoy: una cotización o un servicio técnico?';

/** Texto de respaldo cuando el webhook no responde. El enlace se arma en el componente. */
export const CHAT_ERROR_ANTES = 'No pude conectarme con el asistente en este momento. ';
export const CHAT_ERROR_ENLACE = 'Escríbenos por WhatsApp';
export const CHAT_ERROR_DESPUES = ' y te respondemos enseguida.';
