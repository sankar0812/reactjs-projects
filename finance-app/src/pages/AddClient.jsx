import AddClientForm from '../components/AddClientForm';

export default function AddClient() {
  const handleAddClient = (client) => {
    console.log('New client:', client);
    // You can store client data in context or backend
  };

  return (
    <div>
      <AddClientForm onAdd={handleAddClient} />
    </div>
  );
}
