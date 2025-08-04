// Configurações do sistema de agendamento
export const bookingConfig = {
  // Informações da psicóloga
  psychologist: {
    name: "Deisy Ribeiro",
    phone: "5511992371810", // Número real da Deisy
    email: "deisy.ribeiro@email.com", // Substitua pelo email real
    crp: "CRP 12345/SP",
    specialties: ["Terapia Individual", "Terapia de Casal", "Terapia Online"]
  },

  // Serviços oferecidos
  services: [
    {
      id: "individual",
      name: "Terapia Individual",
      description: "Sessões personalizadas para trabalhar questões específicas e promover autoconhecimento.",
      duration: 50, // minutos
      color: "from-[#D2B48C] to-[#A0522D]",
      icon: "🧘‍♀️"
    },
    {
      id: "casal",
      name: "Terapia de Casal",
      description: "Ajuda casais a melhorar a comunicação e fortalecer o relacionamento.",
      duration: 80, // minutos
      color: "from-[#A0522D] to-[#8B4513]",
      icon: "💕"
    },
    {
      id: "online",
      name: "Terapia Online",
      description: "Sessões flexíveis via videochamada para sua comodidade e segurança.",
      duration: 50, // minutos
      color: "from-[#8B4513] to-[#654321]",
      icon: "💻"
    }
  ],

  // Horários de atendimento
  schedule: {
    // Dias da semana (0 = domingo, 1 = segunda, etc.)
    workingDays: [1, 2, 3, 4, 5], // Segunda a sexta
    workingHours: {
      start: "09:00",
      end: "18:00"
    },
    // Intervalos de tempo disponíveis (em minutos)
    timeSlots: 60,
    // Horários específicos disponíveis
    availableTimes: [
      "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
    ]
  },

  // Configurações de notificação
  notifications: {
    // Tempo de antecedência para lembrete (em horas)
    reminderTime: 24,
    // Canal de notificação preferido
    preferredChannel: "whatsapp", // "whatsapp" | "email" | "sms"
    // Mensagens padrão
    messages: {
      confirmation: "Olá! Sua consulta foi confirmada para {date} às {time}. Aguardamos você!",
      reminder: "Olá! Lembrete: sua consulta está marcada para amanhã às {time}. Até lá!",
      cancellation: "Olá! Sua consulta foi cancelada conforme solicitado. Para reagendar, entre em contato."
    }
  },

  // Configurações de pagamento (para integração futura)
  payment: {
    methods: ["pix", "transfer", "cash"],
    // Configurações para integração com gateway de pagamento
    gateway: {
      name: "stripe", // ou "mercadopago", "paypal", etc.
      publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
      currency: "BRL"
    }
  },

  // Configurações de integração com APIs externas
  integrations: {
    // Google Calendar (para sincronização de agenda)
    googleCalendar: {
      enabled: false,
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      apiKey: process.env.GOOGLE_API_KEY
    },
    
    // WhatsApp Business API
    whatsapp: {
      enabled: true,
      phoneNumber: "5511992371810",
      apiKey: process.env.WHATSAPP_API_KEY
    },

    // Sistema de agendamento externo (ex: Calendly, Acuity)
    externalBooking: {
      enabled: false,
      provider: "calendly", // "calendly" | "acuity" | "cal.com"
      url: process.env.EXTERNAL_BOOKING_URL
    }
  },

  // Configurações de disponibilidade
  availability: {
    // Tempo mínimo de antecedência para agendamento (em horas)
    minAdvanceNotice: 2,
    // Tempo máximo de antecedência para agendamento (em dias)
    maxAdvanceNotice: 30,
    // Intervalo entre consultas (em minutos)
    bufferTime: 15
  }
};

// Tipos TypeScript para o sistema de agendamento
export interface Booking {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  serviceId: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  color: string;
  icon: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  bookingId?: string;
}

// Funções utilitárias para o sistema de agendamento
export const bookingUtils = {
  // Formatar preço
  formatPrice: (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  },

  // Formatar duração
  formatDuration: (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h${mins > 0 ? ` ${mins}min` : ''}`;
    }
    return `${mins}min`;
  },

  // Validar data e horário
  isValidDateTime: (date: string, time: string): boolean => {
    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const minAdvance = new Date(now.getTime() + (bookingConfig.availability.minAdvanceNotice * 60 * 60 * 1000));
    
    return selectedDateTime >= minAdvance;
  },

  // Gerar horários disponíveis para uma data
  getAvailableTimes: (date: string): TimeSlot[] => {
    const dayOfWeek = new Date(date).getDay();
    const isWorkingDay = bookingConfig.schedule.workingDays.includes(dayOfWeek);
    
    if (!isWorkingDay) {
      return [];
    }

    return bookingConfig.schedule.availableTimes.map(time => ({
      time,
      available: true // Em uma implementação real, isso seria verificado contra a agenda
    }));
  },

  // Gerar mensagem para WhatsApp
  generateWhatsAppMessage: (booking: Partial<Booking>): string => {
    const service = bookingConfig.services.find(s => s.id === booking.serviceId);
    const serviceName = service?.name || "Consulta";
    
    return `Olá Deisy! Gostaria de agendar uma consulta:

Serviço: ${serviceName}
Data: ${booking.date}
Horário: ${booking.time}
${booking.notes ? `Observações: ${booking.notes}` : ''}

Poderia confirmar se há disponibilidade?`;
  }
}; 