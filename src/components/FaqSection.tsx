
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I choose the right mentor?",
    answer: "You can browse our mentor profiles, filtering by industry, expertise, and availability. We recommend selecting mentors with experience relevant to your goals. You can also message potential mentors before booking to ensure they're a good fit."
  },
  {
    question: "What happens during a mentorship session?",
    answer: "Sessions typically last 30-60 minutes via video call. You'll discuss your specific questions, challenges, and goals. Your mentor will provide personalized advice, actionable feedback, and resources to help you progress. You can prepare questions in advance to make the most of your time."
  },
  {
    question: "Can I change my mentor if we're not a good match?",
    answer: "Absolutely! We understand that finding the right mentor-mentee relationship is important. If you feel your current mentor isn't the right fit, you can select a different mentor for your next session without any penalty."
  },
  {
    question: "How much does mentorship cost?",
    answer: "We offer a range of options from a free initial consultation to premium packages. Our standard mentorship packages start at ৳1999, which includes multiple sessions and additional benefits like resume reviews and interview preparation."
  },
  {
    question: "How do I become a mentor on the platform?",
    answer: "If you have industry experience and a passion for helping others grow, you can apply to become a mentor through our website. We'll review your application, and if approved, you'll set up your profile, availability, and areas of expertise."
  },
  {
    question: "Are the mentorship sessions confidential?",
    answer: "Yes, all mentorship sessions are completely confidential. We have strict privacy policies in place to ensure that discussions between mentors and mentees remain private and secure."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-white to-topmate-50/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our mentorship platform
          </p>
        </div>
        
        <Accordion type="single" collapsible className="animate-on-scroll space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl overflow-hidden border-gray-200 px-1 shadow-sm">
              <AccordionTrigger className="text-lg font-medium py-5 px-4 hover:no-underline hover:text-topmate-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 px-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="#" className="text-topmate-600 font-medium hover:text-topmate-700 transition-colors">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
