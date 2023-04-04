import {useState, useEffect, useContext} from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import BookRow from '.././components/BookRow';
import AddBookForm from '.././components/AddBookForm';
import AuthContext from "../context/AuthContext";
import UpdateBookModal from "../components/UpdateBookModal";

function HomePage() {
    const { auth, logout } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const [showAddBookForm, setShowAddBookForm] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);


    useEffect(() => {
        updateTable()
    }, []);

    function updateTable(){
        fetch('http://localhost:8888/books/',  {
            method: 'GET',
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setBooks(data)
            }).catch((error) => console.error(error));
    }

    function onUpdate(book) {
        setSelectedBook(book);
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }


    function handleAddBook(book) {
            fetch('http://localhost:8888/books/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(book),
            }).then((response) => {
                if (response.ok) {
                    updateTable();
                } else {
                    throw new Error(`Error adding book: ${response.statusText}`);
                }
            }) .catch((error) => {
                console.error('Error adding book:', error);
            });
        }

    function handleDeleteBook(book) {
        let deletePath = 'http://localhost:8888/books/' + book._id.toString()
        console.log(deletePath)
        fetch(deletePath, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then((response) => {
            if (response.ok) {
                updateTable();
            } else {
                throw new Error(`Error adding book: ${response.statusText}`);
            }
        }).catch((error) => {console.error('Error adding book:', error);
        });
    }

    function handleUpdateBook(book) {
        console.log(book)
        let updatePath = 'http://localhost:8888/books/' + book._id.toString()
        fetch(updatePath, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
            credentials: 'include',
        }).then((response) => {
            if (response.ok) {
                updateTable();
            } else {
                throw new Error(`Error adding book: ${response.statusText}`);
            }
        }).catch((error) => {console.error('Error adding book:', error);
        });
    }
    function handleLogout() {
        logout()
    }

    return (
        <Container>
            <h1>Books</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Publisher</th>
                    <th>ISBN</th>
                    {auth.isAdmin && <th>Actions</th>}
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <BookRow
                        key={book.isbn}
                        book={book}
                        isAdmin={auth.isAdmin}
                        onDelete={handleDeleteBook}
                        onUpdate={onUpdate}
                    />
                ))}
                </tbody>
            </Table>

            {auth.isAdmin && (
                <Button onClick={() => setShowAddBookForm(!showAddBookForm)}>
                    {showAddBookForm ? 'Cancel' : 'Add Book'}
                </Button>
            )}
            <Button onClick={handleLogout}>Logout</Button>

            {showAddBookForm && <AddBookForm onSubmit={handleAddBook} />}
            {selectedBook && (
                <UpdateBookModal
                show={showModal}
                onHide={handleCloseModal}
                onSubmit={handleUpdateBook}
                book={selectedBook}
            />)}
        </Container>
    );
}

export default HomePage;