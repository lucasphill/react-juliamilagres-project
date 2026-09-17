import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import type { BookingChannel } from '../models/site'
import { validBooking } from '../models/site'
import { GlassPanel } from '../components/GlassPanel'

export function Booking({ booking }: { booking: BookingChannel | null }) {
  const available = validBooking(booking)
  return <section id="agende-consulta" tabIndex={-1} aria-labelledby="booking-title" className="booking-section">
    <GlassPanel className="booking-panel">
      <p className="eyebrow">Agende uma consulta</p><h2 id="booking-title">Seu primeiro passo pode ser uma conversa.</h2>
      <p>Entre em contato para conhecer o atendimento e tirar suas dúvidas. Esta solicitação inicia uma conversa; nenhum horário é reservado automaticamente.</p>
      {available ? <div className="booking-action"><Button type="primary" size="large" href={booking.href} icon={<ArrowRightOutlined />} iconPosition="end">Falar por {booking.label}</Button><span>{booking.displayContact}</span></div> : <div className="unavailable" role="status"><strong>Canal em breve disponível</strong><span>O contato está sendo confirmado para que você fale diretamente com Julia.</span></div>}
    </GlassPanel>
  </section>
}
