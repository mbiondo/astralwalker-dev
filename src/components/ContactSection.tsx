'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('contact.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('contact.contactInfo')}</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('contact.address.title')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.address.line1')}<br />
                      {t('contact.address.line2')}<br />
                      {t('contact.address.line3')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('contact.phone.title')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.phone.main')}<br />
                      {t('contact.phone.whatsapp')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('contact.email.title')}</h4>
                    <p className="text-muted-foreground text-sm break-all">
                      {t('contact.email.info')}<br />
                      {t('contact.email.reservations')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('contact.hours.title')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.hours.weekdays')}<br />
                      {t('contact.hours.weekends')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-4 sm:pt-6">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold w-full sm:w-auto">
                {t('contact.bookAppointment')}
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('contact.location')}</h3>
            <Card className="p-3 sm:p-6">
              <div className="w-full h-64 sm:h-96 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.702355071959!2d-99.16303688507976!3d19.427660986892457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f3f7b8c25%3A0x7e2d4b4b5e5f6a7b!2sZócalo%2C%20Centro%20Histórico%20de%20la%20Cdad.%20de%20México%2C%20Centro%2C%20Cuauhtémoc%2C%2006010%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses!2smx!4v1635789456789!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación INDIGO PRODUXION"
                />
              </div>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-card text-card-foreground border shadow-sm">
              <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{t('contact.howToGet')}</h4>
              <div className="space-y-2 text-muted-foreground text-xs sm:text-sm font-medium">
                <p>{t('contact.transport.metro')}</p>
                <p>{t('contact.transport.metrobus')}</p>
                <p>{t('contact.transport.parking')}</p>
                <p>{t('contact.transport.accessibility')}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}