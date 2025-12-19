"use client";

import { services } from "@/lib/constants";
import ServiceSection from "./ServiceSection";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0A0A0A]">
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </section>
  );
}

