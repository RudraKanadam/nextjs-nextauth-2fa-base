import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is included in the boilerplate?
        </AccordionTrigger>
        <AccordionContent>
          Our boilerplate includes a complete setup with Next.js, Next Auth,
          Tailwind CSS, and basic SEO. It also features responsive design, email
          authentication, role-based access, and basic analytics.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you offer support?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer community support for all plans. Priority and dedicated
          support are available for our E-Commerce and Enterprise plans.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize the themes?</AccordionTrigger>
        <AccordionContent>
          Absolutely! Our themes are fully customizable. You can modify styles,
          components, and layouts to fit your specific needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards, PayPal, and other secure payment
          methods. For Enterprise customers, we also offer invoicing options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Do you provide updates?</AccordionTrigger>
        <AccordionContent>
          Yes, we provide continuous updates to ensure our boilerplates and
          themes are up-to-date with the latest technologies and best practices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Is there a trial period available?</AccordionTrigger>
        <AccordionContent>
          We offer a 14-day trial period for our Starter and Blog plans so you
          can explore the features and see how they fit your needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Can I get a refund?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer a 30-day money-back guarantee. If you are not satisfied
          with our product, you can request a full refund within 30 days of
          purchase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Getting started is easy. Choose the plan that best suits your needs,
          complete the purchase, and you will receive an email with the download
          link and instructions to set up your boilerplate.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>Is technical support available?</AccordionTrigger>
        <AccordionContent>
          Yes, technical support is available for all plans. For more extensive
          support, consider our E-Commerce and Enterprise plans which offer
          priority and dedicated support options.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
