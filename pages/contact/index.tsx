import Head from "next/head";
import ContactForm from "../../components/contact/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="description" content="form for contact"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-full flex justify-center items-center">
        {" "}
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
