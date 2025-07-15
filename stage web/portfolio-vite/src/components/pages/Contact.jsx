import '../styles/Contact.css'

export default function Contact() {
    return (
        <section className="form-contact">
            <form method="post" action="#"> {/* ou l'URL de votre backend */}
                <h2>Me Contacter</h2>
                <div className="form-group">
                    
                    <label htmlFor="fname">Prénom :</label>
                    <input 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="lname">Nom :</label>
                    <input 
                        type="text" 
                        id="lname" 
                        name="lname" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject">Sujet :</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        required
                    ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                    Envoyer
                </button>
            </form>
        </section>
    )
}