import ContactList from "./ContactList"


function ContactRow({contact}) {
  <tr>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phone}</td>
  </tr>
}




export default ContactRow