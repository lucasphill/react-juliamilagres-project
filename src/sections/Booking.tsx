import { Button } from 'antd'
import type { BookingChannel } from '../models/site'
import { validBooking } from '../models/site'
import { GlassPanel } from '../components/GlassPanel'

export function Booking({ booking }: { booking: BookingChannel | null }) {
  const available = validBooking(booking)
  return <section id="agende-consulta" tabIndex={-1} aria-labelledby="booking-title" className="booking-section">
    <GlassPanel className="booking-panel">
      <p className="eyebrow">Agende uma consulta</p><h2 id="booking-title">Seu próximo passo pode começar com uma conversa</h2>
      <p>Se você está atravessando uma perda, lidando com uma condição crônica, vivendo dificuldades nas relações ou enfrentando desafios emocionais no trabalho e na carreira, podemos conversar sobre o que você está vivendo.</p>
      <p>Entre em contato para conhecer o funcionamento do atendimento e verificar a possibilidade de marcar uma conversa inicial.</p>
      {available ? <div className="booking-action"><Button className="whatsapp-button" type="primary" size="large" href={booking.href} target="_blank" rel="noopener noreferrer">Entre em contato via {booking.label}</Button></div> : <div className="unavailable" role="status"><strong>Canal em breve disponível</strong><span>O canal de contato direto com Júlia estará disponível aqui em breve.</span></div>}
    </GlassPanel>
  </section>
}
