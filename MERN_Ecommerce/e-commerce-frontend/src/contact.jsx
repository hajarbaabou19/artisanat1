import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importer les icônes Bootstrap

const ContactFormPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Récupérer les valeurs des champs du formulaire
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    // Envoyer l'e-mail à l'adresse spécifiée
    const mailtoUrl = `hjar808@gmail.com?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6"><br></br><br></br><br></br><br></br>
          <h1 className="text-center mb-4 fs-1">Contactez-nous</h1>
          <form onSubmit={handleSubmit}style={{ fontSize: '1.5rem' }}>
            <div className="form-group">
              <label htmlFor="name" >Nom complet:</label>
              <input type="text" id="name" name="name" className="form-control fs-3" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" className="form-control fs-3" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className="form-control fs-3" required />
            </div><br></br>
            <button type="submit" className="btn btn-primary fs-5">Envoyer</button>
          </form><br></br>
          <hr /><br></br>
          <div className="text-center">
            <p><i className="bi bi-telephone-fill fs-3"></i> +212528284338</p>
            <p><i className="bi bi-facebook fs-3"></i> <a href="https://www.facebook.com/votrepage" >Facebook</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;
