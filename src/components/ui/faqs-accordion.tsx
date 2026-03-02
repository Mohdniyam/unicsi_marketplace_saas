"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  items: FAQItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
      {items.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border shadow-none px-4 py-2 bg-white overflow-hidden"
        >
          <AccordionTrigger className="text-left text-black text-base font-semibold px-6 py-4 hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-black text-base border-l-3 pl-4 border-black/90">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
