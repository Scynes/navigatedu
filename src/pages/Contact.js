import PageTransition from "../components/PageTransition";

const Contact = () => {
    return (
        <PageTransition>
            <div className="contact-container contact-bg">
                <h1>Send us a Message!</h1>
                <form action="" className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" placeholder="John Doe"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder="JohnDoe@email.com"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message here"></textarea>
                    <input type="button" value="Send Message" />
                </form>
            </div>
        </PageTransition>
    );
}

export default Contact;