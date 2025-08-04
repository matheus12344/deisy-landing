"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";

export default function Home() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  // Função para redirecionar para WhatsApp
  const redirectToWhatsApp = useCallback((message = "") => {
    const phoneNumber = "5511992371810";
    const defaultMessage = "Olá Deisy! Gostaria de agendar uma consulta. Poderia me ajudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  // Função para abrir modal de agendamento
  const openBookingModal = useCallback(() => {
    setShowBookingModal(true);
  }, []);

  // Função para fechar modal
  const closeBookingModal = useCallback(() => {
    setShowBookingModal(false);
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
  }, []);

  // Função para confirmar agendamento
  const confirmBooking = useCallback(() => {
    if (selectedService && selectedDate && selectedTime) {
      const message = `Olá Deisy! Gostaria de agendar uma consulta:
      
      Serviço: ${selectedService}
      Data: ${selectedDate}
      Horário: ${selectedTime}

      Poderia confirmar se há disponibilidade?`;
      
      redirectToWhatsApp(message);
      closeBookingModal();
    }
  }, [selectedService, selectedDate, selectedTime, redirectToWhatsApp, closeBookingModal]);

  // Serviços disponíveis
  const services = useMemo(() => [
    { id: "individual", name: "Terapia Individual", duration: "50 min" },
    { id: "casal", name: "Terapia de Casal", duration: "80 min" },
    { id: "online", name: "Terapia Online", duration: "50 min" }
  ], []);

  // Horários disponíveis
  const availableTimes = useMemo(() => [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ], []);

  return (
    <div className="min-h-screen bg-[#f5f5dc] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto animate-fade-in">
        <div className="text-2xl font-bold text-[#8B4513]">DEISY RIBEIRO</div>
        <nav className="hidden md:flex gap-8 text-[#8B4513] font-medium">
          <a href="#home" className="hover:text-[#A0522D] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#A0522D] transition-colors">Sobre</a>
          <a href="#services" className="hover:text-[#A0522D] transition-colors">Serviços</a>
          <a href="#blog" className="hover:text-[#A0522D] transition-colors">Blog</a>
          <a href="#contact" className="hover:text-[#A0522D] transition-colors">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-8 py-16 max-w-7xl mx-auto animate-fade-in-delayed">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-[#8B4513] leading-tight">
              Sua Jornada para a{" "}
              <span className="text-[#A0522D] animate-pulse">Paz Interior</span>{" "}
              Começa Aqui
            </h1>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              Apoio psicológico que te ajuda a se reconectar consigo mesma, 
              navegar pelos desafios da vida e encontrar clareza, força e equilíbrio.
            </p>
            <button 
              onClick={openBookingModal}
              className="bg-[#8B4513] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#654321] transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift animate-bounce"
            >
              Dê o Primeiro Passo
            </button>
          </div>

          {/* Right Side - Image and Statistics */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Organic Background Shape */}
              <div className="absolute inset-0 bg-[#8B4513] rounded-[60px] transform rotate-3 scale-105 opacity-20 animate-pulse"></div>
              <div className="relative bg-[#8B4513] rounded-[50px] p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-64 h-80 bg-gradient-to-br from-[#A0522D] to-[#8B4513] rounded-[40px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/image1.jpg"
                    alt="Deisy Ribeiro - Psicóloga"
                    width={256}
                    height={320}
                    className="w-full h-full object-cover object-[60%_top] rounded-[40px] hover:scale-110 transition-transform duration-500"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Statistics and Tags */}
            <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B4513]">8+</div>
                <div className="text-xs text-[#A0522D]">anos de prática</div>
              </div>
            </div>

            <div className="absolute top-8 -right-4 bg-[#DEB887] text-[#8B4513] px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Feliz ✨
            </div>

            <div className="absolute top-20 -right-8 bg-[#8B4513] text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
              Positiva ✨
            </div>

            <div className="absolute bottom-20 -left-8 bg-[#654321] text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Calma ✨
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-float-delayed">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B4513]">100+</div>
                <div className="text-xs text-[#CD853F]">pacientes felizes</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-[#DEB887] animate-twinkle">✦</div>
            <div className="absolute bottom-20 right-20 text-[#DEB887] animate-twinkle-delayed">✦</div>
            <div className="absolute top-32 right-32 text-[#DEB887] animate-twinkle">✦</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-20 bg-[#faf8f3] animate-fade-in-more-delayed">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Como Posso Te Ajudar</h2>
            <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
              Ofereço diferentes abordagens terapêuticas para atender suas necessidades específicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Terapia Individual",
                description: "Sessões personalizadas para trabalhar questões específicas e promover autoconhecimento.",
                icon: "🧘‍♀️",
                color: "from-[#DEB887] to-[#CD853F]"
              },
              {
                title: "Terapia de Casal",
                description: "Ajuda casais a melhorar a comunicação e fortalecer o relacionamento.",
                icon: "💕",
                color: "from-[#CD853F] to-[#8B4513]"
              },
              {
                title: "Terapia Online",
                description: "Sessões flexíveis via videochamada para sua comodidade e segurança.",
                icon: "💻",
                color: "from-[#8B4513] to-[#654321]"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl text-white hover-lift transform transition-all duration-500 hover:scale-105`}
              >
                <div className="text-4xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 animate-fade-in-even-more-delayed">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#8B4513]">Sobre Mim</h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Sou Deisy Ribeiro, psicóloga com mais de 8 anos de experiência. 
                Meu objetivo é criar um espaço seguro e acolhedor onde você possa 
                se sentir livre para ser você mesma.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Acredito que cada pessoa é única e merece uma abordagem personalizada. 
                Juntos, vamos trabalhar para que você encontre sua paz interior e 
                desenvolva ferramentas para enfrentar os desafios da vida.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A0522D]">8+</div>
                  <div className="text-sm text-[#4a4a4a]">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A0522D]">100+</div>
                  <div className="text-sm text-[#4a4a4a]">Pacientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A0522D]">3</div>
                  <div className="text-sm text-[#4a4a4a]">Especializações</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#DEB887] to-[#8B4513] rounded-3xl p-8 text-center text-white relative overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/image2.jpg"
                  alt="Deisy Ribeiro - Psicóloga"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover object-[60%_top] rounded-2xl mb-6 hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold mb-4">Deisy Ribeiro</h3>
                <p className="text-white/90">Psicóloga CRP 12345/SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 bg-[#8B4513] text-white animate-fade-in-final">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Pronto para Começar sua Jornada?</h2>
          <p className="text-xl mb-8 text-white/90">
            Agende sua primeira consulta e dê o primeiro passo em direção à sua paz interior
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={openBookingModal}
              className="bg-white text-[#8B4513] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover-lift animate-pulse"
            >
              Agendar Consulta
            </button>
            <button 
              onClick={() => redirectToWhatsApp()}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-[#8B4513] transition-all duration-300 transform hover:scale-105"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <div className="bg-[#654321] py-6 relative overflow-hidden">
        <div className="flex items-center justify-center space-x-8 text-white font-medium text-lg overflow-hidden">
          <div className="flex items-center space-x-4 animate-scroll">
            <span>Você está Segura aqui</span>
            <span className="text-[#DEB887]">✦</span>
            <span>Você está Segura aqui</span>
            <span className="text-[#DEB887]">✦</span>
            <span>Você está Segura aqui</span>
            <span className="text-[#DEB887]">✦</span>
            <span>Você está Segura aqui</span>
            <span className="text-[#DEB887]">✦</span>
            <span>Você está Segura aqui</span>
            <span className="text-[#DEB887]">✦</span>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => redirectToWhatsApp()}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Falar no WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#8B4513]">Agendar Consulta</h3>
              <button 
                onClick={closeBookingModal}
                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-[#8B4513] mb-3">
                  Escolha o Serviço
                </label>
                <div className="space-y-3">
                  {services.map((service) => (
                    <label 
                      key={service.id} 
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#8B4513] hover:bg-[#f8f9fa] ${
                        selectedService === service.id 
                          ? 'border-[#8B4513] bg-[#f0f7e6] shadow-md' 
                          : 'border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="mr-3 w-4 h-4 text-[#8B4513] focus:ring-[#8B4513]"
                      />
                      <div className="flex-1">
                        <div className={`font-medium transition-colors ${
                          selectedService === service.id ? 'text-[#8B4513]' : 'text-[#4a4a4a]'
                        }`}>
                          {service.name}
                        </div>
                        <div className={`text-sm transition-colors ${
                          selectedService === service.id ? 'text-[#A0522D]' : 'text-gray-600'
                        }`}>
                          {service.duration}
                        </div>
                      </div>
                      {selectedService === service.id && (
                        <div className="text-[#8B4513] text-lg">✓</div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-[#8B4513] mb-3">
                  Escolha a Data
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={minDate}
                  className={`w-full p-4 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50 ${
                    selectedDate 
                      ? 'border-[#8B4513] bg-[#f0f7e6] text-[#8B4513] font-medium' 
                      : 'border-gray-200 text-gray-500'
                  }`}
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-[#8B4513] mb-3">
                  Escolha o Horário
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={`w-full p-4 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50 ${
                    selectedTime 
                      ? 'border-[#8B4513] bg-[#f0f7e6] text-[#8B4513] font-medium' 
                      : 'border-gray-200 text-gray-500'
                  }`}
                >
                  <option value="" className="text-gray-500">Selecione um horário</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time} className="text-[#8B4513]">{time}</option>
                  ))}
                </select>
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-2 mb-4">
                <div className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  selectedService ? 'bg-[#8B4513]' : 'bg-gray-200'
                }`}></div>
                <div className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  selectedDate ? 'bg-[#8B4513]' : 'bg-gray-200'
                }`}></div>
                <div className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  selectedTime ? 'bg-[#8B4513]' : 'bg-gray-200'
                }`}></div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeBookingModal}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmBooking}
                  disabled={!selectedService || !selectedDate || !selectedTime}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedService && selectedDate && selectedTime
                      ? 'bg-[#8B4513] text-white hover:bg-[#654321] transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Confirmar Agendamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
