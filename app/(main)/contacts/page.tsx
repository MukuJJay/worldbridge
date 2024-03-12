import Contactform from "@/components/forms/contact-form";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";

const ContactsPage = () => {
  const words =
    "Worldbridge helps you bridge the gap to your future! We offer affordable pre-grad and post-grad courses in the UK, USA, and Germany.  Empower yourself with globally recognized qualifications without breaking the bank.";

  return (
    <section className="pt-20">
      <TextGenerateEffect
        words={words}
        className="max-w-[800px] mx-auto mt-20"
      />
      <h1 className="text-center mt-20 text-5xl font-bold">Contact Us</h1>
      <Contactform />
    </section>
  );
};

export default ContactsPage;
