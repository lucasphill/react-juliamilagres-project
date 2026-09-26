import { Button } from 'antd'
import type { BookingChannel } from '../models/site'
import { validBooking } from '../models/site'
import { GlassPanel } from '../components/GlassPanel'

export function Booking({ booking }: { booking: BookingChannel | null }) {
  const available = validBooking(booking)
  return <section id="agende-consulta" tabIndex={-1} aria-labelledby="booking-title" className="booking-section">
    <GlassPanel className="booking-panel">
      <p className="eyebrow">Agende uma consulta</p><h2 id="booking-title">Seu primeiro passo pode ser uma conversa.</h2>
      <p>Pronto(a) para dar o primeiro passo em direção ao seu bem-estar? Entre em contato para agendarmos uma conversa inicial. Este é o momento para você tirar suas dúvidas e entender como posso te apoiar.</p>
      {available ? <div className="booking-action"><Button className="whatsapp-button" type="primary" size="large" href={booking.href} target="_blank" rel="noopener noreferrer">Entre em contato via {booking.label}</Button></div> : <div className="unavailable" role="status"><strong>Canal em breve disponível</strong><span>O canal de contato direto com Júlia estará disponível aqui em breve.</span></div>}
    </GlassPanel>
  </section>
}
