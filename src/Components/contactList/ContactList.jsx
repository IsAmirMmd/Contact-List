const ContactList = ({ contacts, onDelete }) => {
  return contacts.map((contact) => (
    <div key={contact.id} className="contact--child">
      <div className="contact--image">
        <img src="" alt="profile" />
      </div>
      <div className="contact--user">
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </div>
      <button className="contact--btn" onClick={() => onDelete(contact.id)}>
        delete
      </button>
    </div>
  ));
};

export default ContactList;
