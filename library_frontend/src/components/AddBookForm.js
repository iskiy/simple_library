import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddBookForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [publisher, setPublisher] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, author, year,publisher, isbn });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicYear">
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter year"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPublisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter publisher"
                    value={publisher}
                    onChange={(event) => setPublisher(event.target.value)}
                />
            </Form.Group>


            <Form.Group controlId="formBasicIsbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter ISBN"
                    value={isbn}
                    onChange={(event) => setIsbn(event.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Book
            </Button>
        </Form>
    );
}

export default AddBookForm;